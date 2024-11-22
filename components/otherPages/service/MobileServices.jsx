"use client";

import { useState, useEffect } from "react";
import { Tabs, Tab, tabsClasses } from "@mui/material";
import { Card, Input, Empty, Button } from "antd";
import { serviceData } from "@/data/services";
import Link from "next/link";

const { Meta } = Card;

export default function MobileServices({headerText, exclude}) {
    const [isMobile, setIsMobile] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const serviceFilteredData = exclude ? (serviceData.filter(data=>{
      return data.id != exclude?.id
    })) : ([...serviceData])

    // Categorize services by category
    const categorizedServices = serviceFilteredData.reduce((acc, item) => {
        if (item.category) {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
        } else {
            acc["uncategorized"] = acc["uncategorized"] || [];
            acc["uncategorized"].push(item);
        }
        return acc;
    }, {});
    const [filteredTabs, setFilteredTabs] = useState(Object.keys(categorizedServices));


    const [selectedCategory, setSelectedCategory] = useState(Object.keys(categorizedServices)[0]);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Filter tabs and services based on search term
    useEffect(() => {
        const tabs = Object.keys(categorizedServices).filter((category) =>
            categorizedServices[category].some(
                (service) =>
                    service.category_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    service.category_content.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

        setFilteredTabs(tabs);

        // Automatically navigate to the first matching tab
        if (!tabs.includes(selectedCategory) && tabs.length > 0) {
            setSelectedCategory(tabs[0]);
        }

        const categoryServices = categorizedServices[selectedCategory] || [];
        const filtered = categoryServices.filter(
            (service) =>
                service.category_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category_content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredServices(filtered);
        setVisibleCount(3); // Reset visible count when search changes
    }, [searchTerm, selectedCategory]);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    return (
        <>
            <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                <h3 style={{ padding: 0 }}>{headerText}</h3>
              
                <Input
                    placeholder="Search services..."
                    allowClear
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: "100%", marginBottom: "16px" }}
                />
            </div>

            {/* Tabs for categories */}
            <Tabs
                value={selectedCategory}
                onChange={(event, newValue) => setSelectedCategory(newValue)}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        "&.Mui-disabled": { opacity: 0.3 },
                    },
                }}
            >
                {filteredTabs.map((category) => (
                    <Tab key={category} label={category} value={category} style={{ fontFamily: "Poppins", textTransform: 'capitalize' }} />
                ))}
            </Tabs>

            {/* Display cards */}
            <div style={{ padding: "16px", paddingRight: "8px", paddingTop: '24px' }}>
                {filteredServices.length > 0 ? (
                    filteredServices.slice(0, visibleCount).map((service) => (
                        <Card
                            key={service.label}
                            hoverable
                            style={{
                                marginBottom: "16px",
                                borderRadius: "12px",
                                overflow: "hidden",
                                position: "relative", // Positioning for overlay
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundImage: `url(/assets/img/service/${service.category_image})`,
                            }}
                        >
                            {/* Gradient overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
                                    zIndex: 1, // Ensure overlay is above the background
                                }}
                            ></div>

                            {/* Content with proper z-index */}
                            <div style={{ position: "relative", zIndex: 2, padding: "16px" }}>
                                <Meta
                                    title={<p style={{ color: "#fff" }}>{service.category_title}</p>}
                                    description={
                                        <span style={{ color: "#fff" }}>
                                            {service.category_content.length > 100
                                                ? service.category_content.substring(0, 100) + "..."
                                                : service.category_content}
                                        </span>
                                    }
                                />
                                <div style={{ textAlign: "right", marginTop: "30px" }}>
                                    <Link
                                        href={`/services/${service.id}`}
                                        style={{
                                            padding: "8px 12px",
                                            background: "rgba(0, 0, 0, 0.7)",
                                            color: "#fff",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <Empty description="No Results Found" />
                )}

                {/* Load More Button */}
                {visibleCount < filteredServices.length && (
                    <div style={{ textAlign: "center", marginTop: "16px" }}>
                        <Button type="primary" size="large" onClick={handleLoadMore}>
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}

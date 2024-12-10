"use client";

import { useState, useEffect } from "react";
import { Collapse, Select } from "antd";
import Faq1 from "../faq/Faq1";
import { serviceData } from "@/data/services";
import AssistiveTouchServices from "./AssistiveTouch";
import Faq3 from "../faq/Faq3";
import { Tab, Tabs } from "@mui/material";
import MobileServices from "./MobileServices";

const { Panel } = Collapse;

export default function ServiceDetails({ headerText, exclude, notForDesktop }) {
    const [isOpen, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedService, setSelectedService] = useState(serviceData[0]);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    // Categorize services by category
    const categorizedServices = serviceData.reduce((acc, item) => {
        if (item.category) {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
        } else {
            acc["uncategorized"] = acc["uncategorized"] || [];
            acc["uncategorized"].push(item);
        }
        return acc;
    }, {});




    return (
        <section className="service-details-section fix">
            {(!isMobile) ? (
                <>
                    {!notForDesktop && (
                        <div className="container" style={{ paddingBottom: "24px", paddingTop: "24px" }}>
                            <div className="service-details-wrapper">
                                <div className="row g-4">
                                    {/* Sidebar for larger screens */}
                                    {!isMobile && (
                                        <div className="col-12 col-lg-4 order-1 order-md-1">
                                            <div className="main-sidebar">
                                                <div className="single-sidebar-widget" style={{ padding: 0, marginLeft: '1rem' }}>
                                                    <div className="wid-title">
                                                        <h3>{headerText}</h3>
                                                    </div>
                                                    <div className="news-widget-categories">
                                                        <Collapse accordion>
                                                            {Object.entries(categorizedServices).map(([category, items], index) =>
                                                                category !== "uncategorized" ? (
                                                                    <Panel header={category} key={index} >
                                                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                                                            {items.map((item) => (
                                                                                <li
                                                                                    key={item.label}
                                                                                    className={item.label === selectedService?.label ? "service-list-active" : "service-list"}
                                                                                    onClick={() => handleServiceClick(item)}
                                                                                    style={{ background: "white", padding: "0" }}
                                                                                >
                                                                                    <a
                                                                                        style={{
                                                                                            color: selectedService?.label === item.label ? "blue" : "#000",
                                                                                            // textDecoration: selectedService.label === item.label ? "underline" : "none",
                                                                                        }}
                                                                                    >
                                                                                        {item.category_title}
                                                                                    </a>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </Panel>
                                                                ) : (
                                                                    <ul key="uncategorized" style={{ listStyleType: "none", padding: 0 }}>
                                                                        {items.map((item) => (
                                                                            <li
                                                                                key={item.label}
                                                                                className={item.label === selectedService?.label ? "service-list-active" : "service-list"}
                                                                                onClick={() => handleServiceClick(item)}
                                                                                style={{ background: "white", padding: "0" }}
                                                                            >
                                                                                <a
                                                                                    style={{
                                                                                        color: selectedService?.label === item.label ? "blue" : "#000",
                                                                                        textDecoration: selectedService?.label === item.label ? "underline" : "none",
                                                                                    }}
                                                                                >
                                                                                    {item.category_title}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )
                                                            )}
                                                        </Collapse>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}





                                    {/* Service Details Content inside this division that assistive should be shown*/}
                                    <div className="col-12 col-lg-8 order-1 order-md-2 servicedesign" style={{ marginLeft: isMobile ? '1rem' : 0, paddingLeft: "20px", textAlign: 'justify', paddingRight: '18px' }}>
                                        <div className="service-details-items" style={{ position: 'relative' }}>
                                            {isMobile && (< AssistiveTouchServices
                                                categorizedServices={categorizedServices}
                                                handleServiceClick={handleServiceClick}
                                                selectedService={selectedService}
                                            />)}
                                            {selectedService && (
                                                <>
                                                    <div className="details-content">
                                                        <h4 style={{ textAlign: 'left' }}>{selectedService?.category_title}</h4>
                                                        <a className="mt-3 mb-3">{selectedService?.category_content}</a>
                                                        
                                                        <div
                                                            className="details-image"
                                                            style={{
                                                                backgroundImage: `url(/assets/img/service/${selectedService?.category_image})`,
                                                                backgroundRepeat: "no-repeat",
                                                                backgroundSize: "cover",
                                                                height: "300px",
                                                                borderRadius: "18px",
                                                                marginTop: '26px'
                                                            }}
                                                        ></div>
                                                        <div className="details-video-items">
                                                            <div className="content">
                                                                <h4 style={{ textAlign: 'left' }}>Benefits With Our Service</h4>
                                                                <ul className="list ps-0">
                                                                    {selectedService?.benefits?.map((benefit, index) => (
                                                                        <li key={index}>
                                                                            <i className="fa-regular fa-circle-check" />
                                                                            {benefit}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <h4 style={{ textAlign: 'left' }}>FAQs</h4>

                                                    <Faq3 serviceDetails={selectedService} />

                                                </>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </>
            ) : (
                <>
                    <MobileServices headerText={headerText} exclude={exclude} />
                </>
            )}


        </section>
    );
}

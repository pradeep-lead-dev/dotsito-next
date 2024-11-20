"use client";
import React, { useState, useEffect } from "react";
import { Collapse, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
// import "./AssistiveTouchServices.css";

const { Panel } = Collapse;

export default function AssistiveTouchServices({ categorizedServices, handleServiceClick, selectedService }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredServices, setFilteredServices] = useState(categorizedServices);
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        // Filter services based on the search term
        if (searchTerm.trim() === "") {
            setFilteredServices(categorizedServices);
        } else {
            const filtered = {};
            Object.entries(categorizedServices).forEach(([category, items]) => {
                const matchingItems = items.filter((item) =>
                    Object.values(item).some((value) =>
                        String(value).toLowerCase().includes(searchTerm.toLowerCase())
                    )
                );
                if (matchingItems.length > 0) {
                    filtered[category] = matchingItems;
                }
            });
            setFilteredServices(filtered);
        }
    }, [searchTerm, categorizedServices]);

    useEffect(() => {
        // Ensure the selected service's category is expanded
        if (selectedService) {
            Object.entries(filteredServices).forEach(([category, items], index) => {
                if (items.some((item) => item.category_title === selectedService.category_title)) {
                    setActiveKey(String(index));
                }
            });
        }
    }, [filteredServices, selectedService]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="assistive-touch-container">
            {/* Assistive Button */}
            {!isModalOpen && (
                <div className="assistive-touch-bubble" onClick={handleOpenModal}>
                    <i className="fa-solid fa-globe" style={{ fontSize: "20px", color: "white" }}></i>
                </div>
            )}

            {/* Overlay with Accordion */}
            {isModalOpen && (
                <div className={`floating-overlay ${isModalOpen ? "open" : "close"}`}>
                    <div className="overlay-header">
                        <Input
                            placeholder="Search services..."
                            value={searchTerm}
                            onChange={handleSearch}
                            style={{ width: "90%" }}
                            allowClear
                        />
                        <CloseOutlined className="close-button" onClick={handleCloseModal} />
                    </div>
                    <div className="overlay-content">
                        <Collapse
                            accordion
                            activeKey={activeKey}
                            onChange={(key) => setActiveKey(key)}
                        >
                            {Object.entries(filteredServices).map(([category, items], index) =>
                                category !== "uncategorized" ? (
                                    <Panel header={category} key={index}>
                                        <ul style={{ listStyleType: "none", padding: 0 }}>
                                            {items.map((item) => (
                                                <li
                                                    key={item.category_title}
                                                    className={
                                                        item.category_title === selectedService.category_title
                                                            ? "service-list-active"
                                                            : "service-list"
                                                    }
                                                    onClick={() => {
                                                        setModalOpen(false)
                                                        handleServiceClick(item)
                                                        setSearchTerm('')
                                                    }
                                                    }
                                                    style={{
                                                        background: item.category_title === selectedService.category_title ? "#1890ff" : "white",
                                                        padding: "12px",
                                                    }}
                                                >
                                                    <a
                                                        style={{
                                                            color: selectedService.category_title === item.category_title ? "white" : "#000",
                                                        }}
                                                        href="#service-content"
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
                                                key={item.category_title}
                                                className={item.category_title === selectedService.category_title ? "service-list-active" : "service-list"}
                                                onClick={() => handleServiceClick(item)}
                                                style={{
                                                    background: item.category_title === selectedService.category_title ? "#1890ff" : "white",
                                                    padding: "5px",
                                                }}
                                            >
                                                <a
                                                    style={{
                                                        color: selectedService.label === item.label ? "blue" : "#000",
                                                        textDecoration: selectedService.label === item.label ? "underline" : "none",
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
            )}
        </div>
    );
}

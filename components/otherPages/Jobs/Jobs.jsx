"use client";

import { useState, useEffect } from "react";
import { Card, Badge, Button, Tag, Select } from "antd"; // Import the jobs data
import Link from "next/link";
import { jobs } from "@/data/careerJobs";

const { Meta } = Card;
const { Option } = Select;

export default function Jobs() {
    const [isMobile, setIsMobile] = useState(false);
    const [visibleJobs, setVisibleJobs] = useState(10);
    const [filter, setFilter] = useState("All");

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle "Load More" functionality
    const handleLoadMore = () => {
        setVisibleJobs((prev) => prev + 10);
    };

    // Filtered jobs based on the selected industry
    const filteredJobs = filter === "All" ? jobs : jobs.filter((job) => job.industry === filter);

    // Get unique industries for filter options
    const industries = [...new Set(jobs.map((job) => job.industry))];

    return (
        <section>
            <div className=" mx-auto px-4" id="openings">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold">Join Us</h1>
                    <p className="text-xl text-gray-600">Current Openings</p>
                </div>

                {/* Filter and Sorting Section */}
                <div className="flex justify-between items-center mt-8 mb-8" style={{display:'flex', justifyContent: 'end',alignItems: 'center',marginTop: '1rem', gap: '0.7rem'}}>
                    <small><strong>Filter By : </strong></small>
                    <Select
                        value={filter}
                        onChange={(value) => setFilter(value)}
                        style={{ width: isMobile ? "50%" : "200px",textAlign: 'left' }}
                    >
                        <Option value="All">All</Option>
                        {industries.map((industry, index) => (
                            <Option key={index} value={industry}>
                                {industry}
                            </Option>
                        ))}
                    </Select>
                </div>

                <hr className="mb-6" style={{marginBottom: '1.2rem'}}/>

                {/* Job Cards */}
                <div
                    className="grid gap-6"
                    style={{
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: '20px'
                    }}
                >
                    {filteredJobs.slice(0, visibleJobs).map((job) => (
                        <Card
                            key={job.id}
                            //   hoverable
                            //   className="shadow-lg"
                            //   title={

                            //   }
                            //   extra={<Badge color="blue" text={job.industry} />}
                            style={{ borderRadius: "8px" }}
                        >
                            <small>{job.type}</small><br />
                            <Link href={`/careers/jobs/${job.id}`} style={{color: 'blue'}}>
                                {job.title}
                            </Link>
                            <Meta
                                description={
                                    <>
                                        <small>
                                            {job.location}
                                        </small>
                                        {/* <p>
                                            <strong>Experience:</strong> {job.experienceRequired}
                                        </p> */}
                                        <br /><br />
                                        <small className="mt-2 ms-auto">
                                            {job.requiredSkills.map((skill, index) => (
                                                <Tag key={index} color="blue">
                                                   {skill} 
                                                </Tag>
                                            ))}
                                        </small>
                                        <br /><br />
                                        <div style={{ textAlign: 'right' }}>
                                            <small className="text-gray-400 text-sm mt-3" >
                                                Posted on: {job.postedOn}
                                            </small>
                                        </div>

                                    </>
                                }
                            />
                        </Card>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleJobs < filteredJobs.length && (
                    <div className="text-center mt-8" style={{marginTop: '2rem'}}>
                        <Button type="primary" onClick={handleLoadMore}>
                            Load More
                        </Button>
                    </div>
                )}
            </div>

            <style jsx>{`
        .container {
          max-width: 1200px;
          margin: auto;
        }
        hr {
          border-color: #eaeaea;
        }
        .grid {
          display: grid;
        }
      `}</style>
        </section>
    );
}

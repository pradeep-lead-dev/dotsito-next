"use client";

import { useState, useEffect } from "react";
import { Card, Tag } from "antd";

export default function Job({ job }) {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="px-2" id="jobdescription">
            <div
                className={`job-layout ${isMobile ? "mobile-layout" : "desktop-layout"
                    }`}
            >


                {/* Job Description Card */}
                <div className="job-card description-card">
                    <Card>
                        <h3>Job Description</h3><br />
                        <h6 >Responsibilities</h6>
                        <ul className="list">
                            {job.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>

                        <h6 >Requirements</h6>
                        <ul className="list">
                            {job.requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                    </Card>
                </div>

                {/* Job Information Card */}
                <div className="job-card info-card">
                    <Card>
                        <div  style={{display: 'flex', flexDirection:'column', gap:'16px'}}>
                        <div>
                            <h3>Job Information</h3><br />
                            <p>
                                <strong>Job ID:</strong>
                                <br /> {job.jobId}
                            </p>
                        </div>


                        <div>
                            <p>
                                <strong>Posted on:</strong>
                                <br /> {job.postedOn}
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Number of Positions:</strong>
                                <br /> {job.openCount}
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Job Type:</strong>
                                <br /> {job.type}
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Work Experience:</strong>
                                <br /> {job.experienceRequired}
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Educational Qualification:</strong>
                                <br /> {job.education}
                            </p>
                        </div>

                        <div>
                            <p>
                                <strong>Required Skills:</strong>
                                <br />
                            </p>

                            <div className="skills-tags">
                                {job.requiredSkills.map((skill, index) => (
                                    <Tag key={index} color="blue">
                                        {skill}
                                    </Tag>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p>

                                <strong>State/Province:</strong>
                                <br /> {job.state}
                            </p>
                        </div>

                        <div>
                        <p>
                            <strong>Zip/Postal Code:</strong>
                            <br /> {job.zipCode}
                        </p>
                        </div>
                        
                       <div>
                       <p>
                            <strong>Country:</strong>
                            <br /> {job.country}
                        </p>
                       </div>
                       <div>
                       <p>
                            <strong>Industry:</strong>
                            <br /> {job.industry}
                        </p>
                       </div>
                       </div>
                    </Card>



                </div>

            </div>
            <hr />
            <div style={{ textAlign: 'center' }}>
                <a
                    href={`mailto:operations@dotsito.com?subject=Job Application for ${job.jobId}: ${job.title}`}
                    className="gt-btn gt-btn-icon"
                    style={{ padding: '14px 20px', marginLeft: 'auto', marginRight: 'auto' }}
                    target='_blank'
                >
                    I'm Interested
                </a>
            </div>
            <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }

        .job-layout {
          display: grid;
          gap: 1rem;
        }

        .desktop-layout {
          grid-template-columns: 3fr 1fr; /* 75% - 25% */
        }

        .mobile-layout {
          grid-template-columns: 1fr; /* Stacked on mobile */
        }



        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

       

        .list {
          list-style-type: disc;
          
        }

        @media (max-width: 768px) {
          .mobile-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}

  // components/otherPages/job/Sidebar.js

  "use client";
  import { jobCategories, recentJobs, jobTags } from "@/data/jobs"; // Use job-specific data
  import Link from "next/link";
  import Image from "next/image";
  import React from "react";

  export default function Sidebar() {
    return (
      <div className="col-12 col-lg-4">
        <div className="main-sidebar">
          {/* Job Search Widget */}
          <div
            className="single-sidebar-widget wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="wid-title">
              <h3>Job Search</h3>
            </div>
            <div className="search-widget">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Search job roles" />
                <button type="submit">
                  <i className="fa-sharp fa-light fa-magnifying-glass" />
                </button>
              </form>
            </div>
          </div>

          {/* Job Categories Widget */}
          <div
            className="single-sidebar-widget wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="wid-title">
              <h3>Job Categories</h3>
            </div>
            <div className="news-widget-categories">
              <ul>
                {jobCategories.map((category, index) => (
                  <li key={index} className={category.isActive ? "active" : ""}>
                    <Link scroll={false} href={`/job-category/${category.slug}`}>
                      {category.name} <span>({category.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Job Openings Widget */}
          <div
            className="single-sidebar-widget wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="wid-title">
              <h3>Recent Job Openings</h3>
            </div>
            <div className="recent-post-area">
              {recentJobs.map((job, index) => (
                <div className="recent-items" key={index}>
                  <div className="recent-thumb">
                    <Image src={job.imgSrc} width={78} height={79} alt="job" />
                  </div>
                  <div className="recent-content">
                    <ul>
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/calendarIcon.png"
                          width="20"
                          height="20"
                        />
                        {job.date}
                      </li>
                    </ul>
                    <h6>
                      <Link scroll={false} href={`/job-details/${job.slug}`}>
                        {job.title}
                      </Link>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Tags Widget */}
          <div
            className="single-sidebar-widget wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="wid-title">
              <h3>Job Tags</h3>
            </div>
            <div className="news-widget-categories">
              <div className="tagcloud">
                {jobTags.map((tag, i) => (
                  <a key={i} href={`#`}>
                    {tag.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

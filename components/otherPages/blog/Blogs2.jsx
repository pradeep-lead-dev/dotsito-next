// components/otherPages/job/JobsListing.js

import { jobItems } from "@/data/jobs"; // Make sure jobItems data is imported from the correct file
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Pagination from "@/components/common/Pagination";

export default function JobsListing() {
  return (
    <section className="jobs-listing fix space-top pb-425">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="jobs-listing-wrapper">
              {jobItems.map((job, index) => (
                <div
                  key={index}
                  className="job-listing-item wow fadeInUp"
                  data-wow-delay={job.delay}
                >
                  <div className="job-thumb">
                    <Image
                      src={job.imgSrc}
                      width={710}
                      height={430}
                      alt="job"
                    />
                    <div className="job-date">
                      <h3>
                        {job.date} <br />
                        <span>{job.month}</span>
                      </h3>
                    </div>
                  </div>
                  <div className="job-content">
                    <ul>
                      <li>
                        <i className="fa-light fa-briefcase" />
                        {job.position}
                      </li>
                      <li>
                        <i className="fa-light fa-location-dot" />
                        {job.location}
                      </li>
                    </ul>
                    <h3>
                      <Link scroll={false} href={`/job-details`}>
                        {job.title}
                      </Link>
                    </h3>
                    <p>{job.description}</p>
                    <Link
                      scroll={false}
                      href={`/job-details`}
                      className="gt-btn mt-1"
                    >
                      Apply Now
                      <i className="fa-sharp fa-light fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              ))}
              <div
                className="page-nav-wrap pt-5 text-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <ul>
                  <Pagination />
                </ul>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  );
}

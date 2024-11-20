"use client";

import { projectItems } from "@/data/projects";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import CaseStudies from "@/components/homes/home-1/Projects";
import { insights, categories } from "@/data/insights";


// const allCategories = [...new Set(projectItems.map(item => item.category))]

export default function Projects({ exclude }) {
  const categoriesList = categories.map(category => {
    return category.title
  })
  
  const [selectedCategory, setSelectedCategory] = useState(exclude?.category || categoriesList[0]);
  
  // Filter projects based on the selected category
  // const filteredProjects = insights.filter(item => item.category === selectedCategory);

  return (
    <section className="all-project-area mx-auto ">
      <div className="" style={{marginLeft: '10px'}}>
        {/* Gallery Title */}
        {/* <InView triggerOnce threshold={0.5}>
          {({ inView, ref }) => (
            <h2 ref={ref} className={`text-center mb-2 ${inView ? "fadeIn" : ""}`}>
              Filter by Industry
            </h2>
          )}
        </InView> */}


        <div className="filter-buttons mb-4 fadeInUp">
          {!exclude && categories.map((category, index) => (
            <InView triggerOnce key={index} threshold={0.5}>
              {({ inView, ref }) => (
                <button
                  ref={ref}
                  className={`filter-btn ${category.title === selectedCategory ? "active" : ""} ${inView ? "slideInLeft" : ""}`}
                  onClick={() => setSelectedCategory(category.title)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <i className={category.icon || "fa-solid fa-folder"}></i> {category.title}
                </button>
              )}
            </InView>
          ))}
        </div>

        <CaseStudies insights={insights.filter(insight => {
          return (insight.category == selectedCategory && insight.id != exclude?.id)
        })} />

        {/* Project Gallery */}
        {/* <div className="row">
          {filteredProjects.map((item, index) => (
            <InView triggerOnce key={index} threshold={0.3}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`col-xl-4 col-md-6 col-12 mb-30 fadeInUp ${inView ? "visible" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="project-card style1 img-shine">
                    <div className="project-img">
                      <Image
                        src={item.imgSrc}
                        width={350} // Fixed width
                        height={200} // Adjust height as needed within card
                        alt="project image"
                        quality={100}
                        layout="responsive"
                      />
                    </div>
                    <div className="fancy-box style2">
                      <p>{item.category}</p>
                      <h4>
                        <Link scroll={false} href={`/project-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <Link
                        scroll={false}
                        href={`/project-details/${item.id}`}
                        className="arrow-icon"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </InView>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 1rem;
        }
        .filter-btn {
          padding: 10px 20px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: border-bottom 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          border-radius: 0;
          position: relative;
        }
        .filter-btn.active {
          border-bottom: 3px solid #007bff;
          color: #007bff;
        }
        
        /* Animation styles */
        .fadeIn, .fadeInUp, .slideInLeft {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-duration: 0.8s;
          transition: all 0.5s ease;
        }
        .fadeIn {
          animation-name: fadeIn;
        }
        .fadeInUp {
          animation-name: fadeInUp;
        }
        .slideInLeft {
          animation-name: slideInLeft;
        }
        
        /* Keyframes */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .visible {
          opacity: 1;
        }

        /* Project card styling */
        .project-card {
          width: 350px;
          height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .project-card:hover {
          transform: scale(1.05);
        }

        .project-img {
          width: 100%;
          height: 200px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Typography */
        .text-center {
          text-align: center;
        }
        h2, h5 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem;
          }
          h5 {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

'use client'; 
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Padding } from "maplibre-gl";
// import TextSlider from "@/components/homes/home-2/TextSlider";

export default function ProjectDetails({ projectItem }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch the HTML file when the component mounts

    const fetchHtmlFile = async (path) => {
      const filePath = `/case-studies/${path}.html`
      
      const response = await fetch(filePath);
      const html = await response.text();
           
      setHtmlContent(html); // Save the HTML content to state   
    };
    fetchHtmlFile(projectItem.path);
  }, []); 

  return (
    <section className="Project-details-section fix space-top pb-425">
      <div
        className="gt-hero-bg hero-color-bg"
        style={{
          backgroundImage: "url(/assets/img/credible/image1.png)",
          borderTop: "5px solid",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: '100% 100%'
        }}
      ></div>
      <div className="container" style={{ maxWidth: "98%" }}>
        <div className="project-details-wrapper">
          <div className="row" style={{ display: "table-row" }}>
            <div
              className="col-lg-12"
              style={{ display: "table-cell", width: "60%" }}
            >
              {/* <TextSlider/> */}
              <div className="project-details-items">
                {/* Project Image */}

                {/* Challenge Section */}
                <div
                  className="details-content pt-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h2>{projectItem.title}</h2>
                  <br></br>
                  <div className="row g-4 pt-5">
                    <div className="col-lg-6 col-md-6" style={{width:"100%",paddingBottom:"3rem"}}>
                      <div className="thumb wow fadeInUp" style={{backgroundImage:`url(/assets/img/case-studies/image${projectItem.id}.png)`,backgroundRepeat:"no-repeat",backgroundSize:"100%",height:"300px",borderRadius:"25px"}}>
                        
                      </div>
                    </div>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: htmlContent }}>

                    {/* {projectItem.overview ||
                      "Default challenge description for the project. Customize this based on the JSON data."} */}
                  </p>
                 
                </div>

                {/* Additional Images */}
              </div>
            </div>

            {/* Result Section */}
            <div
              className="project-details-items pt-5 wow fadeInUp"
              data-wow-delay="1.9s"
            >
              <div
                className="details-content"
                style={{
                  borderLeft: "10px solid #2463cf",
                  borderRadius: "25px",
                  paddingLeft: "50px",
                }}
              >
                <p className="heading">Customer </p>
                <p className="content">
                {projectItem.customer}
                </p>
                <p className="heading">Industry</p>
                <p className="content">{projectItem.industry}</p>
                <p className="heading">Location</p>
                <p className="content">{projectItem.location}</p>
                <p className="heading">Employees</p>
                <p className="content">{projectItem.employees}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

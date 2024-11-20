"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const colorArr = [
  "#8bf0ba", "#94f0f1", "#f2b1d8", "#7acfd6", "#ffdc6a", "#c89666",
  "#f9c5bd", "#6B7A8F", "#DCC7AA", "#c2dde6", "#acb7ae", "#acddde",
  "#caf1de", "#E9FF80", "#96C2DB", "#E5EDF1", "#EFFAFD", "#106EBE",
  "#0FFCBE", "#178582", "#1D63FF", "#FFCE32", "#A0006D",
];

export default function Projects({ insights }) {
  const [visibleCount, setVisibleCount] = useState(3);

  // Load more cards
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Truncate subtitle
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text;

  return (
    <section className="project-area" style={{ position: "relative", marginBottom: '24px' }}>
      <div className="project-wrap">
        <div className="container " style={{ maxWidth: "98%", marginLeft: 'auto' }}>
          <div style={{ textAlign: "center" }}>
            <div className="card-container">
              {insights.slice(0, visibleCount).map((study, index) => (
                <div key={index} className="card">
                  <div
                    className="card-image-wrapper"
                    style={{ borderLeft: `15px solid ${colorArr[index % colorArr.length]}` }}
                  >
                    <Image
                      src={study.imgSrc}
                      alt={study.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="card-title">{study.title}</h4>
                    <p className="card-subtitle">
                      {truncateText(study.subtitle, 120)}{" "}
                      <Link href={`/insights/${study.id}`} style={{color: 'blue'}}>Read More</Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < insights.length && (
              <button onClick={loadMore}>Load More</button>
            )}

            <style jsx>{`
              .card-container {
                display: grid;
                gap: 1rem;
                grid-template-columns: repeat(3, 1fr); /* Default for desktop */
              }

              .card {
                display: flex;
                flex-direction: column;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }

              .card-image-wrapper {
                position: relative;
                width: 100%;
                height: 200px;
              }

              .card-content {
                padding: 20px;
                text-align: left;
              }

              .card-title {
                font-size: 1.25rem;
                font-weight: bold;
                margin-bottom: 10px;
              }

              .card-subtitle {
                font-size: 1rem;
                color: #555;
                line-height: 1.5;
              }

              .card-subtitle a {
                color: #007bff;
                text-decoration: none;
              }

              .card-subtitle a:hover {
                text-decoration: underline;
              }

              button {
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background-color: #0070f3;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }

              button:hover {
                background-color: #005bb5;
              }

              /* Typography Settings */
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                font-family: "Roboto", sans-serif;
                font-weight: 700;
              }

              p {
                font-family: "Roboto", sans-serif;
                font-weight: 400;
              }

              /* Responsive Design */
              @media (max-width: 992px) {
                .card-container {
                  grid-template-columns: repeat(2, 1fr); /* 2 cards per row for tablets */
                }
              }

              @media (max-width: 576px) {
                .card-container {
                  grid-template-columns: 1fr; /* 1 card per row for mobile */
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

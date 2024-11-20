"use client";
import React, { useState, useRef, useEffect } from "react";
import { counterBoxes } from "@/data/facts";
import Image from "next/image";

export default function Facts() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Use IntersectionObserver to trigger the animation when the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Counter component logic to increment the count gradually until it reaches `max`
  const Counter = ({ max, animate }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (animate && count < max) {
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev < max) {
              return prev + 1;
            } else {
              clearInterval(interval);
              return max;
            }
          });
        }, 50); // Slower increment rate for smooth animation

        return () => clearInterval(interval);
      }
    }, [animate, count, max]);

    return (
      <a style={{ fontSize: "2em",  fontWeight: "bold" }}>
        {count}
      </a>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="counter-area"
      style={{ marginTop: "-55px", marginBottom: "-160px", overflow: "hidden" }}
    >
      <div className="container" style={{ padding: "20px",maxWidth:"98%",textAlign:"-webkit-center"}}>
        <div className="counter-wrap" style={{ width:"100%", justifyContent: "space-around", flexWrap: "wrap" }}>
          {counterBoxes.map((box, index) => (
            <div
              key={index}
              className="counter-box"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-in-out",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                <Image src={box.icon} width={60} height={60} alt="icon" />
              </div>
              <div style={{  alignItems: "center" }}>
                <Counter max={box.number} animate={inView} />
                <a style={{ fontSize: "2em", marginLeft: "4px" }}>+</a>
              </div>
              <p style={{ fontSize: "1em",  marginTop: "10px" }}>{box.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

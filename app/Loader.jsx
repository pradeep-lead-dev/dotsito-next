"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true); // Start with loading as true
  const pathname = usePathname();
  const [text, setText] = useState(""); // State for typing effect

  useEffect(() => {
    // Show loader on route change
    setLoading(true);

    // Simulate loading completion with a timeout
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [pathname]); // Trigger effect on every pathname change

  useEffect(() => {
    // Typing effect for brand name
    const brandName = "Dotsito Technologies";
    let currentText = "";
    let index = 0;

    const typingTimer = setInterval(() => {
      if (index < brandName.length) {
        currentText += brandName[index];
        setText(currentText);
        index++;
      } else {
        clearInterval(typingTimer); // Stop typing once the text is complete
      }
    }, 150); // Adjust speed of typing effect as needed

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <>
      {loading && (
        // <div className="loader-overlay">
        //   <div className="content-loading-container">
        //     {/* Bouncing ball loader and logo image */}
        //     <div className="bouncing-loader">
        //       <img src="/assets/img/logo.png" alt="Dotsito Logo" className="logo-image" />
        //       <div className="ball ball1"></div>
        //       <div className="ball ball2"></div>
        //       <div className="ball ball3"></div>
        //     </div>
        //     <div className="brand-name">{text}</div>
        //   </div>
        // </div>
        <div className="loader">
        <div className="center"></div>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i + 1} className={`item item-${i + 1}`}></div>
        ))}
      </div>
      )}
      {/* Hide content until loading is complete */}
      <div className="pagebg" style={{ visibility: loading ? "hidden" : "visible" }}>{children}</div>

      <style jsx>{`
      .pagebg{
      background-color:white;
      }
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          
          height: 100%;
          background-color: #000000; /* Black theme background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          opacity: ${loading ? 1 : 0}; /* Fade out effect */
          transition: opacity 0.5s ease-in-out;
          pointer-events: ${loading ? 'auto' : 'none'};
        }
        
        .content-loading-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: fadeIn 1s ease-in-out; /* Fade-in animation for content */
        }

        .bouncing-loader {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
        }

        .logo-image {
          width: 40px;
          height: 50px;
          z-index: 2;
        }

        /* Balls bouncing around the logo */
        .ball {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: #00AEEF;
          animation: bounce 1s infinite ease-in-out;
        }

        .ball1 {
          top: -30px;
          left: 0;
          animation-delay: 0s;
        }

        .ball2 {
          bottom: -30px;
          right: 0;
          animation-delay: 0.2s;
        }

        .ball3 {
          bottom: -30px;
          left: 0;
          animation-delay: 0.4s;
        }

        /* Typing text effect */
        .brand-name {
          color: #00AEEF; /* Blue color for text */
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 15px;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #00AEEF;
          animation: typing 2s steps(20) forwards, blink 0.5s step-end infinite alternate; /* Typing effect */
        }

        /* Bounce animation for the balls */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Fade-in effect */
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Typing animation */
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Blinking effect for caret */
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </>
  );
}

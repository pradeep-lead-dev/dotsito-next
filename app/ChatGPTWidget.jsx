// components/ChatGPTWidget.js
"use client";

import { useState, useEffect } from "react";

export default function ChatGPTWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleChat = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 500); // Duration of the close animation
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".chatgpt-widget-container")) {
        toggleChat();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Notification Bubble Above the Chat Icon */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "133px",
            right: "58px",
            backgroundColor: "#00FF88",
            color: "#000000",
            padding: "3px",
            borderRadius: "6px",
            fontSize: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
            whiteSpace: "nowrap",
            fontWeight: "bold",
          }}
        >
          We are Here
        </div>
      )}

      {/* Button to toggle the chat widget */}
      <div
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "100px",
          right: "30px",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {/* Rotating text around the button */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            animation: "rotate 6s linear infinite",
          }}
        ></div>

        {/* Image inside the button with green glowing border */}
        <img
          src="/assets/img/icon/bot.png" // Replace with actual image path
          alt="Chat Icon"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            border: "4px solid transparent",
            boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
            animation: "greenGlow 2s infinite alternate",
          }}
        />
      </div>

      {/* ChatGPT iframe with slide-in/out animation */}
      {isOpen && (
        <div
          className={`chatgpt-widget-container ${
            isAnimating ? "slide-out" : "slide-in"
          }`}
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "320px",
            height: "400px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            zIndex: 999,
            backgroundColor: "#fff",
          }}
        >
          <iframe
            title="dotsito ChatGPT"
            src="https://sdv5chee9fa9g098c826q.ai.copilot.live" // Replace with the actual ChatGPT URL
            style={{ border: "none", width: "100%", height: "100%" }}
            loading="lazy"
            allow="microphone; camera; speaker; clipboard-read; clipboard-write; geolocation;"
          ></iframe>
        </div>
      )}

      {/* CSS for animation and mobile responsiveness */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        /* Green glow effect for bright theme */
        @keyframes greenGlow {
          0% {
            box-shadow: 0 0 8px rgba(0, 255, 136, 0.8),
              0 0 16px rgba(0, 255, 136, 0.8);
            border-color: rgba(0, 255, 136, 0.8);
          }
          50% {
            box-shadow: 0 0 16px rgba(0, 255, 136, 1),
              0 0 32px rgba(0, 255, 136, 1);
            border-color: rgba(0, 255, 136, 1);
          }
          100% {
            box-shadow: 0 0 20px rgba(0, 255, 136, 1.2),
              0 0 40px rgba(0, 255, 136, 1.2);
            border-color: rgba(0, 255, 136, 1.2);
          }
        }

        .chatgpt-widget-container {
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }

        .slide-in {
          animation-name: slideIn;
        }

        .slide-out {
          animation-name: slideOut;
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 600px) {
          .chatgpt-widget-container {
            width: 90%;
            height: 75%;
            bottom: 80px;
            right: 5%;
            border-radius: 12px;
          }
          div[style*="width: 60px; height: 60px;"] {
            width: 50px !important;
            height: 50px !important;
            bottom: 2 5px;
            right: 10px;
          }
        }
      `}</style>
    </>
  );
}

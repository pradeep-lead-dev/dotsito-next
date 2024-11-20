// components/CookieConsent.js
"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the cookie consent has been accepted
    const cookieConsent = getCookie("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", 365); // Set cookie for 365 days
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        This website uses cookies to ensure you get the best experience on our
        website.
      </p>
      <button onClick={handleAccept} style={styles.button}>
        Accept
      </button>
    </div>
  );
}

// Helper functions for setting and getting cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const styles = {
  banner: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#00FF88",
    color: "#000",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

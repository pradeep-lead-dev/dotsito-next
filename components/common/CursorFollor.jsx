"use client";

import { useEffect } from "react";

export default function CursorFollower() {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const follower = document.querySelector(".cursor-follower");

      let posX = 0, posY = 0;
      let mouseX = 0, mouseY = 0;

      function animateFollower() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        follower.style.left = `${posX}px`;
        follower.style.top = `${posY}px`;

        requestAnimationFrame(animateFollower);
      }

      // Initialize follower animation
      animateFollower();

      // Update mouse coordinates on movement
      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // Handle hover effect on interactive elements
      const interactiveElements = document.querySelectorAll("a, button");
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => follower.classList.add("active"));
        element.addEventListener("mouseleave", () => follower.classList.remove("active"));
      });

      // Clean up event listeners on unmount
      return () => {
        document.removeEventListener("mousemove", animateFollower);
        interactiveElements.forEach((element) => {
          element.removeEventListener("mouseenter", () => follower.classList.add("active"));
          element.removeEventListener("mouseleave", () => follower.classList.remove("active"));
        });
      };
    }
  }, []);

  return <div className="cursor-follower"></div>;
}

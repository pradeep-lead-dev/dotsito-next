"use client";
import MobileNav from "@/components/headers/MobileNav";
import "../public/assets/scss/styles.scss";
import { useEffect } from "react";
import SiteMenu from "@/components/headers/SiteMenu";
import ScrollTop from "@/components/common/ScrollTop";
// import CursorFollor from "@/components/common/CursorFollor";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import PopupSearch from "@/components/headers/PopupSearch";
import { Toaster } from "react-hot-toast";
// import Head from "next/head";


export default function RootLayout({ children }) {
  const path = usePathname();

  // Bootstrap JS import (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm")
        .then(() => { })
        .catch((error) => { });
    }
  }, []);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const topPos = window.scrollY || document.documentElement.scrollTop;
      const stickyWrapper = document.querySelector(".sticky-wrapper");

      if (stickyWrapper) {
        if (topPos > 500) {
          stickyWrapper.classList.add("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top and initialize WOW.js (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      import("wowjs")
        .then((module) => {
          const WOW = module.default;
          const wow = new WOW({
            mobile: false,
            live: false,
          });
          wow.init();
        })
        .catch((error) => { });
    }
  }, [path]);

  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: Add more favicons */}
        {/* <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" /> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"

        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body>
        <SiteMenu />
        {/* <MobileNav /> */}
        {/* <PopupSearch /> */}
        {/* <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
        <Toaster />
        {children}
        {/* <CursorFollor /> */}
        <ScrollTop />
      </body>
    </html>
  );
}

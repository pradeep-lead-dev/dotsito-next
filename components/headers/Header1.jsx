"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import { activeSideMenu } from "@/utlis/toggleSideMenu";
import { menuItems } from "@/data/menu";

export default function Header1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="gt-header header-layout1 theme-background">
      <div className="sticky-wrapper sticky">
        <div className="menu-area">
          <div className="container" style={{ maxWidth: "98%" }}>
            <div className="row align-items-center justify-content-between">
              {/* Logo Section */}
              <div className="col-auto">
                <div className="header-logo">
                  <a href={`/`}>
                    <Image
                      src="/assets/img/DotsitoName.png"
                      width={200}
                      height={200}
                      alt="Dotsito"
                      className="logo-header-main theme-logo responsive-logo"
                    />
                  </a>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="col-auto d-none d-xl-inline-block"></div>

              {/* Contact and Sidebar Toggle */}
              <div className="col-auto d-flex align-items-center justify-content-end header-right">
                <nav className="main-menu">
                  <ul>
                    <Nav />
                  </ul>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className={`gt-menu-toggle sidebar-btn theme-button d-xl-none d-lg-none d-md-none ${
                    isMenuOpen ? "open" : ""
                  }`}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    padding: "12px",
                    marginLeft: "10px",
                  }}
                >
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <ul className="menu-overlay-list">
            <div className="menu-overlay">
              <ul className="menu-overlay-list">
                {menuItems.map((menuItem, key) => (
                  <li key={key}>
                    <Link href={menuItem.href}>{menuItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

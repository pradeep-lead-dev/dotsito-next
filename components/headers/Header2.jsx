"use client";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { activeMobileMenu } from "@/utlis/toggleMobileMenu";
import { activeSideMenu } from "@/utlis/toggleSideMenu";
import { activePopupSearch } from "@/utlis/togglePopupSearch";

export default function Header2() {
  return (
    <header className="gt-header header-layout2">
      <div className="sticky-wrapper sticky">
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link scroll={false} href={`/`}>
                    <Image
                      src="/assets/img/logo-white.png"
                      width={209}
                      height={202}
                      alt="techo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-xl-inline-block">
                  <ul>
                    <Nav />
                  </ul>
                </nav>
                <div className="header-button style2 d-flex d-xl-none">
                  <button
                    onClick={activeMobileMenu}
                    type="button"
                    className="gt-menu-toggle sidebar-btn"
                  >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <button
                    type="button"
                    onClick={activePopupSearch}
                    className="simple-icon searchBoxToggler"
                  >
                    <i className="far fa-search" />
                  </button>
                  <Link
                    scroll={false}
                    href={`/contact`}
                    className="gt-btn gt-btn-icon"
                  >
                    GET IN TOUCH
                  </Link>
                  <button
                    type="button"
                    onClick={activeSideMenu}
                    className="simple-icon2 sideMenuInfo sidebar-btn2"
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
      </div>
    </header>
  );
}

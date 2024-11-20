// pages/careers.js

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import Blogs2 from "@/components/otherPages/blog/Blogs2";
import Link from "next/link";

export const metadata = {
  title: "Careers || Dotsito Technologies",
  description: "Explore exciting job opportunities in the IT industry at Dotsito Technologies.",
};

export default function Page() {
  return (
    <>
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            style={{
              backgroundImage: "url(/assets/img/hero/about.png)", // Change to a relevant image for careers
              position: "relative",
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay Layer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
                zIndex: 1,
              }}
            />
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Careers
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Blogs2 />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}

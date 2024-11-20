import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import NotFound from "@/components/otherPages/NotFound";
import Link from "next/link";
export const metadata = {
  title:
    "Page Not Found || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
      <Header1 />
      <main className="main position-relative" id="mains">
      <div className="breadcrumb-wrapper" style={{ position: "relative" }}>
          <div
            className="breadcumb"
            style={{
              backgroundImage: "url(/assets/img/hero/about.png)",
              position: "relative",
              height: "400px", // Set height as needed
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
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  About Us
                </h1>
              </div>
            </div>
          </div>
        </div>
        <NotFound />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}

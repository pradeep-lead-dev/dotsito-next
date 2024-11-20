import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import Pricing from "@/components/homes/home-3/Pricing";
import f from "next/link";
export const metadata = {
  title: "Pricing || Dotsito Technologies",
  description: "Dotsito Technologies",
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
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Pricing
                </h1>
              
              </div>
            </div>
          </div>
        </div>
        <Pricing />
        <div className="pb-300"></div>
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}

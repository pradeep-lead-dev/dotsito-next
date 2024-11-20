// pages/Home1.js
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Loader from "@/app/Loader";
import About from "@/components/homes/home-1/About";
import Credible from "@/components/homes/home-1/credible";
import Cta from "@/components/common/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Offering from "@/components/homes/home-1/Offering";
import Pricing from "@/components/homes/home-1/Pricing";
import Process from "@/components/homes/home-1/Process";
import Projects from "@/components/homes/home-1/Projects";
import Techhubs from "@/components/homes/home-1/techhubs";
import Testimonials from "@/components/homes/home-1/Testimonials";
import VideoBox from "@/components/homes/home-1/VideoBox";
import CookieConsent from "@/components/CookieConsent"; // Import CookieConsent
import Services2 from "@/components/homes/home-1/Services2";
import Team from "@/components/homes/home-1/Team";
import HeroModule from "@/components/common/HeroModule";
import { insights } from "@/data/insights";
import Head from "next/head";

export const metadata = {
  title: "Home1 || Dotsito Technologies",
  description: "Dotsito Technologies",
  icons: {
    icon: '/favicon.ico',
    // Optional: Add more favicon sizes
    // apple: '/apple-touch-icon.png',
    // shortcut: '/favicon-32x32.png',
  },
};

export default function Home1() {
  return (
    <>
      <Loader>
        <Header1 />
        <main className="main position-relative" id="mains">
          {/* <Hero /> */}
          <HeroModule title={`Revolutionizing the World of Dots with ServiceNow`} subtitle={`Innovation drives everything we do at DOTSITO. It is where imagination seamlessly blends with expertise to craft groundbreaking solutions that transform visions into reality. By leveraging cutting edge strategies and transformative technology, we deliver unparalleled value to our clients.`} videoPath={`/assets/videos/hero2.mp4`} customButton customButtonLink={`/services`} customText={`Every Dot Tells a Story of Innovation and Creativity`} />
          <About />
          <Credible />
          {/* <Techhubs /> */}
          <div className="container">
          <div className="title-wrap mb-50 " style={{ backgroundColor: "aliceblue", borderLeft: "10px solid #2463cf", paddingLeft: "25px", display: 'block', maxWidth: '98%' }}>
            <div className="title-area">
              <h6
                className="title text-start wow fadeInUp"
                data-wow-delay=".6s"
                color="black !important"
              >
                Our Case Studies
              </h6>
            </div>

          </div>
          </div>
          <Projects insights={insights.filter(insight => (
            insight.category == 'Case Studies'
          ))} />
          <br /><br />
          <Facts />
          <Testimonials />
          {/* <Cta /> */}
        </main>
        <Footer1 />
      </Loader>

      {/* Cookie Consent */}
      {/* <CookieConsent /> */}
    </>
  );
}

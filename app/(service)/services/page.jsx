import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
// import ServiceDetails from "@/components/otherPages/service/ServiceDetails";
import Link from "next/link";
import { allService } from "@/data/services";
import ChatGPTWidget from "@/app/ChatGPTWidget";
import Loader from "@/app/Loader";
import HeroModule from "@/components/common/HeroModule";
import Projects from "@/components/homes/home-1/Projects";
import { insights } from "@/data/insights";
import Contact from "@/components/otherPages/contact/Contact";
import ServiceDetails from "@/components/otherPages/service/ServicesV2";
export const metadata = {
  title:
    "Services || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page({ params }) {
  const serviceItem =
    allService.filter((elm) => elm.id == params.id)[0] || allService[0];
  return (
    <>
      <Loader >
        <Header1 />
        <main className="main position-relative" id="mains">
          <HeroModule title={'Services'} subtitle={`We deliver a spectrum of cutting edge services designed to empower businesses in an ever evolving digital landscape. Through innovative solutions, specialized expertise, and adaptable strategies, we address the unique challenges of modern enterprises. Our offerings span diverse domains, seamlessly aligning with client objectives to drive impactful results. From advanced application services to transformative digital solutions, we are committed to crafting value driven experiences that inspire growth, foster innovation, and ensure long term success.`} videoPath={'/assets/videos/services1.mp4'} />
          {/* <div id="service-content"></div> */}
          {/* <ServiceDetails /> */}
          <ServiceDetails headerText={`Offerings`}/>
          <hr />
          <h3 style={{ padding: '12px' }}>Explore our recent case studies</h3>
          <Projects insights={insights} />
          <hr />
          <Contact />
          {/* <ChatGPTWidget/> */}
          {/* <Cta /> */}
        </main>
        <Footer1 />
      </Loader>
    </>
  );
}

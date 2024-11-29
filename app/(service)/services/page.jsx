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
    "Services | Dotsito",
  description: "We provide innovative digital solutions, expert strategies, and advanced services to empower businesses, drive growth, foster innovation, and deliver impactful, value-driven results in a dynamic, evolving digital landscape.",
};
export default function Page({ params }) {
  const serviceItem =
    allService.filter((elm) => elm.id == params.id)[0] || allService[0];
  return (
    <>
      <Loader >
        <Header1 />
        <main className="main position-relative" id="mains">
          <HeroModule title={'Services'} subtitle={`We provide innovative digital solutions, expert strategies, and advanced services to empower businesses, drive growth, foster innovation, and deliver impactful, value-driven results in a dynamic, evolving digital landscape.`} videoPath={'/assets/videos/services1.mp4'} />
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

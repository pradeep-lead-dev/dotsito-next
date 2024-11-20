import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import ServiceDetails from "@/components/otherPages/service/ServiceDetails";
import Link from "next/link";
import { allService } from "@/data/services";
import ChatGPTWidget from "@/app/ChatGPTWidget";
import Loader from "@/app/Loader";
import HeroModule from "@/components/common/HeroModule";
export const metadata = {
  title:
    "Service Details|| Dotsito Technologies",
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
        <HeroModule title={'Services'} subtitle={`We deliver a spectrum of cutting edge services designed to empower businesses in an ever evolving digital landscape. Through innovative solutions, specialized expertise, and adaptable strategies, we address the unique challenges of modern enterprises. Our offerings span diverse domains, seamlessly aligning with client objectives to drive impactful results. From advanced application services to transformative digital solutions, we are committed to crafting value driven experiences that inspire growth, foster innovation, and ensure long term success.`} videoPath={'/assets/videos/services1.mp4'}/>
        {/* <div id="service-content"></div> */}
        <ServiceDetails />
        {/* <ChatGPTWidget/> */}
        {/* <Cta /> */}
      </main>
      <Footer1 />
      </Loader>
    </>
  );
}

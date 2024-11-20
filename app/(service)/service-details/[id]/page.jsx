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
    <Loader/>
      <Header1 />
      <main className="main position-relative" id="mains">
        <HeroModule title={'Services'} subtitle={`Comprehensive solutions tailored to meet your unique needs and goals.`} videoPath={'/assets/videos/services1.mp4'}/>
        <ServiceDetails serviceItem={serviceItem} />
        {/* <ChatGPTWidget/> */}
        {/* <Cta /> */}
      </main>
      <Footer1 />
    </>
  );
}

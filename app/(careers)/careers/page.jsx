import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import Projects from "@/components/otherPages/project/Projects";
import Projects1 from "@/components/homes/home-1/Projects";
import Link from "next/link";
import ChatGPTWidget from "@/app/ChatGPTWidget";
import Loader from "@/app/Loader";
import HeroModule from "@/components/common/HeroModule";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Careers || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
      <Loader>
        <Header1 />
        <main className="main position-relative" id="mains">
          <HeroModule title={'Careers'} subtitle={`Fostering intellectual growth through a superior learning environment`} videoPath={`/assets/videos/careers.mp4`} customText={`Let’s help you Rise to new heights`} />


          <HeroModule title={'Join Dotsito'} subtitle={`Your aspirations, your career, your path. \n Dotsito invites you.`} imagePath={`/assets/img/careers/bannerbg.jpg`} customButton customButtonLink={`/careers/jobs`} customButtonText={`Join now`} customHTMLBanner={`<br/>Or share your resume at <br/><strong><a style="color: white" href='mailto:operations@dotsito.com'>operations@dotsito.com</a></strong>`}/>
          {/* <Projects /> */}
          {/* <Projects1 /> */}
          {/* <ChatGPTWidget/> */}
          {/* <Cta /> */}
        </main>
        <Footer1 />
      </Loader>
    </>
  );
}

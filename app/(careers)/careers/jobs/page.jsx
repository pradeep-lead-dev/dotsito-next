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
import Jobs from "@/components/otherPages/Jobs/Jobs";
import JobsListing from "@/components/otherPages/blog/Blogs2";

export const metadata = {
  title: "Jobs || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
      <Loader>
        <Header1 />
        <main className="main position-relative" id="mains" style={{marginBottom: '1rem'}}>
          <HeroModule title={'Find the career of your dreams'} subtitle={`We're not just a company, we're a family. We understand that discovering a fulfilling and impactful career can take time. Our mission is to simplify that journey for you, creating a workplace where you'll feel excited to contribute every day. Begin your career path with us by exploring our current opportunities.`} imagePath={`/assets/img/careers/bannerjob.jpg`} 
          customHTMLBanner={`<a
            href="#openings"
            class="gt-btn gt-btn-icon"
            style= "padding: 14px 20px"
          >
           View Openings
          </a>
          
          `}
          />

          <Jobs />

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

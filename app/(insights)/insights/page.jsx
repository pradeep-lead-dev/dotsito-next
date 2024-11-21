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
  title: "Insights || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
      <Loader>
        <Header1 />
        <main className="main position-relative" id="mains">
          <HeroModule title={'Insights'} subtitle={`Explore our insights section for in-depth case studies showcasing transformative solutions and thought-provoking blogs offering expert perspectives. Discover how our journey drives innovation and excellence through impactful stories.`} videoPath={`/assets/videos/projects.mp4`} />

          <Projects />
          {/* <Projects1 /> */}
          {/* <ChatGPTWidget/> */}
          {/* <Cta /> */}
        </main>
        <Footer1 />
      </Loader>
    </>
  );
}

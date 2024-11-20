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
          <HeroModule title={'Insights'} subtitle={`Discover a world of knowledge and innovation in our insights section. From in depth case studies that showcase our transformative solutions to thought provoking blogs offering expert perspectives, we provide a comprehensive view of our journey. Stay updated with our latest achievements, news, and upcoming events as we continue to shape the future with bold ideas and impactful success stories. Explore how our past experiences, present endeavors, and future aspirations drive our commitment to excellence.`} videoPath={`/assets/videos/projects.mp4`} />

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

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

export const metadata = {
  title: "Project || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
    {/* <Loader/> */}
      <Header1 />
      <main className="main position-relative" id="mains">
        <HeroModule title={'Insights'} subtitle={`Highlighting our past, present, and future insights for continued success.`}videoPath={`/assets/videos/projects.mp4`}/>
        <Projects />   
        {/* <Projects1 /> */}
        {/* <ChatGPTWidget/> */}
        {/* <Cta /> */}
      </main>
      <Footer1 />
    </>
  );
}

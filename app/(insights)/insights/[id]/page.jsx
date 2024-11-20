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
import Insight from "@/components/otherPages/insight/Insight";

export const metadata = {
  title: "Insight || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page({ params }) {
  const insight = insights.find(ins => {
    return ins.id == params.id
  })

  

  return (
    <>
      <Loader >
      <Header1 />
      <main className="main position-relative" id="mains">
        <HeroModule title={insight.title} subtitle={insight.subtitle} imagePath={insight.imgSrc} insight={insight} />
        <Insight insight={insight}/>
        <div className="">
          <h4 style={{textAlign: 'center'}}>Related {insight.category}</h4>
        </div>
        <Projects exclude={insight} />
        {/* <Projects1 /> */}
        {/* <ChatGPTWidget/> */}
        {/* <Cta /> */}
      </main>
      <Footer1 />
      </Loader>
    </>
  );
}

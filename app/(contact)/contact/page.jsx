import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import Contact from "@/components/otherPages/contact/Contact";
import Map from "@/components/otherPages/contact/Map";
import Link from "next/link";
import ChatGPTWidget from "@/app/ChatGPTWidget";
import Loader from "@/app/Loader";
import HeroModule from "@/components/common/HeroModule";
export const metadata = {
  title: "Contact || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>
      <Loader>

        <Header1 />
        <main className="main position-relative" id="mains">
          <HeroModule title={`Contact Us`} subtitle={`We’re here to connect, collaborate, and create solutions that matter. Whether you have a question, need assistance, or want to explore opportunities with us, our team is ready to assist you. Reach out to us through the form below, and let’s start a conversation that drives innovation and success. Your journey with us begins here!`} videoPath={`/assets/videos/contact.mp4`} />
          <Contact />
          {/* <ChatGPTWidget/> */}
          <Map />
        </main>
        <Footer1 />
      </Loader>
    </>
  );
}

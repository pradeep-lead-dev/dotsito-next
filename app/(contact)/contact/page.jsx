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
import Image from "next/image";
// import MapComponent from "@/components/otherPages/contact/MapComponent";
// import MapComponent from "@/components/otherPages/contact/MapV2";
export const metadata = {
  title: "Contact | Dotsito",
  description: "We're here to connect, collaborate, and create meaningful solutions. Have questions or ideas? Fill out the form below, and let's start a conversation that drives innovation and success.",
};
export default function Page() {
  return (
    <>
      <Loader>

        <Header1 />
        <main className="main position-relative" id="mains">
          <HeroModule title={`Contact Us`} subtitle={`We're here to connect, collaborate, and create meaningful solutions. Have questions or ideas? Fill out the form below, and let's start a conversation that drives innovation and success.`} videoPath={`/assets/videos/contact.mp4`} />
          <Contact />
          {/* <ChatGPTWidget/> */}
          {/* <Map /> */}
          <hr />
          <h6 style={{ textAlign: 'center' }}>Global Presence</h6>

          <div className={'image-container'}>
            <Image src={`/assets/img/contact/locations-map2.png`} layout="fill" className="image" alt="location"/>
          </div>

          {/* <MapComponent /> */}
          <br />
        </main>
        <Footer1 />
      </Loader>
    </>
  );
}

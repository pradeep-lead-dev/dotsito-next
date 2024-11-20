import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import NotFound from "@/components/otherPages/NotFound";
import Link from "next/link";
import ChatGPTWidget from "./ChatGPTWidget";
export const metadata = {
  title:
    "Page Not Found || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page() {
  return (
    <>

      {/* <Header1 /> */}
      <main className="main position-relative" id="mains">
       
        <NotFound />
        {/* <ChatGPTWidget/> */}
        {/* <Cta /> */}
      </main>
      {/* <Footer1 /> */}
    </>
  );
}

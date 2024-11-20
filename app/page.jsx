import Head from "next/head";
import Home1 from "./(homes)/home-1/page";
import ChatGPTWidget from "./ChatGPTWidget";
import Loader from "./Loader"; // Direct path to Loader.jsx in the same directory

export const metadata = {
  title: "Home || Dotsito Technologies",
  description: "Dotsito Technologies",
  
};

export default function Page() {
  return (
    <>
      <Head><link rel="icon" href="/favicon.ico" sizes="any" /></Head>
      <Home1 />
      
      {/* <ChatGPTWidget/>   */}
    </>
  );
}

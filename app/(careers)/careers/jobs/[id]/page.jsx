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

import Insight from "@/components/otherPages/insight/Insight";
import { jobs } from "@/data/careerJobs";
import Job from "@/components/otherPages/Jobs/Job";

export const metadata = {
  title: "Job || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page({ params }) {
  const job = jobs.find(job => {
    return job.id == params.id
  })


  return (
    <>
      <Loader >
      <Header1 />
      <main className="main position-relative" id="mains" style={{marginBottom: '1rem'}}>
        <HeroModule title={job.title} subtitle={`${job.jobId} | ${job.type}`} imagePath={`/assets/img/careers/officeimage.jpg`} job={job} 
        // customHTMLBannerUpper={`<br/>${job.company} | ${job.location}<br/>`} 
        customHTMLBanner={`<a
                  href="mailto:operations@dotsito.com?subject=Job Application for ${job.jobId}: ${job.title}"
                  class="gt-btn gt-btn-icon"
                  style= "padding: 14px 20px; margin-right: 1rem; margin-top: 1rem"
                  target='_blank'
                >
                  I'm Interested
                </a>
                <a
                  href="#jobdescription"
                  class="gt-btn gt-btn-icon"
                  style= "padding: 14px 20px;  margin-top: 1rem"
                >
                  View Job Description
                </a>
                
                `}
        // customButton customButtonText={`I'm Interested`} customButtonLink={`/careers/jobs/${job.id}/submit`}
         />
        
        <Job job={job}/>

      </main>
      <Footer1 />
      </Loader>
    </>
  );
}

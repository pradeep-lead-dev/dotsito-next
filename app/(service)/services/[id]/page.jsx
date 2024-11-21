import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import HeroModule from "@/components/common/HeroModule";
import { serviceData } from "@/data/services";
import Loader from "@/app/Loader";
import Projects from "@/components/homes/home-1/Projects";
import Contact from "@/components/otherPages/contact/Contact";
import { insights } from "@/data/insights";
import Faq3 from "@/components/otherPages/faq/Faq3";
import ServiceDetails from "@/components/otherPages/service/ServicesV2";



export const metadata = {
  title: "Services || Dotsito Technologies",
  description: "Dotsito Technologies",
};
export default function Page({ params }) {
  const service = serviceData.find(service => {
    return service.id == params.id
  })

  return (
    <>
      <Loader>
        <Header1 />
        <main className="main position-relative" id="mains" style={{ marginBottom: '1rem' }}>
          <HeroModule title={service.category_title} subtitle={service.category_content} imagePath={`/assets/img/service/${service.category_image}`}
          />


          <div style={{padding: '16px'}}>
            <div className="details-content">
              <div className="details-video-items">
                <div className="content">
                  <h4 style={{ textAlign: 'left' }}>Benefits With Our Service</h4>
                  <ul className="list ps-0">
                    {service?.benefits?.map((benefit, index) => (
                      <li key={index}>
                        <i className="fa-regular fa-circle-check" style={{marginRight: '6px', fontWeight: 'bold'}}/>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <h4 style={{ textAlign: 'left' }}>FAQs</h4>
            <Faq3 serviceDetails={service} isMobile/>
          </div>
          <hr />
          <ServiceDetails headerText={`Explore our other services`} exclude={service} />
          <hr />
          <h3 style={{ padding: '12px' }}>Explore our recent case studies</h3>
          <Projects insights={insights} />
          <hr />
          <Contact />
        </main>
        <Footer1 />
      </Loader>
    </>
  );
}

import { credibleCards } from "@/data/credible";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Padding } from "maplibre-gl";
const colorArr = ["#8bf0ba", "#94f0f1", "#c2dde6", "#acb7ae", "#DCC7AA", "#f9c5bd", "#acddde", "#caf1de", "#E9FF80", "#96C2DB", "#E5EDF1", "#EFFAFD", "#106EBE", "#0FFCBE", "#178582", "#1D63FF", "#FFCE32", "#A0006D"];

export default function Credible() {
  return (
    <section className="blog-area fix">
      {credibleCards.map((card, index) => (
        <div
          className={`blog-wrap style1 space-top pb-425 margin${card.contentAlign}`}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/img/credible1/${card.imagePath}) no-repeat center center fixed`,
            borderTop: "5px solid",
            borderColor: colorArr[index],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          <div className={`container margin${card.tagAlign}`}>
            <div className={`title-area mx-auto blog-card border${card.tagAlign}`} style={{
              backgroundColor: colorArr[index], opacity: "0.7"
            }}>
              <h2
                className="title mb-50 wow fadeInUp align"
                style={{ color: "#000", textAlign: "center" }}
                data-wow-delay=".3s"
              // style={{textAlign:"center"}}
              >
                {'"'}{card.tagline} {'"'}
              </h2>
            </div>
            <div className="blog-card-wrap style1" >

              <div
                className={`blog-card style1 img-shine wow fadeInUp  border${card.contentAlign}`}
                data-wow-delay={card.delay}
                key={index}
                style={{borderColor: '#6b6767'}}
              >
                <div className="blog-card-body">
                  <h6 className="blog-title style1"
                    style={{ color: '#fff' }}
                  >
                    {card.title}
                  </h6>
                  <p style={{ color: '#fff' }}>
                    {card.description}
                  </p>
                  <div className="btn-wrapper" Padding="0 0 50px 0">
                    <Link scroll={false} href={`/insights`} style={{ color: '#fff' }}>
                      Read More
                      <Image
                        alt="icon"
                        width="16"
                        height="16"
                        src="/assets/img/icon/arrowIconDark.png"
                      />
                    </Link>
                  </div>
                  {/* <div className="calendar">
                    <div className="date">{card.date}</div>
                    <div className="month">{card.month}</div>
                  </div> */}
                </div>
              </div>

            </div>
          </div>
        </div>

      ))}

      {/* <div className="hero-sub-title">
        <h2
          className="title2" style={{ width: "60%", marginLeft: "20%", marginRight: "20%", fontSize: "40px", color: "b", lineHeight: "2", textAlign: "center", marginBottom: "50px", marginTop: "50px", fontWeight: "600", textTransform: "capitalize" }}
          data-ani="slideindown"
          data-ani-delay="0.2s"
        >
          {"Experience the Power of Innovation in Action"}
        </h2>
      </div> */}

<div >
          <h2
            className="title2 hero-subtitle"
            data-ani="slideindown"
            data-ani-delay="0.2s"
            style={{margin: '20px auto'}}
          >
             {"Experience the Power of Innovation in Action"}
          </h2>
        </div>
    </section>

  );
}

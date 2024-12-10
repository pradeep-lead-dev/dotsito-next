"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { slidesData } from "@/data/heroSlides";
import Link from "next/link";
import Image from "next/image";

export default function HeroModule({ videoPath, title, subtitle, customButton, customButtonLink, customText, imagePath, insight, customButtonText, customHTMLBanner, job, customHTMLBannerUpper, noSpace }) {
  return (
    <section className="hero-1" id="hero10" style={{ width: "100%", position: "relative" }}>
      <Swiper
        className="swiper gt-slider hero-slider1 swiper-fade swiper-initialized swiper-horizontal swiper-autoheight swiper-watch-progress swiper-backface-hidden"
        // id="heroSlide1"
        // modules={[EffectFade]}
        // effect="fade"
        autoHeight
      >
        <SwiperSlide className="" >
          <div className="hero-inner">
            <div className="gt-hero-bg hero-video-bg">
              <div className="video-overlay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
                opacity: 0.1
              }}></div>
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                // preload="auto"
                poster={imagePath ? imagePath : '/assets/img/bg/building.png'}
              >
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="hero-style1">
              {customHTMLBannerUpper && <div dangerouslySetInnerHTML={{ __html: customHTMLBannerUpper }}></div>}
              <h1 className="hero-title" style={{ padding: '2%', margin: 0, color: '#fff' }}>
                {title}
              </h1>
              <p className="hero-text" style={{ padding: '0 3.5%', textAlign: 'center' }}>{subtitle}</p>
              {customButton && (
                <Link
                  scroll={false}
                  href={customButtonLink}
                  className="gt-btn gt-btn-icon"
                  style={{ padding: '14px 20px', textTransform: 'capitalize', fontWeight: 'normal' }}
                >
                  {customButtonText || `Explore More`}
                </Link>
              )}
              {customHTMLBanner && <div dangerouslySetInnerHTML={{ __html: customHTMLBanner }}></div>}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <h2
          className="title2 hero-subtitle"
          data-ani="slideindown"
          data-ani-delay="0.2s"
          style={{ margin: noSpace ? '0px' : '20px auto', textTransform: 'none' }}
        >
          {customText}
        </h2>
      </div>



      {/* Small text in the right corner */}
      {(insight?.date && insight?.time) && (<small
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
          fontSize: "12px",
          color: "#ffffff",
          opacity: 0.7,
          zIndex: '9999'
        }}
      >
        Created in {insight.date} {insight.time}.
      </small>)}

      {(job?.postedOn) && (<small
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
          fontSize: "12px",
          color: "#ffffff",
          opacity: 0.7,
          zIndex: '9999'
        }}
      >
        Posted on {job.postedOn}.
      </small>)}
      <div id="service-content"></div>
    </section>
  );
}

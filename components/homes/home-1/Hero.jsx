"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { slidesData } from "@/data/heroSlides";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-1" id="hero10" style={{ width: "100%" }}>
      <Swiper
        className="swiper gt-slider hero-slider1 swiper-fade swiper-initialized swiper-horizontal swiper-autoheight swiper-watch-progress swiper-backface-hidden"
        id="heroSlide1"
        modules={[EffectFade]}
        effect="fade"
        autoHeight
      >
        {slidesData.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <div className="hero-inner">
              <div className="gt-hero-bg hero-video-bg">
                <video
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={slide.videoSrc}
                >
                  <source src={slide.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="hero-style1">
                <h1 className="hero-title">
                  <span className="title1">{slide.title1}</span>
                  <span className="title2">{slide.title2}</span>
                </h1>
                <p className="hero-text">{slide.text}</p>
                <Link
                  scroll={false}
                  href={`/contact`}
                  className="gt-btn gt-btn-icon"
                  style={{padding: '14px 20px'}}
                >
                  EXPLORE MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
      {slidesData.map((slide) => (

        <div >
          <h2
            className="title2 hero-subtitle"
            data-ani="slideindown"
            data-ani-delay="0.2s"
            style={{margin: '20px auto'}}
          >
            {slide.subtitle}
          </h2>
        </div>

      ))}
    </section>
  );
}

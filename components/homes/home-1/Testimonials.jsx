"use client";
import { testimonialsData } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "../../../public/assets/img/icon/arrowRight.png";
import arrowLeft from "../../../public/assets/img/icon/arrowLeft.png";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {


  //dynamically change the height of the "Why Our Clients Love Us" card
  useEffect(() => {
    const adjustCardHeight = () => {
      const cards = document.querySelectorAll('.testimonial-card.style1');
      let maxHeight = 0;

      // Reset heights
      cards.forEach((card) => {
        card.style.height = 'auto';
      });

      // Calculate max height
      cards.forEach((card) => {
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight;
        }
      });

      // Apply max height to all cards
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    adjustCardHeight();
    window.addEventListener('resize', adjustCardHeight);

    return () => {
      window.removeEventListener('resize', adjustCardHeight);
    };
  }, []);




  return (
    <section className="testimonial-area space fix">
      <div
        className="container"
        style={{ maxWidth: "100%", textAlign: "center" }}
      >
        <div className="testimonial-wrap style1">
          <div className="section-bg">
            <Image
              alt="bg"
              src="/assets/img/bg/testimonialBg1_1.png"
              width="1280"
              height="580"
            />
          </div>
          <div className="title-wrap mb-50">
            <div className="title-area text-start" style={{ maxWidth: "100%" }}>
              <h2
                className="title text-start wow fadeInUp"
                data-wow-delay=".6s"
              >
                Why Our Clients Love Us
              </h2>
            </div>
          </div>
          <div className="slider-area testimonial-slider1" style={{width:"98%"}}>
            <Swiper
              loop={true}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp2",
                nextEl: ".snbn2",
              }}
              className="gt-slider"
              id="testimonialSlider1"
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card style1">
                  <div className="profile-box">
                  {/* <div className="quote">
                      <Image
                        alt="icon"
                        src="/assets/img/icon/quoteIcon.png"
                        width="25"
                        height="17"
                      />
                    </div> */}
                  <p className="text">{testimonial.text}</p>
                   
     
                 </div> 
                    <div className="testi-content" style={{paddingLeft:"40px",textAlign:"right",marginRight:"40px",paddingBottom:"40px"}}>
                        <p style={{padding: 0, margin: 0, fontWeight: 'bold'}}>{testimonial.name}</p>
                        <small className="designation">
                          {testimonial.designation}
                        </small>
                        {/* <ul className="star-wrap">
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <li key={index}>
                          <Image
                            alt="icon"
                            src="/assets/img/icon/starIcon.png"
                            width="20"
                            height="20"
                          />
                        </li>
                      ))}
                  </ul> */}
                      </div>
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="slider-arrow snbp2 style2 d-lg-block d-none">
            <Image
              alt="img"
              src={arrowLeft}
              width="20"
              height="20"
            />
          </button>
          <button className="slider-arrow  snbn2 style2 slider-next d-lg-block d-none">
            <Image
              alt="img"
              src= {arrowRight}
              width="20"
              height="20"
              style={{right: '0 !important'}}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

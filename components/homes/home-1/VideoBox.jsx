"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function VideoBox() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="video-box-area mt-n355 fix wow fadeInUp"
        data-wow-delay="1s"
      >
        <div className="video-wrap style1">
          <div className="container">
            <div
              className="video-box"
              style={{
                backgroundImage: "url(/assets/img/bg/videoBoxBg1_1.png)",
              }}
            >
              <a onClick={() => setOpen(true)} className="play-btn popup-video">
                <i className="fa-sharp fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="OGABwkJ_23g"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

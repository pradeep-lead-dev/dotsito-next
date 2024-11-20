import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp" data-wow-delay=".6s">
      <div className="map-items">
        <div className="googpemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.0272650563001!2d77.566438640813!3d10.994413396761624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99900755c1513%3A0x6fb5de480a85caca!2sDotsito%20Technologies!5e1!3m2!1sen!2sin!4v1729602107132!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""  
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

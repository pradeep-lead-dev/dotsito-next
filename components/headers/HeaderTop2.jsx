import React from "react";

export default function HeaderTop2() {
  return (
    <div className="header-top-section style2 fix">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:operations@dotsito.com" className="link">
                operations@dotsito.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume" />
              <a href="tel:2086660112">+91 4257358130</a>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

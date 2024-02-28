import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import { Link } from "react-router-dom";
// import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="footer-col col-lg-3 col-md-4 col-12 about">
              <div className="footer-col-inner">
                <h3>About</h3>
                <ul>
                  <li className="red_hover hov_pointer">
                    <Link to={"/about"}>
                      <FontAwesomeIcon icon={faCaretRight} /> About us
                    </Link>
                  </li>
                  <li className="red_hover hov_pointer">
                    <Link to={"/contact"}>
                      <FontAwesomeIcon icon={faCaretRight} /> Contact us
                    </Link>
                  </li>
                  <li className="red_hover hov_pointer">
                    <Link to={"/privacy"}>
                      <FontAwesomeIcon icon={faCaretRight} /> Privacy policy
                    </Link>
                  </li>
                  <li className="red_hover hov_pointer">
                    <Link to={"/terms"}>
                      <FontAwesomeIcon icon={faCaretRight} /> Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col col-lg-6 col-md-8 col-12 newsletter">
              <div className="footer-col-inner">
                <h3>Join our mailing list</h3>
                <p>Subscribe Us</p>
                <form className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      placeholder="Enter your email"
                    />
                  </div>
                  <input
                    className="_btn btn-theme btn-subscribe"
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
            <div className="footer-col col-lg-3 col-12 contact">
              <div className="footer-col-inner">
                <h3>Contact us</h3>
                <div className="row">
                  <p className="adr clearfix col-lg-12 col-md-4 col-12">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="float-left"
                    />{" "}
                    {/* Replace <i> with <FontAwesomeIcon> */}
                    <span className="adr-group float-left">
                      <span className="street-address">
                        40, Villa Fairholme, Sir Augustus Bartolo Street, Ta’
                        Xbiex XBX 1095, Malta
                      </span>
                    </span>
                  </p>
                  <p className="tel col-lg-12 col-md-4 col-12">
                    <FontAwesomeIcon icon={faPhone} /> +8801712345678
                  </p>
                  <p className="email col-lg-12 col-md-4 col-12">
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    {/* Replace <i> with <FontAwesomeIcon> */}
                    <span
                      href="mailto:info@ego-education.com"
                      className="red_hover hov_pointer"
                    >
                      info@ego-education.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <small className="copyright col-lg-6 col-12 justify-content-center align-items-center d-flex flex-column w-100">
              Copyright © 2024. All rights reserved.<br/>
              <a href="/" className="m-0">www.ego-education.com</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

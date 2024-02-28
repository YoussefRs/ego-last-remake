import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactWidget = () => {
  return (
    <section className="widget">
      <h3 className="title">Contact</h3>
      <p>
        We’d love to hear from you. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam ut erat magna. Aliquam porta sem a lacus
        imperdiet posuere. Integer semper eget ligula id eleifend.
      </p>
      <p className="tel">
        <FontAwesomeIcon icon={faPhone} /> Tel: +8801712345678
      </p>
      <p className="email">
        <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
        <a href="mailto:info@ego-education.com">info@ego-education.com</a>
      </p>
    </section>
  );
};

export default ContactWidget;

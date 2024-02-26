import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactWidget = () => {
  return (
    <section className="widget">
      <h3 className="title">Contact</h3>
      <p>
        Suspendisse mollis neque augue, vitae malesuada mi dictum quis. Ut
        mollis purus vel orci aliquam sagittis. Aliquam erat volutpat.{" "}
      </p>
      <p className="tel">
        <FontAwesomeIcon icon={faPhone} /> Tel: 0800 123 4567
      </p>
      <p className="email">
        <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
        <a href="mailto:enquires@website.com">enquires@website.com</a>
      </p>
    </section>
  );
};

export default ContactWidget;

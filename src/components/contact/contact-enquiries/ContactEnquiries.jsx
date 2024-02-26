import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactEnquiries = () => {
  return (
    <section className="widget">
      <h3 className="title">All Enquiries</h3>
      <p className="tel">
        <FontAwesomeIcon icon={faPhone} /> Tel: +8801712345678
      </p>
      <p className="email">
        <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
        <a href="mailto:enquires@website.com">enquires@website.com</a>
      </p>
    </section>
  );
};

export default ContactEnquiries;

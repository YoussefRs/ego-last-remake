import React from "react";

const ContactMap = () => {
  return (
    <article className="map-section">
      <h3 className="title">How to find us</h3>
      <div className="gmap-wrapper rounded-lg" id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.9276634288926!2d14.494693911245983!3d35.89978727240288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45350aa172b7%3A0xa5cebcd7fd5a51f9!2sCredence!5e0!3m2!1sen!2stn!4v1709112136650!5m2!1sen!2stn"
          width="600"
          height="450"
          style={{border: 0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </article>
  );
};

export default ContactMap;

import React from "react";

const ContactMap = () => {
  return (
    <article className="map-section">
      <h3 className="title">How to find us</h3>
      <div className="gmap-wrapper rounded-lg" id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.2148132394937!2d90.84106331543484!3d22.942314625078904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754c1717878878d%3A0x8ac10f5067f9560c!2sShyamoli%20Ideal%20Engineering%20College!5e0!3m2!1sen!2sbd!4v1674388100357!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </article>
  );
};

export default ContactMap;

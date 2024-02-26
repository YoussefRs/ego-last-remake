import React from "react";

const ContactForm = () => {
  return (
    <article className="contact-form col-lg-8 col-md-7 col-12 page-row">
      <h3 className="title">Get in touch</h3>
      <p>
        We’d love to hear from you. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam ut erat magna. Aliquam porta sem a lacus
        imperdiet posuere. Integer semper eget ligula id eleifend.{" "}
      </p>
      <form>
        <div className="form-group name mb-3">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control rounded-lg"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group email mb-3">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="form-control rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group phone mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            className="form-control rounded-lg"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="form-group message mb-3">
          <label htmlFor="message">
            Message<span className="required">*</span>
          </label>
          <textarea
            id="message"
            className="form-control rounded-lg"
            rows="6"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-danger rounded">
          Send message
        </button>
      </form>
    </article>
  );
};

export default ContactForm;

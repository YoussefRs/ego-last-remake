import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../../assets/images/slides/slide-4.jpg";

const AboutWelcome = () => {
  return (
    <article className="welcome col-lg-8 col-md-7 col-12">
      <h3 className="title">Welcome to Shyamoli Engineering University</h3>
      <p>
        <img className="img-fluid rounded-lg" src={img1} alt="" />
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis
        urna lectus, a euismod metus facilisis sed. Aliquam tristique sapien et
        tincidunt semper. Mauris ornare, turpis ac molestie molestie, erat nisi
        placerat ipsum, sit amet imperdiet ipsum lacus eu orci. Suspendisse
        euismod mollis nibh eu rhoncus.
      </p>
      <ul className="custom-list-style">
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Lorem ipsum dolor sit ame
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Curabitur elit elit
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Nunc tincidunt ipsum a risus
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Integer vitae nisi a odio
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
          Suspendisse bibendum tempor
        </li>
      </ul>

      <blockquote className="custom-quote">
        <p>
          Viverra magna pellentesque in magnis gravida sit augue felis vehicula
          vestibulum semper penatibus justo ornare semper Gravida felis platea
          arcu mus non. Montes at posuere. Natoque.
        </p>
        <p className="people">
          <span className="name">Principal M. A. Sattar</span>
          <br />
          <span className="title">
            Founder & Chairman, Principal M. A. Sattar Trust
          </span>
        </p>
      </blockquote>
      <p>
        Morbi semper. Hac euismod bibendum odio sed sociosqu primis magna
        suscipit facilisi litora viverra eget nibh praesent vehicula luctus
        Integer nostra ac duis metus orci. Vehicula praesent dolor quam montes
        fames risus interdum. Tortor lacinia sem aenean sit tellus montes velit
        ultricies leo eget felis mollis quam. Non odio leo tempus condimentum.
        Neque. Potenti ornare sapien diam hymenaeos conubia ac. Euismod,
        venenatis Vulputate sodales morbi aliquet sollicitudin.
      </p>
    </article>
  );
};

export default AboutWelcome;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../../assets/images/1709110968814.jpg";

const AboutWelcome = () => {
  return (
    <article className="welcome col-lg-8 col-md-7 col-12">
      <h3 className="title">Welcome to Ego Education</h3>
      <p>
        <img className="img-fluid rounded-lg" src={img1} alt="" />
      </p>
      <p>
        The International E-Learning Institute Ltd (IELI) is a company
        established since October 23rd, 2017 in Malta, by deed C83113, created
        by a decennial experience of its founders in the field of university
        education.
      </p>
      {/* <ul className="custom-list-style">
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
      </ul> */}

      <blockquote className="custom-quote">
        <p>
          With the new eGO brand, Ieli intends to initiate this
          internationalization process through highly specialized, innovative
          and professionalizing courses for active employment research.
        </p>
        <p className="people">
          <span className="name">Principal: Mr.Agostino Daniele Pallotta</span>
          <br />
          <span className="title">Founder & Chairman: Mr.Ernesto Pallotta</span>
        </p>
      </blockquote>
      <p>
        Nowadays, IELI’s activities reflect those inherited by the Main Force
        brand. Thus acquiring an important know-how in the field of distance
        education and university internationalization on behalf of different
        Italian universities. With more than 5,000 students enrolled through our
        network, we have guaranteed constant support during their training: from
        orientation to enrollment procedures, from technical support to study
        assistance.
      </p>
    </article>
  );
};

export default AboutWelcome;

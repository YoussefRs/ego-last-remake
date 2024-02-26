import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const FaqAccordion = ({ question, answer }) => {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">
          <a
            className="card-toggle hov_pointer"
            onClick={() => {
              setFaqOpen(!faqOpen);
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} />
            <span className="ms-2">{question}</span>
          </a>
        </h4>
      </div>
      <div className={`card-answer ${faqOpen ? "open" : ""}`}>
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
};

export default FaqAccordion;

import React from "react";

const PromoWidget = ({ value, requirement }) => {
  return (
    <p className="promo-badge">
      <a className="FireBush">
        <span className="percentage">
          {value} <span className="off">OFF</span>
        </span>
        <br />
        <span className="desc">{requirement}</span>
      </a>
    </p>
  );
};

export default PromoWidget;

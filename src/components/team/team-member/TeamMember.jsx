import React from "react";

const TeamMember = ({ image, name, title, description }) => {
  return (
    <div className="row page-row">
      <figure className="thumb col-lg-3 col-4">
        <img className="img-fluid rounded" src={image} alt={name} />
      </figure>
      <div className="details col-lg-9 col-8">
        <h3 className="title">{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;

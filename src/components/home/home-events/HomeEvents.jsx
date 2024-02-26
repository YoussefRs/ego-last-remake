import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useEvents from "../../../hooks/useEvents";
import { Link } from "react-router-dom";

const HomeEvents = () => {
  const recentEvents = useEvents({ type: "recent", param: 4 });
  return (
    <div className="col-lg-3 col-12">
      <section className="events rounded shadow">
        <h1 className="section-heading text-highlight">
          <span className="line">Events</span>
        </h1>
        <div className="section-content">
          {recentEvents.map((evnt) => (
            <div className="event-item" key={evnt.id}>
              <p className="date-label">
                <span className="month">{evnt.month}</span>
                <span className="date-number">{evnt.date}</span>
              </p>
              <div className="details">
                <h2 className="title">{evnt.title}</h2>
                <p className="time">
                  <FontAwesomeIcon icon={faClock} />
                  {evnt.time}
                </p>
                <p className="location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {evnt.location}
                </p>
              </div>
            </div>
          ))}
          <Link className="read-more" to={"/events"}>
            All events
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeEvents;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HomeEvents = () => {
  // todo change a tags into Link
  return (
    <div className="col-lg-3 col-12">
      <section className="events rounded shadow">
        <h1 className="section-heading text-highlight">
          <span className="line">Events</span>
        </h1>
        <div className="section-content">
          <div className="event-item">
            <p className="date-label">
              <span className="month">FEB</span>
              <span className="date-number">18</span>
            </p>
            <div className="details">
              <h2 className="title">Open Day</h2>
              <p className="time">
                <FontAwesomeIcon icon={faClock} />
                10:00am - 18:00pm
              </p>
              <p className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Lakshmipur Campus
              </p>
            </div>
          </div>
          <div className="event-item">
            <p className="date-label">
              <span className="month">SEP</span>
              <span className="date-number">06</span>
            </p>
            <div className="details">
              <h2 className="title">E-learning at SEU</h2>
              <p className="time">
                <FontAwesomeIcon icon={faClock} />
                10:00am - 16:00pm
              </p>
              <p className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                SEU Learning Center
              </p>
            </div>
          </div>
          <div className="event-item">
            <p className="date-label">
              <span className="month">JUN</span>
              <span className="date-number">23</span>
            </p>
            <div className="details">
              <h2 className="title">Career Fair</h2>
              <p className="time">
                <FontAwesomeIcon icon={faClock} />
                09:45am - 16:00pm
              </p>
              <p className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                SEU Library
              </p>
            </div>
          </div>
          <div className="event-item">
            <p className="date-label">
              <span className="month">May</span>
              <span className="date-number">17</span>
            </p>
            <div className="details">
              <h2 className="title">Science Seminar</h2>
              <p className="time">
                <FontAwesomeIcon icon={faClock} />
                14:00pm - 18:00pm
              </p>
              <p className="location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                SEU Library
              </p>
            </div>
          </div>
          {/* here */}
          <a className="read-more" href="events.html">
            All events
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeEvents;

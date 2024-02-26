import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import useEvents from "../../../hooks/useEvents";

const UpcomingEventsWidget = () => {
  const upcomingEvents = useEvents({ type: "recent", param: 4 });
  return (
    <section className="widget has-divider">
      <h3 className="title">Upcoming Events</h3>
      {upcomingEvents.map((event) => (
        <article key={event.id} className="events-item row page-row">
          <div className="date-label-wrapper col-lg-3 col-4">
            <p className="date-label rounded">
              <span className="month">{event.month}</span>
              <span className="date-number">{event.date}</span>
            </p>
          </div>
          <div className="details col-lg-9 col-8">
            <h5 className="title">{event.title}</h5>
            <p className="time text-muted">
              <FontAwesomeIcon icon={faClock} /> {event.time}
              <br />
              <FontAwesomeIcon icon={faCalendarAlt} /> {event.location}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default UpcomingEventsWidget;

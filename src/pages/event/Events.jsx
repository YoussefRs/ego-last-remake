import React from "react";
import VideoTourWidget from "../../components/widgets/video-tour-widget/VideoTourWidget";
import SubHeader from "../../components/global/sub-header/SubHeader";
import useEvents from "../../hooks/useEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Events = () => {
  const eventsData = useEvents({ type: "all" });
  return (
    <div class="content container">
      <div class="page-wrapper">
        <SubHeader
          title={"Events"}
          path={[{ url: "/", label: "Home" }]}
          current={"Events"}
        />
        <div class="page-content">
          <div class="row page-row">
            <div class="events-wrapper col-lg-8 col-md-7 col-12">
              {eventsData.map((evnt) => (
                <article
                  class="events-item row page-row has-divider clearfix"
                  key={evnt.id}
                >
                  <div class="date-label-wrapper col-lg-1 col-md-2 col-12">
                    <p class="date-label">
                      <span class="month">{evnt.month}</span>
                      <span class="date-number">{evnt.date}</span>
                    </p>
                  </div>
                  <div class="details col-lg-11 col-md-10 col-12">
                    <h3 class="title">{evnt.title}</h3>
                    <p class="meta">
                      <span class="time">
                        <FontAwesomeIcon icon={faClock} />
                        {evnt.time}
                      </span>
                      <span class="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <Link>{evnt.location}</Link>
                      </span>
                    </p>
                    <p class="desc">{evnt.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside class="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              <VideoTourWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

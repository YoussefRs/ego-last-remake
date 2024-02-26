import React from "react";
import SubHeader from "../../components/global/sub-header/SubHeader";
import UpcomingEventsWidget from "../../components/widgets/upcoming-events-widget/UpcomingEventsWidget";

import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useNews from "../../hooks/useNews";

const News = () => {
  const newsData = useNews({ type: "all" });
  return (
    <div class="content container">
      <div class="page-wrapper">
        <SubHeader
          title={"News"}
          path={[{ url: "/", label: "Home" }]}
          current={"News"}
        />
        <div class="page-content">
          <div class="row page-row">
            <div class="news-wrapper col-lg-8 col-md-7">
              {newsData.map((el) => (
                <article
                  className="news-item page-row has-divider clearfix row"
                  key={el.id}
                >
                  <figure className="thumb col-lg-2 col-md-3 col-4">
                    <img className="img-fluid rounded" src={el.image} alt="" />
                  </figure>
                  <div className="details col-lg-10 col-md-9 col-8">
                    <h3 className="title">
                      <Link to={`/news/${el.id}`}>{el.title}</Link>
                    </h3>
                    <p>{el.summary}</p>
                    <Link
                      className="btn btn-theme read-more"
                      to={`/news/${el.id}`}
                    >
                      Read more <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <aside class="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              <UpcomingEventsWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

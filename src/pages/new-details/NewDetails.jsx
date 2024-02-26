import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useNews from "../../hooks/useNews";
import SubHeader from "../../components/global/sub-header/SubHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import OtherNewsWidget from "../../components/widgets/other-news-widget/OtherNewsWidget";
import UpcomingEventsWidget from "../../components/widgets/upcoming-events-widget/UpcomingEventsWidget";

const NewDetails = () => {
  const [item, setItem] = useState();
  const [itemId, setItemId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const parts = path.split("/");
    setItemId(parts[2]);
  }, [location]);

  useEffect(() => {
    if (itemId) {
      const res = useNews({ type: "byId", param: itemId });
      setItem(res);
    }
  }, [itemId]);

  if (!item) {
    return;
  }
  return (
    <div class="content container">
      <div class="page-wrapper">
        <SubHeader
          title={item.title}
          path={[
            { url: "/", label: "Home" },
            { url: "/news", label: "News" },
          ]}
          current={item.title.split(" ")[0]}
        />
        <div class="page-content">
          <div class="row page-row">
            <div class="news-wrapper col-lg-8 col-md-7 col-12">
              <article class="news-item">
                <p class="meta text-muted">
                  By: <Link>{item.author} </Link> | Posted on: {item.postedDate}
                </p>
                <p class="featured-image">
                  <img class="img-fluid new-img" src={item.image} alt="" />
                </p>
                {item.articles.map((itm, i) => (
                  <p key={i}>{itm}</p>
                ))}
                <p class="box">
                  {item.summary}
                  <br />
                  <Link to={item.additionalLink.url}>
                    {item.additionalLink.label}
                  </Link>
                </p>
              </article>
            </div>
            <aside class="page-sidebar col-lg-3 offset-lg-1 col-md-4 offset-md-1 col-12">
              <OtherNewsWidget toIgnore={itemId} />
              <UpcomingEventsWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetails;

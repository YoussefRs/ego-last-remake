import React from "react";
import { Link } from "react-router-dom";
import useNews from "../../../hooks/useNews";

const OtherNewsWidget = ({ toIgnore }) => {
  const newsData = useNews({ type: "random", param: toIgnore });
  console.log(newsData);
  return (
    <section className="widget has-divider">
      <h3 className="title">Other News</h3>
      {newsData.map((itm) => (
        <article className="news-item row" key={itm.id}>
          <figure className="thumb col-xl-2 col-3">
            <img src={itm.image} alt="" />
          </figure>
          <div className="details col-xl-10 col-9">
            <h4 className="title">
              <Link to={`/news/${itm.id}`}>{itm.title}</Link>
            </h4>
          </div>
        </article>
      ))}
    </section>
  );
};

export default OtherNewsWidget;

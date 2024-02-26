import React from "react";

const LatestNewsWidget = ({ news }) => {
  return (
    <section className="widget has-divider">
      <h3 className="title">Latest News</h3>
      {news.map((item, index) => (
        <article key={index} className="news-item row">
          <figure className="thumb col-xl-2 col-3">
            <img className="rounded-pill" src={item.thumb} alt="" />
          </figure>
          <div className="details col-xl-10 col-9">
            <h4 className="title">
              <a href="news-single.html">{item.title}</a>
            </h4>
          </div>
        </article>
      ))}
    </section>
  );
};

export default LatestNewsWidget;

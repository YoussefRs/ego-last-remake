import React from "react";

const VideoTourWidget = () => {
  return (
    <section className="widget has-divider">
      <h3 className="title">Video tour</h3>
      <div className="ratio ratio-16x9 rounded">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cIhh1Yh0V_w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoTourWidget;

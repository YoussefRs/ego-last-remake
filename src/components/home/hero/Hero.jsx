import React from "react";
import IntroVideo from "../../../assets/video/finalIntro.mp4";

export default function Hero() {
  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-background" className="videoo">
        <source src={IntroVideo} type="video/mp4" />
      </video>
    </div>
  );
}

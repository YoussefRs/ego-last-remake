import React from "react";
import AboutHeader from "../../components/about/about-header/AboutHeader";
import AboutWelcome from "../../components/about/about-welcome/AboutWelcome";
import AboutJobVacancies from "../../components/about/about-job-vacancies/AboutJobVacancies";
import AboutVideoTour from "../../components/about/about-video-tour/AboutVideoTour";
import AboutContact from "../../components/about/about-contact/AboutContact";

const About = () => {
  return (
    <div class="content container">
      <div class="page-wrapper">
        <AboutHeader />
        <div class="page-content">
          <div class="row page-row">
            <AboutWelcome />
            <aside class="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              <AboutJobVacancies />
              <AboutVideoTour />
              <AboutContact />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

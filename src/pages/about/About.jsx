import React from "react";  
import AboutWelcome from "../../components/about/about-welcome/AboutWelcome";
import withHelmet from "../../hoc/withHelmet.jsx";
import SubHeader from "../../components/global/sub-header/SubHeader.jsx";
import ContactWidget from "../../components/widgets/contact-widget/ContactWidget.jsx";
import useJobs from "../../hooks/useJobs.js";
import JobsOtherWidget from "../../components/widgets/jobs-other-widget/JobsOtherWidget.jsx";
import VideoTourWidget from "../../components/widgets/video-tour-widget/VideoTourWidget.jsx";

const About = () => {
  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={"About"}
          path={[{ url: "/", label: "Home" }]}
          current={"About"}
        />
        <div className="page-content">
          <div className="row page-row">
            <AboutWelcome />
            <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              {/* <JobsOtherWidget
                jobs={useJobs({ type: "random" })}
              /> */}
              <VideoTourWidget />
              <ContactWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withHelmet(About);
// export default About;

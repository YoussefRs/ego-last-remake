import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SubHeader from "../../components/global/sub-header/SubHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import useCourse from "../../hooks/useCourse";
import ApplyWidget from "../../components/widgets/apply-widget/ApplyWidget";
import EnquireWidget from "../../components/widgets/enquire-widget/EnquireWidget";
import PromoWidget from "../../components/widgets/promo-widget/PromoWidget";

const CourseDetails = () => {
  const [course, setCourse] = useState();
  const [courseId, setCourseId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const parts = path.split("/");
    setCourseId(parts[2]);
  }, [location]);

  useEffect(() => {
    if (courseId) {
      const res = useCourse({ type: "byId", param: courseId });
      setCourse(res);
    }
  }, [courseId]);

  if (!course) {
    return;
  }
  
  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={course.name}
          path={[
            { url: "/", label: "Home" },
            { url: "/courses", label: "Courses" },
          ]}
          current={course.name.split(" ")[0]}
        />
      </div>
      <div className="page-content">
        <div className="row page-row">
          {/* <div className="course-wrapper col-lg-8 col-md-7">
            <article className="course-item">
              {course.media.type === "video" ? (
                <div className="embed-responsive embed-responsive-16by9 mb-4 rounded">
                  <iframe
                    className="embed-responsive-item"
                    width="750"
                    height="422"
                    src={course.media.source}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              ) : (
                <p className="featured-image page-row">
                  <img
                    className="img-fluid rounded-lg"
                    src={course.media.source}
                    alt=""
                  />
                </p>
              )}

              <div className="page-row box box-border rounded">
                <ul className="list-unstyled no-margin-bottom">
                  <li>
                    <strong>
                      <FontAwesomeIcon icon={faCalendarAlt} /> Start Date:
                    </strong>{" "}
                    <em>{course.startDate}</em>
                  </li>
                  <li>
                    <strong>
                      <FontAwesomeIcon icon={faClock} /> Duration:
                    </strong>{" "}
                    <em>{course.duration}</em>
                  </li>
                  <li>
                    <strong>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:
                    </strong>{" "}
                    <em>{course.location}</em>
                  </li>
                </ul>
              </div>
              <div className="page-row mt-3">
                <p>{course.description}</p>
              </div>
            </article>
          </div>
          <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
            <div className="mb-3">
              <ApplyWidget />
            </div>
            <EnquireWidget />
          </aside> */}
          <section class="ban_sec">
		<div class="container p-0">
			<div class="ban_img">
	<img src={course.media.source} alt="banner" border="0" />
				<div class="ban_text">
					<strong>
						<span>Meeting current</span><br /> needs now
					</strong>
					<p>You can prioritize a child’s mental, emotional, <br />
						behavioral, and physical health </p>
					<a href="#">Lend a hand</a>
				</div>
			</div>
		</div>
	</section>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

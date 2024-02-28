import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCourse from "../../hooks/useCourse";

import ApplyWidget from "../../components/widgets/apply-widget/ApplyWidget";
import SubHeader from "../../components/global/sub-header/SubHeader";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  const coursesSomeData = useCourse({
    type: "byProperties",
    param: ["name", "thumb", "id", "institute", "degree"],
  });
  const [activePane, setActivePane] = useState("our_courses");
  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={"Departments"}
          path={[{ url: "/", label: "Home" }]}
          current={"Courses"}
        />
        <div className="page-content">
          <div className="row page-row">
            <div className="courses-wrapper col-lg-8 col-md-8 col-12">
              <div className="featured-courses tabbed-info page-row">
                <ul className="nav nav-tabs">
                  <li
                    className="nav-item"
                    onClick={() => {
                      setActivePane("our_courses");
                    }}
                  >
                    <Link
                      className={`nav-link ${
                        activePane === "our_courses" ? "active" : ""
                      }`}
                    >
                      Our Courses
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setActivePane("Featured");
                    }}
                  >
                    <Link
                      className={`nav-link ${
                        activePane === "Featured" ? "active" : ""
                      }`}
                    >
                      Featured
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane ${
                      activePane === "Featured" ? "active" : ""
                    }`}
                    id="tab1"
                  >
                    <div className="row">
                      <p
                        className="col-12 fw-bold h4"
                        style={{ color: "#046635" }}
                      >
                        Bachelor Degree
                      </p>
                      {coursesSomeData
                        .filter(
                          (course) =>
                            course.institute === "Pegaso" &&
                            course.degree === "Bachelor Degree"
                        )
                        .map((crs) => (
                          <div className="item col-lg-3 col-6" key={crs.id}>
                            <img
                              className="img-fluid rounded courses-img"
                              src={crs.thumb}
                              alt=""
                            />
                            <p className="text-start">
                              <Link to={`/course/${crs.id}`}>
                                <FontAwesomeIcon
                                  icon={faGraduationCap}
                                  className="me-1"
                                />
                                {crs.name}
                              </Link>
                            </p>
                          </div>
                        ))}
                    </div>
                    <div className="row">
                      <p
                        className="col-12 fw-bold h4"
                        style={{ color: "#046635" }}
                      >
                        Master Degree
                      </p>
                      {coursesSomeData
                        .filter(
                          (course) =>
                            course.institute === "Pegaso" &&
                            course.degree === "Master Degree"
                        )
                        .map((crs) => (
                          <div className="item col-lg-3 col-6" key={crs.id}>
                            <img
                              className="img-fluid rounded courses-img"
                              src={crs.thumb}
                              alt=""
                            />
                            <p className="text-start">
                              <Link to={`/course/${crs.id}`}>
                                <FontAwesomeIcon
                                  icon={faGraduationCap}
                                  className="me-1"
                                />
                                {crs.name}
                              </Link>
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${
                      activePane === "our_courses" ? "active" : ""
                    }`}
                    id="tab2"
                  >
                    <div className="row">
                      <p
                        className="col-12 fw-bold h4"
                        style={{ color: "#046635" }}
                      >
                        Master Degree
                      </p>
                      {coursesSomeData
                        .filter((course) => course.institute === "Ego")
                        .map((crs) => (
                          <div className="item col-lg-3 col-6" key={crs.id}>
                            <img
                              className="img-fluid rounded courses-img"
                              src={crs.thumb}
                              alt=""
                            />
                            <p className="text-start">
                              <Link to={`/course/${crs.id}`}>
                                <FontAwesomeIcon
                                  icon={faGraduationCap}
                                  className="me-1"
                                />
                                {crs.name}
                              </Link>
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              <div className="right_box">
                <div className="p-4">
                  <ApplyWidget />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

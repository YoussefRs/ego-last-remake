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
    param: ["name", "thumb", "id"],
  });
  const [activePane, setActivePane] = useState("Featured");
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
            <div className="courses-wrapper col-lg-8 col-md-7 col-12">
              <div className="featured-courses tabbed-info page-row">
                <ul className="nav nav-tabs">
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
                  <li
                    className="nav-item"
                    onClick={() => {
                      setActivePane("Popular");
                    }}
                  >
                    <Link
                      className={`nav-link ${
                        activePane === "Popular" ? "active" : ""
                      }`}
                    >
                      Popular
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setActivePane("New");
                    }}
                  >
                    <Link
                      className={`nav-link ${
                        activePane === "New" ? "active" : ""
                      }`}
                    >
                      New
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
                      {coursesSomeData.map((crs) => (
                        <div className="item col-lg-3 col-6" key={crs.id}>
                          <img
                            className="img-fluid rounded"
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
                      activePane === "Popular" ? "active" : ""
                    }`}
                    id="tab2"
                  >
                    <div className="row">
                      {coursesSomeData.map((crs) => (
                        <div className="item col-lg-3 col-6" key={crs.id}>
                          <img
                            className="img-fluid rounded"
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
                      activePane === "New" ? "active" : ""
                    }`}
                    id="tab3"
                  >
                    <div className="row">
                      {coursesSomeData.map((crs) => (
                        <div className="item col-lg-3 col-6" key={crs.id}>
                          <img
                            className="img-fluid rounded"
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
              <ApplyWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

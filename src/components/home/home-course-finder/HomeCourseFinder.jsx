import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import useCourse from "../../../hooks/useCourse";

const HomeCourseFinder = () => {
  const navigate = useNavigate();
  const courseNames = useCourse({
    type: "byProperties",
    param: ["name", "id"],
  });
  const [selectedCourse, setSelectedCourse] = useState();
  return (
    <section className="course-finder rounded shadow">
      <h1 className="section-heading text-highlight">
        <span className="line">Find Content</span>
      </h1>
      <div className="section-content">
        <form className="course-finder-form" action="#" method="get">
          <div className="row">
            <div className="col-md-5 col-12 subject">
              <select
                className="form-control form-select subject rounded"
                onChange={(e) => {
                  setSelectedCourse(e.target.value);
                }}
              >
                <option value="">Find Content</option>
                {courseNames.map((crs) => (
                  <option value={crs.id} id={crs.id}>
                    {crs.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-7 col-12 keywords">
              <div className="d-flex">
                {/* <input
                  className="form-control float-left rounded-lg"
                  type="text"
                  placeholder="Search keywords"
                /> */}
                <button
                  type="submit"
                  className="_btn btn-theme rounded-lg course-btn"
                  onClick={() => {
                    navigate(`/course/${selectedCourse}`);
                  }}
                  disabled={!selectedCourse}
                >
                  {/* <FontAwesomeIcon icon={faSearch} /> */}
                  Go
                </button>
              </div>
            </div>
          </div>
        </form>
        <Link className="read-more" to={"/courses"}>
          View all our courses
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </section>
  );
};

export default HomeCourseFinder;

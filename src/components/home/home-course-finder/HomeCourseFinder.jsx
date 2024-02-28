import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import useCourse from "../../../hooks/useCourse";

const HomeCourseFinder = () => {
  const navigate = useNavigate();
  const courseNames = useCourse({
    type: "byProperties",
    param: ["name", "id", "institute", "degree"],
  });

  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleFirstSelectChange = (e) => {
    setSelectedInstitute(e.target.value);
    setSelectedProgram("");
    setSelectedCourse("");
  };

  const handleSecondSelectChange = (e) => {
    setSelectedProgram(e.target.value);
    setSelectedCourse("");
  };

  const handleGoButtonClick = () => {
    if (selectedCourse) {
      navigate(`/course/${selectedCourse}`);
    }
  };

  const filteredCourses = courseNames.filter(
    (course) =>
      (selectedInstitute === "ego" &&
        course.institute === "Ego" &&
        course.degree === "Master Degree") ||
      (selectedInstitute === "pegasso" &&
        course.institute === "Pegaso" &&
        (selectedProgram === "Master Degree" || course.degree === "Bachelor Degree"))
  );

  return (
    <section className="course-finder rounded shadow">
      <h1 className="section-heading text-highlight">
        <span className="line">Quick Search</span>
      </h1>
      <div className="section-content">
        <form className="course-finder-form" action="#" method="get">
          <div className="row">
            <div className="col-md col-12 subject">
              <select
                className="form-control form-select subject rounded"
                onChange={handleFirstSelectChange}
              >
                <option value="">Select Institute</option>
                <option value="ego">Ego</option>
                <option value="pegasso">Pegasso</option>
              </select>
            </div>
            <div className="col-md col-12 subject">
              <select
                className="form-control form-select subject rounded"
                onChange={handleSecondSelectChange}
                disabled={!selectedInstitute}
              >
                <option value="">Select Program</option>
                {selectedInstitute === "ego" && (
                  <option value="Master Degree">Master Degree</option>
                )}
                {selectedInstitute === "pegasso" && (
                  <>
                    <option value="Master Degree">Master Degree</option>
                    <option value="Bachelor Degree">Bachelor Degree</option>
                  </>
                )}
              </select>
            </div>
            <div className="col-md col-12 subject">
              <select
                className="form-control form-select subject rounded"
                onChange={(e) => setSelectedCourse(e.target.value)}
                value={selectedCourse}
                disabled={!selectedProgram}
              >
                <option value="">Select Course</option>
                {filteredCourses.map((crs) => (
                  <option key={crs.id} value={crs.id}>
                    {crs.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2 col-12 keywords">
              <button
                type="button"
                className="_btn btn-theme rounded-lg course-btn w-100"
                onClick={handleGoButtonClick}
                disabled={!selectedCourse}
              >
                Go
              </button>
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

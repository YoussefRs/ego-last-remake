import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HomeCourseFinder = () => {
  return (
    <section className="course-finder rounded shadow mb-4">
      <h1 className="section-heading text-highlight">
        <span className="line">Find Content</span>
      </h1>
      <div className="section-content">
        <form className="course-finder-form" action="#" method="get">
          <div className="row">
            <div className="col-md-5 col-12 subject">
              <select className="form-control form-select subject rounded">
                <option>content-1</option>
                <option>content-2</option>
                <option>content-3</option>
                <option>content-4</option>
                <option>content-5</option>
                <option>content-6</option>
                <option>content-7</option>
                <option>content-8</option>
                <option>content-9</option>
                <option>content-10</option>
              </select>
            </div>
            <div className="col-md-7 col-12 keywords">
              <div className="d-flex">
                <input
                  className="form-control float-left rounded-lg"
                  type="text"
                  placeholder="Search keywords"
                />
                <button
                  type="submit"
                  className="_btn btn-theme rounded-lg course-btn"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
        </form>
        <a className="read-more" href="courses.html">
          View all our courses
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
    </section>
  );
};

export default HomeCourseFinder;

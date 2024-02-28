import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SubHeader from "../../components/global/sub-header/SubHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCheck,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import useCourse from "../../hooks/useCourse";
import ApplyWidget from "../../components/widgets/apply-widget/ApplyWidget";
import EnquireWidget from "../../components/widgets/enquire-widget/EnquireWidget";
import PromoWidget from "../../components/widgets/promo-widget/PromoWidget";
import AboutWelcome from "../../components/about/about-welcome/AboutWelcome";

const CourseDetails = () => {
  const [course, setCourse] = useState();
  const [courseId, setCourseId] = useState(null);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("tabone");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

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
        <div className="row page-row gap-4">
          <section className="ban_sec">
            <div className="container p-0">
              <div className="ban_img">
                <img src={course.media.source} alt="banner" border="0" />
                <div className="ban_text">
                  <strong>
                    <span>{course.name} </span>
                    <br />
                  </strong>
                  <p>{course.slogan}</p>
                  <Link to={`/course/${course.id}/enrollment`}>Apply</Link>
                </div>
              </div>
            </div>
          </section>
          <div className="d-flex">
            <div className="tabs col">
              <input
                type="radio"
                name="tabs"
                id="tabone"
                checked={activeTab === "tabone"}
                onChange={() => handleTabChange("tabone")}
              />
              <label for="tabone">overview</label>
              <div className="tab">
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
                <article className="welcome col-lg-8 col-md-7 col-12">
                  <p>{course.description}</p>
                  <ul className="custom-list-style">
                    {course?.career?.map((carr, i) => (
                      <li key={i}>
                        <FontAwesomeIcon icon={faCheck} />
                        {carr}
                      </li>
                    ))}
                  </ul>

                  <ul>
                    <p>Entry Requirements:</p>

                    <li>
                      Minimum Level 6 qualification or equivalent in either
                      Computer Science, Electrical or Electronic Engineering,
                      Mathematics, Physics, related disciplines with
                      demonstrable exposure to programming and mathematics or
                      other alternative subjects related to data analysis, data
                      science or informatics, or a recognized equivalent
                      international
                    </li>
                    <li>qualification. IELTS 6.0 or equivalent</li>
                  </ul>
                </article>
              </div>

              <input
                type="radio"
                name="tabs"
                id="tabtwo"
                checked={activeTab === "tabtwo"}
                onChange={() => handleTabChange("tabtwo")}
              />
              <label for="tabtwo">Modules</label>
              <div className="tab">
                <ul>
                  <li>
                    <p>Basic Java</p>
                    <span>
                      Basic Java The module explores the fundamentals of Java
                      programming and Object Oriented programming The Basic Java
                      module provides students with a solid foundation in Java
                      programming, catering to both beginners and those with
                      limited prior experience in coding. Throughout this
                      module, students will embark on a journey to Master Degree
                      the essential concepts of Java, ultimately enabling them
                      to critically analyze code, understand object-oriented
                      programming principles, and construct basic Java
                      applications. 12 ECTS
                    </span>
                  </li>
                  <li>
                    <p>Advanced Java</p>
                    <span>
                      The module presents the techniques for good Java
                      programming, and the Java Framework API The Advanced Java
                      module is designed to empower students with a deeper
                      understanding of the Java programming language, equipping
                      them with the expertise needed to tackle complex software
                      projects and leverage Java's rich ecosystem effectively.
                      Throughout this module, students will Master Degree
                      advanced Java concepts and frameworks, enabling them to
                      critically analyze and apply their knowledge to real-world
                      software development scenarios. 12 ECTS
                    </span>
                  </li>
                  <li>
                    <p>DBMS and SQL</p>
                    <span>
                      The module defines the techniques for the data persistence
                      and for data access via the Structured Query Language The
                      DBMS and SQL module offers a comprehensive exploration of
                      Database Management Systems (DBMS) and Structured Query
                      Language (SQL). Designed for students pursuing a deeper
                      understanding of data management and database design, this
                      module equips them with the skills required to critically
                      analyze data relations, plan and implement databases on a
                      Relational Database Management System (RDBMS), and employ
                      advanced SQL commands effectively. 12 ECTS
                    </span>
                  </li>
                  <li>
                    <p>Access to Databases from Applications</p>
                    <span>
                      The module defines the techniques remote accesso to
                      persistent data from a Java application The Access to
                      Databases from Applications module offers students a
                      comprehensive exploration of the critical intersection
                      between application development and database management.
                      This module equips students with the skills and knowledge
                      required to effectively access, manipulate, and manage
                      data stored in Relational Database Management Systems
                      (RDBMS) from Java applications. Through this course,
                      students will gain a deep understanding of access control,
                      access control systems, and the use of the Java
                      Persistence API (JPA) framework. 12 ECTS
                    </span>
                  </li>
                  <li>
                    <p>Web Applications</p>
                    <span>
                      Module covers implementation of the full software web
                      application project, back-end, front- end and management
                      of third-party systems used for data persistence The Web
                      Applications module provides students with an in-depth
                      exploration of the technologies and principles behind
                      modern web development. Students will develop a profound
                      understanding of web application architecture, design
                      patterns, and the intricacies of web protocols. This
                      module equips them with the skills and critical knowledge
                      necessary to design, develop, and deploy web-based
                      software systems, with a specific focus on the J2EE
                      framework and the Java Spring Framework. 12 ECTS
                    </span>
                  </li>
                  <li>
                    <p>Research Methods 6 ECTS</p>
                  </li>
                  <li>
                    <p>Dissertation</p>
                    <span>
                      The dissertation is a compulsory element of Master Degree
                      of Science in Java Programming. Dissertation is based on a
                      major piece of work that involves applying material
                      encountered in the taught component of the degree, and
                      extending that knowledge with the student's contribution,
                      under the guidance of a supervisor. This component of the
                      Master Degree’s degree provides an opportunity for
                      students to pursue a single topic in depth and to
                      demonstrate evidence of research ability at a Master
                      Degrees level. The topic is typically a current problem in
                      the broad area of their MSc programme. The dissertation
                      usually involves experimental or theoretical research, or
                      a substantial literature survey on a specific topic. 24
                      ECTS
                    </span>
                  </li>
                </ul>
              </div>

              <input
                type="radio"
                name="tabs"
                id="tabthree"
                checked={activeTab === "tabthree"}
                onChange={() => handleTabChange("tabthree")}
              />
              <label for="tabthree">Instructor</label>
              <div className="tab">
                <h1>Tab Three Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-3 home_content_right">
              {/* <div className="mb-3">
                <ApplyWidget />
              </div>
              <EnquireWidget /> */}
              <div className="right_box">
                <div className="mb-3 p-4">
                  <ApplyWidget />
                  <EnquireWidget />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

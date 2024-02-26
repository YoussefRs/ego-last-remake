import React, { useState } from "react";

import logo from "../../../assets/images/ego.png";
import {
  faPhone,
  faEnvelope,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCourse from "../../../hooks/useCourse";

const NavbarTwo = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const courseNames = useCourse({
    type: "byProperties",
    param: ["name", "id"],
  });
  return (
    <>
      <header className="header">
        <div className="header-main container">
          <div className="row">
            <h1 className="logo col-md-4 col-12">
              <Link to={"/"}>
                <img id="logo" src={logo} alt="Logo" />
              </Link>
            </h1>
            <div className="info col-md-8 col-12">
              <ul className="menu-top float-right d-none d-md-block">
                <li className="divider">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="divider">
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
              <br />
              <div className="contact float-right mt-4 d-flex justify-content-end">
                <p className="phone">
                  <FontAwesomeIcon icon={faPhone} />
                  Call Us +8801712345678
                </p>
                <p className="email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <Link to={"/contact"}>info@ego-education.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-nav-wrapper">
        <div className="container d-flex">
          <nav className="main-nav navbar navbar-expand-md" role="navigation">
            <button
              className="navbar-toggler collapsed"
              type="button"
              onClick={handleNavCollapse}
            >
              <span className="sr-only"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbar-collapse"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown-1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Departments <FontAwesomeIcon icon={faAngleDown} />
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown-1"
                  >
                    <Link className="dropdown-item" to="/courses">
                      All Departments
                    </Link>
                    {courseNames.map((crs) => (
                      <Link className="dropdown-item" to={`/course/${crs.id}`}>
                        {crs.name}
                      </Link>
                    ))}
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages <FontAwesomeIcon icon={faAngleDown} />
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/about">
                      About
                    </Link>
                    <Link className="dropdown-item" to="/team">
                      Leadership Team
                    </Link>
                    <Link className="dropdown-item" to="/jobs">
                      Jobs
                    </Link>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                    <Link className="dropdown-item" to="/privacy">
                      Privacy Policy
                    </Link>
                    <Link className="dropdown-item" to="/terms">
                      Terms & Conditions
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <marquee>
            "
            <span className="text-danger">
              {" "}
              শ্যামলী ইঞ্জিনিয়ারিং ইউনিভার্সিটি{" "}
            </span>
            " হলো বাংলাদেশে স্বনামধন্য একটি প্রাইভেট বিশ্ববিদ্যালয়। এটি বাংলাদেশ
            কারিগরি শিক্ষা অধিদপ্তরের আওতায় ও অধ্যক্ষ এম. এ. সাত্তার ট্রাস্ট
            কতৃপক্ষে পরিচালিত ও নিয়ন্ত্রিত। আমাদের প্রতিষ্ঠানে খুবই মনোরম
            পরিবেশে বিশ্বমানের শিক্ষকমন্ডলী দ্বারা শিক্ষার্থীদেরকে পাঠ-দ্বান করা
            হয়। আমাদের বিশ্ববিদ্যালয়ে এবছর অনলাইন ভর্তি আবেদনে রয়েছে{" "}
            <span className="text-warning">২০% ছাড়!</span> তাছাড়া শিক্ষার্থীদের
            ফ্রি যাতায়াত সহ রয়েছে নানাবিধ সুযোগ সুবিধার ব্যাবস্থা। তাই দেরি না
            করে আজই যোগাযোগ করুন আমাদের সাথে।
          </marquee>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;

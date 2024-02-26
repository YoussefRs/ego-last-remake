import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logoWhite2 from "../../../assets/images/logo-ego-white-2.png";
import { Link } from "react-router-dom";

const SideMenu = ({ show, handleShow }) => {
  return (
    <menu
      id="menu"
      className="side_menu"
      style={{ right: show ? 0 : "-400px" }}
    >
      <a
        className="close"
        onClick={() => {
          handleShow((prev) => !prev);
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </a>
      <strong className="fixed_flex logo">
        <img src={logoWhite2} alt="Summit" loading="lazy" />
      </strong>
      <br />
      <ul className="p-0">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">All Departments</a>
          <aside>
            <a href="#">example</a>
            <a href="#">example</a>
          </aside>
        </li>
        <li>
          <a href="#">E-Portal</a>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="fixed_flex">
          <a href="javascript:void(0)" className="_btn btn_1 chat_popup">
            SignUp/LogIn
          </a>
          <a href="#" className="_btn btn_2 chat_popup">
            Admission
          </a>
        </li>
      </ul>
    </menu>
  );
};

export default SideMenu;

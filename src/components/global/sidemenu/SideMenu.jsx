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
          <Link>Home</Link>
        </li>
        <li className="dropdown">
          <Link>All Departments</Link>
          <aside>
            <Link>example</Link>
            <Link>example</Link>
          </aside>
        </li>
        <li>
          <Link>E-Portal</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="fixed_flex">
          <Link className="_btn btn_1 chat_popup">SignUp/LogIn</Link>
          <Link className="_btn btn_2 chat_popup">Admission</Link>
        </li>
      </ul>
    </menu>
  );
};

export default SideMenu;

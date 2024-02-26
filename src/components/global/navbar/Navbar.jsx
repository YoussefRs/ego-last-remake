import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../../assets/images/logo-ego-white.png";
import { Link } from "react-router-dom";

export default function Navbar({ show }) {
  const navRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        navRef.current &&
        (document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80)
      ) {
        navRef.current.classList.add("fixed_nav");
      } else if (navRef.current) {
        navRef.current.classList.remove("fixed_nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <section className="flex_content">
        <figure className="logo fixed_flex">
          <Link to={"/"} className="p-0">
            <img src={logoWhite} alt="white logo" />
          </Link>
        </figure>
      </section>
      {/* <nav className="flex_content nav_content" id="nav_content">
        <a href="#" className="active">Home</a>
        <a href="#gallery">All Departments</a>
        <a href="#blogs">E-Portal</a>
        <a href="javascript:void(0)" className="contact_btn">Contact us</a>
        <a href="#about">About us</a>
        
        
    </nav> */}
      <section className="flex_content">
        <a
          className="ham"
          onClick={() => {
            show((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </section>
    </nav>
  );
}

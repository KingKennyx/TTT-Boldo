import React from "react";
import "./mobileNav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import { VscPerson } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState("#Home");
  return (
    <nav className="mobile-nav">
      <a
        href="#Home"
        onClick={() => setActiveNav("#Home")}
        className={activeNav === "#Home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#Services"
        onClick={() => setActiveNav("#Services")}
        className={activeNav === "#Services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#Testimonials"
        onClick={() => setActiveNav("#Testimonials")}
        className={activeNav === "#Testimonials" ? "active" : ""}
      >
        <VscPerson />
      </a>
      {/* <a
        href="#Info"
        onClick={() => setActiveNav("#Clients")}
        className={activeNav === "#Clients" ? "active" : ""}
      >
        <AiOutlineInfoCircle />
      </a>
      <a
        href="#Blog"
        onClick={() => setActiveNav("#Blog")}
        className={activeNav === "#Blog" ? "active" : ""}
      >
        <FaBloggerB />
      </a> */}
      <a
        href="#Contact"
        onClick={() => setActiveNav("#Contact")}
        className={activeNav === "#Contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default MobileNav;

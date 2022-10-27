import React from "react";
import "./navbar.css";
import LOGO from "../../assets/LogoShape1.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={LOGO} alt="" /> Boldo
          </div>
          <div className="nav-contents">
            <ul>
              <li>
                <a href="">Product</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <button>Log In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

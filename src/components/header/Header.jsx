import React from "react";
import "./header.css";
import LOGO1 from "../../assets/Logo1.png";
import LOGO2 from "../../assets/noun.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <div className="container header-container">
            <div className="header-lhs">
              <h2>
                Save time by building <br /> fast with Boldo Template{" "}
              </h2>
              <p>
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <div className="header-buttons">
                <button className="header-btn1">Buy template</button>
                <button className="header-btn2">Explore</button>
              </div>
            </div>
            <div className="header-rhs"></div>
          </div>
          <div className="logos-bar container">
            <div>
              <img src={LOGO1} alt="" /> Boldo
            </div>
            <div>
              <img src={LOGO2} alt="" /> Presto
            </div>
            <div>
              <img src={LOGO1} alt="" /> Boldo
            </div>
            <div>
              <img src={LOGO2} alt="" /> Presto
            </div>
            <div>
              <img src={LOGO1} alt="" /> Boldo
            </div>
            <div>
              <img src={LOGO2} alt="" /> Presto
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import "./header.css";
import LOGO1 from "../../assets/Logo1.png";
import LOGO2 from "../../assets/noun.png";
import HEADERIMG1 from "../../assets/header-img1.png";
import GROUP from "../../assets/Group255.png";
import GROUP2 from "../../assets/Group270.png";
import HEADERBAR from "../../assets/header-pie.png";
import HEADERPIE from "../../assets/PieGraph2.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="ellipse"></div>
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
            <div className="header-rhs">
              <div className="header-rhs-top-">
                <img src={HEADERIMG1} alt="" />
              </div>
              <div className="header-rhs-bottom-">
                <div className="header-bar">
                  <img src={GROUP} alt="" className="group-header" />
                  <img src={HEADERBAR} alt="" />
                </div>
                <div className="header-pie">
                  <img src={GROUP} alt="" className="group-header" />
                  <div className="group-2">
                    <img src={HEADERPIE} alt="" />
                    <img src={GROUP2} alt="" className="group-2-img-2" />
                  </div>
                </div>
              </div>
            </div>
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

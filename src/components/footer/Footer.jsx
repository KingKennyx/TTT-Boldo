import React from "react";
import "./footer.css";
import FOOTERLOGO from "../../assets/footer-logo.png";

const Footer = () => {
  return (
    <>
      <section className="container">
        <div className="footer-container">
          <div className="footer-lhs">
            <div className="footer-lhs-head">
              <img src={FOOTERLOGO} alt="" />
              <h3>Boldo</h3>
            </div>
            <div className="footer-lhs-body">
              <p>
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>
            <div className="footer-lhs-foot">
              <small>All rights reserved. </small>
            </div>
          </div>
          <div className="footer-rhs">
            <div className="footer-rhs-item1">
              <h3>Landings</h3>
              <span>Home</span>
              <span>Products</span>
              <span>Services</span>
            </div>
            <div className="footer-rhs-item1">
              <h3>Company</h3>
              <span>Home</span>
              <span>
                Careers <button>Hiring!</button>
              </span>
              <span>Services</span>
            </div>
            <div className="footer-rhs-item1">
              <h3>Resources</h3>
              <span>Blog</span>
              <span>Products</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

import React from "react";
import "./about.css";
import MAN from "../../assets/man1.png";
import WOMAN from "../../assets/woman1.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FiFeather } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import BAR from "../../assets/Graphs/graph-2.png";
import PIE from "../../assets/Graphs/GraphicContent.png";

const About = () => {
  return (
    <>
      <section className="container">
        <div className="about-container">
          <div className="about-con-1">
            <div className="about-lhs-1">
              <img src={MAN} alt="" />
              <div className="about-lhs-1-div">
                <img src={BAR} alt="" />
              </div>
            </div>
            <div className="about-rhs-1">
              <h2>
                We connect our customers <br /> with the best, and help them
                <br /> keep up-and stay open.
              </h2>
              <ul>
                <li>
                  <IoCheckmarkCircle /> We connect our customers with the best.
                </li>
                <li>
                  <IoCheckmarkCircle /> Advisor success customer launch party.
                </li>
                <li>
                  <IoCheckmarkCircle /> Business-to-consumer long tail.
                </li>
              </ul>
              <button>Start now</button>
            </div>
          </div>
          <div className="about-con-2">
            <div className="about-lhs-2">
              <h2>
                We connect our customers <br /> with the best, and help them
                <br /> keep up-and stay open.
              </h2>
              <div className="about-con-2-blocks">
                <div className="about-con-2-block-1">
                  <FiFeather /> &nbsp;&nbsp;&nbsp;&nbsp;We connect our customers
                  with the best.
                </div>
                <div className="about-con-2-block-2">
                  <AiOutlineEye /> &nbsp;&nbsp;&nbsp;&nbsp; Advisor success
                  customer launch party.
                </div>
                <div className="about-con-2-block-3">
                  <FiSun /> &nbsp;&nbsp;&nbsp;&nbsp; Business-to-consumer long
                  tail.
                </div>
              </div>
            </div>
            <div className="about-rhs-2">
              <img src={WOMAN} alt="" />
              <div className="about-rhs-2-div">
                <img src={PIE} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

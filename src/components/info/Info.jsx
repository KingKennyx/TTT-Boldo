import React from "react";
import "./info.css";
import INFO from "../../assets/info-img.png";

const Info = () => {
  return (
    <>
      <div className="container ">
        <div className="info-container">
          <div className="info-img">
            <img src={INFO} alt="" />
          </div>
          <div className="info-sec">
            <div className="info-sec-head">
              <h3>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h3>
            </div>
            <div className="info-sec-blocks">
              <div>We connect our customers with the best?</div>
              <div>Android research & development rockstar?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

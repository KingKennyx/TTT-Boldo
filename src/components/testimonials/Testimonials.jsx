import React from "react";
import "./testimonials.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CLIENTIMG1 from "../../assets/client-img1.png";
import CLIENTIMG2 from "../../assets/client-img2.png";
import CLIENTIMG3 from "../../assets/client-img3.png";

const data = [
  {
    id: 1,
    quote:
      "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    clientName: "Albus Dumbledore",
    image: CLIENTIMG1,
    position: "Manager @ Hogwarts",
  },
  {
    id: 2,
    quote:
      "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    clientName: "Severus Snape",
    image: CLIENTIMG2,
    position: "Manager @ Slytherin",
  },
  {
    id: 3,
    quote:
      "“Release facebook responsive web design business model canvas seed money monetization.”",
    clientName: "Harry Potter",
    image: CLIENTIMG3,
    position: "Team Leader @ Gryffindor",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="testimonials" id="Testimonials">
        <div className="container testimonials-container">
          <div className="testimonial-heading">
            <h2>
              An enterprise template to ramp <br /> up your company website
            </h2>
            <div className="arrows">
              <div className="arrow1">
                <AiOutlineArrowLeft id="arrow-icon" />
              </div>
              <div className="arrow1">
                <AiOutlineArrowRight id="arrow-icon" />
              </div>
            </div>
          </div>
          <div className="comments-section">
            {data.map(({ id, quote, clientName, image, position }) => {
              return (
                <article key={id} className="testimonial-item">
                  <p>{quote}</p>
                  <div className="profile-item">
                    <img src={image} alt="" />
                    <div className="profile-details">
                      <h5>{clientName}</h5>
                      <span>{position}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

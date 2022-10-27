import React from "react";
import "./services.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import IMG1 from "../../assets/Rectangle-1270.png";
import IMG2 from "../../assets/Rectangle-127.png";
import IMG3 from "../../assets/Rectangle-12.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Cool feature title",
    desc: "Learning curve network effects return on investment.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Even cooler feature",
    desc: "Learning curve network effects return on investment.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cool feature title",
    desc: "Learning curve network effects return on investment.",
  },
];

const Services = () => {
  return (
    <>
      <section className="container">
        <section className="services">
          <div className="services-heading">
            <h5>Our Services</h5>
            <h3>
              Handshake infographic mass market <br /> crowdfunding iteration.
            </h3>
          </div>
          <div className="services-options">
            {data.map(({ id, image, title, desc }) => {
              return (
                <article key={id} className="services-option">
                  <div className="services-option-img">
                    <img src={image} alt="" />
                  </div>
                  <div className="services-option-content">
                    <h3>{title}</h3>
                    <span>{desc}</span>
                  </div>
                  <button>
                    Explore Page <AiOutlineArrowRight />
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;

import React from "react";
import "./blog.css";
import BLOGIMG1 from "../../assets/blog-img1.png";
import BLOGIMG2 from "../../assets/blog-img2.png";
import BLOGIMG3 from "../../assets/blog-img3.png";
import CLIENTIMG1 from "../../assets/chandler.png";
import CLIENTIMG2 from "../../assets/rachel.png";
import CLIENTIMG3 from "../../assets/monica.png";

const data = [
  {
    id: 1,
    blogImage: BLOGIMG1,
    details: "Pitch termsheet backing validation focus release.",
    clientImage: CLIENTIMG1,
    clientName: "Chandler Bing",
  },
  {
    id: 2,
    blogImage: BLOGIMG2,
    details:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    clientImage: CLIENTIMG2,
    clientName: "Rachel Green",
  },
  {
    id: 3,
    blogImage: BLOGIMG3,
    details:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    clientImage: CLIENTIMG3,
    clientName: "Monica Geller",
  },
];

const Blog = () => {
  return (
    <>
      <section className="container" id="Blog">
        <div className="blog-container">
          <div className="blog-heading">
            <h5>Our Blog</h5>
            <h2>Value proposition accelerator product management venture</h2>
          </div>
          <div className="blog-blocks">
            {data.map(({ id, blogImage, details, clientImage, clientName }) => {
              return (
                <article key={id} className="blog-item">
                  <div className="blog-item-img">
                    <img src={blogImage} alt="" />
                  </div>
                  <div className="blog-details">
                    <div className="biss">
                      <span>Category</span>
                      <small>November 22, 2021</small>
                    </div>
                    <div className="blog-info">
                      <p>{details}</p>
                    </div>
                    <div className="blog-client-profile">
                      <img src={clientImage} alt="" />
                      <small>{clientName}</small>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="load-more-btn">
            <button>Load more</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

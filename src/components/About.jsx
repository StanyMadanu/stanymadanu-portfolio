import React from "react";
import Image1 from "../images/1.png";

const About = () => {
  return (
    <div id="about" className="py-2 py-lg-6 my-5 my-lg-6">
      <div className="container">
        <h1 className="text-uppercase text-center heading-font mb-5">
          About <span className="primary-color">me</span>
        </h1>
        <div className="row justify-content-between align-items-center row-gap-2">
          <div className="col-xl-4 col-lg-4 col-md-4 col-12">
            <div className="hero-image">
              <img src={Image1} alt="programming" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-12">
            {/* <h1 className="text-uppercase heading-font">
              <span className="primary-color">professional</span> web developer
            </h1> */}
            <p className="my-4">
              I’m a Professional
              <span className="primary-color text-uppercase ps-1">
                Frontend Web Developer
              </span>{" "}
              with a strong focus on building responsive, user-friendly websites
              and web applications. I am dedicated to writing clean, efficient
              code and creating seamless user experiences. My goal is to
              transform ideas into functional and visually appealing digital
              products, and I’m always learning new technologies to improve my
              craft.
            </p>
            <p>Skills</p>
            <ul>
              <li>
                HTML, CSS, JavaScript, React, Redux, Git, Responsive Design,
                UI/UX, Web Performance Optimization and Photoshop
              </li>
            </ul>
            <div className="mt-5 ">
              <a href="#contact">
                <button>contact me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

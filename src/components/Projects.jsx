import React from "react";
import pImage1 from "../images/p11.png";
import pImage2 from "../images/p12.png";
import pImage3 from "../images/p13.png";
import pImage4 from "../images/p14.png";
import p21 from "../images/p21.png";
import p22 from "../images/p22.png";
import p23 from "../images/p23.png";
import p24 from "../images/p24.png";
import p31 from "../images/p31.png";
import p32 from "../images/p32.png";
import p33 from "../images/p33.png";
import p34 from "../images/p34.png";

import CustomCarousel from "./common/CustomCarousel";

const Projects = () => {
  const project1 = [pImage1, pImage2, pImage3, pImage4];
  const project2 = [p21, p22, p23, p24];
  const project3 = [p31, p32, p33, p34];

  return (
    <div id="projects" className="py-2 py-lg-6 my-5 my-lg-6">
      <div className="container">
        <h1 className="text-uppercase text-center heading-font mb-5">
          my <span className="primary-color">projects</span>
        </h1>
        <div className="row align-items-center justify-content-center row-gap-2">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body text-center">
                <div className="projects-imgs mb-4">
                  <CustomCarousel images={project1} id="project1" />
                </div>
                <h6 className="primary-color text-uppercase">
                  top wallet{" "}
                  <span className="badge bg-success text-capitalize fs-13 ms-2">
                    live
                  </span>
                </h6>

                <p className="my-4 text-start">
                  Developed at Codegene, Top Wallet is a financial management
                  app that helps users manage money, pay bills, track digital
                  assets, and grow investments. It provides an intuitive
                  platform for managing income and expenses, all from the
                  convenience of a mobile device.
                </p>
                <p className="text-start fs-15">
                  <span className="pt-2 text-capitalize">
                    Technologies used:{" "}
                  </span>
                  <em className="fw-semibold text-info">
                    React, Bootstrap 5, HTML5, CSS3
                  </em>
                </p>
                <div className="text-end mt-5">
                  <a href="https://topwallet.ph/" target="/blank">
                    <button>visit site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body text-center">
                <div className="projects-imgs mb-4">
                  <CustomCarousel images={project2} id="project2" />
                </div>

                <h6 className="text-uppercase primary-color">
                  Trading bot{" "}
                  <span className="badge bg-success text-capitalize fs-13 ms-2">
                    live
                  </span>
                </h6>
                <p className="my-4 text-start">
                  Created at Codegene, this Trading Bot automates cryptocurrency
                  trading. It analyzes market data and executes trades on behalf
                  of users, making crypto trading easier and more efficient,
                  even for those with minimal experience.
                </p>
                <p className="text-start fs-15">
                  <span className="pt-2 text-capitalize">
                    Technologies used:{" "}
                  </span>
                  <em className="fw-semibold font-italic text-info">
                    React, Bootstrap 5, HTML5, CSS3
                  </em>
                </p>
                <div className="text-end mt-5">
                  <a href="https://trading-bot-ca852.web.app/" target="/blank">
                    <button>visit site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body text-center">
                <div className="projects-imgs mb-4">
                  <CustomCarousel images={project3} id="project3" />
                </div>
                <h6 className="primary-color text-uppercase">
                  swiggy clone{" "}
                  <span className="badge bg-warning text-capitalize fs-13 ms-2">
                    personal
                  </span>
                </h6>
                <p className="my-4 text-start">
                  A personal project where I developed a Swiggy Clone — an
                  on-demand food delivery app. This project replicates the core
                  features of Swiggy, including order management and real-time
                  delivery tracking, showcasing my skills in building
                  full-fledged applications.
                </p>
                <p className="text-start fs-15">
                  <span className="pt-2 text-capitalize">
                    Technologies used:
                  </span>
                  <em className="fw-semibold text-info">
                    React, Redux, Tailwind, HTML5, CSS3
                  </em>
                </p>
                <div className="text-end mt-5">
                  <a href="https://swiggy-mirror.web.app/" target="/blank">
                    <button>visit site</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import pImage1 from "../images/p11.png";

const Projects = () => {
  return (
    <div id="projects" className="d-flex align-items-center">
      <div className="container">
        <h1 className="text-uppercase text-center">
          my <span className="primary-color">projects</span>
        </h1>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body text-center">
                <div className="projects-imgs">
                  {/* <img className="img-fluid" src={pImage1} alt="project-img" /> */}

                  <>
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide"
                      data-bs-ride="true"
                    >
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          class="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="3"
                          aria-label="Slide 4"
                        ></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src={pImage1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                          <img src={pImage1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                          <img src={pImage1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                          <img src={pImage1} class="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </>
                </div>

                <h6>TOP WALLET</h6>
                <p className="my-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  blanditiis dolore unde dicta ratione aut beatae esse illo
                  aliquid consequuntur?
                </p>
                <button>visit site</button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body text-center">
                <img src="" alt="project-img" />
                <h6>project title</h6>
                <p className="my-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  blanditiis dolore unde dicta ratione aut beatae esse illo
                  aliquid consequuntur?
                </p>
                <button>visit site</button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body text-center">
                <img src="" alt="project-img" />
                <h6>project title</h6>
                <p className="my-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  blanditiis dolore unde dicta ratione aut beatae esse illo
                  aliquid consequuntur?
                </p>
                <button>visit site</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

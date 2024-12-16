import React from "react";
import Image1 from "../images/1.png";

const HeroSection = () => {
  return (
    <section id="herosection" className="d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <h1 className="text-capitalize">I'm stany madanu</h1>
            <h1 className="text-capitalize primary-color mt-3">
              Web Developer
            </h1>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              suscipit laborum esse, nostrum error rem perspiciatis. Odit unde
              sit sapiente.
            </p>
            <button className="mt-4">
              <a
                href="https://wa.me/6303101569?text=Hello%20Stany,%20I%20would%20like%20to%20contact%20you"
                target="/blank"
                className="text-dark"
              >
                whatsapp me
              </a>
            </button>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 col-12">
            <div className="hero-image">
              <img src={Image1} alt="programming" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

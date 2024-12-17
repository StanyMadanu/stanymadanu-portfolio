import React from "react";
import Image1 from "../images/1.png";

const HeroSection = () => {
  return (
    <section id="herosection" className="py-2 py-lg-6 my-5 my-lg-6">
      <div className="container">
        <div className="row justify-content-between row-gap-2 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <h1 className="text-capitalize heading-font">
              Hi, I'm stany madanu
            </h1>
            <h1 className="text-capitalize primary-color mt-3 heading-font mt-4">
              Web Developer
            </h1>
            <p className="my-4">
              I create clean, responsive websites and web apps that are easy to
              use and look great. With a focus on performance and design, I turn
              ideas into functional digital experiences. Let's work together to
              build something amazing!
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

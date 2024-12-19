import React, { useEffect, useRef } from "react";
import Image1 from "../images/1.png";
import { Typed } from "react-typed";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

const HeroSection = () => {
  const el = useRef(null); // Create a reference for the text element
  const typed = useRef(null); // Store the Typed instance

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Web Developer", "Blogger"],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.current.destroy(); // Destroy Typed instance during cleanup to prevent memory leaks
    };
  }, []);

  return (
    <section id="herosection" className="py-2 py-lg-6 my-5 my-lg-6">
      <div className="container">
        <div className="row justify-content-between row-gap-2 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <h5 className="custom-font">Hello, I'm</h5>
            <h1 className="text-capitalize custom-font mb-0">stany madanu</h1>
            <h1 className="mt-3  mt-4 ">
              And I'm a <span className="primary-color" ref={el}></span>
            </h1>

            <p className="my-4">
              I create clean, responsive websites and web apps that are easy to
              use and look great. With a focus on performance and design, I turn
              ideas into functional digital experiences. Let's work together to
              build something amazing!
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <button className="mt-4 bg-success">
                <a
                  href="https://wa.me/916303101569?text=Hello%20Stany,%20I%20would%20like%20to%20contact%20you"
                  target="/blank"
                  className="d-flex align-items-center gap-1"
                >
                  <span className="text-capitalize">whatsapp me</span>
                  <span className="pb-1">
                    <RiWhatsappFill size={20} />
                  </span>
                </a>
              </button>
              <button className="mt-4">
                <a
                  href="#contact"
                  className="text-dark d-flex align-items-center gap-1"
                >
                  <span>Contact me</span>
                  <span className="pb-1">
                    <IoMdMail size={20} />
                  </span>
                </a>
              </button>
            </div>
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

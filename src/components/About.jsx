import React from "react";
import Image1 from "../images/1.png";

const About = () => {
  return (
    <div id="about" className="d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-4 col-12">
            <div className="hero-image">
              <img src={Image1} alt="programming" className="img-fluid" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-12">
            <h1 className="text-uppercase">
              <span className="primary-color">professional</span> web developer
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nihil error molestiae earum, laboriosam tempora quidem amet
              suscipit ipsam harum enim! Esse mollitia rerum modi dolore
              deserunt eos iure saepe sunt omnis, quas, ullam voluptatem
              pariatur animi perspiciatis. Incidunt, iste reiciendis pariatur
              explicabo ipsam fugit. Facilis incidunt similique rerum unde in
              adipisci alias. Accusantium, iste deserunt ducimus dolorum eos
              earum quasi voluptatem recusandae, doloribus dignissimos esse!
              Voluptatum, sit sunt eum, perferendis aspernatur sint voluptate,
              suscipit voluptas aliquid vero provident cupiditate.
            </p>
            <a href="#contact">
              <button>contact me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

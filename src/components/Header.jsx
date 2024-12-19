import React, { useEffect, useState } from "react";
import mycv from "../images/myresume.pdf";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-md navbar-dark bg-dark px-3 header ${
          isSticky ? "header-sticky" : ""
        }`}
      >
        <a className="navbar-brand custom-font" href="#">
          Port
          <span className="primary-color">folio</span>
        </a>
        <div className="d-inline d-md-none ms-auto me-3">
          <button className="fs-14">
            <a href={mycv} download="Stany-CV.pdf">
              Download CV
            </a>
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex justify-content-between w-100 align-items-center">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="d-none d-md-block">
            <button className="fs-14">
              <a href={mycv} download="Stany-CV.pdf">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

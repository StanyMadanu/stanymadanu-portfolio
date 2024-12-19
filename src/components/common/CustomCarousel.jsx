import React from "react";

const CustomCarousel = ({ images, id }) => {
  return (
    <>
      <div id={id} className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={`${index === 0 ? "active" : ""}`}
              aria-current={`${index === 0 ? "true" : ""}`}
              aria-label={index + 1}
            ></button>
          ))}
        </div>
        <div className="carousel-inner rounded">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 1 ? "active" : ""}`}
            >
              <img src={img} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CustomCarousel;

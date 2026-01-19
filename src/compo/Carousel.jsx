
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const Carousel = () => {
  const navigate = useNavigate();

  return (
    <div
      id="mainCarousel"
      className="carousel slide custom-carousel shadow-lg"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
            className="d-block w-100 carousel-img"
            alt="Software Development"
          />
          <div className="carousel-caption">
            <h2 className="animate-title">Master Software Development</h2>
            <p className="animate-text">
              Learn the latest technologies with hands-on projects.
            </p>
            <button
              className="btn btn-warning fw-bold px-4 py-2"
              onClick={() => navigate("/inq")}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop"
            className="d-block w-100 carousel-img"
            alt="Corporate Training"
          />
          <div className="carousel-caption text-start" style={{ left: "10%" }}>
            <h2 className="animate-title text-white">Corporate Training</h2>
            <p className="animate-text">
              Boost your team's productivity with expert guidance.
            </p>
            <button
              className="btn btn-primary fw-bold px-4 py-2"
              onClick={() => navigate("/ours")}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
            className="d-block w-100 carousel-img"
            alt="Career Success"
          />
          <div className="carousel-caption">
            <h2 className="animate-title">100% Placement Assistance</h2>
            <p className="animate-text">
              Join thousands of students placed in top MNCs.
            </p>
            <button
              className="btn btn-success fw-bold px-4 py-2"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;



import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-primary text-light py-5 text-center">
        <div className="container animate__animated animate__fadeInDown">
          <h1 className="fw-bold">Build Your Career With Us</h1>
          <p className="lead">
            Learn industry-ready skills with real-time projects & expert mentors
          </p>

          {/* 🔥 Apply Button */}
          <button
            className="btn btn-light btn-lg mt-3"
            onClick={() => navigate("/inq")}
          >
            Apply For Admission
          </button>
        </div>
      </div>

      <div className="container my-5">
        {/* ABOUT */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <img
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
              className="img-fluid rounded shadow"
              alt="About"
            />
          </div>

          <div className="col-md-6 animate__animated animate__fadeInRight">
            <h3 className="fw-bold text-primary">Who We Are</h3>
            <p className="text-secondary">
              We are a professional training institute focused on providing
              high-quality technical education. Our courses are designed to
              bridge the gap between academics and industry requirements.
            </p>
            <p className="text-secondary">
              We believe in practical learning, hands-on projects, and
              personalized mentorship to ensure student success.
            </p>
          </div>
        </div>

        {/* COURSES */}
        <h3 className="text-center fw-bold mb-4 animate__animated animate__fadeInUp">
          Our Popular Courses
        </h3>

        <div className="row text-center">
          {[
            "Java Full Stack Development",
            "Spring Boot & Microservices",
            "React JS & Frontend",
            "Python Programming",
            "Web Development",
            "Database & MySQL"
          ].map((course, index) => (
            <div
              className="col-md-4 mb-4 animate__animated animate__zoomIn"
              key={index}
            >
              <div className="card shadow h-100 border-0">
                <div className="card-body">
                  <h5 className="fw-bold text-primary">{course}</h5>
                  <p className="text-muted">
                    Industry-oriented curriculum with live project experience.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WHY US */}
        <h3 className="text-center fw-bold mt-5 mb-4 animate__animated animate__fadeInUp">
          Why Students Choose Us
        </h3>

        <div className="row">
          {[
            "Live Project Based Learning",
            "Experienced Industry Trainers",
            "100% Practical Approach",
            "Placement & Interview Support",
            "Career Guidance & Mentorship",
            "Certification Assistance"
          ].map((point, index) => (
            <div
              className="col-md-4 mb-4 animate__animated animate__fadeInUp"
              key={index}
            >
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <h6 className="fw-bold">{point}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-dark text-light py-5 text-center">
        <div className="container animate__animated animate__pulse">
          <h2 className="fw-bold">Ready to Start Your Career?</h2>
          <p className="mb-4">
            Take the first step towards a successful IT career. Limited seats
            available!
          </p>

          {/* 🔥 CTA Buttons */}
          <button
            className="btn btn-warning btn-lg me-3"
            onClick={() => navigate("/inq")}
          >
            Get Admission Now
          </button>

          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;


import React from "react";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Header */}
      <div className="bg-dark text-light py-5 text-center">
        <div className="container animate__animated animate__fadeInDown">
          <h1 className="fw-bold">Our Services</h1>
          <p className="lead">
            Professional IT Training & Career-Oriented Services
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container my-5">
        <div className="row">

          {/* Online IT Training */}
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
            <div className="card shadow h-100 border-0">
              <img
                src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4766.jpg"
                className="card-img-top"
                alt="Online Training"
              />
              <div className="card-body">
                <h5 className="fw-bold text-primary">Online IT Training</h5>
                <p className="text-muted">
                  Live online classes with expert trainers, recorded sessions,
                  real-time projects, and flexible learning schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Classroom Training */}
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
            <div className="card shadow h-100 border-0">
              <img
                src="https://www.hindustaniexpress.in/wp-content/uploads/2024/07/Classroom-Training.jpeg"
                className="card-img-top"
                alt="Classroom Training"
              />
              <div className="card-body">
                <h5 className="fw-bold text-primary">Classroom Training</h5>
                <p className="text-muted">
                  In-person classroom training with practical labs, direct
                  interaction, and focused learning environment.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Training */}
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
            <div className="card shadow h-100 border-0">
              <img
                src="https://img.freepik.com/free-vector/business-training-concept-illustration_114360-1589.jpg"
                className="card-img-top"
                alt="Corporate Training"
              />
              <div className="card-body">
                <h5 className="fw-bold text-primary">Corporate Training</h5>
                <p className="text-muted">
                  Customized corporate programs designed to upskill teams as
                  per industry and organizational requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Internships */}
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
            <div className="card shadow h-100 border-0">
              <img
                src="https://img.freepik.com/free-vector/internship-concept-illustration_114360-4494.jpg"
                className="card-img-top"
                alt="Internships"
              />
              <div className="card-body">
                <h5 className="fw-bold text-primary">Internships</h5>
                <p className="text-muted">
                  Hands-on internship programs with live projects, mentorship,
                  certificates, and real industry exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Mock Interviews */}
          <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
            <div className="card shadow h-80 border-0">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.gD1TNGZW6M8qZwAuiDXF6wHaE2?pid=Api&P=0&h=180"
                className="card-img-top"
                alt="Mock Interview"
              />
              <div className="card-body">
                <h5 className="fw-bold text-primary">Mock Interviews</h5>
                <p className="text-muted">
                  Real interview simulations, technical + HR rounds, feedback,
                  and confidence building sessions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-light py-5 text-center">
        <div className="container animate__animated animate__pulse">
          <h2 className="fw-bold">Upgrade Your Skills With Us</h2>
          <p className="mb-4">
            Join our professional training programs and build a successful IT
            career.
          </p>

          {/* 🔥 Buttons with navigation */}
          <button
            className="btn btn-light btn-lg me-3"
            onClick={() => navigate("/inq")}
          >
            Enroll Now
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

export default OurServices;

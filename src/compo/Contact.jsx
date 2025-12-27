import React from "react";
 import "./Contact.css"

function Contact() {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="bg-dark text-light py-5 text-center">
        <div className="container animate__animated animate__fadeInDown">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead">
            We are here to guide you towards a successful IT career
          </p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="container my-5">
        <div className="row text-center">

          <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
            <div className="card shadow h-100 border-0">
              <div className="card-body">
                <h5 className="fw-bold text-primary">📍 Address</h5>
                <p className="text-muted">
                 Office No 301, 3rd Floor, Krishnai Plaza,<br />
                  above Dominos Pizza, Karve Nagar,<br />
                  Pune, Maharashtra 411052
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
            <div className="card shadow h-100 border-0">
              <div className="card-body">
                <h5 className="fw-bold text-primary">📞 Contact</h5>
                <p className="text-muted mb-1">+91 98765 43210</p>
                <p className="text-muted">+91 91234 56789</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 animate__animated animate__fadeInUp">
            <div className="card shadow h-100 border-0">
              <div className="card-body">
                <h5 className="fw-bold text-primary">✉ Email</h5>
                <p className="text-muted">info@irisesoft.com</p>
                <p className="text-muted">support@irisesoft.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 animate__animated animate__fadeInUp">
            Our Leadership & Team
          </h2>

          <div className="row text-center">

            {/* FOUNDER */}
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
              <div className="card shadow h-100 border-0">
                <img
                  src="/images/founder.jpeg"   // 👉 इथे Samdechya Founder image टाक
                  className="card-img-top"
                  alt="Founder"
                />
                <div className="card-body">
                  <h5 className="fw-bold">Founder & Director</h5>
                  <p className="text-muted">
                    Visionary leader with years of industry & training experience.
                  </p>
                </div>
              </div>
            </div>

            {/* HR */}
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
              <div className="card shadow h-100 border-0">
                <img
                  src="/images/hr.jpeg"   
                  className="card-img-top"
                  alt="HR"
                />
                <div className="card-body">
                  <h5 className="fw-bold">HR Manager</h5>
                  <p className="text-muted">
                    Handles placements, interviews & student career guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* TRAINER */}
            <div className="col-md-4 mb-4 animate__animated animate__zoomIn">
              <div className="card shadow h-100 border-0">
                <img
                  src="/images/trainer.jpeg"   // 👉 Trainer image
                  className="card-img-top"
                  alt="Trainer"
                />
                <div className="card-body">
                  <h5 className="fw-bold">Senior Trainer</h5>
                  <p className="text-muted">
                    Industry expert delivering practical & job-oriented training.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WORKING HOURS */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 animate__animated animate__fadeInUp">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h4 className="fw-bold text-primary">⏰ Working Hours</h4>
                <p className="text-muted mb-1">Monday – Saturday</p>
                <p className="text-muted">10:00 AM – 7:00 PM</p>
                <p className="text-muted fw-bold">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;



import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-4">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase mb-2">About Us</h5>
            <p className="small text-secondary">
              Empowering Your Career With Expert-Led Training, Practical Experience,
              And Personalized Support.
            </p>
          </div>

          {/* Address */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase mb-2">Address</h5>
            <p className="text-secondary mb-1">
              Office No 301, 3rd Floor, Krishnai Plaza,
            </p>
            <p className="text-secondary mb-1">
              Above Dominos Pizza, Karve Nagar, Pune
            </p>
            <p className="text-secondary">India</p>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase mb-2">Contact</h5>

            <p>
              <i className="bi bi-envelope-fill me-2 text-info"></i>
              bhiseyash77@gmail.com
            </p>

            <p>
              <i className="bi bi-telephone-fill me-2 text-success"></i>
              +91 87678 68731
            </p>

            <div className="d-flex gap-4">
              <a href="https://www.facebook.com/" className="social-icon text-primary fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/irise_software/" className="social-icon text-danger fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://telegram.org/" className="social-icon text-info fs-4">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small text-secondary">
          © 2025 <span className="fw-bold text-light"> I-Rise Software Training Institute</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;


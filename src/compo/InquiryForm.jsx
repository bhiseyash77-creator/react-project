
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./InquiryForm.css";

function InquiryForm() {
  const [inquiry, setInquiry] = useState({
    name: "",
    mobile: "",
    course: ""
  });

  const [errors, setErrors] = useState({});

  const courses = [
    "Java Full Stack",
    "Python Full Stack",
    "MERN Stack",
    "React JS",
    "Spring Boot",
    "Data Science"
  ];

  const handleChange = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!inquiry.name || inquiry.name.trim().length < 3) {
      err.name = "Name must be at least 3 characters";
    }

    if (!inquiry.mobile) {
      err.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(inquiry.mobile)) {
      err.mobile = "Mobile must be 10 digits";
    }

    if (!inquiry.course) {
      err.course = "Please select a course";
    }

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post("http://localhost:8787/api/inquiry", inquiry);
        alert("Inquiry Submitted Successfully");
        setInquiry({ name: "", mobile: "", course: "" });
      } catch (err) {
        alert(err.response?.data || "Inquiry already exists");
      }
    }
  };

  return (
    <div className="inquiry-section">

      {/* LEFT SIDE */}
      <motion.div
        className="inquiry-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Build Your Career With Us 🚀</h2>
        <p>
          Get trained by industry experts and become job-ready with
          real-time projects.
        </p>

        <ul>
          <li>✔ 100% Practical Training</li>
          <li>✔ Live Projects</li>
          <li>✔ Mock Interviews</li>
          <li>✔ Placement Assistance</li>
          <li>✔ Top IT Company Guidance</li>
        </ul>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="inquiry-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="card p-4 shadow inquiry-card"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-center mb-3">Inquiry Form</h3>

          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              name="name"
              placeholder="Enter Name"
              value={inquiry.name}
              onChange={handleChange}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}

            <input
              className={`form-control mt-3 ${errors.mobile ? "is-invalid" : ""}`}
              name="mobile"
              placeholder="Enter Mobile Number"
              value={inquiry.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <small className="text-danger">{errors.mobile}</small>
            )}

            <select
              className={`form-control mt-3 ${errors.course ? "is-invalid" : ""}`}
              name="course"
              value={inquiry.course}
              onChange={handleChange}
            >
              <option value="">-- Select Course --</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.course && (
              <small className="text-danger">{errors.course}</small>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-success w-100 mt-4"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InquiryForm;


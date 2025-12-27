
import React from "react";

import "./TopPlacedStudents.css"; 

function TopPlacedStudents() {
  
  const students = [
    { name: "Pawan vaidya", role: "QA Lead", company: "Accenture", package: "25 LPA", img: "/images/s9.jpeg" },
    { name: "Gauri pathak", role: "Software Engineer", company: "Google", package: "16 LPA", img: "/images/s1.jpeg" },
    { name: " Tohit", role: "Backend Developer", company: "Amazon", package: "16 LPA", img: "/images/s2.jpeg" },
    { name: "Samruddhi bobade", role: "Full Stack Developer", company: "Microsoft", package: "17 LPA", img: "/images/s3.jpeg" },
     { name: "Aishwarya", role: "DevOps Engineer", company: "Infosys", package: "17 LPA", img: "/images/s8.jpeg" },
    { name: "Geeta Bhagnwant", role: "Java Developer", company: "IBM", package: "16 LPA", img: "/images/s4.jpeg" },
    { name: "Payal Thakare", role: "Frontend Developer", company: "Meta", package: "17 LPA", img: "/images/s5.jpeg" },
    { name: "Sagar Zirmire", role: "Automation software testing", company: "paytm", package: "21 LPA", img: "/images/s13.jpeg" },
    { name: "Pranali kathar", role: "Data Engineer", company: "Oracle", package: "16 LPA", img: "/images/s7.jpeg" },
    { name: "Shilpan Dongre", role: "AI Engineer", company: "Tesla", package: "17", img: "/images/s10.jpeg" },
     { name: "Prashik Ingle", role: "AI Engineer", company: "ZOHO", package: "17", img: "/images/s11.jpeg" },
     { name: "Gaurav Wankhade", role: "Cloud Engineer", company: "AWS", package: "17", img: "/images/s12.jpeg" },
  ];

  return (
    <div>

      {/* Header */}
      <div className="header">
        <h1>Recent Top Placements</h1>
        <p>Over <b>8000+ students placed</b> in top MNCs with high salary packages</p>
      </div>

      {/* Stats */}
      <div className="container text-center my-4">
        <div className="row">
          <div className="col-md-4">
            <h2 className="text-primary">8000+</h2>
            <p className="text-muted">Students Placed</p>
          </div>
          <div className="col-md-4">
            <h2 className="text-primary">300+</h2>
            <p className="text-muted">Hiring Companies</p>
          </div>
          <div className="col-md-4">
            <h2 className="text-primary">45+ LPA</h2>
            <p className="text-muted">Highest Packages</p>
          </div>
        </div>
      </div>

      {/* Student Cards */}
      <div className="container my-5">
        <div className="row">
          {students.map((student, index) => (
            <div key={index} className="col-md-4 col-lg-3 mb-4">
              <div className="student-card">
                <img src={student.img} alt="student" className="student-img" />
                <div className="card-body">
                  <h5>{student.name}</h5>
                  <p className="role">{student.role}</p>
                  <p className="company">{student.company}</p>
                  <p className="package">Package: {student.package}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TopPlacedStudents;


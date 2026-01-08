
import React from "react";

import "./TopPlacedStudents.css"; 

function TopPlacedStudents() {
  
  const students = [
    { name: "Pawan vaidya", role: "QA Lead", company: "Accenture", package: "25 LPA", img: "/images/s9.jpeg" },
    { name: "Gauri pathak", role: "Software Engineer", company: "Google", package: "16 LPA", img: "/images/s1.jpeg" },
    { name: " Tohit", role: "Backend Developer", company: "Amazon", package: "16 LPA", img: "/images/s2.jpeg" },
    { name: "Samruddhi bobade", role: "Full Stack Developer", company: "Microsoft", package: "17 LPA", img: "/images/s3.jpeg" },
     { name: "Aishwarya", role: "DevOps Engineer", company: "Infosys", package: "17 LPA", img: "/images/s8.jpeg" },
    { name: "Geeta Bhagnwant", role: "Java Developer", company: "IBM", package: "16.50 LPA", img: "/images/s4.jpeg" },
    { name: "Payal Thakare", role: "Frontend Developer", company: "Meta", package: "17 LPA", img: "/images/s16.jpeg" },
    { name: "Sagar Zirmire", role: "Automation Test Engineer", company: "JP Morgan", package: "21 LPA", img: "/images/sagar.jpeg" },
    { name: "Pranali kathar", role: "Data Engineer", company: "Oracle", package: "16.50 LPA", img: "/images/s7.jpeg" },
    { name: "Shilpa Dongre", role: "AI Engineer", company: "Tesla", package: "17", img: "/images/s10.jpeg" },
     { name: "Prashik Ingle", role: "AI Engineer", company: "ZOHO", package: "17", img: "/images/s11.jpeg" },
     { name: "Gaurav Wankhade", role: "Cloud Engineer", company: "AWS", package: "17", img: "/images/s12.jpeg" },
     { name: "rahul gadhave", role: "Java Developer", company: "Google", package: "16.20", img: "/images/s14.jpeg" },
     { name: "vikas  jogdand", role: "java Developer", company: "zoho", package: "16", img: "/images/s15.jpeg" },
     { name: "Chetan More ", role: "java Developer", company: "Tesla", package: "16.50", img: "/images/chaitan.jpeg" },
      { name: "Nakul pawar ", role: "java Developer", company: "Oracle", package: "16.50", img: "/images/nakul.jpeg" },
       { name: "Rohit patil ", role: "Frontend Developer", company: "IBM", package: "17", img: "/images/Rohit.jpeg" },
  ];

  return (
    <div>

      {/* Header */}
     
<div className="header">
  <h1>Recent Top Placements</h1>
  <p>
    Over <b>8000+ students placed</b> in top MNCs with high salary packages
  </p>
</div>


<div className="container text-center my-2">
  <div className="row align-items-center">
    <div className="col-md-4">
      <h4 className="text-primary mb-1">8000+</h4>
      <p className="text-muted mb-0 small">Students Placed</p>
    </div>
    <div className="col-md-4">
      <h4 className="text-primary mb-1">300+</h4>
      <p className="text-muted mb-0 small">Hiring Companies</p>
    </div>
    <div className="col-md-4">
      <h4 className="text-primary mb-1">45+ LPA</h4>
      <p className="text-muted mb-0 small">Highest Packages</p>
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


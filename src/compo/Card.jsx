import React from 'react'
import { useNavigate } from "react-router-dom";


function Card() {
    const navigate = useNavigate();
  return (
    <div>
              
      {/* Courses Section */}
      <h2 className="text-center mb-4">Our Courses</h2>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.irisesoft.in/wp-content/uploads/2024/08/Java-Full-Stack-Development-01-1-scaled.jpg"
              className="card-img-top"
              alt="Java"
            />
            <div className="card-body">
              <h5 className="card-title">Java Full Stack Development</h5>
              <p className="card-text">
                Master Java Full Stack Development, including front-end, back-end, and database skills with practical, hands-on projects.
              </p>
              <button className="btn btn-primary"
              onClick={() => navigate("/card")}
              >View</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.irisesoft.in/wp-content/uploads/2024/08/Springboot-Training-01-01.jpg"
              className="card-img-top"
              alt="Spring Boot"
            />
            <div className="card-body">
              <h5 className="card-title">Spring Boot</h5>
              <p className="card-text">
                Master SpringBoot with training focused on building robust Java applications, including hands-on projects and advanced techniques.
              </p>
              <button className="btn btn-success"
              onClick={() => navigate("/card")}
              >View</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.irisesoft.in/wp-content/uploads/2024/08/React-JS-Training-01.jpg"
              className="card-img-top"
              alt="React"
            />
            <div className="card-body">
              <h5 className="card-title">React JS</h5>
              <p className="card-text">
                Master React JS with training focused on building dynamic user interfaces, components, and advanced React techniques.
              </p>
              <button className="btn btn-warning"
              onClick={() => navigate("/card")}
              >View</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.irisesoft.in/wp-content/uploads/2024/08/Manual-Software-Testing-01-1.jpg"
              className="card-img-top"
              alt="Manual Testing"
            />
            <div className="card-body">
              <h5 className="card-title">Manual Software Testing</h5>
              <p className="card-text">
                Learn Manual Software Testing techniques, including test case creation, execution, and defect management for quality assurance.
              </p>
              <button className="btn btn-danger"
              onClick={() => navigate("/card")}
              >View</button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.irisesoft.in/wp-content/uploads/2024/08/Automation-Software-Testing-01-1-scaled.jpg"
              className="card-img-top"
              alt="Automation Testing"
            />
            <div className="card-body">
              <h5 className="card-title">Automation Software Testing</h5>
              <p className="card-text">
                Automation Software Testing with training on tools, scripting, and techniques for efficient and effective testing.
              </p>
              <button className="btn btn-info"
              onClick={() => navigate("/card")}
              >View</button>
          
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://www.irisesoft.in/wp-content/uploads/2024/08/Python-Training-01-1-scaled.jpg"
              className="card-img-top"
              alt="Python"
            />
            <div className="card-body">
              <h5 className="card-title">Python Training</h5>
              <p className="card-text">
                Gain proficiency in Python with comprehensive training on basics, advanced concepts, and real-world applications.
              </p>
              <button className="btn btn-dark"
              onClick={() => navigate("/card")}
              
              >View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
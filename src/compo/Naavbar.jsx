

import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Naavbar({ isLogin, setIsLogin }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogin(false);   
    navigate("/");      
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand d-flex align-items-center" to="/">
    <img
  src="https://www.irisesoft.in/wp-content/uploads/2024/08/logo-irise-1-300x120.png"
  alt="MyApp Logo"
  height="60"
  
  // style={{
  //   width: "80px",
  //   backgroundColor: "white",
  //   padding: "4px",
  //   objectFit: "contain",
  //   borderRadius: "6px"
  // }}
  className="me-2"
/>


      </Link>

      <div>
        <Link className="btn btn-outline-light me-2" to="/">Home</Link>
        <Link className="btn btn-outline-light me-2" to="/About">Aboutus</Link>
        <Link className="btn btn-outline-light me-2" to="/ours">OurServices</Link>
        <Link className="btn btn-outline-light me-2" to="/place">TopPlacedStudents</Link>
        <Link className="btn btn-outline-light me-2" to="/contact">Contact</Link>

        {!isLogin && (
          <Link className="btn btn-outline-info" to="/login">Login</Link>
        )}

        {isLogin && (
          <>
            <Link className="btn btn-outline-success me-2" to="/add">Add Student</Link>
            <Link className="btn btn-outline-warning me-2" to="/pending">Pending</Link>
            <Link className="btn btn-outline-warning me-2" to="/students">View</Link>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Naavbar;

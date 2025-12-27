
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [owner, setOwner] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8787/api/register", owner);
      alert("Owner Registered Successfully");
      navigate("/login");
    } catch {
      alert("Error while registering owner");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h4 className="mb-3">Register Owner</h4>

      <input
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) =>
          setOwner({ ...owner, username: e.target.value })
        }
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e) =>
          setOwner({ ...owner, password: e.target.value })
        }
      />

      <button className="btn btn-success w-100" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;

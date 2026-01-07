

import axios from "axios";
import { useState } from "react";
import "./AdmissionForm.css";

export default function AdmissionForm() {
  const token = new URLSearchParams(window.location.search).get("token");
    const AdmissionForm = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

  const [form, setForm] = useState({
    name: "", email: "", mobile: "",
    course: "", college: "", education: "",
    passoutYear: "", address: "", utrNo: ""
    // , screenshot: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    if (e.target.name === "screenshot") setForm({...form, screenshot: e.target.files[0]});
    else setForm({...form, [e.target.name]: e.target.value});
  };

  const validateForm = () => {
    let e = {};
    if (!form.name.trim()) e.name="Name required";
    if (!form.email.trim()) e.email="Email required";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile="Invalid mobile";
    if (!form.course) e.course="Select course";
    if (!form.college) e.college="College required";
    if (!form.education) e.education="Education required";
    if (!form.passoutYear) e.passoutYear="Passout year required";
    if (!form.address) e.address="Address required";
    if (!form.utrNo) e.utrNo="UTR required";
    // if (!form.screenshot) e.screenshot="Payment screenshot required";
    // else if (form.screenshot.size > 10*1024*1024) e.screenshot="Max size 10MB";
    setErrors(e);
    return Object.keys(e).length===0;
  };

  const submit = async e => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    Object.entries(form).forEach(([k,v])=>data.append(k,v));
    data.append("qrToken", token);

    try {
      await AdmissionForm.post("/api/admission", data, {headers: {"Content-Type":"multipart/form-data"}});
      alert("Admission submitted successfully!");
      setForm({
        name:"", email:"", mobile:"", course:"",
        college:"", education:"", passoutYear:"",
        address:"", utrNo:""
        // , screenshot:null
      });
    } catch(err){
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <form className="admission-form" onSubmit={submit}>
      <h2>Admission Form</h2>
      <img src="/images/paymetscanner.jpeg" width="350" height="200" alt="QR"/>
      <h4>Scan QR & Pay → Upload Screenshot</h4>

      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange}/>
      {errors.name && <p className="error">{errors.name}</p>}

      <input name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
      {errors.email && <p className="error">{errors.email}</p>}

      <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange}/>
      {errors.mobile && <p className="error">{errors.mobile}</p>}

      <select name="course" value={form.course} onChange={handleChange}>
        <option value="">Select Course</option>
        <option>Java Full Stack</option>
        <option>Python Full Stack</option>
        <option>MERN Stack</option>
      </select>
      {errors.course && <p className="error">{errors.course}</p>}

      <input name="college" placeholder="College Name" value={form.college} onChange={handleChange}/>
      {errors.college && <p className="error">{errors.college}</p>}

      <input name="education" placeholder="Education (BSc/BE/Diploma)" value={form.education} onChange={handleChange}/>
      {errors.education && <p className="error">{errors.education}</p>}

      <input name="passoutYear" placeholder="Passout Year" value={form.passoutYear} onChange={handleChange}/>
      {errors.passoutYear && <p className="error">{errors.passoutYear}</p>}

      <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange}/>
      {errors.address && <p className="error">{errors.address}</p>}

      <input name="utrNo" placeholder="UTR / Transaction ID" value={form.utrNo} onChange={handleChange}/>
      {errors.utrNo && <p className="error">{errors.utrNo}</p>}

      {/* <input type="file" name="screenshot" accept="image/*" onChange={handleChange}/>
      {errors.screenshot && <p className="error">{errors.screenshot}</p>} */}

      <button type="submit">Submit</button>
    </form>
  );
}


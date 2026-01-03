
import axios from "axios";
import { useState } from "react";
import "./AdmissionForm.css";

export default function AdmissionForm() {
  const AdmissionForm = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
  const token = new URLSearchParams(window.location.search).get("token");

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    screenshot: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "screenshot") {
      setForm({ ...form, screenshot: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Mobile
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    // Screenshot
    if (!form.screenshot) {
      newErrors.screenshot = "Screenshot is required";
    } else if (!form.screenshot.type.startsWith("image/")) {
      newErrors.screenshot = "Only image files allowed";
    } else if (form.screenshot.size > 2 * 1024 * 1024) {
      newErrors.screenshot = "Image size must be less than 2MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("mobile", form.mobile);
    data.append("qrToken", token);
    data.append("screenshot", form.screenshot);

    try {
      await AdmissionForm.post("/api/admission", data);
      alert("Admission Submitted Successfully!");
      setForm({ name: "", email: "", mobile: "", screenshot: null });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <form className="admission-form" onSubmit={submit}>
      <h2>Admission Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={handleChange}
      />
      {errors.mobile && <p className="error">{errors.mobile}</p>}

      <input
        type="file"
        name="screenshot"
        accept="image/*"
        onChange={handleChange}
      />
      {errors.screenshot && <p className="error">{errors.screenshot}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

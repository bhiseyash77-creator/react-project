
// import React, { useState } from "react";
// import { add } from "../api/Service";

// function Add() {
//   const [student, setStudent] = useState({
//     name: "",
//     email: "",
//     course: "",
//     age: "",
//     gender: "",
//     address: "",
//     fees: "",
//     mobileNumber: "",
//     admissionDate: ""
//   });

//   const [errors, setErrors] = useState({});

//   const courses = [
//     "Java Full Stack",
//     "Python Full Stack",
//     "MERN Stack",
//     "Data Science",
//     "React JS",
//     "Spring Boot",
//     "Angular",
//     "DevOps",
//     "Software Testing"
//   ];

//   const handleChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let err = {};

//     if (!student.name || student.name.length < 3)
//       err.name = "Name must be at least 3 characters";

//     if (!student.email)
//       err.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(student.email))
//       err.email = "Invalid email format";

//     if (!student.course)
//       err.course = "Course is required";

//     if (!student.age)
//       err.age = "Age is required";
//     else if (student.age < 16 || student.age > 60)
//       err.age = "Age must be between 16 and 60";

//     if (!student.gender)
//       err.gender = "Please select gender";

//     if (!student.address || student.address.length < 5)
//       err.address = "Address must be at least 5 characters";

//     if (!student.mobileNumber)
//       err.mobileNumber = "Mobile number is required";
//     else if (!/^[0-9]{10}$/.test(student.mobileNumber))
//       err.mobileNumber = "Mobile must be 10 digits";

//     if (!student.admissionDate)
//       err.admissionDate = "Admission date is required";

//     return err;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       add(student)
//         .then(() => {
//           alert("Student Added Successfully");
//           setStudent({
//             name: "",
//             email: "",
//             course: "",
//             age: "",
//             gender: "",
//             address: "",
//             fees: "",
//             mobileNumber: "",
//             admissionDate: ""
//           });
//         })
//         .catch(() => alert("Error"));
//     }
//   };

//   return (
//     <div className="card p-4">
//       <h3 className="mb-3">Add Student</h3>

//       <form onSubmit={handleSubmit}>

//         {/* Name */}
//         <input
//           className="form-control mb-1"
//           name="name"
//           placeholder="Name"
//           value={student.name}
//           onChange={handleChange}
//         />
//         {errors.name && <small className="text-danger">{errors.name}</small>}

//         {/* Email */}
//         <input
//           className="form-control mb-1 mt-2"
//           name="email"
//           placeholder="Email"
//           value={student.email}
//           onChange={handleChange}
//         />
//         {errors.email && <small className="text-danger">{errors.email}</small>}

//         {/* Course */}
//         <input
//           className="form-control mb-1 mt-2"
//           name="course"
//           list="courseList"
//           placeholder="Course"
//           value={student.course}
//           onChange={handleChange}
//         />
//         <datalist id="courseList">
//           {courses.map((c, i) => (
//             <option key={i} value={c} />
//           ))}
//         </datalist>
//         {errors.course && <small className="text-danger">{errors.course}</small>}

//         {/* Age */}
//         <input
//           className="form-control mb-1 mt-2"
//           name="age"
//           type="number"
//           placeholder="Age"
//           value={student.age}
//           onChange={handleChange}
//         />
//         {errors.age && <small className="text-danger">{errors.age}</small>}

//         {/* Gender Radio */}
//         <div className="mt-2">
//           <label className="me-3">
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               checked={student.gender === "Male"}
//               onChange={handleChange}
//             /> Male
//           </label>

//           <label className="me-3">
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               checked={student.gender === "Female"}
//               onChange={handleChange}
//             /> Female
//           </label>

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Other"
//               checked={student.gender === "Other"}
//               onChange={handleChange}
//             /> Other
//           </label>
//         </div>
//         {errors.gender && <small className="text-danger">{errors.gender}</small>}

//         {/* Address */}
//         <input
//           className="form-control mb-1 mt-2"
//           name="address"
//           placeholder="Address"
//           value={student.address}
//           onChange={handleChange}
//         />
//         {errors.address && <small className="text-danger">{errors.address}</small>}

//         {/* Fees (NO validation) */}
//         <input
//           className="form-control mb-2 mt-2"
//           name="fees"
//           type="number"
//           placeholder="Fees"
//           value={student.fees}
//           onChange={handleChange}
//         />

//         {/* Mobile */}
//         <input
//           className="form-control mb-1"
//           name="mobileNumber"
//           type="number"
//           placeholder="Mobile"
//           value={student.mobileNumber}
//           onChange={handleChange}
//         />
//         {errors.mobileNumber && (
//           <small className="text-danger">{errors.mobileNumber}</small>
//         )}

//         {/* Admission Date */}
//         <input
//           className="form-control mb-1 mt-2"
//           name="admissionDate"
//           type="date"
//           value={student.admissionDate}
//           onChange={handleChange}
//         />
//         {errors.admissionDate && (
//           <small className="text-danger">{errors.admissionDate}</small>
//         )}

//         <button className="btn btn-primary mt-3">Add Student</button>
//       </form>
//     </div>
//   );
// }

// export default Add;

import React, { useEffect, useState } from "react";
import { add, getStudentById, updateStudent } from "../api/Service";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const { id } = useParams(); // 🔥 update id
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
    gender: "",
    address: "",
    fees: "",
    mobileNumber: "",
    admissionDate: ""
  });

  const [errors, setErrors] = useState({});

  const courses = [
    "Java Full Stack",
    "Python Full Stack",
    "MERN Stack",
    "Data Science",
    "React JS",
    "Spring Boot",
    "Angular",
    "DevOps",
    "Software Testing"
  ];

  // 🔥 Load data for UPDATE
  useEffect(() => {
    if (id) {
      getStudentById(id).then((res) => {
        setStudent(res.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!student.name || student.name.length < 3)
      err.name = "Name must be at least 3 characters";

    if (!student.email)
      err.email = "Email required";

    if (!student.course)
      err.course = "Course required";

    if (!student.age)
      err.age = "Age required";

    if (!student.gender)
      err.gender = "Gender required";

    if (!student.mobileNumber || !/^[0-9]{10}$/.test(student.mobileNumber))
      err.mobileNumber = "Mobile must be 10 digits";

    if (!student.admissionDate)
      err.admissionDate = "Admission date required";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (id) {
        // 🔥 UPDATE
        updateStudent(id, student).then(() => {
          alert("Student Updated Successfully");
          navigate("/");
        });
      } else {
        // 🔥 ADD
        add(student).then(() => {
          alert("Student Added Successfully");
          navigate("/");
        });
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h3 className="mb-3">
          {id ? "Update Student" : "Add Student"}
        </h3>

        <form onSubmit={handleSubmit}>
          <input className="form-control mb-2" name="name" placeholder="Name"
            value={student.name} onChange={handleChange} />
          {errors.name && <small className="text-danger">{errors.name}</small>}

          <input className="form-control mb-2" name="email" placeholder="Email"
            value={student.email} onChange={handleChange} />
          {errors.email && <small className="text-danger">{errors.email}</small>}

          <input className="form-control mb-2" name="course" list="courses"
            placeholder="Course" value={student.course}
            onChange={handleChange} />
          <datalist id="courses">
            {courses.map((c, i) => <option key={i} value={c} />)}
          </datalist>

          <input className="form-control mb-2" name="age" type="number"
            placeholder="Age" value={student.age}
            onChange={handleChange} />

          <div className="mb-2">
            <label className="me-3">
              <input type="radio" name="gender" value="Male"
                checked={student.gender === "Male"} onChange={handleChange} /> Male
            </label>
            <label className="me-3">
              <input type="radio" name="gender" value="Female"
                checked={student.gender === "Female"} onChange={handleChange} /> Female
            </label>
          </div>

          <input className="form-control mb-2" name="address" placeholder="Address"
            value={student.address} onChange={handleChange} />

          <input className="form-control mb-2" name="fees" type="number"
            placeholder="Fees" value={student.fees}
            onChange={handleChange} />

          <input className="form-control mb-2" name="mobileNumber" type="number"
            placeholder="Mobile" value={student.mobileNumber}
            onChange={handleChange} />

          <input className="form-control mb-3" name="admissionDate"
            type="date" value={student.admissionDate}
            onChange={handleChange} />

          <button className="btn btn-success">
            {id ? "Update Student" : "Add Student"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;

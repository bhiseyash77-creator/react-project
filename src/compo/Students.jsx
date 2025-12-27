// import React, { useEffect, useState } from "react";
// import { getAllStudents,deleteStudent} from "../api/Service"
// import { Link } from "react-router-dom";

// function Students() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     loadStudents();
//   }, []);

//   const loadStudents = async () => {
//     const res = await getAllStudents();
//     setStudents(res.data);
//   };

//   const handleDelete = async (id) => {
//     await deleteStudent(id);
//     loadStudents();
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between mb-3">
//         <h4>Students</h4>
//         <Link to="/add" className="btn btn-primary">
//           Add Student
//         </Link>
//       </div>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Fees</th>
//             <th>Mobile</th>
//             <th>Admission Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {students.map((s) => (
//             <tr key={s.id}>
//               <td>{s.id}</td>
//               <td>{s.name}</td>
//               <td>{s.email}</td>
//               <td>{s.course}</td>
//               <td>{s.age}</td>
//               <td>{s.gender}</td>
//               <td>{s.fees}</td>
//               <td>{s.mobileNumber}</td>
//               <td>{s.admissionDate}</td>
//               <td>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(s.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Students;

import React, { useEffect, useState } from "react";
import { getAllStudents, deleteStudent } from "../api/Service";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const res = await getAllStudents();
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteStudent(id);
      loadStudents();
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h4>Students</h4>
        <Link to="/add" className="btn btn-primary">
          Add Student
        </Link>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Fees</th>
            <th>Mobile</th>
            <th>Admission Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>{s.age}</td>
              <td>{s.gender}</td>
              <td>{s.fees}</td>
              <td>{s.mobileNumber}</td>
              <td>{s.admissionDate}</td>
              <td>
                <Link
                  to={`/add/${s.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Update
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(s.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;

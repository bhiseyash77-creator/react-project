// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8787",
// });

// //  student get all
// export const getAllStudents= () => api.get("/student");

// // student get by id
// export const getById = (id) => api.get(`/student/${id}`);

// //   add student
// export const add = (data) => api.post("/student", data);

// //  studnt update by id
// export const updateStudent = (id, data) => api.put(`/student/${id}`, data);

// // student delete by id
// export const deleteStudent= (id) => api.delete(`/student/${id}`);

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8787",
});

//  student get all
export const getAllStudents= () => api.get("/student");

// student get by id
export const getStudentById = (id) => api.get(`/student/${id}`);

//   add student
export const add = (data) => api.post("/student", data);

//  studnt update by id
export const updateStudent = (id, data) => api.put(`/student/${id}`, data);

// student delete by id
export const deleteStudent= (id) => api.delete(`/student/${id}`);

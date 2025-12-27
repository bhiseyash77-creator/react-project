import React, { useEffect, useState } from "react";
import axios from "axios";

function Pending() {
  const [pending, setPending] = useState([]);

  const fetchPending = async () => {
    const res = await axios.get("http://localhost:8787/api/inquiries/pending");
    setPending(res.data);
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const completeInquiry = async (id) => {
    await axios.put(`http://localhost:8787/api/inquiry/${id}/complete`);
    fetchPending();
  };

  return (
    <div className="container mt-3">
      <h3>Pending Inquiries</h3>
      {pending.length === 0 && <p>No pending inquiries</p>}
      {pending.map((inq) => (
        <div key={inq.id} className="card mb-2 p-2">
          <p><b>Name:</b> {inq.name}</p>
          <p><b>Mobile:</b> {inq.mobile}</p>
          <p><b>Course:</b> {inq.course}</p>
          <p><b>Status:</b> {inq.status}</p>
          <button className="btn btn-success" onClick={() => completeInquiry(inq.id)}>
            Mark Complete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pending;

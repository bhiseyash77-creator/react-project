
import { useEffect, useState } from "react";
import axios from "axios";
import "./OwnerDashboard.css";

export default function OwnerDashboard() {

  const [admissions, setAdmissions] = useState([]);
  const OwnerDashboard = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

  const fetchPending = async () => {
    try {
      const res = await OwnerDashboard.get("/api/admission/pending");
      setAdmissions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const approveAdmission = async (id) => {
    try {
      await OwnerDashboard.put(`/api/admission/${id}`, {
        status: "Completed",
      });
      fetchPending();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAdmission = async (id) => {
    try {
      await OwnerDashboard.delete(`/api/admission/${id}`);
      fetchPending();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="owner-dashboard">
      <h2>Pending Admissions</h2>

      {admissions.length === 0 && (
        <p className="no-data">No pending admissions</p>
      )}

      {admissions.map((a) => (
        <div className="card" key={a.id}>
          <p><b>Name:</b> {a.name}</p>
          <p><b>Email:</b> {a.email}</p>
          <p><b>Mobile:</b> {a.mobile}</p>
          <p><b>Token:</b> {a.qrToken}</p>
          <p><b>Status:</b> {a.status}</p>

          {a.screenshot && (
            <img
              src={`data:image/png;base64,${a.screenshot}`}
              alt="Screenshot"
            />
          )}

          <div className="actions">
            <button
              className="approve"
              onClick={() => approveAdmission(a.id)}
            >
              Approve
            </button>

            <button
              className="delete"
              onClick={() => deleteAdmission(a.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

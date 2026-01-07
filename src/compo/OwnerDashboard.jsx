import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default function OwnerDashboard() {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPending = async () => {
    try {
      const res = await api.get("/api/admission/pending");

      // SAFETY: ensure array
      if (Array.isArray(res.data)) {
        setPending(res.data);
      } else {
        setPending([]);
      }
    } catch (err) {
      console.error("Fetch pending error:", err);
      alert("Pending data load failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/api/admission/status/${id}?status=${status}`);
      fetchPending();
    } catch (err) {
      console.error(err);
      alert("Status update failed");
    }
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Pending Admissions</h2>

      {pending.length === 0 && <p>No pending admissions</p>}

      {pending.map((a) => (
        <div
          key={a.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <p><b>Name:</b> {a.name}</p>
          <p><b>Email:</b> {a.email}</p>
          <p><b>Mobile:</b> {a.mobile}</p>
          <p><b>Course:</b> {a.course}</p>
          <p><b>College:</b> {a.college}</p>
          <p><b>UTR:</b> {a.utrNo}</p>
          <p><b>Status:</b> {a.status}</p>

          {/* ✅ SCREENSHOT SAFE RENDER */}
          {/* {a.screenshot && (
            <img
              src={`data:image/jpeg;base64,${a.screenshot}`}
              alt="Payment Screenshot"
              style={{
                width: "250px",
                marginTop: "10px",
                border: "1px solid #999",
              }}
            />
          )} */}

          <div style={{ marginTop: "10px" }}>
            <button onClick={() => updateStatus(a.id, "Approved")}>
              Approve
            </button>
            <button
              onClick={() => updateStatus(a.id, "Rejected")}
              style={{ marginLeft: "10px" }}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

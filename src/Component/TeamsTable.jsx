import { useState } from "react";

/* ---------------- STYLES ---------------- */
const container = {
  background: "#f9f9f9",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  maxWidth: "900px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
};

const title = {
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "20px",
  color: "#333",
};

const formRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  marginBottom: "25px",
  alignItems: "center",
};

const input = {
  padding: "10px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  flex: "1 1 200px",
  fontSize: "14px",
};

const fileInput = {
  flex: "0 0 120px",
};

const button = {
  padding: "10px 20px",
  backgroundColor: "#28A745",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500",
  transition: "0.3s",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "left",
};

const th = {
  borderBottom: "2px solid #ddd",
  padding: "12px",
  backgroundColor: "#f4f4f4",
  color: "#333",
  fontWeight: "600",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
  verticalAlign: "middle",
};

const actionIcon = {
  cursor: "pointer",
  marginRight: "10px",
  fontSize: "18px",
  transition: "0.2s",
};

const imgStyle = {
  width: "60px",
  height: "60px",
  objectFit: "cover",
  borderRadius: "6px",
  border: "1px solid #ccc",
};
/* ---------------------------------------- */

const TeamsTable = () => {
  const [teams, setTeams] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", image: null });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (!form.name) return;

    if (editIndex !== null) {
      const updated = [...teams];
      updated[editIndex] = form;
      setTeams(updated);
      setEditIndex(null);
    } else {
      setTeams([...teams, form]);
    }

    setForm({ name: "", role: "", image: null });
  };

  const deleteTeam = (i) => {
    setTeams(teams.filter((_, index) => index !== i));
  };

  return (
    <div style={container}>
      <div style={title}>Teams Management</div>

      {/* FORM */}
      <div style={formRow}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          style={input}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={form.role}
          style={input}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          style={fileInput}
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;
            setForm({ ...form, image: URL.createObjectURL(file) });
          }}
        />
        <button style={button} onClick={handleAddOrEdit}>
          {editIndex !== null ? "Update" : "Add Member"}
        </button>
      </div>

      {/* TABLE */}
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Name</th>
            <th style={th}>Role</th>
            <th style={th}>Image</th>
            <th style={th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((t, i) => (
            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fdfdfd" }}>
              <td style={td}>{t.name}</td>
              <td style={td}>{t.role}</td>
              <td style={td}>
                {t.image && <img src={t.image} alt="" style={imgStyle} />}
              </td>
              <td style={td}>
                <span
                  style={actionIcon}
                  title="Edit"
                  onClick={() => {
                    setForm(t);
                    setEditIndex(i);
                  }}
                >
                  ✏️
                </span>
                <span
                  style={{ ...actionIcon, color: "#FF4C4C" }}
                  title="Delete"
                  onClick={() => deleteTeam(i)}
                >
                  🗑️
                </span>
              </td>
            </tr>
          ))}
          {teams.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "20px", color: "#777" }}>
                No team members added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTable;

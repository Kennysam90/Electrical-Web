import { useState } from "react";
import ProjectsTable from "../Component/ProjectsTable";
import TeamsTable from "../Component/TeamsTable";
const Admin = () => {
    const [activeTab, setActiveTab] = useState("projects");

  const btn = (active) => ({
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: active ? "#111" : "#fff",
    color: active ? "#fff" : "#111",
    cursor: "pointer",
  });
  return (
    <>
        <div style={{ padding: 24, background: "#f4f4f4", minHeight: "100vh", }}>
      <div style={{ justifyContent:"center", textAlign:"center", display: "flex", gap: 12, marginBottom: 20 }}>
        <button style={btn(activeTab === "projects")} onClick={() => setActiveTab("projects")}>
          Projects
        </button>
        <button style={btn(activeTab === "teams")} onClick={() => setActiveTab("teams")}>
          Teams
        </button>
      </div>

      {activeTab === "projects" && <ProjectsTable />}
      {activeTab === "teams" && <TeamsTable />}
    </div>
    </>
  )
}

export default Admin

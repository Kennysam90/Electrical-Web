// import { useState } from "react";
// import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import Topnav2 from "../../Component/Topnav2";
import Footer from "../../Component/Footer";
import Project from "../../Component/project";
import Chat from "../../Component/Chat";
// import { getProjects } from '../../api/apiCall';

const Cases = () => {
//    // this stores which tab is active
//   const [activeTab, setActiveTab] = useState("all");
//  const { data: projects, isLoading, error } = useQuery({
//     queryKey: ["projects"],
//     queryFn: getProjects,
//   });

//   if (isLoading) return <p>Loading projects...</p>;
//   if (error) {
//     console.error("Error fetching projects:", error);
//     return <p>Error loading projects: {error.message}</p>;
//   }

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   }
  


  return (
    <>
    <div id="app">
      <Topnav2 />
      <div
        className="favicons-wrap"
        style={{
          display: "none",
        }}>
        <img alt="" src="../wp-content/uploads/2025/10/logo_00000.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00001.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00002.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00003.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00004.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00005.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00006.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00007.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00008.png" />
        <img alt="" src="../wp-content/uploads/2025/10/logo_00009.png" />
      </div>
      <main className="next_block_sticky">
        <section
          className="cases_section tabs  pt-100-mob pb-100-mob await-action"
          data-tabs="">
           <Project />
        </section><Chat />
        
        
      </main>
    </div><Footer />
    </>
  )
}

export default Cases

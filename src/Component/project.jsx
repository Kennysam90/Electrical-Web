// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getProjects } from "../api/apiCall";

// const Project = () => {
//   return (
//     <>
//         <section className="cases_section pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
//           <div className="container">
//             <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop visible">
//               Featured cases
//             </div>
//             <div className="mt-24 mt-16-mob mw1040 title title--xl isview textslide trd02 inner-inherit visible">
//               Explore how DAMPECON LTD. electrical solutions <span>delivers lasting impact.</span>
//             </div>
//             <div className="cases_wrap grid gap-60 gap-48-mob mt-100 mt-48-mob scrollable">
//               <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
//                 <div className="col flex v--start h--start">
//                   <a
//                     className="media_wrap radius-12 ov-hidden"
//                     href="projects/shaga-odyssey-awarded-website-development-for-web3-gamepad/index.html">
//                     <picture>
//                       <source
//                         media="(min-width: 1440px)"
//                         srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.55 AM (1).jpeg"
//                       />
//                       <source
//                         media="(max-width: 1440px)"
//                         srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/Asset.webp"
//                       />
//                       <img
//                         alt="Shaga Odyssey – an award-<wbr>winning web3 gamepad platform - image cover"
//                         className="fullw radius-12"
//                         decoding="async"
//                         loading="lazy"
//                         media="(max-width: 768px)"
//                         src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.55 AM (1).jpeg"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
//                   <div className="txt txt--control-s uppercase fw-600 color--dark-light">
//                     <p>#Electrical Installation #Procurement #Project Management</p>
//                   </div>
//                   <div className="title title--m mt-12 isview textslide fullw">
//                     GreenHarvest Agro Plant – 
//                     <wbr />
//                     complete electrical installation for a modern processing facility
//                   </div>
//                   <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
//                     <span className="tag">Shaga.xyz</span>
//                     <span className="tag">
//                       <img
//                         alt="Icon - fi_4628635"
//                         className=""
//                         decoding="async"
//                         loading="lazy"
//                         src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
//                         style={{}}
//                       />
//                       Abuja
//                     </span>
//                   </div>
//                   <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase">
//                         Client:
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
//                         <p>GreenHarvest Agro Industries</p>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
//                         Timeline
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
//                         <p>5 months </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid col-1 mt-64 mt-48-mob card_details">
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase">
//                         Results
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
//                         <p>⚡ 30% reduction in power downtime

// </p>
//                         <p>⚙️ Improved operational efficiency with automated control systems</p>
//                         <p>
//                           🏆 Project completed ahead of schedule and within budget
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="btn--wrap mt-20 mt-20-mob">
//                     <Link
//                       className="btn btn--orange hover--dark arr fullw-mob"
//                       to="/cases">
//                       <span>
//                         <b>Explore</b>
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
//                 <div className="col flex v--start h--start">
//                   <a
//                     className="media_wrap radius-12 ov-hidden"
//                     href="projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
//                     <picture>
//                       <source
//                         media="(min-width: 1440px)"
//                         srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.24.20 AM.jpeg"
//                       />
//                       <source
//                         media="(max-width: 1440px)"
//                         srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/.avif"
//                       />
//                       <img
//                         alt="KlickEx – frictionless cross-<wbr>border payments for the Pacific Island communities - image cover"
//                         className="fullw radius-12"
//                         decoding="async"
//                         loading="lazy"
//                         media="(max-width: 768px)"
//                         src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.24.20 AM.jpeg"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
//                   <div className="txt txt--control-s uppercase fw-600 color--dark-light">
//                     <p>#Electrical Installation #Power Systems #Procurement</p>
//                   </div>
//                   <div className="title title--m mt-12 isview textslide fullw">
//                     MedTech Diagnostics – 
//                     <wbr />
//                     Reliable power systems for a state-of-the-art healthcare facility
//                   </div>
//                   <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
//                     <span className="tag">Nomupay</span>
//                     <span className="tag">
//                       <img
//                         alt="Icon - Clip path group"
//                         className=""
//                         decoding="async"
//                         loading="lazy"
//                         src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
//                         style={{}}
//                       />
//                       Abuja 
//                     </span>
//                   </div>
//                   <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase">
//                         Client:
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
//                         <p>MedTech Diagnostics Ltd.</p>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
//                         Timeline
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
//                         <p>6 months</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid col-1 mt-64 mt-48-mob card_details">
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase">
//                         Results
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
//                         <p>35% improvement in operational uptime

// </p>
//                         <p>💡 30% reduction in energy waste through optimized load management</p>
//                         <p>🏥 Enabled uninterrupted diagnostic operations across all departments</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="btn--wrap mt-20 mt-20-mob">
//                     <Link
//                       className="btn btn--orange hover--dark arr fullw-mob"
//                       to="/cases">
//                       <span>
//                         <b>Explore</b>
//                       </span>
//                     </Link>
//                   </div>
//                   <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
//                     <div className="top flex auth_wrap v--center h--start gap-16">
//                       <img
//                         alt="Image - Case preview"
//                         className=""
//                         decoding="async"
//                         loading="lazy"
//                         src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-preview-.webp"
//                         style={{
//                           aspectRatio: "1.1428571428571",
//                         }}
//                       />
//                       <div className="bio">
//                         <div className="txt txt--s gap-0">
//                           <p>Chinedu Okafor</p>
//                           <span>Facility Manager</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="txt mt-30 mt-20-mob txt--l">
//                       <p>
//                         “We’ve seen a remarkable improvement in our power reliability and overall system efficiency since partnering with DAMPECON LTD.. Their professionalism and attention to detail have had a direct impact on our productivity and cost savings. Highly recommended.”
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
//                 <div className="col flex v--start h--start">
//                   <a
//                     className="media_wrap radius-12 ov-hidden"
//                     href="projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
//                     <picture>
//                       <source
//                         media="(min-width: 1440px)"
//                         srcSet="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.55 AM.jpeg"
//                       />
//                       <source
//                         media="(max-width: 1440px)"
//                         srcSet="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.55 AM.jpeg"
//                       />
//                       <img
//                         alt="KlickEx – frictionless cross-<wbr>border payments for the Pacific Island communities - image cover"
//                         className="fullw radius-12"
//                         decoding="async"
//                         loading="lazy"
//                         media="(max-width: 768px)"
//                         src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/main/WhatsApp Image 2025-12-09 at 8.23.55 AM.jpeg"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//                 <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
//                   <div className="txt txt--control-s uppercase fw-600 color--dark-light">
//                     <p>
//                       #SystemDesign #ElectricalUpgrade
//                     </p>
//                   </div>
//                   <div className="title title--m mt-12 isview textslide fullw">
//                      PrimeSteel Manufacturing – Complete electrical system overhaul for a modern production facility
//                   </div>
//                   <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
//                     <span className="tag">SaltyCloud</span>
//                     <span className="tag">
//                       <img
//                         alt="Icon - fi_4628635"
//                         className=""
//                         decoding="async"
//                         loading="lazy"
//                         src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
//                         style={{}}
//                       />
//                       Lagos
//                     </span>
//                   </div>
//                   <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase">
//                         Client:
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
//                         <p>PrimeSteel Manufacturing Ltd.
// </p>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
//                         Timeline
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
//                         <p>12 months, ongoing</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid col-1 mt-64 mt-48-mob card_details">
//                     <div className="col">
//                       <div className="txt txt--control-s color--dark-secondary uppercase">
//                         Results
//                       </div>
//                       <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
//                         <p>2x improvement in power efficiency

// </p>
//                         <p>🏗️ 50% faster equipment startup times</p>
//                         <p>🏆 Recognized as one of the most energy-efficient manufacturing facilities in the region</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="btn--wrap mt-20 mt-20-mob">
//                     <Link
//                       className="btn btn--orange hover--dark arr fullw-mob"
//                       to="/cases">
//                       <span>
//                         <b>Explore</b>
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-80 mt-40-mob text--center flex h--center isview slidetop">
//               <Link
//                 className="btn btn--simple dark arr"
//                 to="/cases"
//                 target="_self">
//                 <span>
//                   <b>Explore All Cases</b>
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </section>
//     </>
//   )
// }

// export default Project
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/apiCall";

const Project = () => {
 const [visibleCount, setVisibleCount] = useState(3);

  /* ---------------- FETCH PROJECTS ---------------- */
  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 1000 * 60 * 5,
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  if (isLoading) {
    return <p className="text-center mt-40">Loading projects…</p>;
  }

  if (isError) {
    return <p className="text-center mt-40">Failed to load projects</p>;
  }

  return (
    <>
      <section className="cases_section pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop visible">
            Featured cases
          </div>

          <div className="mt-24 mt-16-mob mw1040 title title--xl isview textslide trd02 inner-inherit visible">
            Explore how DAMPECON LTD. electrical solutions{" "}
            <span>deliver lasting impact.</span>
          </div>

          <div className="cases_wrap grid gap-60 gap-48-mob mt-100 mt-48-mob scrollable">
            {projects.map((project) => (
              <div
                key={project._id}
                className="grid col-2 col-1-mob gap-32 gap-0-mob case_card"
              >
                {/* MEDIA */}
                <div className="col flex v--start h--start">
                  <div className="media_wrap radius-12 ov-hidden">
                    {project.isVideo ? (
                      <video
                        src={`https://api.dampecon.com${project.coverImage}`}
                        className="fullw radius-12"
                        controls
                      />
                    ) : (
                      <img
                        src={`https://api.dampecon.com${project.coverImage}`}
                        alt={project.title}
                        className="fullw radius-12"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                  <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                    <p>
                      {project.category?.map((cat, i) => (
                        <span key={i}>#{cat} </span>
                      ))}
                    </p>
                  </div>

                  <div className="title title--m mt-12 isview textslide fullw">
                    {project.title}
                  </div>

                  <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                    <span className="tag">{project.description}</span>
                    <span className="tag">
                      <img
                        alt="Nigeria"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
                      />
                      {project.state}
                    </span>
                  </div>

                  <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                    <div className="col">
                      <div className="txt txt--control-s color--dark-secondary uppercase">
                        Client:
                      </div>
                      <div className="txt txt--m mt-12 pt-12 pb-12 border-top border-right">
                        <p>{project.clientName}</p>
                      </div>
                    </div>

                    <div className="col">
                      <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                        Timeline
                      </div>
                      <div className="txt txt--m mt-12 pt-12 pb-12 border-top pl-24 pl-0-mob">
                        <p>{project.timeLine}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid col-1 mt-64 mt-48-mob card_details">
                    <div className="col">
                      <div className="txt txt--control-s color--dark-secondary uppercase">
                        Results
                      </div>
                      <div className="txt txt--m mt-12 pt-12 pb-12 gap-12 border-top">
                        {project.result?.map((res, i) => (
                          <p
                            key={i}
                            className="flex items-start gap-2"
                            style={{ marginBottom: "0.3em" }}
                          >
                            <span aria-hidden="true">🏆</span>
                            <span>{res}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < projects.length && ( <div className="mt-40 text--center"> <button className="btn btn--simple dark" onClick={handleLoadMore}> Explore More Cases </button> </div> )}
        </div>
      </section>
    </>
  );
};

export default Project;
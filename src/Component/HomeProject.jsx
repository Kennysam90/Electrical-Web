

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/apiCall";

const HomeProject = () => {
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
            {[...projects]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 2)
            .map((project) => (
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
        </div>
      </section>
    </>
  );
};

export default HomeProject;
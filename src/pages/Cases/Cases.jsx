import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import Topnav2 from "../../Component/Topnav2";
import Footer from "../../Component/Footer";
import { getProjects } from '../../api/apiCall';

const Cases = () => {
   // this stores which tab is active
  const [activeTab, setActiveTab] = useState("all");
 const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) return <p>Loading projects...</p>;
  if (error) {
    console.error("Error fetching projects:", error);
    return <p>Error loading projects: {error.message}</p>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }
  


  return (
    <>
     
    <div className="invisible" id="progress-bar-wrapper">
      <div id="progress-bar" />
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html:
          "    let minDurationPassed = false;    let pageLoaded = false;            let preloadingTime = 300        function getRandomInt(max) {        return Math.floor(Math.random() * max);    }    var phrases = [        \"Installing one more great idea\",        \"Negotiating with a stubborn font\",        \"Googling best practices\",        \"Outsourcing sleep\",        \"Putting the ‘you’ in ‘user flow’\",        \"Debugging human behavior\",        \"Kerning the universe\",        \"Looking for that one missing pixel\",        \"Making your product 17% cooler\",        \"Translating coffee into Figma magic\",        \"Compressing%20creativity%20into%20.html\"    ];    function setRandomText(){        document.getElementById('random_text').innerHTML = phrases[getRandomInt(phrases.length)]+'<span class=\"dots\"><span>.</span><span>.</span><span>.</span></span>'    }    let invisible_container = document.querySelectorAll('.invisible_container')    setTimeout(function(){        for (var i = 0; i < invisible_container.length; i++) {            invisible_container[i].classList.remove('invisible_container')        }    },10)    function startPreloading(){        minDurationPassed = false;        pageLoaded = false;            }    function restartReloading(){        document.getElementById('progress-bar-wrapper').classList.remove('invisible')    }    startPreloading();    function stopPreloading(){        document.body.classList.add('loaded')        removeAnimatedClass()        document.getElementById('progress-bar-wrapper').classList.add('invisible')        for (var i = 0; i < invisible_container.length; i++) {            invisible_container[i].classList.add('invisible_container')        }        setTimeout(function(){                            document.querySelectorAll('.textslide').forEach(el => {                    if (                        el.classList.contains('title') &&                        el.querySelectorAll('h1, h2, h3').length > 0                    ) {                        el.classList.remove('textslide', 'visible');                        el.classList.add('slidetop');                    }                });                isView()                console.log('stopPreloading')                        document.documentElement.classList.remove('hidd');            setTimeout(function(){                            })                        setTimeout(function(){                // isView()                            },300)        },100)                    createHeadingsAnimationTags()            }    function checkIsLoaded(){        setTimeout(() => {        minDurationPassed = true;            if (pageLoaded) stopPreloading();        }, preloadingTime);                // window.addEventListener('load', () => {                pageLoaded = true;            if (minDurationPassed) stopPreloading();                // });            }    checkIsLoaded()",
      }}
    />
    <noscript>
      <iframe
        height="0"
        rel="preconnect"
        src="/www.googletagmanager.com/ns.html?id=GTM-NG5S546"
        style={{
          display: "none",
          visibility: "hidden",
        }}
        width="0"
      />
    </noscript>
    <noscript>
      {" "}
      <img
        alt=""
        height="1"
        src="/px.ads.linkedin.com/collect/?pid=3376562&fmt=gif"
        style={{
          display: "none",
        }}
        width="1"
      />{" "}
    </noscript>
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
          className="cases_section tabs pt-200 pt-100-mob pb-200 pb-100-mob await-action"
          data-tabs="">
          <div className="container">
            <h1 className="title--xxl bg-dark mw1040 mt-4 mt-8-mob isview textslide">
              Explore our projects
            </h1>
            <div className="tabs-actions disable-scrollbar mt-60 mt-24 isview slidetop">
              <button
                // className="btn btn--white hover--gray active--dark is-active"
                 className={`btn btn--white hover--gray active--dark ${activeTab === "all" ? "is-active" : ""}`}
                 onClick={() => handleTabClick("all")}
                data-href="/phenomenonstudio.com/projects/"
                data-tabs-link="all"
                type="button">
                <span>
                  <b>All projects</b>
                </span>
              </button>
              <button
                 className={`btn btn--white hover--gray active--dark ${activeTab === "web-app" ? "is-active" : ""}`}
                  onClick={() => handleTabClick("web-app")}
                data-href="/phenomenonstudio.com/tag/web-app/"
                data-tabs-link="web-app"
                type="button">
                <span>
                  <b>Web app</b>
                </span>
              </button>
              <button
                 className={`btn btn--white hover--gray active--dark ${activeTab === "mobile-app" ? "is-active" : ""}`}
                  onClick={() => handleTabClick("mobile-app")}
                data-href="/phenomenonstudio.com/tag/mobile-app/"
                data-tabs-link="mobile-app"
                type="button">
                <span>
                  <b>Mobile app</b>
                </span>
              </button>
              <button
                  className={`btn btn--white hover--gray active--dark ${activeTab === "website" ? "is-active" : ""}`}
                  onClick={() => handleTabClick("website")}
                data-href="/phenomenonstudio.com/tag/website/"
                data-tabs-link="website"
                type="button">
                <span>
                  <b>Website</b>
                </span>
              </button>
              <button
                  className={`btn btn--white hover--gray active--dark ${activeTab === "Procurement & Supply" ? "is-active" : ""}`}
                  onClick={() => handleTabClick("Procurement & Supply")}
                data-href="/phenomenonstudio.com/tag/Procurement & Supply/"
                data-tabs-link="Procurement & Supply"
                type="button">
                <span>
                  <b>Procurement & Supply</b>
                </span>
              </button>
            </div>
            <div className="cases-select mt-24 isview slidetop">
              <div className="select-native">
                <select data-tabs-select="" name="type">
                  <option selected value="all">
                    Type: All projects
                  </option>
                  <option value="web-app">Type: Web app</option>
                  <option value="mobile-app">Type: Mobile app</option>
                  <option value="website">Type: Website</option>
                  <option value="Procurement & Supply">Type: Procurement & Supply</option>
                </select>
                <img
                  alt=""
                  className="select-native-appearance"
                  src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/arrow-down.svg"
                />
              </div>
            </div>
            <div className="tabs-holder mt-40 mt-24-mob" data-tabs-holder="">

              <div
                    className={`infinite-scroll-holder cases_wrap grid gap-80 gap-48-mob bg--white tabs-pane ${ activeTab === "all" ? "is-active" : "" }`}
                      data-infinite-scroll-css="check-active"
                      data-tabs-pane="all"
                    >
          {isLoading && <p>Loading projects...</p>}
        {error && <p>Error loading projects.</p>}

        {!isLoading && !error && (
          <div className="grid col-2 col-1-mob gap-32 gap-0-mob">
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <div className="case_card" key={project.id || project._id}>
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href={project.link || "#"}
                    >
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet={project.imageLarge || ""}
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet={project.imageLarge || ""}
                        />
                        <img
                          alt={project.title || "Project image"}
                          className="fullw radius-12"
                          decoding="async"
                          media="(max-width: 768px)"
                          src={project.imageMobile || ""}
                        />
                      </picture>
                    </a>
                  </div>

                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>{project.tags?.join(" ") || ""}</p>
                    </div>

                    <div className="title title--m mt-12 isview textslide fullw">
                      {project.title || ""}
                    </div>

                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">{project.company || ""}</span>
                      <span className="tag">
                        {project.countryIcon && (
                          <img
                            alt="Icon"
                            decoding="async"
                            loading="lazy"
                            src={project.countryIcon}
                          />
                        )}
                        {project.country || ""}
                      </span>
                    </div>

                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>{project.tech || ""}</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>{project.timeline || ""}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          {project.results && project.results.length > 0 ? (
                            project.results.map((res, idx) => (
                              <p key={idx}>{res}</p>
                            ))
                          ) : (
                            <p>No results available</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href={project.link || "#"}
                      >
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </div>
        )}

                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2.png"
                        />
                        <img
                          alt="KlickEx – frictionless cross-<wbr>border payments for the Pacific Island communities - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      KlickEx – frictionless cross-
                      <wbr />
                      border payments for the Pacific Island communities
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Nomupay</span>
                      <span className="tag">
                        <img
                          alt="Icon - Clip path group"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Clip-path-group.svg"
                          style={{}}
                        />
                        New Zealand
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Next.js, TypeScript, React Redux</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 months</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>+35% "Add Money" conversion rate</p>
                          <p>+30% "Money Transfer" completion rate</p>
                          <p>
                            Raised $1M in additional funding within 6 months
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Case preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-preview-.webp"
                          style={{
                            aspectRatio: "1.1428571428571",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Izek Lal</p>
                            <span>Country manager</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          We have seen a significant improvement in terms of
                          mobile friendliness and the general flow ofthe system.
                          I believe this has contributed significantly to the
                          growth of our business. Manythanks, Phenomenon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="shaga-odyssey-awarded-website-development-for-web3-gamepad/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Media-9-3-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Media-9-3-1.png"
                        />
                        <img
                          alt="Shaga Odyssey – an award-<wbr>winning web3 gamepad platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Media-9-3-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Shaga Odyssey – an award-
                      <wbr />
                      winning web3 gamepad platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Shaga.xyz</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 months </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>+40% increase in user engagement</p>
                          <p>3x faster platform navigation</p>
                          <p>
                            Awwwards "Site of the Day" for Best Interactive
                            Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="shaga-odyssey-awarded-website-development-for-web3-gamepad/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="mywisdom-a-digital-platform-for-safer-more-connected-aging/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-10.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-10.png"
                        />
                        <img
                          alt="MyWisdom — a digital platform for safer, more connected aging - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product redesign #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      MyWisdom — a digital platform for safer, more connected
                      aging
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">MyWisdom</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Flutter, Java, Spring Boot, Python, WebSocket,
                            Computer Vision, AWS, PostgreSQL, Redis, Docker,
                            Swagger, Liquibase
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer focus and smoother user flows</p>
                          <p>Better accessibility for diverse user needs</p>
                          <p>Consistent and scalable design system</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="mywisdom-a-digital-platform-for-safer-more-connected-aging/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="hyperbridge-redefining-cross-chain-connectivity-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12-1.png"
                        />
                        <img
                          alt="Hyperbridge – redefining cross-chain connectivity - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/cover-mobile-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Hyperbridge – redefining cross-chain connectivity
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Hyperbridge</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-1.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Consistent visual system</p>
                          <p>Improved market perception</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="hyperbridge-redefining-cross-chain-connectivity-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="scrambly-rewarded-discovery-platform-for-games-and-apps-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-14.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-14.png"
                        />
                        <img
                          alt="Scrambly – rewarded discovery platform for games and apps - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/cover-mobile-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Scrambly – rewarded discovery platform for games and apps
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Scrambly</span>
                      <span className="tag">
                        <img
                          alt="Icon - image"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/image.svg"
                          style={{}}
                        />
                        Italy
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Consistent visual system</p>
                          <p>Improved market perception</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="scrambly-rewarded-discovery-platform-for-games-and-apps-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624328 (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Rectangle-34624328-2.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Illia Frantsevskyi</p>
                            <span>CTO & Co-Founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          They demonstrated a high level of expertise and
                          efficiency in every phase of the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="herb-agency-digital-marketing-platform-for-cannabis-brands/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/IMg-Wrapper-48-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/IMg-Wrapper-48-scaled.png"
                        />
                        <img
                          alt="Herb Agency – digital marketing platform for cannabis brands - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/10/IMg-Wrapper-14-14.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Herb Agency – digital marketing platform for cannabis
                      brands
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">herb.co</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (5)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/fi_4628635-5.svg"
                          style={{}}
                        />
                        United States
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Refined brand positioning</p>
                          <p>Simplified user experience</p>
                          <p>Future-ready scalability</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="herb-agency-digital-marketing-platform-for-cannabis-brands/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="voltory-clarity-and-trust-in-digital-finance/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Case-preview-1-5.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Case-preview-1-5.png"
                        />
                        <img
                          alt="Voltory  – clarity and trust in digital finance - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Case-preview-37.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Voltory – clarity and trust in digital finance
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Voltory</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (5)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/fi_4628635-5.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Refined brand recognition</p>
                          <p>Enhanced brand trust</p>
                          <p>Distinct market position</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="voltory-clarity-and-trust-in-digital-finance/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="shaga-redefining-cloud-gaming/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-9.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-9.png"
                        />
                        <img
                          alt="Shaga – redefining cloud gaming - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-9.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Shaga – redefining cloud gaming
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Shaga</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-1.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Stronger alignment with core values</p>
                          <p>Unified and scalable design ecosystem</p>
                          <p>Clearer positioning and higher engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="shaga-redefining-cloud-gaming/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624328"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Rectangle-34624328.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Daeshawn Ballard</p>
                            <span>Co-Founder & COO, Shaga Labs, Inc.</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio helped us generate over 500,000
                          views on our product video, millions of impressions
                          across all our publicly shared assets, and more than
                          40,000 new followers on X. With their support, we also
                          secured $5 million in funding, gained adoption in over
                          170 countries, and were featured in leading
                          publications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="orryx-rewriting-the-rules-of-finance/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-preview-26.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-preview-26.png"
                        />
                        <img
                          alt="Orryx – rewriting the rules of finance - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/09/IMg-Wrapper-38.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Orryx – rewriting the rules of finance
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Orryx</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (4)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/fi_4628635-4.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced user experience</p>
                          <p>Stronger brand trust</p>
                          <p>Market differentiation</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="orryx-rewriting-the-rules-of-finance/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ready-player-fit-turning-boring-workouts-into-a-completely-different-exciting-daily-challenge/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-2.png"
                        />
                        <img
                          alt="Ready player fit – turning boring workouts into a completely different exciting daily challenge - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-mob-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ready player fit – turning boring workouts into a
                      completely different exciting daily challenge
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ready Player Fit</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (4)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/fi_4628635-4.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Early user feedback</p>
                          <p>Reduced development costs</p>
                          <p>Built with scalability in mind</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ready-player-fit-turning-boring-workouts-into-a-completely-different-exciting-daily-challenge/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pretty-patty-a-deliciously-interactive-fast-food-experience/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-17.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-17.png"
                        />
                        <img
                          alt="Pretty Patty: a deliciously interactive fast food experience - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-1-3.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Pretty Patty: a deliciously interactive fast food
                      experience
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Pretty patty</span>
                      <span className="tag">
                        <img
                          alt="Icon - image (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/image-2.svg"
                          style={{}}
                        />
                        Switzerland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Brand alignment & vibrant design</p>
                          <p>Improved сonversion opportunities</p>
                          <p>Customer-centric approach</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pretty-patty-a-deliciously-interactive-fast-food-experience/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - image (15)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/image-15.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Adrian Smith</p>
                            <span>Co-Founder, PRETTY PATTY</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          They always respected deadlines, were super reactive,
                          and were super helpful.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="airlinesim-realistic-online-airline-management-simulation/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-4.png"
                        />
                        <img
                          alt="AirlineSim — realistic online airline management simulation - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-mobile-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      AirlineSim — realistic online airline management
                      simulation
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Airline sim</span>
                      <span className="tag">
                        <img
                          alt="Image - de-circle-01.png"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/de-circle-01.png.webp"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Germany
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Vite, React, Typescript, SCSS, Framer motion, React
                            Router, Redux
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster time-to-market</p>
                          <p>Built with scalability in mind</p>
                          <p>Deeper engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="airlinesim-realistic-online-airline-management-simulation/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="herb-agency-reProcurement & Supply-the-cannabis-experience/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12.png"
                        />
                        <img
                          alt="Herb.Agency – reProcurement & Supply the cannabis experience - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Herb.Agency – reProcurement & Supply the cannabis experience
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">herb.co</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-1.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Stronger connection between brands</p>
                          <p>Flexible and scalable brand system</p>
                          <p>Clearer positioning and industry relevance</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="herb-agency-reProcurement & Supply-the-cannabis-experience/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="qurtuba-online-school-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-9.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-9.png"
                        />
                        <img
                          alt="Qurtuba – online school platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Media-1-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Qurtuba – online school platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Qurtuba</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635 (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-2-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Johannesburg, South Africa
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Typescript, React, Vite, MUI, Redux, i18next,
                            Firebase, Auth0, NestJS
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>95% satisfaction in progress tracking</p>
                          <p>2x boost in learning productivity</p>
                          <p>Streamlined communication tools</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="qurtuba-online-school-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="blueheart-sex-therapy-that-starts-with-self-kindness/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-11.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-11.png"
                        />
                        <img
                          alt="Blueheart – sex therapy that starts with self-kindness - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-cover-1-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product Redesign #UX Audit</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Blueheart – sex therapy that starts with self-kindness
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Blueheart</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved user experience</p>
                          <p>Increased product adoption rates</p>
                          <p>Positive user feedback</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="blueheart-sex-therapy-that-starts-with-self-kindness/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="scrambly-rewarded-discovery-platform-for-games-and-apps/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-8-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-8-scaled.png"
                        />
                        <img
                          alt="Scrambly – rewarded discovery platform for games and apps - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Case-preview-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Scrambly – rewarded discovery platform for games and apps
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Scrambly</span>
                      <span className="tag">
                        <img
                          alt="Image - image"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/image.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Italy
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Scalable design system</p>
                          <p>Boosted engagement & satisfaction</p>
                          <p>Scalable UI for global growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="scrambly-rewarded-discovery-platform-for-games-and-apps/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624328"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Rectangle-34624328.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Illia Frantsevskyi</p>
                            <span>CTO & Co-founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          They demonstrated a high level of expertise and
                          efficiency in every phase of the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="hyperbridge-redefining-cross-chain-connectivity/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Cover-1-3.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Cover-1-3.png"
                        />
                        <img
                          alt="Hyperbridge – redefining cross-chain connectivity - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Cover-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website redesign</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Hyperbridge – redefining cross-chain connectivity
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Hyperbridge</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Structured experience that boosts conversions</p>
                          <p>Visual identity that builds trust</p>
                          <p>Scalable system for faster rollout</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="hyperbridge-redefining-cross-chain-connectivity/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="superhedge-principal-protected-defi-structured-vaults/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-4.png"
                        />
                        <img
                          alt="SuperHedge – principal-protected DeFi structured vaults - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/IMg-Wrapper-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX audit #Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      SuperHedge – principal-protected DeFi structured vaults
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">SuperHedge</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>2x faster feature implementation</p>
                          <p>User-first approach in a complex landscape</p>
                          <p>Strategic budget allocation for max impact</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="superhedge-principal-protected-defi-structured-vaults/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pragmatike-it-talent-recruitment-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-Preview-7.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-Preview-7.png"
                        />
                        <img
                          alt="Pragmatike – IT talent recruitment platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website redesign #No code development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Pragmatike – IT talent recruitment platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Pragmatike</span>
                      <span className="tag">
                        <img
                          alt="Image - FR - France"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/FR-France.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        France
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>3 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced brand alignment</p>
                          <p>Improved website performance</p>
                          <p>Cost-effective development</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pragmatike-it-talent-recruitment-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - image"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/image.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Mathias Guigui</p>
                            <span>Co-Founder, Pragmatike</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          When working on your website, always do it with
                          professionals. Big thanks to Phenomenon Studio for the
                          work put in!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="paradigm-website-for-low-code-software-developers/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-6-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-6-scaled.png"
                        />
                        <img
                          alt="Paradigm – website for low-code software developers - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-1-scaled.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website Development #Website Redesign #Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Paradigm – website for low-code software developers
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Paradigm</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/fi_4628635.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>3 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced brand positioning</p>
                          <p>
                            Recognized by Awwwards with an Honorable Mention
                          </p>
                          <p>Increased user engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="paradigm-website-for-low-code-software-developers/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="wolf-games-case-maker-studio-ai-driven-crime-story-creation/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-3-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-3-scaled.png"
                        />
                        <img
                          alt="Wolf Games case maker studio – AI-<wbr>driven crime story creation - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Case-preview.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#ElectricalEngineering #SystemInstallation #ProcurementSolutions</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Wolf Games case maker studio – AI-
                      <wbr />
                      driven crime story creation
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Wolf Games</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Built with scalability in mind</p>
                          <p>Seamless UX for writers and developers</p>
                          <p>AI-Driven complex storytelling</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="wolf-games-case-maker-studio-ai-driven-crime-story-creation/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="domore-mobile-redesign-for-a-ticket-subscription-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/IMg-Wrapper-3-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/IMg-Wrapper-3-scaled.png"
                        />
                        <img
                          alt="DoMORE — mobile redesign for a ticket subscription platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/05/Case-preview-mobile-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      DoMORE — mobile redesign for a ticket subscription
                      platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Domore</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            React, TypeScript, Vite, Tanstack query, Radix
                            Primitives, Stripe, Zod, React-hook-form, Tanstack
                            Router, Ky
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Boosted user retention</p>
                          <p>Memorable brand experience</p>
                          <p>Enhanced usability</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="domore-mobile-redesign-for-a-ticket-subscription-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="bliss-creek-admin-panel-how-a-custom-dashboard-design-simplified-user-management-and-streamlined-transaction-cycles/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-8.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-8.png"
                        />
                        <img
                          alt="Bliss Creek admin panel – how a custom dashboard design simplified user management and streamlined transaction cycles - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-1-3.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product discovery #Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Bliss Creek admin panel – how a custom dashboard design
                      simplified user management and streamlined transaction
                      cycles
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Bliss Creek</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        NJ, USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            React, Next, Flowbite for ui, Firebase, Tailwindcss,
                            Redux, React Hook Form
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>2x faster user onboarding and management</p>
                          <p>Reduced admin task completion time</p>
                          <p>
                            Enhanced data accuracy and compliance across all
                            cycles
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="bliss-creek-admin-panel-how-a-custom-dashboard-design-simplified-user-management-and-streamlined-transaction-cycles/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="value-chain-empowering-investment-through-rwa-tokenization-and-ai-driven-insights/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-7-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-7-1.png"
                        />
                        <img
                          alt="Value Chain – empowering investment through RWA tokenization and AI-driven insights - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-1-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Website design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Value Chain – empowering investment through RWA
                      tokenization and AI-driven insights
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Value chain</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Streamlined asset accessibility</p>
                          <p>Broadened investor participation</p>
                          <p>Built with scalability in mind</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="value-chain-empowering-investment-through-rwa-tokenization-and-ai-driven-insights/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="adflux-redesigned-marketing-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/04/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/04/Case-Preview-2.png"
                        />
                        <img
                          alt="AdFlux – redesigned marketing platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/04/Case-Preview-mob-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product redesign</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      MedCore Hospital — Electrical Installation & Backup System Integration
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">AdFlux Co.</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Vite, React, Typescript, Zustand, Tanstack Query,
                            React Router Dom, i18next
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>60% faster campaign launch</p>
                          <p>Real-time analytics for smarter optimization</p>
                          <p>Strengthened competitive position</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="adflux-redesigned-marketing-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pragmatike-connecting-businesses-with-top-remote-tech-talent/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-4-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-4-1.png"
                        />
                        <img
                          alt="Pragmatike – connecting businesses with top remote tech talent - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-4-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Pragmatike – connecting businesses with top remote tech
                      talent
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Pragmatike</span>
                      <span className="tag">
                        <img
                          alt="Image - 197560"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/197560.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        France
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced brand alignment</p>
                          <p>Improved website performance</p>
                          <p>Cost-effective development</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pragmatike-connecting-businesses-with-top-remote-tech-talent/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1727944513081-300x300"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/1727944513081-300x300-1.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Mathias Guigui</p>
                            <span>Co-Founder, Pragmatike</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          When working on your website, always do it with
                          professionals. Big thanks to Phenomenon Studio for the
                          work put in!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="both-homes-co-parenting-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-12.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-12.png"
                        />
                        <img
                          alt="Both Homes – co-parenting mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Picture-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product Discovery #MVP Building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Both Homes – co-parenting mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Both Homes</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Validated key assumptions</p>
                          <p>Built with scalability in mind</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="both-homes-co-parenting-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="airportr-2-0-luggage-carrying-service-website-redesign/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-Preview-2.png"
                        />
                        <img
                          alt="Airportr 2.0 – luggage carrying service website redesign - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-Preview-mob.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website redesign</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Airportr 2.0 – luggage carrying service website redesign
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Airportr</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        United Kingdom
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Higher conversion rates</p>
                          <p>Increased transparency</p>
                          <p>Better mobile usability</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="airportr-2-0-luggage-carrying-service-website-redesign/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="shaga-web3-cloud-gaming-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-21.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-21.png"
                        />
                        <img
                          alt="Shaga – web3 cloud gaming platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/IMg-Wrapper-34.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website Design #Website Development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Shaga – web3 cloud gaming platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Shaga.xyz</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved conversion opportunities</p>
                          <p>Simple maintenance enabled</p>
                          <p>Immersive user engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="shaga-web3-cloud-gaming-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle-34624328"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Rectangle-34624328.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Daeshawn Ballard</p>
                            <span>Co-Founder & COO, Shaga Labs, Inc.</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Their blend of punctuality, open communication, and
                          unwavering dedication has made every deadline feel
                          achievable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="paradigm-Procurement & Supply-for-low-code-software-developers/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-35.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-35.png"
                        />
                        <img
                          alt="Paradigm – Procurement & Supply for low-code software developers - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-35.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Paradigm – Procurement & Supply for low-code software developers
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Paradigm</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Customer loyalty and trust</p>
                          <p>Clearer brand positioning</p>
                          <p>Improved brand perception</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="paradigm-Procurement & Supply-for-low-code-software-developers/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="venator-Procurement & Supply-for-a-futuristic-crypto-game/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-37.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-37.png"
                        />
                        <img
                          alt="VENATOR – Procurement & Supply for a futuristic crypto game - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-37.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      VENATOR – Procurement & Supply for a futuristic crypto game
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Venator</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved brand perception</p>
                          <p>Refined brand application</p>
                          <p>Increased customer loyalty and trust</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="venator-Procurement & Supply-for-a-futuristic-crypto-game/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Craig Kirk</p>
                            <span>Co-Founder, Gaming Company</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I’ve been impressed with the quality of work
                          Phenomenon Studio has provided and their ability to
                          deliver within deadlines. The team have supplied
                          strong project management and communication throughout
                          the engagement. I appreciate the team's attention to
                          detail.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="venator-promo-site-for-a-futuristic-crypto-game/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Cover-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Cover-1.png"
                        />
                        <img
                          alt="VENATOR – promo site for a futuristic crypto game - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Cover-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website Design #Website Development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      VENATOR – promo site for a futuristic crypto game
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Venator</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>2 months</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Effective waitlist growth strategy</p>
                          <p>Enhanced brand credibility</p>
                          <p>Tailored user experience</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="venator-promo-site-for-a-futuristic-crypto-game/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Craig Kirk</p>
                            <span>Co-Founder, Gaming Company</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I’ve been impressed with the quality of work
                          Phenomenon Studio has provided and their ability to
                          deliver within deadlines. The team have supplied
                          strong project management and communication throughout
                          the engagement. I appreciate the team's attention to
                          detail.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="zest-unleashing-a-healthier-you/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-6.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-6.png"
                        />
                        <img
                          alt="Zest — unleashing a healthier you - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-6.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product discovery #MVP building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Zest — unleashing a healthier you
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Zest</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Reduced  development costs</p>
                          <p>Simplification of complex health concepts</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="zest-unleashing-a-healthier-you/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - image@2x"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/image%402x-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Julia Cooney</p>
                            <span>CEO of Zest</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          The client expressed high satisfaction with the team’s
                          proficiency, facilitating the prompt and timely
                          completion of the design within the initially
                          estimated timeframes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="creatorland-revolutionizing-networking-for-gen-z-creators/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-1-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-1-2.png"
                        />
                        <img
                          alt="Creatorland – revolutionizing networking for Gen Z creators - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-mob-6.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Creatorland – revolutionizing networking for Gen Z
                      creators
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Creatorland</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Increased creator engagement</p>
                          <p>2x faster selection of brands and creators</p>
                          <p>Seamless mobile experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="creatorland-revolutionizing-networking-for-gen-z-creators/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="aires-ai-powered-crm-for-real-estate/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-3.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-3.png"
                        />
                        <img
                          alt="AIRES – AI-powered CRM for real estate - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-mob-3.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      AIRES – AI-powered CRM for real estate
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">AIRES</span>
                      <span className="tag">
                        <img
                          alt="Icon - canada"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/canada.svg"
                          style={{}}
                        />
                        Canada
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced sales efficiency</p>
                          <p>Unified platform for all users</p>
                          <p>Reduced development costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="aires-ai-powered-crm-for-real-estate/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="globalx-promo-website-for-dex/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-6.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-6.png"
                        />
                        <img
                          alt="GlobalX – promo website for DEX - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-mob-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      GlobalX – promo website for DEX
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">GlobalX</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Typescript, React, Vite, Framer motion, Tanstack
                            query, Radix UI, Zod
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>2 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Increased user confidence</p>
                          <p>Simplified user experience</p>
                          <p>Improved engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="globalx-promo-website-for-dex/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624326"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Rectangle-34624326-2.png"
                          style={{
                            aspectRatio: "1.0064102564103",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Joshua Caleb</p>
                            <span />
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Working with the team on our landing page was
                          incredibly productive and enjoyable. From the very
                          beginning, the team demonstrated high professionalism,
                          thoroughly understanding our goals and requirements.
                          Not only did they create an attractive and modern
                          design, but they also made the site user-friendly and
                          functional.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="sway-finance-cash-management-application-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-1-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-1-4.png"
                        />
                        <img
                          alt="Sway Finance – cash management application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-mob-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Sway Finance – cash management application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Sway Finance</span>
                      <span className="tag">
                        <img
                          alt="Image - ch-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/ch-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Switzerland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Validated key assumptions</p>
                          <p>Early  user feedback</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="sway-finance-cash-management-application-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="onetext-sms-marketing-tool/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-2.png"
                        />
                        <img
                          alt="OneText – website redesign for SMS marketing tool - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      OneText – website redesign for SMS marketing tool
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">OneText</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>3 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Increased user engagement</p>
                          <p>Improved website performance</p>
                          <p>Optimized user experience with A/B tests</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="onetext-sms-marketing-tool/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="tabela-a-management-system-for-restaurants/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Screen-1-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Screen-1-1.png"
                        />
                        <img
                          alt="Tabela – management system for restaurants - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-mob-6.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Tabela – management system for restaurants
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Tabela LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Reduced development costs</p>
                          <p>Data-driven decision making</p>
                          <p>Optimized reservation system</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="tabela-a-management-system-for-restaurants/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="sway-finance-cash-management-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-38.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-38.png"
                        />
                        <img
                          alt="Sway Finance – Procurement & Supply for cash management application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-38.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Sway Finance – Procurement & Supply for cash management application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Sway Finance</span>
                      <span className="tag">
                        <img
                          alt="Image - ch-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/ch-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Switzerland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved brand perception</p>
                          <p>Clearer brand positioning</p>
                          <p>Reduced maintance costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="sway-finance-cash-management-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="globalx-dex/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-Preview.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-Preview.png"
                        />
                        <img
                          alt="GlobalX – DEX - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-Preview-mob.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>
                        #Web app design #MVP building #Web development
                        #Blockchain development #Dedicated team
                      </p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      GlobalX – DEX
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">GlobalX</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635 (3)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-3.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            TypeScript, React, Wagmi, Ether.js, Tanstack Query,
                            Radix UI, Framer Motion, D3.Js, Redux, GraphQL,
                            Apollo, Zustand, Magic SDK, Jest
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced usability</p>
                          <p>Responsive performance</p>
                          <p>Scalability and security</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="globalx-dex/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624326"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Rectangle-34624326-2.png"
                          style={{
                            aspectRatio: "1.0064102564103",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Joshua Caleb</p>
                            <span />
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          We reached out to this team for the development of our
                          cryptocurrency exchange web app (DEX Swap), and the
                          result exceeded all expectations. We’re very pleased
                          with how everything turned out in terms of both
                          functionality and design. The app works flawlessly,
                          and its interface is very user-friendly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="e-maganer-promo-website-for-mobile-app-for-e-sim-management/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.jpg"
                        />
                        <img
                          alt="E-manager – promo website for mobile app for e-sim management - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      E-manager – promo website for mobile app for e-sim
                      management
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">E-manager</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>32,000+ new users attracted</p>
                          <p>80% page scroll depth</p>
                          <p>User-friendly and attractive structure</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="e-maganer-promo-website-for-mobile-app-for-e-sim-management/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="assetario-Procurement & Supply-for-the-saas-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-preview-40.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-preview-40.png"
                        />
                        <img
                          alt="Assetario – Procurement & Supply for the SaaS platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-preview-40.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Assetario – Procurement & Supply for the SaaS platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Assetario</span>
                      <span className="tag">
                        <img
                          alt="Image - istockphoto-905332922-612x612-removebg-preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/istockphoto-905332922-612x612-removebg-preview.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Slovakia
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Improved brand perception</p>
                          <p>Reduced maintance costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="assetario-Procurement & Supply-for-the-saas-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Avatar-8"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Avatar-8-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Anna Figura</p>
                            <span>Product Manager, Assetario</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio was able to build and deliver a
                          fully-functioning and visually-appealing product, much
                          to the client’s and customers' delight. The team was
                          highly communicative, but internal stakeholders were
                          particularly impressed with their professionalism and
                          strict adherence to timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="core-developer-the-platform-for-learning-to-program/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-8.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-8.png"
                        />
                        <img
                          alt="Core Developer – the platform for learning how to program - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-mob-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#web app design #web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Core Developer – the platform for learning how to program
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Core Developer</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Built with scalability in mind</p>
                          <p>Enhanced Student-Teacher Interaction</p>
                          <p>Flexible learning & subscription models</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="core-developer-the-platform-for-learning-to-program/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="sinport-singapore-airport-navigation-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-preview-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-preview-4.png"
                        />
                        <img
                          alt="Sinport – Singapore Airport navigation app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-preview-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#MVP building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Sinport – Singapore Airport navigation app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">APNAVS, Singapore</span>
                      <span className="tag">
                        <img
                          alt="Icon - flag-for-singapore-svgrepo-com 1"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/flag-for-singapore-svgrepo-com-1.svg"
                          style={{}}
                        />
                        Singapore
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Validated key assumptions</p>
                          <p>Streamlined user experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="sinport-singapore-airport-navigation-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="greenow/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-6.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-6.png"
                        />
                        <img
                          alt="Greenow – wind energy made simple - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-mob-4-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Rapid MVP development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Greenow – wind energy made simple
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Greenow</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Bubble</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster time-to-market</p>
                          <p>Secured investor confidence</p>
                          <p>Validated key assumptions</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="greenow/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="assetario-website-for-the-best-in-class-platform-for-app-personalization/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/12/Media-6-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/12/Media-6-scaled.png"
                        />
                        <img
                          alt="Assetario – website for the best in class platform for app personalization - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/12/Case-Preview-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#website design #no code development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Assetario – website for the best in class platform for app
                      personalization
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Assetario</span>
                      <span className="tag">
                        <img
                          alt="Image - istockphoto-905332922-612x612-removebg-preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/istockphoto-905332922-612x612-removebg-preview.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Slovakia
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>2 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Tailored  user experience</p>
                          <p>Established online presence</p>
                          <p>Translated complex solutions into illustrations</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="assetario-website-for-the-best-in-class-platform-for-app-personalization/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 6dd5fa6feda556d9602b57ac064ce8ff-300x300"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/12/6dd5fa6feda556d9602b57ac064ce8ff-300x300-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Anna Figura</p>
                            <span>Product Manager, Assetario</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio was able to build and deliver a
                          fully-functioning and visually-appealing product, much
                          to the client and customers' delight. The team was
                          highly communicative, but internal stakeholders were
                          particularly impressed with their professionalism and
                          strict adherence to timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="mindtales-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-7-scaled.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-7-scaled.jpg"
                        />
                        <img
                          alt="MindTales – mental health app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Frame-846Mobile-2.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product discovery #MVP Building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      MindTales – mental health app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">MindTales</span>
                      <span className="tag">
                        <img
                          alt="Image - round-united-arab-emirates-flag-isolated-on-white-background-round-national-flag-of-uae-vector-removebg-preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/10/round-united-arab-emirates-flag-isolated-on-white-background-round-national-flag-of-uae-vector-removebg-preview.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UAE
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>$750K investment secured</p>
                          <p>Streamlined therapist-patient interaction</p>
                          <p>Efficient MVP development</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="mindtales-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="copper-rock/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Copper-Rock-all-cases-1-scaled-e1732537621919.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Copper-Rock-all-cases-1.jpeg"
                        />
                        <img
                          alt="Copper Rock – golf community booking website - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Copper-Rock-all-casesMobile.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply #Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Copper Rock – golf community booking website
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Copper Rock</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Tailored user experience</p>
                          <p>Established online presence</p>
                          <p>Translated complex solutions into illustrations</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="copper-rock/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Jason Timpson</p>
                            <span>Marketing Director, Copper Rock</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I was impressed at their knowledge and skillset in
                          bringing to life every idea we had.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="eduwerks-app-for-online-education/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="Eduwerks – e-learning platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Design prototype #Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Eduwerks – e-learning platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Eduwerks LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Tailored user experience</p>
                          <p>Solved real-world pain points</p>
                          <p>Built for engagement and simplicity</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="eduwerks-app-for-online-education/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="rapida-Procurement & Supply-for-the-delivery-service-Procurement & Supply/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-42.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-42.png"
                        />
                        <img
                          alt="Rapida – Procurement & Supply for the delivery service - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Mobile-9-2-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Rapida – Procurement & Supply for the delivery service
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Rapida</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Packaging as a strategic communication tool</p>
                          <p>Customer loyalty and trust</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="rapida-Procurement & Supply-for-the-delivery-service-Procurement & Supply/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="wayels/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-7-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-7-scaled.png"
                        />
                        <img
                          alt="Wayels – courier system dashboard - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Wayels – courier system dashboard
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Wayels</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Optimized delivery operations</p>
                          <p>Real-time visibility and control</p>
                          <p>Data-driven decision-making</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="wayels/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="neap-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Neap-App-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Neap-App-NewPC.jpg"
                        />
                        <img
                          alt="Neap – mental health mobile app for diabetics - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Neap-App-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>
                        #Procurement & Supply #Electrical Installation & Commissioning #Mobile App Development
                      </p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Neap – mental health mobile app for diabetics
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Neap</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Emotionally supportive design</p>
                          <p>Gamification for engagement</p>
                          <p>Research-based UX</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="neap-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>George Fry</p>
                            <span>Managing Director</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio works at speed and is extremely
                          punctual with timelines. They deliver top-notch
                          outcomes with exceptional designs. Overall, their
                          excellent communication skills ensure a smooth
                          project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="dostuff/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Dostuff@3x.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Dostuff@2x.jpg"
                        />
                        <img
                          alt="DoStuff – events booking service - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Dostuff.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      DoStuff – events booking service
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">DoStuff</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635 (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-2.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Streamlined event discovery</p>
                          <p>Personalized entertainment experience</p>
                          <p>Consistent yet localized design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="dostuff/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="easily-promo-website-for-the-super-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-preview-2-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-preview-2-1.png"
                        />
                        <img
                          alt="Easily – promo website for the super app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-cover-1-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Easily – promo website for the super app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Easily, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced user engagement</p>
                          <p>Improved conversion rates</p>
                          <p>Strong brand positioning</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="easily-promo-website-for-the-super-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="e-manager-mobile-app-for-e-sim-management/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-8-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-8-scaled.png"
                        />
                        <img
                          alt="E-manager – mobile app for e-sim management - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-mob-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#MVP development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      E-manager – mobile app for e-sim management
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">E-manager, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Strong user base and engagement</p>
                          <p>High user satisfaction</p>
                          <p>Improved task efficiency</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="e-manager-mobile-app-for-e-sim-management/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="saifast-promo-website-for-logistic-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-5.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-5.png"
                        />
                        <img
                          alt="Saifast – promo website for logistics platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Saifast – promo website for logistics platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Saifast LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>15%+ increase in user engagement</p>
                          <p>Significant increase in user interaction</p>
                          <p>40% reduction in bounce rate</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="saifast-promo-website-for-logistic-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="cointax-web-app-promo-website/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-8.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-8.png"
                        />
                        <img
                          alt="CoinTax – web app promo website - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      CoinTax – web app promo website
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">CryptoTech</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>55,5K+ click-throughs on key CTA buttons</p>
                          <p>Strong and consistent monthly traffic</p>
                          <p>Exceptional user trust and satisfaction</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="cointax-web-app-promo-website/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="cointax-crypto-tax-reporting-tool/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="CoinTax – crypto tax reporting tool - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      CoinTax – crypto tax reporting tool
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">CryptoTech</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>250+ supported crypto assets</p>
                          <p>Optimized tax reporting accuracy</p>
                          <p>Consistent user engagement growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="cointax-crypto-tax-reporting-tool/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="uver-promo-website-for-mobile-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.png"
                        />
                        <img
                          alt="UVER – promo website for mobile application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      UVER – promo website for mobile application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">UVER, LLC</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>15,000+ early sign-ups within 60 days</p>
                          <p>Strong brand trust from day one</p>
                          <p>Optimized mobile-first experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="uver-promo-website-for-mobile-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="keap-family-budgeting-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Cover-all-cases.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Cover-all-cases.png"
                        />
                        <img
                          alt="Keap – family budgeting mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Cover-mobile.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Keap – family budgeting mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Keap, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>$750K investment secured post-MVP</p>
                          <p>Clear financial control for families</p>
                          <p>Scalable foundation for future growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="keap-family-budgeting-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ectopanel-promo-website-for-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/07/Cover-all-cases@2x.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/07/Cover-all-cases@2x.png"
                        />
                        <img
                          alt="Ectopanel – promo website for mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/07/Cover-all-cases%402x.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ectopanel – promo website for mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ectopanel LCC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>23,000+ new users after launch</p>
                          <p>High content engagement across the page</p>
                          <p>Increased retention through intuitive UX</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ectopanel-promo-website-for-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="keap-promo-website-for-budgeting-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-7-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-7-scaled.png"
                        />
                        <img
                          alt="Keap – promo website for budgeting mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Keap – promo website for budgeting mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Keap, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>21% increase in new user registrations</p>
                          <p>
                            Stronger user retention through relatable
                            storytelling
                          </p>
                          <p>Improved conversion with interactive content</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="keap-promo-website-for-budgeting-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="jocreate-promo-website-for-web-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Preview-all-cases.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Preview-all-cases.png"
                        />
                        <img
                          alt="JoCreate – promo website for web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Preview-all-cases.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      JoCreate – promo website for web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">JoCreate LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>72% User Retention</p>
                          <p>Clear Product Positioning</p>
                          <p>High Conversion Rate</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="jocreate-promo-website-for-web-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="cracker-cybersecurity-web-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-4-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-4-scaled.png"
                        />
                        <img
                          alt="Cracker – cybersecurity web application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Design prototype #Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Cracker – cybersecurity web application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Cracker LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Over 10,000 active users</p>
                          <p>High user retention</p>
                          <p>Strong customer satisfaction</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="cracker-cybersecurity-web-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="boost/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="BOOST – income tracker mobile app for freelancers - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#MVP development #Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      BOOST – income tracker mobile app for freelancers
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Boost</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Simplified financial insights for users</p>
                          <p>Engaging and interactive experience</p>
                          <p>Modern and user-friendly design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="boost/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="punk-panda-swap-stake-and-farm-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Desktop@2x-1.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Desktop@2x-1.jpg"
                        />
                        <img
                          alt="Punk Panda – swap, stake, and farming platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Desktop1.5-1.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Punk Panda – swap, stake, and farming platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Punk Panda</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Over 1 million users engaged</p>
                          <p>Increased daily unique visitors</p>
                          <p>Robust crypto trading and staking features</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="punk-panda-swap-stake-and-farm-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Avatar"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Avatar-9.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Joshua Caleb</p>
                            <span>Chief Innovation Officer at Divi Labs</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I've been contracting Phenomenon Studio for design and
                          development projects for the last two years, and I am
                          yet to find a better agency that is more capable when
                          it comes to production-quality design and development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pnswap-token-exchange-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="PNSwap – token exchange platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      PNSwap – token exchange platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">PNSwap</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>1.2 million dollars in early-stage investments</p>
                          <p>User base growth on the horizon</p>
                          <p>
                            Simplified token exchange and increased brand
                            awareness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pnswap-token-exchange-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="medicare-digital-doctor-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-7-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-7-scaled.png"
                        />
                        <img
                          alt="Medicare – digital doctor mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Medicare – digital doctor mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Medicare LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - canada"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/canada.svg"
                          style={{}}
                        />
                        Canada
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Easy booking and doctor access</p>
                          <p>Family health tracking made simple</p>
                          <p>Clean and intuitive design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="medicare-digital-doctor-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="healher-an-app-with-personalized-health-plans/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/03/Case-Preview-9-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/03/Case-Preview-9-scaled.png"
                        />
                        <img
                          alt="Healher – an app with personalized health plans - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/03/Case-Preview-mob-9.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Healher – an app with personalized health plans
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Healher</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>56% active users in the last 30 days</p>
                          <p>
                            Personalized health plans based on smart wristband
                            data
                          </p>
                          <p>Comprehensive and user-friendly design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="healher-an-app-with-personalized-health-plans/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="kollo-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Kollo-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Kollo-NewPC.jpg"
                        />
                        <img
                          alt="Kollo – financial mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Kollo-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>
                        #Procurement & Supply #Electrical Installation & Commissioning #Mobile app development
                      </p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Kollo – financial mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Kollo</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Ready-to-use design solution for financial
                            monitoring
                          </p>
                          <p>
                            Personalized savings strategies and recurring
                            payments
                          </p>
                          <p>Integrated analytics and bank account linkage</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="kollo-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="appsent-application-developers-company/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/08/Case-preview-44.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/08/Case-preview-44.png"
                        />
                        <img
                          alt="Appsent – Procurement & Supply for the application developers company - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/08/Mobile-6-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Appsent – Procurement & Supply for the application developers company
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Appsent</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved brand perception</p>
                          <p>Increased customer loyalty and trust</p>
                          <p>Clearer brand positioning</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="appsent-application-developers-company/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="jocreate-application-for-creating-nft-collections/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <img
                          alt="JoCreate – application for creating NFT collections - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-1-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      JoCreate – application for creating NFT collections
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">JoCreate LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>56% Active Users in the Last 30 Days</p>
                          <p>
                            Personalized Health Plans Based on Smart Wristband
                            Data
                          </p>
                          <p>Comprehensive and User-Friendly Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="jocreate-application-for-creating-nft-collections/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="airportr/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-all-cases-1-scaled.jpg-1.webp"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-all-cases.jpg"
                        />
                        <img
                          alt="AirPortr – luggage carrying service for traveling - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-all-cases-1-scaled.jpg-1.webp"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      AirPortr – luggage carrying service for traveling
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Airportr</span>
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Logistics</span>
                      <span className="tag">
                        <img
                          alt="Icon - UK"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/UK.svg"
                          style={{}}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Increased Conversion Rates through Simplified
                            Checkout
                          </p>
                          <p>
                            Enhanced Brand Awareness with Bold Visual Solutions
                          </p>
                          <p>Improved User Experience Across Devices</p>
                          <p />
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="airportr/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1666209242049-300x300"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/10/1666209242049-300x300-1.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Oliver Ahad</p>
                            <span>CMO, Airportr</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio has demonstrated great work. The
                          visual look and feel of the new site architecture
                          conveys a mature and professional aesthetic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="uver/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/10/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/10/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="UVER – universities aggregator mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/10/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      UVER – universities aggregator mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Uver LLC</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Reduced consultant workload through self-service
                            features
                          </p>
                          <p>
                            Higher application submission rates with simplified
                            flows
                          </p>
                          <p>
                            Increased engagement thanks to dual search options
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="uver/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="frozeverse-metaverse-vr-game/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Frozeverse-Behance-Cover-1retina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Frozeverse-Behance-Cover-1pc-scaled.jpg"
                        />
                        <img
                          alt="Frozeverse – metaverse VR game - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Frozeverse-Behance-Cover-1mobile.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Frozeverse – metaverse VR game
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Frozeverse Softworks</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Unique and high-quality game assets and visuals</p>
                          <p>MVP NFT marketplace with seamless integration</p>
                          <p>Positive feedback and strong investor interest</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="frozeverse-metaverse-vr-game/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="glume-healthcare-mobile-app-for-diabetics/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-2-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-2-scaled.png"
                        />
                        <img
                          alt="Glume – healthcare mobile app for diabetics - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-1-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Glume – healthcare mobile app for diabetics
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Glume LLC</span>
                      <span className="tag">
                        <img
                          alt="Image - de-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/de-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Germany
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>15.3% average retention rate after launch</p>
                          <p>
                            High satisfaction with redesigned smart assistant
                          </p>
                          <p>
                            Tailored user experience from onboarding to
                            recommendations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="glume-healthcare-mobile-app-for-diabetics/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="webb/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Cover-all-casesretina-1.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Cover-all-cases@2xx.jpg"
                        />
                        <img
                          alt="WEBB – web3 community platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Cover-all-casesmob-1-1.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      WEBB – web3 community platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">WEBB</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Improved user engagement through personalized
                            dashboards
                          </p>
                          <p>Boosted retention with gamified experience</p>
                          <p>Seamless integration of wearable device data</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="webb/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="radar-web3-projects-aggregator/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-Preview-3-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-Preview-3-scaled.png"
                        />
                        <img
                          alt="RADAR – web3 projects aggregator - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-Preview-mob-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      RADAR – web3 projects aggregator
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">RADAR</span>
                      <span className="tag">
                        <img
                          alt="Image - pl-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/pl-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Poland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Quick access to trending Web3 projects</p>
                          <p>+25% engagement thanks to real-time alerts</p>
                          <p>Streamlined asset tracking across categories</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="radar-web3-projects-aggregator/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="meby/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Meby-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Meby-NewPC.jpg"
                        />
                        <img
                          alt="Meby – meditation mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Meby-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Meby – meditation mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Meby</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Increased user engagement through onboarding
                            redesign
                          </p>
                          <p>
                            Boosted retention with a refined mood-tracking
                            experience
                          </p>
                          <p>
                            Stronger emotional connection through updated visual
                            language
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="meby/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="mptbox-Procurement & Supply-for-the-vr-driven-metaverse/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/IMg-Wrapper-1-60.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/IMg-Wrapper-1-60.png"
                        />
                        <img
                          alt="Mptbox – Procurement & Supply for the VR-driven metaverse - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/IMg-Wrapper-1-60.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Mptbox – Procurement & Supply for the VR-driven metaverse
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Mptbox</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Improved brand perception</p>
                          <p>Scalable brand assets</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="mptbox-Procurement & Supply-for-the-vr-driven-metaverse/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="phose-protocol-cash-management-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Frame-758530987retina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Frame-758530987pc.jpg"
                        />
                        <img
                          alt="Phose Protocol – Procurement & Supply for cash management application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Frame-758530987mobile.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Phose Protocol – Procurement & Supply for cash management application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Phose Protocol</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Streamlined brand rollout with complete identity
                            guidelines
                          </p>
                          <p>Increased brand recognition</p>
                          <p>Elevated market trust</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="phose-protocol-cash-management-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ucked-Procurement & Supply-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-37.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-37.png"
                        />
                        <img
                          alt="Ucked – Procurement & Supply for mobile application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-mobile-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ucked – Procurement & Supply for mobile application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ucked</span>
                      <span className="tag">
                        <img
                          alt="Icon - Clip path group"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Clip-path-group.svg"
                          style={{}}
                        />
                        Australia{" "}
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Ignited social bonding with a bold, irreverent
                            identity
                          </p>
                          <p>
                            Boosted recognition by 29% through ecosystem
                            Procurement & Supply
                          </p>
                          <p>
                            Energized community engagement via playful mascots
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ucked-Procurement & Supply-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="saifast/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="Saifast – logistics web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Saifast – logistics web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Saifast</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Clean and modern internal system for logistics teams
                          </p>
                          <p>Simplified freight creation to save user time</p>
                          <p>
                            Clear focus on key freight management and tracking
                            features
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="saifast/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="nouri/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/12/Case-Preview-2-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/12/Case-Preview-2-scaled.png"
                        />
                        <img
                          alt="Nouri – connection companion app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/12/Case-Preview-mob-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Nouri – connection companion app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">ZooWhoo International</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Created a seamless, appealing, and engaging user
                            experience
                          </p>
                          <p>Redesigned major flows for better usability</p>
                          <p>
                            Added new key features that made Nouri stand out
                          </p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="nouri/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="molequle/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Molequle-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Molequle-NewPC.jpg"
                        />
                        <img
                          alt="Molequle – CDXP web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Molequle-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Molequle – CDXP web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Molequle</span>
                      <span className="tag">
                        <img
                          alt="Image - de-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/de-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Germany
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Intuitive system for managing employee & customer
                            data
                          </p>
                          <p>
                            Custom flows for different data types, built with
                            CDXP principles
                          </p>
                          <p>
                            Designed to support marketers & developers in
                            understanding their audience
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="molequle/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ectopanel/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-4-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-4-scaled.png"
                        />
                        <img
                          alt="Ectopanel – solar panels control mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ectopanel – solar panels control mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ectopanel</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Accelerated solar ROI through simplified sell‑back
                            flows
                          </p>
                          <p>
                            Increased system engagement with one‑tap power
                            controls
                          </p>
                          <p>
                            Boosted user confidence via clear energy insights
                          </p>
                          <p />
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ectopanel/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="learnt/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-1-1-scaled.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-6.jpg"
                        />
                        <img
                          alt="Learnt – online learning web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-6.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Learnt – online learning web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Learnt</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Streamlined tutor search boosted efficiency</p>
                          <p>
                            Visual clarity & friendly UX increased user
                            engagement{" "}
                          </p>
                          <p>Responsive UI expanded mobile reach</p>
                          <p />
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="learnt/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1746368208154"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/1746368208154-1.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Eliza Morrison</p>
                            <span>COO & Founder, Learnt</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Their execution is splendid and their excellent
                          communication keeps everybody aligned. It's super easy
                          to engage with the team at Phenomenon. Regular
                          communication via Slack made it easy to stay on the
                          same page about timelines and updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="triffic/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-1-2-scaled.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-7.jpg"
                        />
                        <img
                          alt="Triffic – AR mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-7.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Triffic – AR mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Coinerz Group Internal </span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Gamified AR engagement increased user activity</p>
                          <p>
                            Clear reward flows boosted clarity & conversions
                          </p>
                          <p>Micro-referrals unlocked network growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="triffic/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1583813811533"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/1583813811533.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Alex Shepherd</p>
                            <span>CTO, Coinerz Group</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          All communication was clear and open, and all team
                          members worked very efficiently towards our goals. The
                          work ethic and UX skills of the whole team really blew
                          us away.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`infinite-scroll-holder cases_wrap grid gap-80 gap-48-mob bg--white tabs-pane ${activeTab === "web-app" ? "is-active" : ""}`}
                  data-infinite-scroll-css="check-active"
                  data-tabs-pane="web-app"
                >
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="isora-governance-risk-and-compliance-assessment-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-5.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-5.png"
                        />
                        <img
                          alt="Isora – optimizing governance, risk & compliance for top institutions - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-mob.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>
                        #SystemDesign #ElectricalUpgrade
                      </p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Isora – optimizing governance, risk & compliance for top
                      institutions
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">SaltyCloud</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        Texas, USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>React, Python, AWS</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>12 months, ongoing</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>2x faster user workflows</p>
                          <p>50% shorter time-to-market</p>
                          <p>Nominated for UX Design Award 2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="isora-governance-risk-and-compliance-assessment-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2.png"
                        />
                        <img
                          alt="KlickEx – frictionless cross-<wbr>border payments for the Pacific Island communities - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      KlickEx – frictionless cross-
                      <wbr />
                      border payments for the Pacific Island communities
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Nomupay</span>
                      <span className="tag">
                        <img
                          alt="Icon - Clip path group"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Clip-path-group.svg"
                          style={{}}
                        />
                        New Zealand
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Next.js, TypeScript, React Redux</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 months</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>+35% "Add Money" conversion rate</p>
                          <p>+30% "Money Transfer" completion rate</p>
                          <p>
                            Raised $1M in additional funding within 6 months
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Case preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-preview-.webp"
                          style={{
                            aspectRatio: "1.1428571428571",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Izek Lal</p>
                            <span>Country manager</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          We have seen a significant improvement in terms of
                          mobile friendliness and the general flow ofthe system.
                          I believe this has contributed significantly to the
                          growth of our business. Manythanks, Phenomenon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="airlinesim-realistic-online-airline-management-simulation/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-4.png"
                        />
                        <img
                          alt="AirlineSim — realistic online airline management simulation - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-mobile-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      AirlineSim — realistic online airline management
                      simulation
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Airline sim</span>
                      <span className="tag">
                        <img
                          alt="Image - de-circle-01.png"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/de-circle-01.png.webp"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Germany
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Vite, React, Typescript, SCSS, Framer motion, React
                            Router, Redux
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster time-to-market</p>
                          <p>Built with scalability in mind</p>
                          <p>Deeper engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="airlinesim-realistic-online-airline-management-simulation/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="qurtuba-online-school-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-9.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-9.png"
                        />
                        <img
                          alt="Qurtuba – online school platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Media-1-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Qurtuba – online school platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Qurtuba</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635 (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-2-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Johannesburg, South Africa
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Typescript, React, Vite, MUI, Redux, i18next,
                            Firebase, Auth0, NestJS
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>95% satisfaction in progress tracking</p>
                          <p>2x boost in learning productivity</p>
                          <p>Streamlined communication tools</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="qurtuba-online-school-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="scrambly-rewarded-discovery-platform-for-games-and-apps/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-8-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-8-scaled.png"
                        />
                        <img
                          alt="Scrambly – rewarded discovery platform for games and apps - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Case-preview-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Scrambly – rewarded discovery platform for games and apps
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Scrambly</span>
                      <span className="tag">
                        <img
                          alt="Image - image"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/image.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Italy
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Scalable design system</p>
                          <p>Boosted engagement & satisfaction</p>
                          <p>Scalable UI for global growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="scrambly-rewarded-discovery-platform-for-games-and-apps/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624328"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Rectangle-34624328.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Illia Frantsevskyi</p>
                            <span>CTO & Co-founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          They demonstrated a high level of expertise and
                          efficiency in every phase of the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="superhedge-principal-protected-defi-structured-vaults/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-4.png"
                        />
                        <img
                          alt="SuperHedge – principal-protected DeFi structured vaults - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/IMg-Wrapper-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX audit #Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      SuperHedge – principal-protected DeFi structured vaults
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">SuperHedge</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>2x faster feature implementation</p>
                          <p>User-first approach in a complex landscape</p>
                          <p>Strategic budget allocation for max impact</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="superhedge-principal-protected-defi-structured-vaults/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="wolf-games-case-maker-studio-ai-driven-crime-story-creation/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-3-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-3-scaled.png"
                        />
                        <img
                          alt="Wolf Games case maker studio – AI-<wbr>driven crime story creation - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Case-preview.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#ElectricalEngineering #SystemInstallation #ProcurementSolutions</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Wolf Games case maker studio – AI-
                      <wbr />
                      driven crime story creation
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Wolf Games</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Built with scalability in mind</p>
                          <p>Seamless UX for writers and developers</p>
                          <p>AI-Driven complex storytelling</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="wolf-games-case-maker-studio-ai-driven-crime-story-creation/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="domore-mobile-redesign-for-a-ticket-subscription-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/IMg-Wrapper-3-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/IMg-Wrapper-3-scaled.png"
                        />
                        <img
                          alt="DoMORE — mobile redesign for a ticket subscription platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/05/Case-preview-mobile-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      DoMORE — mobile redesign for a ticket subscription
                      platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Domore</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            React, TypeScript, Vite, Tanstack query, Radix
                            Primitives, Stripe, Zod, React-hook-form, Tanstack
                            Router, Ky
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Boosted user retention</p>
                          <p>Memorable brand experience</p>
                          <p>Enhanced usability</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="domore-mobile-redesign-for-a-ticket-subscription-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="bliss-creek-admin-panel-how-a-custom-dashboard-design-simplified-user-management-and-streamlined-transaction-cycles/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-8.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-8.png"
                        />
                        <img
                          alt="Bliss Creek admin panel – how a custom dashboard design simplified user management and streamlined transaction cycles - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-1-3.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product discovery #Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Bliss Creek admin panel – how a custom dashboard design
                      simplified user management and streamlined transaction
                      cycles
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Bliss Creek</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        NJ, USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            React, Next, Flowbite for ui, Firebase, Tailwindcss,
                            Redux, React Hook Form
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>2x faster user onboarding and management</p>
                          <p>Reduced admin task completion time</p>
                          <p>
                            Enhanced data accuracy and compliance across all
                            cycles
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="bliss-creek-admin-panel-how-a-custom-dashboard-design-simplified-user-management-and-streamlined-transaction-cycles/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="adflux-redesigned-marketing-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/04/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/04/Case-Preview-2.png"
                        />
                        <img
                          alt="AdFlux – redesigned marketing platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/04/Case-Preview-mob-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product redesign</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      MedCore Hospital — Electrical Installation & Backup System Integration
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">AdFlux Co.</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Vite, React, Typescript, Zustand, Tanstack Query,
                            React Router Dom, i18next
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>60% faster campaign launch</p>
                          <p>Real-time analytics for smarter optimization</p>
                          <p>Strengthened competitive position</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="adflux-redesigned-marketing-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="creatorland-revolutionizing-networking-for-gen-z-creators/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-1-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-1-2.png"
                        />
                        <img
                          alt="Creatorland – revolutionizing networking for Gen Z creators - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-mob-6.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Creatorland – revolutionizing networking for Gen Z
                      creators
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Creatorland</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Increased creator engagement</p>
                          <p>2x faster selection of brands and creators</p>
                          <p>Seamless mobile experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="creatorland-revolutionizing-networking-for-gen-z-creators/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="aires-ai-powered-crm-for-real-estate/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-3.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-3.png"
                        />
                        <img
                          alt="AIRES – AI-powered CRM for real estate - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Case-Preview-mob-3.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      AIRES – AI-powered CRM for real estate
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">AIRES</span>
                      <span className="tag">
                        <img
                          alt="Icon - canada"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/canada.svg"
                          style={{}}
                        />
                        Canada
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced sales efficiency</p>
                          <p>Unified platform for all users</p>
                          <p>Reduced development costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="aires-ai-powered-crm-for-real-estate/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="tabela-a-management-system-for-restaurants/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Screen-1-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Screen-1-1.png"
                        />
                        <img
                          alt="Tabela – management system for restaurants - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-mob-6.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Tabela – management system for restaurants
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Tabela LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Reduced development costs</p>
                          <p>Data-driven decision making</p>
                          <p>Optimized reservation system</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="tabela-a-management-system-for-restaurants/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="globalx-dex/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-Preview.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-Preview.png"
                        />
                        <img
                          alt="GlobalX – DEX - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-Preview-mob.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>
                        #Web app design #MVP building #Web development
                        #Blockchain development #Dedicated team
                      </p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      GlobalX – DEX
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">GlobalX</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635 (3)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-3.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            TypeScript, React, Wagmi, Ether.js, Tanstack Query,
                            Radix UI, Framer Motion, D3.Js, Redux, GraphQL,
                            Apollo, Zustand, Magic SDK, Jest
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced usability</p>
                          <p>Responsive performance</p>
                          <p>Scalability and security</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="globalx-dex/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624326"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Rectangle-34624326-2.png"
                          style={{
                            aspectRatio: "1.0064102564103",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Joshua Caleb</p>
                            <span />
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          We reached out to this team for the development of our
                          cryptocurrency exchange web app (DEX Swap), and the
                          result exceeded all expectations. We’re very pleased
                          with how everything turned out in terms of both
                          functionality and design. The app works flawlessly,
                          and its interface is very user-friendly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="core-developer-the-platform-for-learning-to-program/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-8.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-8.png"
                        />
                        <img
                          alt="Core Developer – the platform for learning how to program - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-mob-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#web app design #web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Core Developer – the platform for learning how to program
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Core Developer</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Built with scalability in mind</p>
                          <p>Enhanced Student-Teacher Interaction</p>
                          <p>Flexible learning & subscription models</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="core-developer-the-platform-for-learning-to-program/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="greenow/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-6.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-6.png"
                        />
                        <img
                          alt="Greenow – wind energy made simple - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-mob-4-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Rapid MVP development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Greenow – wind energy made simple
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Greenow</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Bubble</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>6 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster time-to-market</p>
                          <p>Secured investor confidence</p>
                          <p>Validated key assumptions</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="greenow/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="eduwerks-app-for-online-education/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="Eduwerks – e-learning platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Design prototype #Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Eduwerks – e-learning platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Eduwerks LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Tailored user experience</p>
                          <p>Solved real-world pain points</p>
                          <p>Built for engagement and simplicity</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="eduwerks-app-for-online-education/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="wayels/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-7-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-7-scaled.png"
                        />
                        <img
                          alt="Wayels – courier system dashboard - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Wayels – courier system dashboard
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Wayels</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Optimized delivery operations</p>
                          <p>Real-time visibility and control</p>
                          <p>Data-driven decision-making</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="wayels/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="cointax-crypto-tax-reporting-tool/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="CoinTax – crypto tax reporting tool - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      CoinTax – crypto tax reporting tool
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">CryptoTech</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>250+ supported crypto assets</p>
                          <p>Optimized tax reporting accuracy</p>
                          <p>Consistent user engagement growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="cointax-crypto-tax-reporting-tool/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="cracker-cybersecurity-web-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-4-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-4-scaled.png"
                        />
                        <img
                          alt="Cracker – cybersecurity web application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/09/Case-Preview-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Design prototype #Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Cracker – cybersecurity web application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Cracker LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Over 10,000 active users</p>
                          <p>High user retention</p>
                          <p>Strong customer satisfaction</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="cracker-cybersecurity-web-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="punk-panda-swap-stake-and-farm-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Desktop@2x-1.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Desktop@2x-1.jpg"
                        />
                        <img
                          alt="Punk Panda – swap, stake, and farming platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Desktop1.5-1.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Punk Panda – swap, stake, and farming platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Punk Panda</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Over 1 million users engaged</p>
                          <p>Increased daily unique visitors</p>
                          <p>Robust crypto trading and staking features</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="punk-panda-swap-stake-and-farm-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Avatar"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Avatar-9.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Joshua Caleb</p>
                            <span>Chief Innovation Officer at Divi Labs</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I've been contracting Phenomenon Studio for design and
                          development projects for the last two years, and I am
                          yet to find a better agency that is more capable when
                          it comes to production-quality design and development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pnswap-token-exchange-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="PNSwap – token exchange platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      PNSwap – token exchange platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">PNSwap</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>1.2 million dollars in early-stage investments</p>
                          <p>User base growth on the horizon</p>
                          <p>
                            Simplified token exchange and increased brand
                            awareness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pnswap-token-exchange-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="jocreate-application-for-creating-nft-collections/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <img
                          alt="JoCreate – application for creating NFT collections - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-1-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      JoCreate – application for creating NFT collections
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">JoCreate LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>56% Active Users in the Last 30 Days</p>
                          <p>
                            Personalized Health Plans Based on Smart Wristband
                            Data
                          </p>
                          <p>Comprehensive and User-Friendly Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="jocreate-application-for-creating-nft-collections/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="saifast/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="Saifast – logistics web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Saifast – logistics web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Saifast</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Clean and modern internal system for logistics teams
                          </p>
                          <p>Simplified freight creation to save user time</p>
                          <p>
                            Clear focus on key freight management and tracking
                            features
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="saifast/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="molequle/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Molequle-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Molequle-NewPC.jpg"
                        />
                        <img
                          alt="Molequle – CDXP web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Molequle-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Molequle – CDXP web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Molequle</span>
                      <span className="tag">
                        <img
                          alt="Image - de-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/de-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Germany
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Intuitive system for managing employee & customer
                            data
                          </p>
                          <p>
                            Custom flows for different data types, built with
                            CDXP principles
                          </p>
                          <p>
                            Designed to support marketers & developers in
                            understanding their audience
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="molequle/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="learnt/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-1-1-scaled.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-6.jpg"
                        />
                        <img
                          alt="Learnt – online learning web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-6.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Learnt – online learning web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Learnt</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Streamlined tutor search boosted efficiency</p>
                          <p>
                            Visual clarity & friendly UX increased user
                            engagement{" "}
                          </p>
                          <p>Responsive UI expanded mobile reach</p>
                          <p />
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="learnt/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1746368208154"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/1746368208154-1.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Eliza Morrison</p>
                            <span>COO & Founder, Learnt</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Their execution is splendid and their excellent
                          communication keeps everybody aligned. It's super easy
                          to engage with the team at Phenomenon. Regular
                          communication via Slack made it easy to stay on the
                          same page about timelines and updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                  className={`infinite-scroll-holder cases_wrap grid gap-80 gap-48-mob bg--white tabs-pane ${activeTab === "mobile-app" ? "is-active" : ""}`}
                    data-infinite-scroll-css="check-active"
                    data-tabs-pane="mobile-app"
                  >
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="mywisdom-a-digital-platform-for-safer-more-connected-aging/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-10.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-10.png"
                        />
                        <img
                          alt="MyWisdom — a digital platform for safer, more connected aging - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product redesign #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      MyWisdom — a digital platform for safer, more connected
                      aging
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">MyWisdom</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Flutter, Java, Spring Boot, Python, WebSocket,
                            Computer Vision, AWS, PostgreSQL, Redis, Docker,
                            Swagger, Liquibase
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer focus and smoother user flows</p>
                          <p>Better accessibility for diverse user needs</p>
                          <p>Consistent and scalable design system</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="mywisdom-a-digital-platform-for-safer-more-connected-aging/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ready-player-fit-turning-boring-workouts-into-a-completely-different-exciting-daily-challenge/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-2.png"
                        />
                        <img
                          alt="Ready player fit – turning boring workouts into a completely different exciting daily challenge - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-Preview-mob-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ready player fit – turning boring workouts into a
                      completely different exciting daily challenge
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ready Player Fit</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (4)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/fi_4628635-4.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Early user feedback</p>
                          <p>Reduced development costs</p>
                          <p>Built with scalability in mind</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ready-player-fit-turning-boring-workouts-into-a-completely-different-exciting-daily-challenge/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="blueheart-sex-therapy-that-starts-with-self-kindness/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-11.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-preview-11.png"
                        />
                        <img
                          alt="Blueheart – sex therapy that starts with self-kindness - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-cover-1-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product Redesign #UX Audit</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Blueheart – sex therapy that starts with self-kindness
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Blueheart</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved user experience</p>
                          <p>Increased product adoption rates</p>
                          <p>Positive user feedback</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="blueheart-sex-therapy-that-starts-with-self-kindness/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="scrambly-rewarded-discovery-platform-for-games-and-apps/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-8-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-8-scaled.png"
                        />
                        <img
                          alt="Scrambly – rewarded discovery platform for games and apps - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Case-preview-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#SystemDesign #ElectricalUpgrade</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Scrambly – rewarded discovery platform for games and apps
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Scrambly</span>
                      <span className="tag">
                        <img
                          alt="Image - image"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/image.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Italy
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Scalable design system</p>
                          <p>Boosted engagement & satisfaction</p>
                          <p>Scalable UI for global growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="scrambly-rewarded-discovery-platform-for-games-and-apps/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624328"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Rectangle-34624328.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Illia Frantsevskyi</p>
                            <span>CTO & Co-founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          They demonstrated a high level of expertise and
                          efficiency in every phase of the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="both-homes-co-parenting-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-12.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-12.png"
                        />
                        <img
                          alt="Both Homes – co-parenting mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Picture-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product Discovery #MVP Building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Both Homes – co-parenting mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Both Homes</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Validated key assumptions</p>
                          <p>Built with scalability in mind</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="both-homes-co-parenting-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="zest-unleashing-a-healthier-you/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-6.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-6.png"
                        />
                        <img
                          alt="Zest — unleashing a healthier you - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-6.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product discovery #MVP building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Zest — unleashing a healthier you
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Zest</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Reduced  development costs</p>
                          <p>Simplification of complex health concepts</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="zest-unleashing-a-healthier-you/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - image@2x"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/image%402x-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Julia Cooney</p>
                            <span>CEO of Zest</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          The client expressed high satisfaction with the team’s
                          proficiency, facilitating the prompt and timely
                          completion of the design within the initially
                          estimated timeframes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="sway-finance-cash-management-application-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-1-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-1-4.png"
                        />
                        <img
                          alt="Sway Finance – cash management application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-mob-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Sway Finance – cash management application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Sway Finance</span>
                      <span className="tag">
                        <img
                          alt="Image - ch-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/ch-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Switzerland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Validated key assumptions</p>
                          <p>Early  user feedback</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="sway-finance-cash-management-application-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="sinport-singapore-airport-navigation-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-preview-4.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-preview-4.png"
                        />
                        <img
                          alt="Sinport – Singapore Airport navigation app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-preview-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#MVP building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Sinport – Singapore Airport navigation app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">APNAVS, Singapore</span>
                      <span className="tag">
                        <img
                          alt="Icon - flag-for-singapore-svgrepo-com 1"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/flag-for-singapore-svgrepo-com-1.svg"
                          style={{}}
                        />
                        Singapore
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Faster  time-to-market</p>
                          <p>Validated key assumptions</p>
                          <p>Streamlined user experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="sinport-singapore-airport-navigation-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="mindtales-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-7-scaled.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-7-scaled.jpg"
                        />
                        <img
                          alt="MindTales – mental health app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Frame-846Mobile-2.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Product discovery #MVP Building</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      MindTales – mental health app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">MindTales</span>
                      <span className="tag">
                        <img
                          alt="Image - round-united-arab-emirates-flag-isolated-on-white-background-round-national-flag-of-uae-vector-removebg-preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/10/round-united-arab-emirates-flag-isolated-on-white-background-round-national-flag-of-uae-vector-removebg-preview.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UAE
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>$750K investment secured</p>
                          <p>Streamlined therapist-patient interaction</p>
                          <p>Efficient MVP development</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="mindtales-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="neap-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Neap-App-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Neap-App-NewPC.jpg"
                        />
                        <img
                          alt="Neap – mental health mobile app for diabetics - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Neap-App-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>
                        #Procurement & Supply #Electrical Installation & Commissioning #Mobile App Development
                      </p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Neap – mental health mobile app for diabetics
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Neap</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Emotionally supportive design</p>
                          <p>Gamification for engagement</p>
                          <p>Research-based UX</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="neap-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>George Fry</p>
                            <span>Managing Director</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio works at speed and is extremely
                          punctual with timelines. They deliver top-notch
                          outcomes with exceptional designs. Overall, their
                          excellent communication skills ensure a smooth
                          project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="e-manager-mobile-app-for-e-sim-management/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-8-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-8-scaled.png"
                        />
                        <img
                          alt="E-manager – mobile app for e-sim management - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-mob-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#MVP development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      E-manager – mobile app for e-sim management
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">E-manager, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Strong user base and engagement</p>
                          <p>High user satisfaction</p>
                          <p>Improved task efficiency</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="e-manager-mobile-app-for-e-sim-management/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="keap-family-budgeting-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Cover-all-cases.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Cover-all-cases.png"
                        />
                        <img
                          alt="Keap – family budgeting mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Cover-mobile.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Keap – family budgeting mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Keap, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>$750K investment secured post-MVP</p>
                          <p>Clear financial control for families</p>
                          <p>Scalable foundation for future growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="keap-family-budgeting-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="boost/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="BOOST – income tracker mobile app for freelancers - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#MVP development #Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      BOOST – income tracker mobile app for freelancers
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Boost</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Simplified financial insights for users</p>
                          <p>Engaging and interactive experience</p>
                          <p>Modern and user-friendly design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="boost/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="medicare-digital-doctor-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-7-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-7-scaled.png"
                        />
                        <img
                          alt="Medicare – digital doctor mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/01/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Medicare – digital doctor mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Medicare LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - canada"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/canada.svg"
                          style={{}}
                        />
                        Canada
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Easy booking and doctor access</p>
                          <p>Family health tracking made simple</p>
                          <p>Clean and intuitive design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="medicare-digital-doctor-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="healher-an-app-with-personalized-health-plans/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/03/Case-Preview-9-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/03/Case-Preview-9-scaled.png"
                        />
                        <img
                          alt="Healher – an app with personalized health plans - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/03/Case-Preview-mob-9.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Healher – an app with personalized health plans
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Healher</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>56% active users in the last 30 days</p>
                          <p>
                            Personalized health plans based on smart wristband
                            data
                          </p>
                          <p>Comprehensive and user-friendly design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="healher-an-app-with-personalized-health-plans/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="kollo-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Kollo-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Kollo-NewPC.jpg"
                        />
                        <img
                          alt="Kollo – financial mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Kollo-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>
                        #Procurement & Supply #Electrical Installation & Commissioning #Mobile app development
                      </p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Kollo – financial mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Kollo</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Ready-to-use design solution for financial
                            monitoring
                          </p>
                          <p>
                            Personalized savings strategies and recurring
                            payments
                          </p>
                          <p>Integrated analytics and bank account linkage</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="kollo-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="jocreate-application-for-creating-nft-collections/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <img
                          alt="JoCreate – application for creating NFT collections - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-1-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      JoCreate – application for creating NFT collections
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">JoCreate LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>56% Active Users in the Last 30 Days</p>
                          <p>
                            Personalized Health Plans Based on Smart Wristband
                            Data
                          </p>
                          <p>Comprehensive and User-Friendly Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="jocreate-application-for-creating-nft-collections/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="uver/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/10/Case-Preview-5-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/10/Case-Preview-5-scaled.png"
                        />
                        <img
                          alt="UVER – universities aggregator mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/10/Case-Preview-mob-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      UVER – universities aggregator mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Uver LLC</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Reduced consultant workload through self-service
                            features
                          </p>
                          <p>
                            Higher application submission rates with simplified
                            flows
                          </p>
                          <p>
                            Increased engagement thanks to dual search options
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="uver/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="glume-healthcare-mobile-app-for-diabetics/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-2-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-2-scaled.png"
                        />
                        <img
                          alt="Glume – healthcare mobile app for diabetics - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/Case-Preview-1-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Glume – healthcare mobile app for diabetics
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Glume LLC</span>
                      <span className="tag">
                        <img
                          alt="Image - de-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/11/de-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Germany
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>15.3% average retention rate after launch</p>
                          <p>
                            High satisfaction with redesigned smart assistant
                          </p>
                          <p>
                            Tailored user experience from onboarding to
                            recommendations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="glume-healthcare-mobile-app-for-diabetics/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="radar-web3-projects-aggregator/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-Preview-3-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-Preview-3-scaled.png"
                        />
                        <img
                          alt="RADAR – web3 projects aggregator - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-Preview-mob-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      RADAR – web3 projects aggregator
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">RADAR</span>
                      <span className="tag">
                        <img
                          alt="Image - pl-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/pl-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Poland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Quick access to trending Web3 projects</p>
                          <p>+25% engagement thanks to real-time alerts</p>
                          <p>Streamlined asset tracking across categories</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="radar-web3-projects-aggregator/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="meby/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Meby-NewRetina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Meby-NewPC.jpg"
                        />
                        <img
                          alt="Meby – meditation mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/08/Meby-New.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Meby – meditation mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Meby</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Increased user engagement through onboarding
                            redesign
                          </p>
                          <p>
                            Boosted retention with a refined mood-tracking
                            experience
                          </p>
                          <p>
                            Stronger emotional connection through updated visual
                            language
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="meby/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="nouri/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/12/Case-Preview-2-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/12/Case-Preview-2-scaled.png"
                        />
                        <img
                          alt="Nouri – connection companion app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/12/Case-Preview-mob-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Nouri – connection companion app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">ZooWhoo International</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Created a seamless, appealing, and engaging user
                            experience
                          </p>
                          <p>Redesigned major flows for better usability</p>
                          <p>
                            Added new key features that made Nouri stand out
                          </p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="nouri/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ectopanel/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-4-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-4-scaled.png"
                        />
                        <img
                          alt="Ectopanel – solar panels control mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/07/Case-Preview-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning #Mobile app development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ectopanel – solar panels control mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ectopanel</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Accelerated solar ROI through simplified sell‑back
                            flows
                          </p>
                          <p>
                            Increased system engagement with one‑tap power
                            controls
                          </p>
                          <p>
                            Boosted user confidence via clear energy insights
                          </p>
                          <p />
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ectopanel/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="triffic/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-1-2-scaled.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-7.jpg"
                        />
                        <img
                          alt="Triffic – AR mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Cover-all-cases-7.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Electrical Installation & Commissioning</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Triffic – AR mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Coinerz Group Internal </span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Gamified AR engagement increased user activity</p>
                          <p>
                            Clear reward flows boosted clarity & conversions
                          </p>
                          <p>Micro-referrals unlocked network growth</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="triffic/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1583813811533"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/1583813811533.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Alex Shepherd</p>
                            <span>CTO, Coinerz Group</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          All communication was clear and open, and all team
                          members worked very efficiently towards our goals. The
                          work ethic and UX skills of the whole team really blew
                          us away.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                 className={`infinite-scroll-holder cases_wrap grid gap-80 gap-48-mob bg--white tabs-pane ${activeTab === "website" ? "is-active" : ""}`}
                    data-infinite-scroll-css="check-active"
                    data-tabs-pane="website"
                  >
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="shaga-odyssey-awarded-website-development-for-web3-gamepad/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Media-9-3-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Media-9-3-1.png"
                        />
                        <img
                          alt="Shaga Odyssey – an award-<wbr>winning web3 gamepad platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Media-9-3-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Shaga Odyssey – an award-
                      <wbr />
                      winning web3 gamepad platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Shaga.xyz</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 months </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>+40% increase in user engagement</p>
                          <p>3x faster platform navigation</p>
                          <p>
                            Awwwards "Site of the Day" for Best Interactive
                            Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="shaga-odyssey-awarded-website-development-for-web3-gamepad/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="herb-agency-digital-marketing-platform-for-cannabis-brands/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/IMg-Wrapper-48-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/IMg-Wrapper-48-scaled.png"
                        />
                        <img
                          alt="Herb Agency – digital marketing platform for cannabis brands - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/10/IMg-Wrapper-14-14.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Herb Agency – digital marketing platform for cannabis
                      brands
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">herb.co</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (5)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/fi_4628635-5.svg"
                          style={{}}
                        />
                        United States
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>5 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Refined brand positioning</p>
                          <p>Simplified user experience</p>
                          <p>Future-ready scalability</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="herb-agency-digital-marketing-platform-for-cannabis-brands/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pretty-patty-a-deliciously-interactive-fast-food-experience/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-17.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-17.png"
                        />
                        <img
                          alt="Pretty Patty: a deliciously interactive fast food experience - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-1-3.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Pretty Patty: a deliciously interactive fast food
                      experience
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Pretty patty</span>
                      <span className="tag">
                        <img
                          alt="Icon - image (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/image-2.svg"
                          style={{}}
                        />
                        Switzerland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Brand alignment & vibrant design</p>
                          <p>Improved сonversion opportunities</p>
                          <p>Customer-centric approach</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pretty-patty-a-deliciously-interactive-fast-food-experience/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - image (15)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/image-15.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Adrian Smith</p>
                            <span>Co-Founder, PRETTY PATTY</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          They always respected deadlines, were super reactive,
                          and were super helpful.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="hyperbridge-redefining-cross-chain-connectivity/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Cover-1-3.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Cover-1-3.png"
                        />
                        <img
                          alt="Hyperbridge – redefining cross-chain connectivity - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Cover-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website redesign</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Hyperbridge – redefining cross-chain connectivity
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Hyperbridge</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Structured experience that boosts conversions</p>
                          <p>Visual identity that builds trust</p>
                          <p>Scalable system for faster rollout</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="hyperbridge-redefining-cross-chain-connectivity/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pragmatike-it-talent-recruitment-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-Preview-7.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-Preview-7.png"
                        />
                        <img
                          alt="Pragmatike – IT talent recruitment platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website redesign #No code development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Pragmatike – IT talent recruitment platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Pragmatike</span>
                      <span className="tag">
                        <img
                          alt="Image - FR - France"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/FR-France.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        France
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>3 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced brand alignment</p>
                          <p>Improved website performance</p>
                          <p>Cost-effective development</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pragmatike-it-talent-recruitment-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - image"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/image.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Mathias Guigui</p>
                            <span>Co-Founder, Pragmatike</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          When working on your website, always do it with
                          professionals. Big thanks to Phenomenon Studio for the
                          work put in!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="paradigm-website-for-low-code-software-developers/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-6-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-6-scaled.png"
                        />
                        <img
                          alt="Paradigm – website for low-code software developers - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/IMg-Wrapper-2-1-scaled.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website Development #Website Redesign #Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Paradigm – website for low-code software developers
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Paradigm</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/06/fi_4628635.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>3 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced brand positioning</p>
                          <p>
                            Recognized by Awwwards with an Honorable Mention
                          </p>
                          <p>Increased user engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="paradigm-website-for-low-code-software-developers/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="airportr-2-0-luggage-carrying-service-website-redesign/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-Preview-2.png"
                        />
                        <img
                          alt="Airportr 2.0 – luggage carrying service website redesign - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-Preview-mob.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website redesign</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Airportr 2.0 – luggage carrying service website redesign
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Airportr</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        United Kingdom
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Higher conversion rates</p>
                          <p>Increased transparency</p>
                          <p>Better mobile usability</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="airportr-2-0-luggage-carrying-service-website-redesign/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="shaga-web3-cloud-gaming-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-21.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-21.png"
                        />
                        <img
                          alt="Shaga – web3 cloud gaming platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/IMg-Wrapper-34.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website Design #Website Development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Shaga – web3 cloud gaming platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Shaga.xyz</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved conversion opportunities</p>
                          <p>Simple maintenance enabled</p>
                          <p>Immersive user engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="shaga-web3-cloud-gaming-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle-34624328"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Rectangle-34624328.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Daeshawn Ballard</p>
                            <span>Co-Founder & COO, Shaga Labs, Inc.</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Their blend of punctuality, open communication, and
                          unwavering dedication has made every deadline feel
                          achievable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="venator-promo-site-for-a-futuristic-crypto-game/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Cover-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Cover-1.png"
                        />
                        <img
                          alt="VENATOR – promo site for a futuristic crypto game - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Cover-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website Design #Website Development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      VENATOR – promo site for a futuristic crypto game
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Venator</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>2 months</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Effective waitlist growth strategy</p>
                          <p>Enhanced brand credibility</p>
                          <p>Tailored user experience</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="venator-promo-site-for-a-futuristic-crypto-game/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Craig Kirk</p>
                            <span>Co-Founder, Gaming Company</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I’ve been impressed with the quality of work
                          Phenomenon Studio has provided and their ability to
                          deliver within deadlines. The team have supplied
                          strong project management and communication throughout
                          the engagement. I appreciate the team's attention to
                          detail.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="globalx-promo-website-for-dex/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-6.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-6.png"
                        />
                        <img
                          alt="GlobalX – promo website for DEX - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-mob-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      GlobalX – promo website for DEX
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">GlobalX</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>
                            Typescript, React, Vite, Framer motion, Tanstack
                            query, Radix UI, Zod
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>2 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Increased user confidence</p>
                          <p>Simplified user experience</p>
                          <p>Improved engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="globalx-promo-website-for-dex/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624326"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Rectangle-34624326-2.png"
                          style={{
                            aspectRatio: "1.0064102564103",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Joshua Caleb</p>
                            <span />
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Working with the team on our landing page was
                          incredibly productive and enjoyable. From the very
                          beginning, the team demonstrated high professionalism,
                          thoroughly understanding our goals and requirements.
                          Not only did they create an attractive and modern
                          design, but they also made the site user-friendly and
                          functional.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="onetext-sms-marketing-tool/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-2.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-2.png"
                        />
                        <img
                          alt="OneText – website redesign for SMS marketing tool - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      OneText – website redesign for SMS marketing tool
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">OneText</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>3 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Increased user engagement</p>
                          <p>Improved website performance</p>
                          <p>Optimized user experience with A/B tests</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="onetext-sms-marketing-tool/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="e-maganer-promo-website-for-mobile-app-for-e-sim-management/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.jpg"
                        />
                        <img
                          alt="E-manager – promo website for mobile app for e-sim management - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      E-manager – promo website for mobile app for e-sim
                      management
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">E-manager</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>32,000+ new users attracted</p>
                          <p>80% page scroll depth</p>
                          <p>User-friendly and attractive structure</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="e-maganer-promo-website-for-mobile-app-for-e-sim-management/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="assetario-website-for-the-best-in-class-platform-for-app-personalization/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/12/Media-6-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/12/Media-6-scaled.png"
                        />
                        <img
                          alt="Assetario – website for the best in class platform for app personalization - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/12/Case-Preview-mob-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#website design #no code development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Assetario – website for the best in class platform for app
                      personalization
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Assetario</span>
                      <span className="tag">
                        <img
                          alt="Image - istockphoto-905332922-612x612-removebg-preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/istockphoto-905332922-612x612-removebg-preview.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Slovakia
                      </span>
                    </div>
                    <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Client:
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                          <p>Webflow</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                          Timeline
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                          <p>2 month</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Tailored  user experience</p>
                          <p>Established online presence</p>
                          <p>Translated complex solutions into illustrations</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="assetario-website-for-the-best-in-class-platform-for-app-personalization/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 6dd5fa6feda556d9602b57ac064ce8ff-300x300"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/12/6dd5fa6feda556d9602b57ac064ce8ff-300x300-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Anna Figura</p>
                            <span>Product Manager, Assetario</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio was able to build and deliver a
                          fully-functioning and visually-appealing product, much
                          to the client and customers' delight. The team was
                          highly communicative, but internal stakeholders were
                          particularly impressed with their professionalism and
                          strict adherence to timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="copper-rock/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Copper-Rock-all-cases-1-scaled-e1732537621919.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Copper-Rock-all-cases-1.jpeg"
                        />
                        <img
                          alt="Copper Rock – golf community booking website - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/Copper-Rock-all-casesMobile.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply #Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Copper Rock – golf community booking website
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Copper Rock</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Tailored user experience</p>
                          <p>Established online presence</p>
                          <p>Translated complex solutions into illustrations</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="copper-rock/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Jason Timpson</p>
                            <span>Marketing Director, Copper Rock</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I was impressed at their knowledge and skillset in
                          bringing to life every idea we had.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="dostuff/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Dostuff@3x.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Dostuff@2x.jpg"
                        />
                        <img
                          alt="DoStuff – events booking service - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Dostuff.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      DoStuff – events booking service
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">DoStuff</span>
                      <span className="tag">
                        <img
                          alt="Image - fi_4628635 (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/07/fi_4628635-2.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Streamlined event discovery</p>
                          <p>Personalized entertainment experience</p>
                          <p>Consistent yet localized design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="dostuff/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="easily-promo-website-for-the-super-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-preview-2-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-preview-2-1.png"
                        />
                        <img
                          alt="Easily – promo website for the super app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-cover-1-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Easily – promo website for the super app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Easily, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced user engagement</p>
                          <p>Improved conversion rates</p>
                          <p>Strong brand positioning</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="easily-promo-website-for-the-super-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="saifast-promo-website-for-logistic-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-5.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-5.png"
                        />
                        <img
                          alt="Saifast – promo website for logistics platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-5.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Saifast – promo website for logistics platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Saifast LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>15%+ increase in user engagement</p>
                          <p>Significant increase in user interaction</p>
                          <p>40% reduction in bounce rate</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="saifast-promo-website-for-logistic-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="cointax-web-app-promo-website/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-8.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-8.png"
                        />
                        <img
                          alt="CoinTax – web app promo website - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases-8.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      CoinTax – web app promo website
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">CryptoTech</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>55,5K+ click-throughs on key CTA buttons</p>
                          <p>Strong and consistent monthly traffic</p>
                          <p>Exceptional user trust and satisfaction</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="cointax-web-app-promo-website/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="uver-promo-website-for-mobile-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.png"
                        />
                        <img
                          alt="UVER – promo website for mobile application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Cover-all-cases.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      UVER – promo website for mobile application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">UVER, LLC</span>
                      <span className="tag">
                        <img
                          alt="Image - united-kingdom-flag-round-large"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/09/united-kingdom-flag-round-large.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>15,000+ early sign-ups within 60 days</p>
                          <p>Strong brand trust from day one</p>
                          <p>Optimized mobile-first experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="uver-promo-website-for-mobile-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ectopanel-promo-website-for-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/07/Cover-all-cases@2x.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/07/Cover-all-cases@2x.png"
                        />
                        <img
                          alt="Ectopanel – promo website for mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/07/Cover-all-cases%402x.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ectopanel – promo website for mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ectopanel LCC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>23,000+ new users after launch</p>
                          <p>High content engagement across the page</p>
                          <p>Increased retention through intuitive UX</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ectopanel-promo-website-for-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="keap-promo-website-for-budgeting-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-7-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-7-scaled.png"
                        />
                        <img
                          alt="Keap – promo website for budgeting mobile app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2024/06/Case-Preview-mob-7.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Keap – promo website for budgeting mobile app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Keap, LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>21% increase in new user registrations</p>
                          <p>
                            Stronger user retention through relatable
                            storytelling
                          </p>
                          <p>Improved conversion with interactive content</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="keap-promo-website-for-budgeting-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="jocreate-promo-website-for-web-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Preview-all-cases.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Preview-all-cases.png"
                        />
                        <img
                          alt="JoCreate – promo website for web app - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/10/Preview-all-cases.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design #Website development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      JoCreate – promo website for web app
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">JoCreate LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>72% User Retention</p>
                          <p>Clear Product Positioning</p>
                          <p>High Conversion Rate</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="jocreate-promo-website-for-web-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="jocreate-application-for-creating-nft-collections/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-5-1-scaled.png"
                        />
                        <img
                          alt="JoCreate – application for creating NFT collections - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/02/Case-Preview-1-2-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Web app design #Web development</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      JoCreate – application for creating NFT collections
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">JoCreate LLC</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>56% Active Users in the Last 30 Days</p>
                          <p>
                            Personalized Health Plans Based on Smart Wristband
                            Data
                          </p>
                          <p>Comprehensive and User-Friendly Design</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="jocreate-application-for-creating-nft-collections/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="airportr/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-all-cases-1-scaled.jpg-1.webp"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-all-cases.jpg"
                        />
                        <img
                          alt="AirPortr – luggage carrying service for traveling - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-all-cases-1-scaled.jpg-1.webp"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#UX Audit #Website design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      AirPortr – luggage carrying service for traveling
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Airportr</span>
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Logistics</span>
                      <span className="tag">
                        <img
                          alt="Icon - UK"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/05/UK.svg"
                          style={{}}
                        />
                        UK
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Increased Conversion Rates through Simplified
                            Checkout
                          </p>
                          <p>
                            Enhanced Brand Awareness with Bold Visual Solutions
                          </p>
                          <p>Improved User Experience Across Devices</p>
                          <p />
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="airportr/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1666209242049-300x300"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/10/1666209242049-300x300-1.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Oliver Ahad</p>
                            <span>CMO, Airportr</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio has demonstrated great work. The
                          visual look and feel of the new site architecture
                          conveys a mature and professional aesthetic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="webb/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Cover-all-casesretina-1.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Cover-all-cases@2xx.jpg"
                        />
                        <img
                          alt="WEBB – web3 community platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/09/Cover-all-casesmob-1-1.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Website design</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      WEBB – web3 community platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">WEBB</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Improved user engagement through personalized
                            dashboards
                          </p>
                          <p>Boosted retention with gamified experience</p>
                          <p>Seamless integration of wearable device data</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="webb/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                 className={`infinite-scroll-holder cases_wrap grid gap-80 gap-48-mob bg--white tabs-pane ${activeTab === "Procurement & Supply" ? "is-active" : ""}`}
                    data-infinite-scroll-css="check-active"
                    data-tabs-pane="Procurement & Supply"
                  >
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="hyperbridge-redefining-cross-chain-connectivity-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12-1.png"
                        />
                        <img
                          alt="Hyperbridge – redefining cross-chain connectivity - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/cover-mobile-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Hyperbridge – redefining cross-chain connectivity
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Hyperbridge</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-1.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Consistent visual system</p>
                          <p>Improved market perception</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="hyperbridge-redefining-cross-chain-connectivity-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="scrambly-rewarded-discovery-platform-for-games-and-apps-2/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-14.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-14.png"
                        />
                        <img
                          alt="Scrambly – rewarded discovery platform for games and apps - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/cover-mobile-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Scrambly – rewarded discovery platform for games and apps
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Scrambly</span>
                      <span className="tag">
                        <img
                          alt="Icon - image"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/image.svg"
                          style={{}}
                        />
                        Italy
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Consistent visual system</p>
                          <p>Improved market perception</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="scrambly-rewarded-discovery-platform-for-games-and-apps-2/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624328 (2)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Rectangle-34624328-2.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Illia Frantsevskyi</p>
                            <span>CTO & Co-Founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          They demonstrated a high level of expertise and
                          efficiency in every phase of the project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="voltory-clarity-and-trust-in-digital-finance/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Case-preview-1-5.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Case-preview-1-5.png"
                        />
                        <img
                          alt="Voltory  – clarity and trust in digital finance - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Case-preview-37.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Voltory – clarity and trust in digital finance
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Voltory</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (5)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/fi_4628635-5.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Refined brand recognition</p>
                          <p>Enhanced brand trust</p>
                          <p>Distinct market position</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="voltory-clarity-and-trust-in-digital-finance/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="shaga-redefining-cloud-gaming/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-9.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-9.png"
                        />
                        <img
                          alt="Shaga – redefining cloud gaming - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-9.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Shaga – redefining cloud gaming
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Shaga</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-1.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Stronger alignment with core values</p>
                          <p>Unified and scalable design ecosystem</p>
                          <p>Clearer positioning and higher engagement</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="shaga-redefining-cloud-gaming/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Rectangle 34624328"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Rectangle-34624328.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Daeshawn Ballard</p>
                            <span>Co-Founder & COO, Shaga Labs, Inc.</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio helped us generate over 500,000
                          views on our product video, millions of impressions
                          across all our publicly shared assets, and more than
                          40,000 new followers on X. With their support, we also
                          secured $5 million in funding, gained adoption in over
                          170 countries, and were featured in leading
                          publications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="orryx-rewriting-the-rules-of-finance/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-preview-26.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/Case-preview-26.png"
                        />
                        <img
                          alt="Orryx – rewriting the rules of finance - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/09/IMg-Wrapper-38.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Orryx – rewriting the rules of finance
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Orryx</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635 (4)"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/09/fi_4628635-4.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced user experience</p>
                          <p>Stronger brand trust</p>
                          <p>Market differentiation</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="orryx-rewriting-the-rules-of-finance/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="herb-agency-reProcurement & Supply-the-cannabis-experience/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12.png"
                        />
                        <img
                          alt="Herb.Agency – reProcurement & Supply the cannabis experience - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-12.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Herb.Agency – reProcurement & Supply the cannabis experience
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">herb.co</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635-1.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Stronger connection between brands</p>
                          <p>Flexible and scalable brand system</p>
                          <p>Clearer positioning and industry relevance</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="herb-agency-reProcurement & Supply-the-cannabis-experience/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="pragmatike-connecting-businesses-with-top-remote-tech-talent/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-4-1.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-4-1.png"
                        />
                        <img
                          alt="Pragmatike – connecting businesses with top remote tech talent - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-4-1.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Pragmatike – connecting businesses with top remote tech
                      talent
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Pragmatike</span>
                      <span className="tag">
                        <img
                          alt="Image - 197560"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/197560.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        France
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Enhanced brand alignment</p>
                          <p>Improved website performance</p>
                          <p>Cost-effective development</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="pragmatike-connecting-businesses-with-top-remote-tech-talent/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - 1727944513081-300x300"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/1727944513081-300x300-1.jpg"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Mathias Guigui</p>
                            <span>Co-Founder, Pragmatike</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          When working on your website, always do it with
                          professionals. Big thanks to Phenomenon Studio for the
                          work put in!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="paradigm-Procurement & Supply-for-low-code-software-developers/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-35.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-35.png"
                        />
                        <img
                          alt="Paradigm – Procurement & Supply for low-code software developers - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-35.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Paradigm – Procurement & Supply for low-code software developers
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Paradigm</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Customer loyalty and trust</p>
                          <p>Clearer brand positioning</p>
                          <p>Improved brand perception</p>
                          <p />
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="paradigm-Procurement & Supply-for-low-code-software-developers/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="venator-Procurement & Supply-for-a-futuristic-crypto-game/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-37.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-37.png"
                        />
                        <img
                          alt="VENATOR – Procurement & Supply for a futuristic crypto game - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Case-preview-37.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      VENATOR – Procurement & Supply for a futuristic crypto game
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Venator</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved brand perception</p>
                          <p>Refined brand application</p>
                          <p>Increased customer loyalty and trust</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="venator-Procurement & Supply-for-a-futuristic-crypto-game/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Craig Kirk</p>
                            <span>Co-Founder, Gaming Company</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          I’ve been impressed with the quality of work
                          Phenomenon Studio has provided and their ability to
                          deliver within deadlines. The team have supplied
                          strong project management and communication throughout
                          the engagement. I appreciate the team's attention to
                          detail.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="sway-finance-cash-management-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-38.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-38.png"
                        />
                        <img
                          alt="Sway Finance – Procurement & Supply for cash management application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-38.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Sway Finance – Procurement & Supply for cash management application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Sway Finance</span>
                      <span className="tag">
                        <img
                          alt="Image - ch-circle-01"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/ch-circle-01.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Switzerland
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved brand perception</p>
                          <p>Clearer brand positioning</p>
                          <p>Reduced maintance costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="sway-finance-cash-management-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="assetario-Procurement & Supply-for-the-saas-platform/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-preview-40.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-preview-40.png"
                        />
                        <img
                          alt="Assetario – Procurement & Supply for the SaaS platform - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Case-preview-40.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Assetario – Procurement & Supply for the SaaS platform
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Assetario</span>
                      <span className="tag">
                        <img
                          alt="Image - istockphoto-905332922-612x612-removebg-preview"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/istockphoto-905332922-612x612-removebg-preview.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        Slovakia
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Improved brand perception</p>
                          <p>Reduced maintance costs</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="assetario-Procurement & Supply-for-the-saas-platform/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                    <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                      <div className="top flex auth_wrap v--center h--start gap-16">
                        <img
                          alt="Image - Avatar-8"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2022/12/Avatar-8-1.png"
                          style={{
                            aspectRatio: "1",
                          }}
                        />
                        <div className="bio">
                          <div className="txt txt--s gap-0">
                            <p>Anna Figura</p>
                            <span>Product Manager, Assetario</span>
                          </div>
                        </div>
                      </div>
                      <div className="txt mt-30 mt-20-mob txt--l">
                        <p>
                          Phenomenon Studio was able to build and deliver a
                          fully-functioning and visually-appealing product, much
                          to the client’s and customers' delight. The team was
                          highly communicative, but internal stakeholders were
                          particularly impressed with their professionalism and
                          strict adherence to timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="rapida-Procurement & Supply-for-the-delivery-service-Procurement & Supply/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-42.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-42.png"
                        />
                        <img
                          alt="Rapida – Procurement & Supply for the delivery service - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Mobile-9-2-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Rapida – Procurement & Supply for the delivery service
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Rapida</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Packaging as a strategic communication tool</p>
                          <p>Customer loyalty and trust</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="rapida-Procurement & Supply-for-the-delivery-service-Procurement & Supply/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="appsent-application-developers-company/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/08/Case-preview-44.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/08/Case-preview-44.png"
                        />
                        <img
                          alt="Appsent – Procurement & Supply for the application developers company - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/08/Mobile-6-4.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Appsent – Procurement & Supply for the application developers company
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Appsent</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Improved brand perception</p>
                          <p>Increased customer loyalty and trust</p>
                          <p>Clearer brand positioning</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="appsent-application-developers-company/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="mptbox-Procurement & Supply-for-the-vr-driven-metaverse/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/IMg-Wrapper-1-60.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/IMg-Wrapper-1-60.png"
                        />
                        <img
                          alt="Mptbox – Procurement & Supply for the VR-driven metaverse - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/IMg-Wrapper-1-60.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Mptbox – Procurement & Supply for the VR-driven metaverse
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Mptbox</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>Clearer brand positioning</p>
                          <p>Improved brand perception</p>
                          <p>Scalable brand assets</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="mptbox-Procurement & Supply-for-the-vr-driven-metaverse/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="phose-protocol-cash-management-application/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Frame-758530987retina.jpg"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Frame-758530987pc.jpg"
                        />
                        <img
                          alt="Phose Protocol – Procurement & Supply for cash management application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Frame-758530987mobile.jpg"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Phose Protocol – Procurement & Supply for cash management application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Phose Protocol</span>
                      <span className="tag">
                        <img
                          alt="Icon - fi_4628635"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/fi_4628635.svg"
                          style={{}}
                        />
                        USA
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Streamlined brand rollout with complete identity
                            guidelines
                          </p>
                          <p>Increased brand recognition</p>
                          <p>Elevated market trust</p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="phose-protocol-cash-management-application/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                  <div className="col flex v--start h--start">
                    <a
                      className="media_wrap radius-12 ov-hidden"
                      href="ucked-Procurement & Supply-mobile-app/index.html">
                      <picture>
                        <source
                          media="(min-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-37.png"
                        />
                        <source
                          media="(max-width: 1440px)"
                          srcSet="/cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-37.png"
                        />
                        <img
                          alt="Ucked – Procurement & Supply for mobile application - image cover"
                          className="fullw radius-12"
                          decoding="async"
                          loading="lazy"
                          media="(max-width: 768px)"
                          src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/05/Case-preview-mobile-2.png"
                        />
                      </picture>
                    </a>
                  </div>
                  <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                    <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                      <p>#Procurement & Supply</p>
                    </div>
                    <div className="title title--m mt-12 isview textslide fullw">
                      Ucked – Procurement & Supply for mobile application
                    </div>
                    <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag">Ucked</span>
                      <span className="tag">
                        <img
                          alt="Icon - Clip path group"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Clip-path-group.svg"
                          style={{}}
                        />
                        Australia{" "}
                      </span>
                    </div>
                    <div className="grid col-1 mt-64 mt-48-mob card_details">
                      <div className="col">
                        <div className="txt txt--control-s color--dark-secondary uppercase">
                          Results
                        </div>
                        <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob gap-12 border-top">
                          <p>
                            Ignited social bonding with a bold, irreverent
                            identity
                          </p>
                          <p>
                            Boosted recognition by 29% through ecosystem
                            Procurement & Supply
                          </p>
                          <p>
                            Energized community engagement via playful mascots
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="btn--wrap mt-20 mt-20-mob">
                      <a
                        className="btn btn--orange hover--dark arr fullw-mob"
                        href="ucked-Procurement & Supply-mobile-app/index.html">
                        <span>
                          <b>Explore</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact_form_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob ov--hidden"
          id="contact-form">
          <div className="container">
            <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop">
              Contact us
            </div>
            <h2 className="title title--xl mt-16 color--white mw1040 nobr-mob isview textslide trd02">
              Have a project in mind? <br />
              <span>Let's chat</span>
            </h2>
          </div>
          <div className="mt-40 mt-48-mob contact_form_wrap">
            <div className="container">
              <div className="flex v--stretch h--between flex--block-mob">
                <form
                  action="/phenomenonstudio.com/?form-action=request"
                  autoComplete="off"
                  className="contact-form">
                  <div className="relative">
                    <div className="flex h--wrap v--start h--between row-gap-32 row-gap-24-mob form_wrap">
                      <input name="g-recaptcha-response" type="hidden" />
                      <input
                        defaultValue="validate_captcha"
                        name="action"
                        type="hidden"
                      />
                      <input defaultValue="1" name="form_type" type="hidden" />
                      <input
                        defaultValue="index.html"
                        name="source_page"
                        type="hidden"
                      />
                      <div className="input-wrap w50 isview slidetop">
                        <div className="txt txt--control-s color--white-light uppercase fw-600">
                          Your Name
                        </div>
                        <input
                          className="required"
                          data-max-length="40"
                          data-pattern="[A-Za-z]"
                          name="your_name"
                          placeholder=" "
                          type="text"
                        />
                        <p>
                          Enter your name <sup>*</sup>
                        </p>
                      </div>
                      <div className="input-wrap w50 isview slidetop">
                        <div className="txt txt--control-s color--white-light uppercase fw-600">
                          Your Email
                        </div>
                        <input
                          className="required email"
                          data-message-error="Your Email is invalid"
                          data-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                          name="your_email"
                          placeholder=" "
                          type="text"
                        />
                        <p>
                          Enter your email <sup>*</sup>
                        </p>
                      </div>
                      <div className="input-wrap isview slidetop">
                        <div className="txt txt--control-s color--white-light uppercase fw-600">
                          Message
                        </div>
                        <textarea
                          className="max-length"
                          data-max-length="1000"
                          name="your_text"
                          placeholder=" "
                        />
                        <p>Tell us about your project</p>
                      </div>
                      <div className="attach_wrap mt--8 mt-0-mob isview slidetop">
                        <input
                          accept=".jpg, .png, .webp, .doc, .docx, .pdf, .csv, .xlsx"
                          className="attach_input"
                          id="attach_1"
                          multiple
                          name="files_arr[]"
                          type="file"
                        />
                        <label
                          className="btn btn--white-light hover--dark-light clip"
                          htmlFor="attach_1">
                          <span>
                            <b>Attach file</b>
                          </span>
                        </label>
                        <div className="attach_inner" id="inner_1" />
                        <div className="file-err err fe1">
                          You can upload maximum 5 files
                        </div>
                        <div className="file-err err fe2">
                          Some of your file not loaded, because maximum file
                          size - 5 mb
                        </div>
                      </div>
                      <div className="budget_wrap mt-8-mob isview slidetop">
                        <div className="txt txt--control-s color--white-light uppercase fw-600">
                          Your budget for this project?
                        </div>
                        <div className="budgets flex v--start h--start h--wrap mt-20 gap-8">
                          <input
                            className="custom-validate budget"
                            data-validate-key="budget"
                            defaultValue="up to $10k"
                            id="budget_1"
                            name="budget"
                            type="radio"
                          />
                          <label className="btn btn--label" htmlFor="budget_1">
                            up to $10k
                          </label>
                          <input
                            className="custom-validate budget"
                            data-validate-key="budget"
                            defaultValue="$10-$20k"
                            id="budget_2"
                            name="budget"
                            type="radio"
                          />
                          <label className="btn btn--label" htmlFor="budget_2">
                            $10-$20k
                          </label>
                          <input
                            className="custom-validate budget"
                            data-validate-key="budget"
                            defaultValue="$20-$50k"
                            id="budget_3"
                            name="budget"
                            type="radio"
                          />
                          <label className="btn btn--label" htmlFor="budget_3">
                            $20-$50k
                          </label>
                          <input
                            className="custom-validate budget"
                            data-validate-key="budget"
                            defaultValue="$50-$100k"
                            id="budget_4"
                            name="budget"
                            type="radio"
                          />
                          <label className="btn btn--label" htmlFor="budget_4">
                            $50-$100k
                          </label>
                          <input
                            className="custom-validate budget"
                            data-validate-key="budget"
                            defaultValue=">$100k"
                            id="budget_5"
                            name="budget"
                            type="radio"
                          />
                          <label className="btn btn--label" htmlFor="budget_5">
                            {`>$100k`}
                          </label>
                        </div>
                      </div>
                      <div className="btn_wrap flex v--center h--start pt-8 flex--block-mob isview slidetop w-full-mob">
                        <button className="btn btn--orange btn--lg-desk arr fullw-mob hover--white">
                          <span>
                            <b>Submit</b>
                          </span>
                        </button>
                        <div className="txt txt--control-m color--white-light uppercase fw-600 mt-24-mob text--center-mob">
                          <p>
                            By clicking this button you accept{" "}
                            <a href="../terms-of-use/index.html">
                              Terms of Service
                            </a>{" "}
                            and
                            <br />
                            <a href="../privacy-policy/index.html">
                              Privacy Policy
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="form_state text--center success type-1 color--white bg--dark">
                      <div className="icon">
                        <img
                          alt="Icon - circle-check-svgrepo-com 1"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/circle-check-svgrepo-com-1.svg"
                          style={{}}
                        />
                      </div>
                      <div className="title title--m mt-24">
                        <span>Thanks</span> for taking time to reachout!
                      </div>
                      <div className="txt txt--l mt-12 color--white-light">
                        Stay connected with us by subscribing to our LinkedIn
                        account. By following, you’l be the first to hear about
                        our latest updates, news, and exciting development. We
                        look forward to sharing our journey with you!
                      </div>
                      <div className="btn_wrap mt-24 w-full-mob">
                        <a
                          className="btn btn--orange hover--white btn--lg-desk"
                          href="/www.linkedin.com/company/phenomenonstudio/"
                          rel="nofollow"
                          target="_blank">
                          <svg
                            fill="none"
                            height="17"
                            viewBox="0 0 16 17"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.8661 9.82749V14.3671H11.3513V10.1315C11.3513 9.06751 10.9876 8.34136 10.0773 8.34136C9.3824 8.34136 8.96887 8.83073 8.78694 9.30411C8.7206 9.47335 8.70352 9.7089 8.70352 9.94579V14.3671H6.18784C6.18784 14.3671 6.22172 7.19341 6.18784 6.45016H8.70327V7.57236C8.69817 7.58075 8.69154 7.5898 8.68674 7.59794H8.70327V7.57236C9.03747 7.03368 9.63432 6.26417 10.9702 6.26417C12.6254 6.26414 13.8661 7.3957 13.8661 9.82749ZM3.55633 2.63379C2.69572 2.63379 2.13281 3.22454 2.13281 4.00139C2.13281 4.76131 2.67944 5.36998 3.52294 5.36998H3.53975C4.41703 5.36998 4.96261 4.76142 4.96261 4.00139C4.94608 3.22454 4.41703 2.63379 3.55633 2.63379ZM2.28222 14.3671H4.79695V6.45016H2.28222V14.3671Z"
                              fill="currentColor"
                              fillOpacity="0.4"
                            />
                          </svg>
                          <span>
                            <b>Follow us</b>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="form_state text--center success type-2 color--white bg--dark">
                      <div className="icon">
                        <img
                          alt="Icon - circle-check-svgrepo-com 1"
                          className=""
                          decoding="async"
                          loading="lazy"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/circle-check-svgrepo-com-1.svg"
                          style={{}}
                        />
                      </div>
                      <div className="title title--m mt-24">
                        <span>Thanks</span> for taking time to reachout!
                      </div>
                      <div className="txt txt--l mt-12 color--white-light">
                        We’d love to hear more about your project! Feel free to
                        schedule a call using the link provided. This will help
                        us better understand your vision and ensure we’re
                        aligned on all the details.
                      </div>
                      <div className="btn_wrap mt-24 w-full-mob">
                        <a
                          className="btn btn--orange hover--white arr btn--lg-desk"
                          href="/calendly.com/hello-phenomenon-studio/30min"
                          rel="nofollow"
                          target="_blank">
                          <span>
                            <b>Book a Call</b>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="contacts ov-hidden">
                  <div className="contact_wrap color--white flex fd--column isview slidetop">
                    <div className="title title--s nobr-mob">
                      Have a project to <br />
                      discuss?
                    </div>
                    <div className="contact flex v--stretch h--between mt-auto mt-32-mob">
                      <img
                        alt="Image - ksenia"
                        className="radius-6 photo"
                        decoding="async"
                        loading="lazy"
                        src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/ksenia.jpg"
                        style={{
                          aspectRatio: "0.75555555555556",
                        }}
                      />
                      <div className="bio flex fd--column v--start">
                        <a
                          className="soc"
                          href="/www.linkedin.com/in/kseniia-shalia-a21921240/"
                          rel="nofollow"
                          target="_blank">
                          <img
                            alt=""
                            decoding="async"
                            loading="lazy"
                            src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/linkedin-alt.svg"
                          />
                        </a>
                        <div className="txt txt--m">Leo</div>
                        <div className="txt txt--s color--white-light">
                          Account Executive
                        </div>
                        <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                          <div className="copy_wrap">
                            <img
                              alt=""
                              className="copyme"
                              data-text="dampecon0504@gmail.comio.com"
                              decoding="async"
                              loading="lazy"
                              src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/copy.svg"
                            />
                          </div>
                          <a
                            className="btn btn--simple"
                            href="mailto:dampecon0504@gmail.comio.com">
                            <span>dampecon0504@gmail.comio.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_wrap color--white flex fd--column isview slidetop">
                    <div className="title title--s nobr-mob">
                      Have a partnership in <br />
                      mind?
                    </div>
                    <div className="contact flex v--stretch h--between mt-auto mt-32-mob">
                      <img
                        alt="Image - polina"
                        className="radius-6 photo"
                        decoding="async"
                        loading="lazy"
                        src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/polina.jpg"
                        style={{
                          aspectRatio: "0.75555555555556",
                        }}
                      />
                      <div className="bio flex fd--column v--start">
                        <a
                          className="soc"
                          href="/www.linkedin.com/in/polina-chebanova/"
                          rel="nofollow"
                          target="_blank">
                          <img
                            alt=""
                            decoding="async"
                            loading="lazy"
                            src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/linkedin-alt.svg"
                          />
                        </a>
                        <div className="txt txt--m">John</div>
                        <div className="txt txt--s color--white-light">
                          Co-Founder & CPO
                        </div>
                        <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                          <div className="copy_wrap">
                            <img
                              alt=""
                              className="copyme"
                              data-text="mailto:dampecon0504@yahoo.comudio.com"
                              decoding="async"
                              loading="lazy"
                              src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/copy.svg"
                            />
                          </div>
                          <a
                            className="btn btn--simple"
                            href="mailto:mailto:dampecon0504@yahoo.comudio.com">
                            <span>mailto:dampecon0504@yahoo.comudio.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
    </>
  )
}

export default Cases

import { useState } from 'react';
import Topnav from '../Component/Topnav'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom';

const Home = () => {
  // this stores which tab is active
    const [activeTab, setActiveTab] = useState("");
  
    // when a tab is clicked, update activeTab
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <>
      <div className="invisible" id="progress-bar-wrapper">
      <div id="progress-bar" />
    </div>
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
      <Topnav />
      <div
        className="favicons-wrap"
        style={{
          display: "none",
        }}>
        <img alt="" src="wp-content/uploads/2025/10/logo_00000.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00001.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00002.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00003.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00004.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00005.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00006.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00007.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00008.png" />
        <img alt="" src="wp-content/uploads/2025/10/logo_00009.png" />
      </div>
      <main className="next_block_sticky">
        <section className="hero bg--dark clipped-bottom next_block_sticky">
          <div className="container color--white">
            <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop">
              <h1>Product Design and Development Agency</h1>
            </div>
            <div className="nobr-mob title title--xl mw1040 isview textslide trd02">
              <h2>
                Empowering startups to launch, scale, and{" "}
                <span>succeed faster</span>
              </h2>
            </div>
            <div className="mt-24 flex v--centerh--start gap-8 fd--column-mob isview slidetop trd04">
              <a
                className="btn btn--orange hover--white btn--lg-desk arr arr-right"
                href="#contact-form"
                target="_self">
                <span>
                  <b>Let’s talk</b>
                </span>
              </a>
              <a
                className="btn btn--white-light arr arr-right hover--white btn--lg-desk"
                href="projects/index.html"
                target="_self">
                <span>
                  <b>View our cases</b>
                </span>
              </a>
            </div>
            <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
              <div className="col sticky isview slidetop">
                <div className="media_wrap">
                 <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="fullw radius-12"
                  style={{
                    aspectRatio: "1.33",
                    objectFit: "cover",
                    verticalAlign: "middle",
                  }}
                  // src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/vecteezy_factory.mp4" 
                />

                </div>
              </div>
              <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column">
                <div
                  className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit"
                  style={{
                    width: "100%",
                  }}>
                  <div>
                    <h3>
                      From MVP to market domination – your reliable partner in
                      UI/UX design and development
                    </h3>
                  </div>
                </div>
                <div className="txt txt--caption-m color--white-light uppercase fw-600 mt-auto pt-32 pt-0-mob mt-40-mob pt-8-mob isview slidetop">
                  <p>Designing products htmlFor startups backed by</p>
                </div>
                <div className="mt-24 logos_wrap grid col-4 col-2-tablet isview slidetop">
                  <div className="logo flex v--center h--center">
                    <img
                      alt="Icon - l_1"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/l_1.svg"
                      style={{
                        aspectRatio: "1.41",
                      }}
                    />
                  </div>
                  <div className="logo flex v--center h--center">
                    <img
                      alt="Icon - l_2"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/l_2.svg"
                      style={{
                        aspectRatio: "1.41",
                      }}
                    />
                  </div>
                  <div className="logo flex v--center h--center">
                    <img
                      alt="Icon - l_3"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/l_3.svg"
                      style={{
                        aspectRatio: "1.41",
                      }}
                    />
                  </div>
                  <div className="logo flex v--center h--center">
                    <div className="txt txt--control-s uppercase fw-600">
                      <p>and more</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col pc-visible" />
              <div className="col pt-32 pt-24-mob pb-32 pb-0-mob text--center">
                <div className="txt txt--caption-m color--white-light text--left mb-24 uppercase fw-600 mt-auto pt-32 pt-0-mob mt-24-mob isview fadein inner-inherit">
                  <div>phenomenon studio IN NUMBERS</div>
                </div>
                <div className="values_wrap grid col-2 clip_1 isview fadein">
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">98%</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>customer satisfaction rate</p>
                    </div>
                  </div>
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">35%+</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>boost in conversions after redesign</p>
                    </div>
                  </div>
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">60+</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>top-tier designers and developers on board</p>
                    </div>
                  </div>
                  <div className="col flex v--center h--center fd--column">
                    <div className="title--l color--white">500M+</div>
                    <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                      <p>investments raised by our clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="problems_we_solve bg--white pt-200 pb-200 pt-100-mob pb-100-mob mt-5">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
              <h2>Product Design and Development Agency</h2>            </div>
            <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
              Building a startup is hard, but finding the right partner{" "}
              <span>shouldn’t be</span>
            </div>
          </div>
          <div className="mt-100 mt-40-mob problems">
            <div className="row sticky row-1 bg--white">
              <div className="inner">
                <div className="container">
                  <div className="flex v--stretch h--between vertical_scroll_slider">
                    <div className="left pr-24 pr-0-mob">
                      <div className="txt txt--l">
                        <p>
                          Need to meet tight deadlines but don’t have enough
                          hands on deck?
                        </p>
                      </div>
                    </div>
                    <div className="center flex fd--column v--start">
                      <div className="txt txt--lead inner-inherit">
                        <div>
                          Hiring in-house takes time—posting jobs, sorting
                          resumes, and onboarding. We can get you a dedicated
                          designer or developer ready to start tomorrow, helping
                          you hit your deadlines without the wait.
                        </div>
                      </div>
                      <div className="btn-wrap mt-auto pt-24 pb-24 pt-32-mob">
                        <a
                          className="btn btn--orange hover--dark arr"
                          href="service/team-extension/index.html"
                          target="_self">
                          <span>
                            <b>Extend My Team</b>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="right">
                      <div className="video_player radius-12">
                        <video
                          autoPlay
                          className="fullw isview visible just_for_track fadein"
                          data-src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Polina_1_sub.mp4"
                          loop
                          muted
                          playsInline
                          poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/polina-team-cover.webp"
                          preload="none"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/small.mp4"
                        />
                        <div className="btn-wrap">
                          <button className="btn btn--play" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sticky row-2 bg--white">
              <div className="inner">
                <div className="container">
                  <div className="flex v--stretch h--between vertical_scroll_slider">
                    <div className="left pr-24 pr-0-mob">
                      <div className="txt txt--l">
                        <p>
                          Your product needs to scale, but your user experience
                          is holding you back?
                        </p>
                      </div>
                    </div>
                    <div className="center flex fd--column v--start">
                      <div className="txt txt--lead inner-inherit">
                        <div>
                          As a digital product design agency, we know seamless
                          scaling starts with consistency. We implement design
                          systems and optimize your UX to keep users
                          engaged—ensuring rapid growth doesn’t compromise
                          quality.
                        </div>
                      </div>
                      <div className="btn-wrap mt-auto pt-24 pb-24 pt-32-mob">
                        <a
                          className="btn btn--orange hover--dark arr"
                          href="service/product-redesign/index.html"
                          target="_self">
                          <span>
                            <b>Redesign My Product</b>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="right">
                      <div className="video_player radius-12">
                        <video
                          autoPlay
                          className="fullw isview visible just_for_track fadein"
                          data-src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Adam_2sub.mp4"
                          loop
                          muted
                          playsInline
                          poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/adam-cover.webp"
                          preload="none"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Adam_2sub.mp4"
                        />
                        <div className="btn-wrap">
                          <button className="btn btn--play" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row sticky row-3 bg--white">
              <div className="inner">
                <div className="container">
                  <div className="flex v--stretch h--between vertical_scroll_slider">
                    <div className="left pr-24 pr-0-mob">
                      <div className="txt txt--l">
                        <p>Have big ideas but need to launch an MVP quickly?</p>
                      </div>
                    </div>
                    <div className="center flex fd--column v--start">
                      <div className="txt txt--lead inner-inherit">
                        <div>
                          Our discovery process helps you focus on what matters
                          most, and with pre-built development frameworks, we
                          can speed up your MVP development by 50%. Launch
                          faster without sacrificing quality.
                        </div>
                      </div>
                      <div className="btn-wrap mt-auto pt-24 pb-24 pt-32-mob">
                        <a
                          className="btn btn--orange hover--dark arr"
                          href="service/rapid-mvp-development/index.html"
                          target="_self">
                          <span>
                            <b>Launch My MVP</b>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="right">
                      <div className="video_player radius-12">
                        <video
                          autoPlay
                          className="fullw isview visible just_for_track fadein"
                          data-src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Polina_3_sub.mp4"
                          loop
                          muted
                          playsInline
                          poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/polina-mvp-cover.webp"
                          preload="none"
                          src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Polina_3_sub.mp4"
                        />
                        <div className="btn-wrap">
                          <button className="btn btn--play" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space" />
          </div>
        </section>
        <section className="serv_base services_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob next_block_sticky">
          <div className="container">
            <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop inner-inherit">
              <div>
                <h2>Product Design and Development Agency Services</h2>
              </div>
            </div>
            <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview textslide trd02 inner-inherit">
              <span>Tailored support</span> from first prototype to long-term
              scale
            </div>
            <div className="color--white-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
              <div>
                Great products don’t happen by accident. As a digital product
                design agency, we help startups grow through smart strategy,
                solid UX, and scalable development from day one.
              </div>
            </div>
            <div className="mt-100 mt-32-mob">
              <div className="pt-32 pt-0-mob pb-32 pb-0-mob flex v--start h--between scroll_slider flex--block-mob">
                <div className="left flex fd--column flex--block-mob disable-scrollbar bg--dark">
                  <ul className="flex fd--column gap-4 isview slidetop">
                    <li className="title title--s services_section_link">
                      <a data-id="1" href="#slide-1">
                        Pre-seed
                      </a>
                    </li>
                    <li className="title title--s services_section_link">
                      <a data-id="2" href="#slide-2">
                        Seed
                      </a>
                    </li>
                    <li className="title title--s services_section_link">
                      <a data-id="3" href="#slide-3">
                        Series A & beyond
                      </a>
                    </li>
                  </ul>
                  <div className="btn-wrap mt-auto pt-32 pc-visible isview slidetop">
                    <a
                      className="btn btn--orange arr hover--white"
                      href="services/index.html"
                      target="_self">
                      <span>
                        <b>Explore all</b>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="right color--white gap-100 flex fd--column gap-80-mob mt-40-mob pt-8-mob isview fadein">
                  <div className="scroll_slide row-1" id="slide-1">
                    <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                      Validate your idea & attract early investors
                    </div>
                    <div className="colums_wrap mt-32 ov-hidden">
                      <div className="grid col-3 col-1-mob services_row  clipped">
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Design prototype
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Test product ideas fast with clickable user
                              journeys and visual flows.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/design-prototype/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Product discovery
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Map out key features, user flows, and architecture
                              to align your team and reduce risks.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/product-discovery/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Website development
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Launch a fast, scalable site that converts and
                              supports product growth.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/website-development-agency/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll_slide row-2" id="slide-2">
                    <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                      Build your product & gain market traction
                    </div>
                    <div className="colums_wrap mt-32 ov-hidden">
                      <div className="grid col-3 col-1-mob services_row  clipped">
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Branding
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Develop a brand that resonates — visually,
                              emotionally, and strategically.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/branding-and-identity-services/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Technical workshop
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Validate your tech stack, architecture, and
                              scalability path.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/tech-workshop/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Custom mvp development
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Expand your prototype into a fully functional,
                              production-ready product.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/custom-mvp-software-development/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Rapid mvp development
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Get your MVP 50% faster with lean sprints and
                              pre-built frameworks.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/rapid-mvp-development/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Dedicated team
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Access a team of experts to fuel your product’s
                              growth.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/dedicated-software-development-team/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start"></div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll_slide row-3" id="slide-3">
                    <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                      Scale, optimize & reach more users
                    </div>
                    <div className="colums_wrap mt-32 ov-hidden">
                      <div className="grid col-3 col-1-mob services_row  clipped">
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Ux audit
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Identify usability bottlenecks, improve
                              engagement, and optimize htmlFor conversions.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/ux-design-audit/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Product redesign
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Upgrade legacy interfaces with scalable,
                              business-driven UX and UI.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/product-redesign/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Team extension
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Instantly scale with dedicated designers and
                              developers ready to start.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/team-extension/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start">
                          <div className="title title--s isview slidetop">
                            Website redesign
                          </div>
                          <div className="txt txt--s mt-8 isview slidetop color--white-light">
                            <p>
                              Modernize your web presence with a digital product
                              design agency that drives engagement and brand
                              authority.
                            </p>
                          </div>
                          <div className="btn-wrap pt-54 pt-0-mob flex mt-auto mt-48-mob isview slidetop">
                            <a
                              className="btn btn--simple arr"
                              href="service/website-redesign-services/index.html">
                              <span>Explore</span>
                            </a>
                          </div>
                        </div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start"></div>
                        <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="col flex p-32 fd--column v--start"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mob-visible mt-40 pt-8">
              <a
                className="btn btn--orange arr fullw"
                href="services/index.html"
                target="_self">
                <span>
                  <b>Explore all</b>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="cases_section pt-200 pt-100-mob pb-200 pb-100-mob bg--white">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
              Featured cases
            </div>
            <div className="mt-24 mt-16-mob mw1040 title title--xl isview textslide trd02 inner-inherit">
              Discover how we’re driving change through innovative projects,
              strong partnerships, and <span>measurable outcomes</span>
            </div>
            <div className="cases_wrap grid gap-60 gap-48-mob mt-100 mt-48-mob scrollable">
              <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                <div className="col flex v--start h--start">
                  <a
                    className="media_wrap radius-12 ov-hidden"
                    href="projects/shaga-odyssey-awarded-website-development-for-web3-gamepad/index.html">
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
                        src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Media-9-3-1.png"
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
                        Tech Stack
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
                          Awwwards "Site of the Day" htmlFor Best Interactive Design
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btn--wrap mt-20 mt-20-mob">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="projects/shaga-odyssey-awarded-website-development-for-web3-gamepad/index.html">
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
                    href="projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
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
                        src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2-2.png"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                  <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                    <p>#UX audit #Product redesign #web development</p>
                  </div>
                  <div className="title title--m mt-12 isview textslide fullw">
                    KlickEx – frictionless cross-
                    <wbr />
                    border payments htmlFor the Pacific Island communities
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
                        Tech Stack
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
                        <p>Raised $1M in additional funding within 6 months</p>
                      </div>
                    </div>
                  </div>
                  <div className="btn--wrap mt-20 mt-20-mob">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html">
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
                        mobile friendliness and the general flow ofthe system. I
                        believe this has contributed significantly to the growth
                        of our business. Manythanks, Phenomenon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
                <div className="col flex v--start h--start">
                  <a
                    className="media_wrap radius-12 ov-hidden"
                    href="projects/isora-governance-risk-and-compliance-assessment-platform/index.html">
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
                        src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-Preview-mob.png"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                  <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                    <p>
                      #UX Audit #Product redesign #Web development #Team
                      extention
                    </p>
                  </div>
                  <div className="title title--m mt-12 isview textslide fullw">
                    Isora – optimizing governance, risk & compliance htmlFor top
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
                        Tech Stack
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
                        <p>Nominated htmlFor UX Design Award 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="btn--wrap mt-20 mt-20-mob">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="projects/isora-governance-risk-and-compliance-assessment-platform/index.html">
                      <span>
                        <b>Explore</b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-80 mt-40-mob text--center flex h--center isview slidetop">
              <Link
                className="btn btn--simple dark arr"
                to="/cases"
                target="_self">
                <span>
                  <b>Explore All Cases</b>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="our_team  pt-100-mob pb-200 pb-64-mob">
          <div className="container">
            <div className="txt txt--caption-m color--dark-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop">
              Meet our Team
            </div>
            <div className="nobr-mob title title--xl mw1040 isview textslide trd02 mb-40 mb-32-mob">
              Meet the team driving your product's <span>success</span>
            </div>
            <div className="txt txt--l color--dark-secondary mw760 mt-48 mt-24-mob isview slidetop trd02">
              Established in 2019, Phenomenon Studio was built with one goal—to
              become the leading digital product design agency htmlFor startups
              looking to launch, scale, and innovate. Our team of strategists,
              designers, developers, and product experts spans Canada, the U.S.,
              Ukraine, Poland, Estonia, and Switzerland, bringing global
              expertise to every project.
            </div>
            <div className="team_grid_wrap mt-100 mt-64-tablet">
              <div className="grid col-4 gap-20 col-1-mob">
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - telegram-cloud-photo-size-2-5253719888026007023-y"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/05/telegram-cloud-photo-size-2-5253719888026007023-y.jpg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop pc-visible pc-visible"></div>
                <div className="col isview slidetop  pc-visible span-2 span-1-mob">
                  <img
                    alt="Image - IMG_0477"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/04/IMG_0477.jpg"
                    style={{
                      aspectRatio: "1.7070707070707",
                    }}
                  />
                </div>
                <div className="col isview slidetop">
                  <img
                    alt="Image - telegram-cloud-document-2-5300745544623214761"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/05/telegram-cloud-document-2-5300745544623214761.jpg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - image"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/04/image.jpg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop pc-visible pc-visible"></div>
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - telegram-cloud-document-2-5300745544623214765 1"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/04/telegram-cloud-document-2-5300745544623214765-1.jpg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col isview slidetop pc-visible pc-visible"></div>
                <div className="col isview slidetop  pc-visible">
                  <img
                    alt="Image - IMG_4435 (2)"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/IMG_4435-2.jpg"
                    style={{
                      aspectRatio: "0.75",
                    }}
                  />
                </div>
                <div className="col isview slidetop">
                  <img
                    alt="Image - IMG_0478"
                    className="radius-12"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/04/IMG_0478.jpg"
                    style={{
                      aspectRatio: "0.82323232323232",
                    }}
                  />
                </div>
                <div className="col last-block flex fd--column v--start isview slidetop">
                  <div className="inner color--dark radius-12 bg--gray bg--orange-mob flex fd--column v--start clipped-right-mob">
                    <div className="title title--l">50+ team members</div>
                    <div className="btn-wrap mt-auto pt-24">
                      <a
                        className="btn btn--simple dark arr"
                        href="about-our-company/index.html"
                        target="_self">
                        <span>
                          <b>Learn more</b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services_section bg--white pb-200 pb-100-mob">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
              <h2>Why choose us?</h2>
            </div>
            <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02 inner-inherit">
              Your success is our <span>priority</span>
            </div>
            <div className="mt-40 mt-32-mob grid col-2 col-1-mob gap-12 benefits_container">
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  Design that meets regulation
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  HIPAA- and GDPR-certified expertise htmlFor Healthcare and beyond.
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    Since 2019, we’ve gained HIPAA and GDPR certifications and
                    industry recognition, delivering hundreds of products in
                    Healthcare, SaaS, FinTech, and EdTech — where compliance and
                    UX go hand in hand.
                  </p>
                </div>
              </div>
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  Design that lasts beyond trends
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  We don’t chase fads. We build digital products that stay
                  relevant.
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    Our work looks sharp today and stays usable tomorrow —
                    designed around long-term value, not short-term gimmicks.
                    Scalable systems, brand consistency, and smart UX that grows
                    with your product.
                  </p>
                </div>
              </div>
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  Design that’s developer-ready
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  We design htmlFor implementation, not handoff.{" "}
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    Every component is built with devs in mind: design tokens,
                    accessibility, reusability, and real-world constraints. We
                    collaborate with your team, reuse existing elements, and
                    stay involved until everything’s live.
                  </p>
                </div>
              </div>
              <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
                <div className="txt txt--control-m uppercase color--dark-secondary">
                  Local presence. Global delivery
                </div>
                <div className="txt txt--lead mt-12 mb-auto color--dark">
                  Work directly with the doers — not a chain of account
                  managers.
                </div>
                <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                  <p>
                    Collaborate with UX strategists in North America, while our
                    senior design and development teams in Europe deliver fast,
                    consistent results. We integrate into your tools and
                    workflow, working as part of your team — from a single
                    embedded designer to a full product squad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials_section pb-200 pb-100-mob bg--white">
          <div className="container">
            <div className="flex v--end h--between heading_wrap flex--block-mob">
              <div className="left">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
                  what our clients say
                </div>
                <div className="title title--xl mt-16 color--dark mw1040 isview textslide trd02">
                  <h2>
                    <span>5.0</span> is our average <br />
                    on clutch & designrush
                  </h2>
                </div>
              </div>
              <div className="services_cards grid col-2 gap-8 mt-32-mob">
                <a
                  className="card bg--gray radius-12 p-12 flex fd--column isview slidetop"
                  href="/clutch.co/profile/phenomenon-studio"
                  rel="nofollow"
                  target="_blank">
                  <span className="icon">
                    <img
                      alt="Icon - clutch-icon"
                      className="visible-icon"
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/clutch-icon.svg"
                      style={{}}
                    />
                    <img
                      alt="Icon - Icon"
                      className="hover-icon"
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Icon.svg"
                      style={{}}
                    />
                  </span>
                  <div className="ratings flex v--center h--between mt-auto">
                    <div className="stars flex v--center h--start gap-2">
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                    </div>
                    <div className="txt txt--caption-m color--dark-light fw-600">
                      5.0
                    </div>
                  </div>
                </a>
                <a
                  className="card bg--gray radius-12 p-12 flex fd--column isview slidetop"
                  href="/www.designrush.com/agency/profile/phenomenon-studio"
                  rel="nofollow"
                  target="_blank">
                  <span className="icon">
                    <img
                      alt="Icon - design-icon"
                      className="visible-icon"
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/design-icon.svg"
                      style={{}}
                    />
                    <img
                      alt="Icon - icon2"
                      className="hover-icon"
                      decoding="async"
                      loading="lazy"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/10/icon2.svg"
                      style={{}}
                    />
                  </span>
                  <div className="ratings flex v--center h--between mt-auto">
                    <div className="stars flex v--center h--start gap-2">
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                      <img
                        alt="star"
                        decoding="async"
                        loading="lazy"
                        src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      />
                    </div>
                    <div className="txt txt--caption-m color--dark-light fw-600">
                      4.9
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-40 mt-12-mob testimonials_wrap grid col-3 col-2-tablet col-1-mob gap-12">
              <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                  <img
                    alt="Image - Craig Tortolani"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/1516924597216.jpg"
                    style={{
                      aspectRatio: "1",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>Craig Tortolani</p>
                      <span>CPO at Dekryption Labs </span>
                    </div>
                  </div>
                </div>
                <div className="video_wrap mt-auto">
                  <div className="video_player radius-12 clipped-right-hover clipped-right-mob">
                    <video
                      className="fullw"
                      poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/cover-craig.webp"
                      preload="none"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/review-craig.mp4"
                    />
                    <div className="btn-wrap">
                      <button className="btn btn--play" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                  <img
                    alt="Image - Alex Friedman"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/av.png"
                    style={{
                      aspectRatio: "1.0064102564103",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>Alex Friedman</p>
                      <span>CEO at Open Path</span>
                    </div>
                  </div>
                </div>
                <div className="txt txt--l mt-auto pt-24 text_wrap">
                  <p>
                    Not only is the team extremely communicative, their work is
                    exceptional. I have never worked with a team so talented
                    while also being competitively priced and communicative.
                  </p>
                </div>
              </div>
              <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                  <img
                    alt="Image - KlickEx"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/KlickEx.jpg"
                    style={{
                      aspectRatio: "1",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>KlickEx Team </p>
                      <span />
                    </div>
                  </div>
                </div>
                <div className="video_wrap mt-auto">
                  <div className="video_player radius-12 clipped-right-hover clipped-right-mob">
                    <video
                      className="fullw"
                      poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/klickex-cover.webp"
                      preload="none"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/klickex-review.mp4"
                    />
                    <div className="btn-wrap">
                      <button className="btn btn--play" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                  <img
                    alt="Image - George Fry"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Rectangle-34624326.png"
                    style={{
                      aspectRatio: "1.0064102564103",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>George Fry</p>
                      <span>Founder at Neap</span>
                    </div>
                  </div>
                </div>
                <div className="txt txt--l mt-auto pt-24 text_wrap">
                  <p>
                    The quality of the designs is fantastic. Phenomenon Studio
                    works at speed and is extremely punctual with timelines.
                    They deliver top-notch outcomes with exceptional designs.
                  </p>
                </div>
              </div>
              <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                  <img
                    alt="Image - Andre Guerra"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/image.png"
                    style={{
                      aspectRatio: "1.0064102564103",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>Andre Guerra</p>
                      <span>Co-Owner at RADCAT Design</span>
                    </div>
                  </div>
                </div>
                <div className="video_wrap mt-auto">
                  <div className="video_player radius-12 clipped-right-hover clipped-right-mob">
                    <video
                      className="fullw"
                      poster="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/cover-andre-scaled.webp"
                      preload="none"
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/03/radcat-review.mp4"
                    />
                    <div className="btn-wrap">
                      <button className="btn btn--play" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                  <img
                    alt="Image - Kevin Alvarez"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/1683997337066.jpg"
                    style={{
                      aspectRatio: "1",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>Kevin Alvarez</p>
                      <span>Founder & General Partner, Predictive</span>
                    </div>
                  </div>
                </div>
                <div className="txt txt--l mt-auto pt-24 text_wrap">
                  <p>
                    Phenomenon Studio's ability to translate concepts and rough
                    design mock-ups into high-fidelity assets, designs, and
                    visuals was very impressive. The goal was to maintain simple
                    elegance in the design aesthetic, and they did it very well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="awards_section pb-200 pb-100-mob bg--white">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
              Awards
            </div>
            <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02">
              Wins that inspire us <span>forward</span>
            </div>
          </div>
          <div className="mt-40 mt-32-mob awards_container ov-hidden">
            <div className="grid awards_wrap col-3 col-2-tablet isview slidetop">
              <div className="col flex fd--column v--start col-1">
                <div className="img-wrap">
                  <img
                    alt="Icon - clutch"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/clutch.svg"
                    style={{}}
                  />
                </div>
                <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                  <p>Top product design company 2024</p>
                </div>
                <div className="btn-wrap mt-auto pt-24">
                  <a
                    className="btn btn--simple dark arr arr-45"
                    href="/clutch.co/profile/phenomenon-studio"
                    target="_blank">
                    <span>
                      <b>View On Clutch</b>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col flex fd--column v--start col-2">
                <div className="img-wrap">
                  <img
                    alt="Icon - upwork"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/upwork.svg"
                    style={{}}
                  />
                </div>
                <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                  <p>Top rated plus agency by Upwork</p>
                </div>
                <div className="btn-wrap mt-auto pt-24">
                  <a
                    className="btn btn--simple dark arr arr-45"
                    href="/www.upwork.com/agencies/1141628280721588224/"
                    target="_blank">
                    <span>
                      <b>View On Upwork</b>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col flex fd--column v--start col-3">
                <div className="img-wrap">
                  <img
                    alt="Icon - webflow"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/webflow.svg"
                    style={{}}
                  />
                </div>
                <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                  <p>Professional partner by Webflow</p>
                </div>
                <div className="btn-wrap mt-auto pt-24">
                  <a
                    className="btn btn--simple dark arr arr-45"
                    href="/webflow.com/@phenomenons-workspace"
                    target="_blank">
                    <span>
                      <b>View On Webflow</b>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col flex fd--column v--start col-1">
                <div className="img-wrap">
                  <img
                    alt="Icon - design"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/design.svg"
                    style={{}}
                  />
                </div>
                <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                  <p>
                    Nominee 2024 <br />
                    Isora - GRC Platform
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-24">
                  <a
                    className="btn btn--simple dark arr arr-45"
                    href="/ux-design-awards.com/winners/2024-2-isora-grc-collaborative-grc-platform"
                    target="_blank">
                    <span>
                      <b>View On UXDA</b>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col flex fd--column v--start col-2">
                <div className="img-wrap">
                  <img
                    alt="Icon - Awwwards"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Awwwards.svg"
                    style={{}}
                  />
                </div>
                <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                  <p>Site of the Day & honorable mentions</p>
                </div>
                <div className="btn-wrap mt-auto pt-24">
                  <a
                    className="btn btn--simple dark arr arr-45"
                    href="/www.awwwards.com/Phenomenon/"
                    target="_blank">
                    <span>
                      <b>View On Awwwards</b>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col flex fd--column v--start col-3">
                <div className="inner color--dark radius-12 bg--gray bg--orange-mob flex fd--column v--start clipped-right-mob">
                  <div className="title title--l">
                    32+ <br />
                    others
                  </div>
                  <div className="btn-wrap mt-auto pt-24">
                    <a
                      className="btn btn--simple dark arr"
                      href="about-our-company/index.html"
                      target="_self">
                      <span>
                        <b>Explore all awards</b>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
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
                          placeHolder=" "
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
                          placeHolder=" "
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
                          placeHolder=" "
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
                          Your budget htmlFor this project?
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
                            <a href="terms-of-use/index.html">
                              Terms of Service
                            </a>{" "}
                            and
                            <br />
                            <a href="privacy-policy/index.html">
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
                        <span>Thanks</span> htmlFor taking time to reachout!
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
                        <span>Thanks</span> htmlFor taking time to reachout!
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
                        src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/ksenia.jpg"
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
                        <div className="txt txt--m">Kseniia Shalia</div>
                        <div className="txt txt--s color--white-light">
                          Account Executive
                        </div>
                        <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                          <div className="copy_wrap">
                            <img
                              alt=""
                              className="copyme"
                              data-text="hello@phenomenon-studio.com"
                              decoding="async"
                              loading="lazy"
                              src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/copy.svg"
                            />
                          </div>
                          <a
                            className="btn btn--simple"
                            href="mailto:hello@phenomenon-studio.com">
                            <span>hello@phenomenon-studio.com</span>
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
                        src="cdn.phenomenonstudio.com/wp-content/uploads/2025/02/polina.jpg"
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
                        <div className="txt txt--m">Polina Chebanova</div>
                        <div className="txt txt--s color--white-light">
                          Co-Founder & CPO
                        </div>
                        <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                          <div className="copy_wrap">
                            <img
                              alt=""
                              className="copyme"
                              data-text="polina@phenomenon-studio.com"
                              decoding="async"
                              loading="lazy"
                              src="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/copy.svg"
                            />
                          </div>
                          <a
                            className="btn btn--simple"
                            href="mailto:polina@phenomenon-studio.com">
                            <span>polina@phenomenon-studio.com</span>
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

export default Home

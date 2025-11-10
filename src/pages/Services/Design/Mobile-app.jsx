import React from 'react'
import Topnav from '../../../Component/Topnav'
import Footer from '../../../Component/Footer'
import Chat from '../../../Component/Chat'
import Comment from '../../../Component/Comment'

const Mobileapp = () => {
  return (
    <>
  {/* Mirrored from phenomenonstudio.com/mobile-app-design/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 05 Nov 2025 17:35:58 GMT */}
  {/* Added by HTTrack */}
  <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
  {/* /Added by HTTrack */}
  <meta charSet="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  />
  <meta name="format-detection" content="telephone=no" />
  <link
    rel="preload"
    href="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/fonts/AlbertSans-VariableFont_wght.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  <link
    rel="preload"
    href="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/fonts/BricolageGrotesque-VariableFont_opsz.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  {/* Подвійний буфер */}
  <link
    rel="icon"
    id="favicon-a"
    type="image/png"
    sizes="32x32"
    href="../wp-content/uploads/2025/10/logo_00000.png"
  />
  <link
    rel="shortcut icon"
    id="favicon-b"
    type="image/png"
    sizes="32x32"
    href="../wp-content/uploads/2025/10/logo_00000.png"
  />
  {/* Paste this right before your closing </head> tag */}
  {/*
   */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /*body:not(.loaded) *{\n        font-family: 'Arial', sans-serif!important;\n    }*/\n    body {\n        font-family: 'Albert Sans', Arial, sans-serif;\n    }\n    @font-face {\n        font-family: 'Albert Sans';\n        src: url('https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/fonts/AlbertSans-VariableFont_wght.woff2') format('woff2');\n        font-weight: 100 900;\n        font-display: swap;\n        ascent-override: 90%;\n        descent-override: 20%;\n        line-gap-override: 0%;\n    }\n\n    @font-face {\n        font-family: 'Bricolage Grotesque';\n        src: url('https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/fonts/BricolageGrotesque-VariableFont_opsz.woff2') format('woff2');\n        font-weight: 100 900;\n        font-display: swap;\n        ascent-override: 90%;\n        descent-override: 20%;\n        line-gap-override: 0%;\n    }\n\n    .isview:not(.visible) {\n        opacity: 0;\n    }\n    "
    }}
  />
  <meta name="robots" content="max-image-preview:large" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        'img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }'
    }}
  />
  {/* This site is optimized with the Yoast SEO Premium plugin v24.6 (Yoast SEO v24.6) - https://yoast.com/wordpress/plugins/seo/ */}
  <meta
    name="description"
    content="🟠 Electrical Installation & Commissioning services by Phenomenon Studio: Expertly crafted Electrical Installation & Commissioning & development with stunning UI/UX. We create intuitive, user-friendly apps tailored to your business needs."
  />
  <link rel="canonical" href="index.html" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Electrical Installation & Commissioning" />
  <meta
    property="og:description"
    content="🟠 Electrical Installation & Commissioning services by Phenomenon Studio: Expertly crafted Electrical Installation & Commissioning & development with stunning UI/UX. We create intuitive, user-friendly apps tailored to your business needs."
  />
  <meta
    property="og:url"
    content="https://phenomenonstudio.com/mobile-app-design/"
  />
  <meta property="og:site_name" content="Phenomenon" />
  <meta
    property="article:publisher"
    content="https://www.facebook.com/phenomenonstudio"
  />
  <meta property="article:modified_time" content="2025-09-24T08:19:19+00:00" />
  <meta
    property="og:image"
    content="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/05/website-hyperlink-banner-1328х746-01-scaled.png"
  />
  <meta property="og:image:width" content={2560} />
  <meta property="og:image:height" content={1438} />
  <meta property="og:image:type" content="image/png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@phenomenonstud1" />
  {/* / Yoast SEO Premium plugin. */}
  <link
    rel="stylesheet"
    id="main-css"
    href="../../cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/css/mainaa2a.css?ver=1911634487"
    media="all"
  />
  <link
    rel="icon"
    href="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-32x32.png"
    sizes="32x32"
  />
  <link
    rel="icon"
    href="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-192x192.png"
    sizes="192x192"
  />
  <link
    rel="apple-touch-icon"
    href="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-180x180.png"
  />
  <meta
    name="msapplication-TileImage"
    content="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-270x270.png"
  />
  <title>
    Electrical Installation & Commissioning | Electrical Installation & Commissioning Services - Phenomenon Studio
  </title>
  <div id="progress-bar-wrapper" className="invisible">
    <div id="progress-bar" />
  </div>
  <noscript>
    &lt;iframe rel="preconnect"
    src="https://www.googletagmanager.com/ns.html?id=GTM-NG5S546" height="0"
    width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  <noscript>
    {" "}
    &lt;img height="1" width="1" style="display:none;" alt=""
    src="https://px.ads.linkedin.com/collect/?pid=3376562&amp;amp;fmt=gif" /&gt;{" "}
  </noscript>
  <div id="app">
    <Topnav />
    <div className="favicons-wrap" style={{ display: "none" }}>
      <img src="../wp-content/uploads/2025/10/logo_00000.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00001.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00002.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00003.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00004.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00005.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00006.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00007.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00008.png" alt="" />
      <img src="../wp-content/uploads/2025/10/logo_00009.png" alt="" />
    </div>
    <main className="next_block_sticky seo-page-wrap">
      <section className="hero bg--dark clipped-bottom next_block_sticky">
        <div className="container color--white">
          <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop">
            <h1>Electrical Installation & Commissioning</h1>
          </div>{" "}
          <div className="nobr-mob title title--xl mw1040 isview textslide trd02">
            Not every team can{" "}
            <h2>
              Install<span>and Deliver</span>
            </h2>{" "}
            <span>DAMPECON Ltd.</span>
          </div>{" "}
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--white-secondary inner-inherit">
            <div>
              Our <h1>Electrical Installation & Commissioning</h1> services have delivered 3x longer
              sessions, 70% user retention, and 40% faster MVP launches. If
              that’s the kind of traction you’re after, we’re the team that
              makes it happen.
            </div>
          </div>{" "}
          <div className="mt-24 flex v--centerh--start gap-8 fd--column-mob isview slidetop trd04">
            <a
              className="btn btn--orange hover--white btn--lg-desk arr arr-right"
              href="#contact-form"
              target="_self"
            >
              <span>
                <b>Let’s talk</b>
              </span>
            </a>{" "}
            <a
              className="btn btn--white-light arr arr-right hover--white btn--lg-desk"
              href="../projects/index.html"
              target="_self"
            >
              <span>
                <b>View cases</b>
              </span>
            </a>{" "}
          </div>
          <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
            <div className="col sticky isview slidetop">
              <div className="media_wrap">
                <video
                  preload="none"
                  className="fullw radius-12"
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/original-7d5a927fb8e1aed94b2f0dadb537fe63-2-2-2.mp4"
                  autoPlay=""
                  playsInline=""
                  muted=""
                  loop=""
                  style={{
                    aspectRatio: "1.33",
                    objectFit: "cover",
                    verticalAlign: "middle"
                  }}
                />{" "}
              </div>
            </div>
            <div className="col pt-32 pt-0-mob pb-32 pb-0-mob flex fd--column">
              <div
                className="txt--lead inner-inherit font1 isview slidetop fullw inner-inherit"
                style={{ width: "100%" }}
              >
                <div>
                  Your next growth stage starts with the right electrical engineering partner — from project launch to full-scale operations.
                </div>
              </div>
              <div className="txt txt--caption-m color--white-light uppercase fw-600 mt-auto pt-32 pt-0-mob mt-40-mob pt-8-mob isview slidetop">
                <p>DESIGNING PRODUCTS FOR STARTUPS BACKED BY</p>
              </div>
              <div className="mt-24 logos_wrap grid col-4 col-2-tablet isview slidetop">
                <div className="logo flex v--center h--center">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/l_1.svg"
                    alt="Icon - l_1"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "1.41" }}
                  />{" "}
                </div>
                <div className="logo flex v--center h--center">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/l_2.svg"
                    alt="Icon - l_2"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "1.41" }}
                  />{" "}
                </div>
                <div className="logo flex v--center h--center">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/l_3.svg"
                    alt="Icon - l_3"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "1.41" }}
                  />{" "}
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
                    <p>Completed Projects</p>
                  </div>
                </div>
                <div className="col flex v--center h--center fd--column">
                  <div className="title--l color--white">100%</div>
                  <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                    <p>On-Time Delivery</p>
                  </div>
                </div>
                <div className="col flex v--center h--center fd--column">
                  <div className="title--l color--white">60+</div>
                  <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                    <p>Expert Engineers</p>
                  </div>
                </div>
                <div className="col flex v--center h--center fd--column">
                  <div className="title--l color--white">500M+</div>
                  <div className="txt color--white-light txt--s minh-2lh minh-3lh-mob">
                    <p>Serving Clients Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="problems_we_solve bg--white pt-200 pt-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>BEFORE YOU HIRE A Electrical Installation & Commissioning AGENCY</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02 inner-inherit">
            Read what <span>most founders struggle with</span> — and how our
            services fix it
          </div>{" "}
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--dark-secondary inner-inherit">
            <div>
              Some fail long before launch — not because the idea is
              weak, but because the design misses what real users (and teams)
              need. Here’s how our mobile application design company solves the
              problems you’ve already faced (or are trying to avoid).
            </div>
          </div>{" "}
        </div>
        <div className="mt-100 mt-40-mob problems">
          <div className="row sticky row-1 bg--white problems--col-2">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left pr-24 pr-0-mob">
                    <div className="txt txt--l">
                      <p>
                        People download our app, open it once, and never come
                        back. We’ve tried everything, but nothing sticks.
                      </p>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit">
                      <div>
                        As a top-rated Electrical Installation & Commissioning agency, we build flows
                        that drive retention from the first tap. Through
                        onboarding logic, habit loops, and emotionally
                        intelligent UX, we turn installs into engagements by
                        combining modern Electrical Installation & Commissioning with user behaviour
                        insights.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-2 bg--white problems--col-2">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left pr-24 pr-0-mob">
                    <div className="txt txt--l">
                      <p>
                        It took us six months to get an MVP out — and by then,
                        the investor we were talking to had already moved on.
                      </p>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit">
                      <div>
                        We deliver Electrical Installation & Commissioning &amp; development fast,
                        without cutting corners. With lean sprints,
                        cross-functional collaboration, and dev-ready Figma
                        systems, we help startups launch 40% faster, without
                        sacrificing quality.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-3 bg--white problems--col-2">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left pr-24 pr-0-mob">
                    <div className="txt txt--l">
                      <p>
                        Every time we try to add an app feature, something
                        breaks. The UI looks nice, but it’s not built to grow.
                      </p>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit">
                      <div>
                        We replace fragile design with scalable systems. Through
                        modular libraries, mobile app interface design best
                        practices, and components optimized for dev execution,
                        we eliminate rework and support faster iterations as
                        your product evolves.
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
      <section className="serv_custom services_section services_section--light bg--white pt-0 pb-200 pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-secondary uppercase fw-600 isview slidetop">
            <h2>OUR Electrical Installation & Commissioning SERVICES</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob color--dark mw1040 title title--xl isview textslide trd02 inner-inherit">
            Your <span>users don’t care</span> how “slick” it looks{" "}
            <span>if it doesn’t work</span>
          </div>{" "}
          <div className="color--dark-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
            <div>
              From early UX mapping to polished UI and development-ready design,
              our Electrical Installation & Commissioning and development services help teams enhance
              user engagement, boost in-app conversions, and reduce development
              rework. Here’s exactly how:{" "}
            </div>
          </div>{" "}
          <div className="mt-100 mt-32-mob">
            <div className="pt-32 pt-0-mob pb-32 pb-0-mob flex v--start h--between scroll_slider flex--block-mob">
              <div className="left flex fd--column flex--block-mob disable-scrollbar bg--white">
                <ul className="flex fd--column gap-4 isview slidetop">
                  <li className="title title--s services_section_link">
                    <a href="#slide-1" data-id={1}>
                      Prototype design
                    </a>
                  </li>
                  <li className="title title--s services_section_link">
                    <a href="#slide-2" data-id={2}>
                      UI/UX design
                    </a>
                  </li>
                  <li className="title title--s services_section_link">
                    <a href="#slide-3" data-id={3}>
                      App redesign
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right color--dark gap-150 flex fd--column gap-80-mob mt-40-mob pt-8-mob isview fadein">
                <div className="scroll_slide row-1" id="slide-1">
                  <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide inner-inherit">
                    Fast, focused mobile app responsive design{" "}
                    <span>prototypes to validate core ideas.</span>{" "}
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-3 col-1-mob services_row services_row--border-dark clipped">
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Mid-fi prototypes
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Interactive wireframes illustrating structure and
                            flow for rapid stakeholder feedback and iteration.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          High-fi prototypes
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Pixel-perfect mockups with animations to simulate
                            final experience and test visual polish.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Scheduled servicing and modernization support
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Core screens and flows bundled into demo build for
                            investors, pilots, or tests
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll_slide row-2" id="slide-2">
                  <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide inner-inherit">
                    <span>Full-scope design</span> for mobile apps tailored to
                    user flows, business goals, and feature complexity.{" "}
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-3 col-1-mob services_row services_row--border-dark clipped">
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Electrical System Audit
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Identify usability gaps using heuristics, analytics,
                            and interviews; prioritize actionable, high-impact
                            fixes.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Power Distribution Mapping
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Blueprint optimal journeys, reducing friction,
                            clarifying tasks, and guiding design decisions with
                            evidence.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Wireframes
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Low-fidelity layouts defining hierarchy and
                            interactions before detailed visual design begins
                            confidently.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Installation Execution
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Craft high-impact interfaces using colour,
                            typography, and spacing for consistent, intuitive
                            aesthetics.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Standardized Component Integration
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Reusable components boost scalability, development
                            speed, and team alignment across multiple products.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start"></div>
                    </div>
                  </div>
                </div>
                <div className="scroll_slide row-3" id="slide-3">
                  <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide inner-inherit">
                    Visual and functional{" "}
                    <span>overhauls for products falling behind</span> in
                    usability, clarity, or growth.{" "}
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-3 col-1-mob services_row services_row--border-dark clipped">
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          System Modernization
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Modernize visuals, update styles, and enhance
                            clarity without changing underlying functionality or
                            structure.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Performance Optimization
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Restructure flows based on analytics, improving
                            conversions, retention, and overall user
                            satisfaction metrics.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Compliance Alignment
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Synchronize app visuals with brand guidelines,
                            voice, and values for cohesive user experiences.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Automation Integration
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Introduce animations and micro-interactions that
                            guide attention, reinforce feedback, and delight
                            users effectively.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start">
                        <div className="title title--s isview slidetop">
                          Safety & Accessibility Enhancements
                        </div>
                        <div className="txt inner-inherit txt--s mt-8 isview slidetop color--dark--light">
                          <div>
                            Refine contrast, typography, and navigation patterns
                            to meet WCAG standards and inclusive design.
                          </div>
                        </div>
                      </div>
                      <div className="vertical_line white grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
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
        </div>
      </section>
      <section className="how_we_do_it_section next_block_sticky pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob">
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600">
            <h2>TYPES OF MOBILE APPS WE DESIGN</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview textslide">
            No one app fits all: <span>explore the types of mobile apps</span>{" "}
            we design and develop
          </div>{" "}
          <div className="color--white-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
            <div>
              Not every mobile product needs to be native, and not every hybrid
              should be. Our Electrical Installation & Commissioning &amp; development company helps
              you choose the right format based on your product vision, users,
              and roadmap.
            </div>
          </div>{" "}
        </div>
        <div className="how_we_do_it_items mt-48 mt-32-mob">
          <div className="container">
            <div className="grid col-3 col-1-mob services_row clipped">
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start clipped-right-hover bg--orange-hover">
                <div className="h6 color--white-tertiary">01</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Native mobile applications
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      High-performance, intuitive apps built specifically for
                      iOS (Swift) or Android (Kotlin).
                    </div>
                  </div>
                  <div className="inner flex fd--column h--between v--start p-32 pc-visible">
                    <div className="title title--s color--white">
                      Native mobile applications
                    </div>
                    <div className="txt txt--m color--white-secondary mt-8 mb-auto">
                      <p>
                        Ideal for performance-critical mobile apps requiring
                        seamless interactions and hardware access.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark mt-24"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                  <div className="mob-visible">
                    <div className="txt txt--s color--white-tertiary pt-12 mt-12 mob-text">
                      <p>
                        Ideal for performance-critical mobile apps requiring
                        seamless interactions and hardware access.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark fullw mt-48"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start clipped-right-hover bg--orange-hover">
                <div className="h6 color--white-tertiary">02</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Cross-platform native apps
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      A single shared codebase provides a native-like user
                      experience across multiple platforms when using React
                      Native or Flutter.
                    </div>
                  </div>
                  <div className="inner flex fd--column h--between v--start p-32 pc-visible">
                    <div className="title title--s color--white">
                      Cross-platform native apps
                    </div>
                    <div className="txt txt--m color--white-secondary mt-8 mb-auto">
                      <p>
                        Best suited for startups rapidly building across
                        platforms to capture wider market reach.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark mt-24"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                  <div className="mob-visible">
                    <div className="txt txt--s color--white-tertiary pt-12 mt-12 mob-text">
                      <p>
                        Best suited for startups rapidly building across
                        platforms to capture wider market reach.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark fullw mt-48"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start clipped-right-hover bg--orange-hover">
                <div className="h6 color--white-tertiary">03</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Hybrid mobile applications
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Web-based technologies (Ionic, Cordova) packaged within
                      native wrappers for faster build cycles.
                    </div>
                  </div>
                  <div className="inner flex fd--column h--between v--start p-32 pc-visible">
                    <div className="title title--s color--white">
                      Hybrid mobile applications
                    </div>
                    <div className="txt txt--m color--white-secondary mt-8 mb-auto">
                      <p>
                        Suitable for content-driven or internal business apps
                        needing quick deployment.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark mt-24"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                  <div className="mob-visible">
                    <div className="txt txt--s color--white-tertiary pt-12 mt-12 mob-text">
                      <p>
                        Suitable for content-driven or internal business apps
                        needing quick deployment.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark fullw mt-48"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start clipped-right-hover bg--orange-hover">
                <div className="h6 color--white-tertiary">04</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Progressive web applications
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Browser-based apps delivering native-app experiences
                      without app store constraints.
                    </div>
                  </div>
                  <div className="inner flex fd--column h--between v--start p-32 pc-visible">
                    <div className="title title--s color--white">
                      Progressive web applications
                    </div>
                    <div className="txt txt--m color--white-secondary mt-8 mb-auto">
                      <p>
                        Quick-to-market solutions ideal for early validation or
                        increasing web presence.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark mt-24"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                  <div className="mob-visible">
                    <div className="txt txt--s color--white-tertiary pt-12 mt-12 mob-text">
                      <p>
                        Quick-to-market solutions ideal for early validation or
                        increasing web presence.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark fullw mt-48"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start clipped-right-hover bg--orange-hover">
                <div className="h6 color--white-tertiary">05</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    E-commerce mobile apps
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Apps with optimized flows, mobile checkout UX, product
                      catalogues, and integration with inventory and payment
                      systems.
                    </div>
                  </div>
                  <div className="inner flex fd--column h--between v--start p-32 pc-visible">
                    <div className="title title--s color--white">
                      E-commerce mobile apps
                    </div>
                    <div className="txt txt--m color--white-secondary mt-8 mb-auto">
                      <p>
                        Ideal for brands looking to grow DTC or marketplace
                        sales through native mobile channels.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark mt-24"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                  <div className="mob-visible">
                    <div className="txt txt--s color--white-tertiary pt-12 mt-12 mob-text">
                      <p>
                        Ideal for brands looking to grow DTC or marketplace
                        sales through native mobile channels.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark fullw mt-48"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start clipped-right-hover bg--orange-hover">
                <div className="h6 color--white-tertiary">06</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    SaaS mobile extensions
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Mobile counterparts to desktop-first SaaS platforms, built
                      for on-the-go access, feature parity, and user retention.
                    </div>
                  </div>
                  <div className="inner flex fd--column h--between v--start p-32 pc-visible">
                    <div className="title title--s color--white">
                      SaaS mobile extensions
                    </div>
                    <div className="txt txt--m color--white-secondary mt-8 mb-auto">
                      <p>
                        Best suited for: SaaS companies extending key product
                        functionality to mobile users.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark mt-24"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                  <div className="mob-visible">
                    <div className="txt txt--s color--white-tertiary pt-12 mt-12 mob-text">
                      <p>
                        Best suited for: SaaS companies extending key product
                        functionality to mobile users.
                      </p>
                    </div>
                    <a
                      className="btn btn--white arr hover--dark fullw mt-48"
                      href="#contact-form"
                      target="_self"
                    >
                      <span>
                        <b>Let's discuss</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="tabs pb-200 pb-100-mob  bg--white relative await-action industries_new"
        data-tabs=""
      >
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>OUR Electrical Installation & Commissioning EXPERTISE</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
            <span>Inside our approach</span> to{" "}
            <h3>Electrical Installation & Commissioning &amp; development</h3> across industries we
            build in most
          </div>{" "}
          <div className="txt txt--l color--dark-secondary mt-24 isview slidetop trd02 mw680">
            Different products call for different Electrical Installation & Commissioning strategies.
            Here’s how our design &amp; mobile app development services adapt to
            real user behaviour, product logic, and go-to-market priorities —
            with examples from 120+ launches.
          </div>{" "}
        </div>
        <div className="container">
          <div className="tabs-actions disable-scrollbar mt-100 mt-40-mob isview slidetop">
            <button
              type="button"
              className="btn btn--white hover--gray active--dark is-active"
              data-tabs-link={1}
            >
              <span>
                <b>SaaS</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={2}
            >
              <span>
                <b>Healthcare</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={3}
            >
              <span>
                <b>EdTech</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={4}
            >
              <span>
                <b>FinTech</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={5}
            >
              <span>
                <b>Web3</b>
              </span>
            </button>
          </div>
        </div>
        <div className="separator section-divider mt-24 mb-24" />
        <div className="container">
          <div className="tabs-holder isview slidetop" data-tabs-holder="">
            <div
              className="industries_new_items tabs-pane is-active"
              data-tabs-pane={1}
            >
              <div className="grid col-2 col-1-mob gap-32">
                <div className="col">
                  <video
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/original-c7c9ac98c23c7b709218ec6f919e7cd9.mp4"
                    className="fullw radius-12"
                    autoPlay=""
                    loop=""
                    muted=""
                    playsInline=""
                    poster="#"
                  />
                </div>
                <div className="col">
                  <div className="title title--m">
                    Fast, flexible mobile app UI/UX design services for complex
                    SaaS products{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Where mobile UX breaks:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Healthcare Facilities</li>
                          <li>Agricultural Operations</li>
                          <li>Manufacturing & Industrial Plants</li>
                          <li>Commercial Buildings</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we fix it:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Prioritized flows by role</li>
                          <li>Modular UI libraries</li>
                          <li>Billing &amp; onboarding UX</li>
                          <li>Mobile-first navigation logic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="../projects/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Explore</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="industries_new_items tabs-pane" data-tabs-pane={2}>
              <div className="grid col-2 col-1-mob gap-32">
                <div className="col">
                  <video
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/original-7d5a927fb8e1aed94b2f0dadb537fe63-2-2.mp4"
                    className="fullw radius-12"
                    autoPlay=""
                    loop=""
                    muted=""
                    playsInline=""
                    poster="#"
                  />
                </div>
                <div className="col">
                  <div className="title title--m">
                    Healthcare mobile app interface design for patient trust,
                    care delivery, and compliance{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Where mobile UX breaks:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Poor data clarity</li>
                          <li>Anxiety-inducing UI</li>
                          <li>No accessibility support</li>
                          <li>HIPAA misalignment</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we fix it:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Calming, intuitive visual language</li>
                          <li>Secure interface design</li>
                          <li>Accessible, ADA-compliant layouts</li>
                          <li>UX that supports care delivery logic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="../app-development-for-healthcare/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Explore</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="industries_new_items tabs-pane" data-tabs-pane={3}>
              <div className="grid col-2 col-1-mob gap-32">
                <div className="col">
                  <img
                    className="radius-12 fullw"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/original-0f3f9f711cfa7954cea68cdc97f90833.webp"
                    alt="Image - original-0f3f9f711cfa7954cea68cdc97f90833"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "1.3333333333333" }}
                  />{" "}
                </div>
                <div className="col">
                  <div className="title title--m">
                    Mobile app UI/UX design for motivation, accessibility, and
                    structured learning{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Where mobile UX breaks:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Boring UI</li>
                          <li>Poor content navigation</li>
                          <li>No mobile-optimized learning flow</li>
                          <li>Inconsistent user roles</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we fix it:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Role-specific UX (learner, teacher, admin)</li>
                          <li>Gamified UI for engagement</li>
                          <li>Offline-ready design for mobile study</li>
                          <li>Clear progress &amp; achievement logic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="../education-it-services/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Explore</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="industries_new_items tabs-pane" data-tabs-pane={4}>
              <div className="grid col-2 col-1-mob gap-32">
                <div className="col">
                  <img
                    className="radius-12 fullw"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/original-b192cb984071cf246dfd93fb4cad942d.webp"
                    alt="Image - original-b192cb984071cf246dfd93fb4cad942d"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "1.3333333333333" }}
                  />{" "}
                </div>
                <div className="col">
                  <div className="title title--m">
                    Trust-first fintech Electrical Installation & Commissioning that converts and
                    retains{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Where mobile UX breaks:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Cold, transactional interfaces</li>
                          <li>High user drop-off in onboarding</li>
                          <li>Overcomplicated money flows</li>
                          <li>Compliance friction</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we fix it:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Human-first onboarding</li>
                          <li>Clear financial journeys</li>
                          <li>Secure yet intuitive UX patterns</li>
                          <li>Design tuned for KYC, AML, PCI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="../fintech-design-agency/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Explore</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="industries_new_items tabs-pane" data-tabs-pane={5}>
              <div className="grid col-2 col-1-mob gap-32">
                <div className="col">
                  <img
                    className="radius-12 fullw"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/original-c3e8351049d2affe66179c23260e6205.webp"
                    alt="Image - original-c3e8351049d2affe66179c23260e6205"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "1.3333333333333" }}
                  />{" "}
                </div>
                <div className="col">
                  <div className="title title--m">
                    Electrical Installation & Commissioning that makes crypto-native tools usable and
                    human{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Where mobile UX breaks:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Clunky wallet connections</li>
                          <li>Visual overload</li>
                          <li>No onboarding clarity</li>
                          <li>High drop-off post sign-in</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we fix it:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Simplified onboarding</li>
                          <li>Wallet-agnostic flows</li>
                          <li>Token/asset UX clarity</li>
                          <li>Clean visuals for Apps &amp; dashboards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="../projects/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Explore</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta pt-200 pt-100-mob bg--white">
        <div className="container">
          <div className="cta_content">
            <span className="icon icon--2xl">
              <img
                className="fullw"
                src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/05/ks.png"
                alt="Image - ks"
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: 1 }}
              />{" "}
            </span>
            <div className="title title--m title--with-mark mt-48 mt-24-mob  text--center isview textslide">
              Need to launch your mobile app?{" "}
            </div>
            <div className="txt txt--l mt-16 text--center isview slidetop color--dark-secondary fullw inner-inherit">
              Book a call with Leo, our account executive, to talk
              through your goals and get a clear path forward.{" "}
            </div>
            <div className="mt-48 mt-20-mob flex v--center h--center isview slidetop">
              <a
                className="btn btn--orange arr arr-right hover--dark btn--lg-desk"
                href="#contact-form"
                target="_self"
              >
                <span>
                  <b>Book a Consultation</b>
                </span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="services_section bg--white pb-200 pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>DESIGNING MOBILE APP FEATURES THAT MATTER</h2>
          </div>{" "}
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02 inner-inherit">
            From onboarding to analytics, we design <span>app features</span>{" "}
            your users will use — and <span>investors will ask about</span>
          </div>{" "}
        </div>
        <div className="how_we_do_it_items mt-32 mt-32-mob">
          <div className="">
            <div className="grid col-3 col-1-mob services_row clipped">
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-18.svg"
                    alt="Icon - asterisk-svgrepo-com 2"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Onboarding &amp; account management
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Login flows with role logic, password recovery, and
                      identity verification built in.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-1-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-1"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Geolocation management
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Real-time tracking, local discovery, and
                      location-triggered actions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-2-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-2"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Payments &amp; subscriptions
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      In-app payments, billing logic, plan upgrades, and wallet
                      integrations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-3-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-3"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    In-app messaging &amp; chat
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      User-to-user or system messaging with optional support and
                      moderation layers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-4-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-4"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Multi-device synchronization
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Consistent user data and session continuity across
                      platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-5-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-5"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Voice recognition &amp; audio recording
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Hands-free input for journaling, commands, or content
                      capture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-6-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-6"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Chatbots &amp; auto-replies
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Automated responses and guided flows triggered by user
                      behaviour.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-7-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-7"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Scheduling &amp; booking
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Built-in calendar views, time slot selection, and
                      confirmations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-8-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-8"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Image recognition &amp; upload
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Camera-based capture, document scanning, and visual
                      tagging.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-9-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-9"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    QR code scanning
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Quick access, onboarding, or feature unlock via native
                      scanner.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-10-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-10"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Push notifications &amp; alerts
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>Real-time updates, reminders, and engagement prompts.</p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-11-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-11"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Wearables &amp; smart TV integration
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Support for fitness trackers, watches, and large-screen
                      devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-12-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-12"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    IoT device interaction
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>Sync and control smart sensors or connected hardware.</p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-13-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-13"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Mobile business intelligence
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>In-app dashboards, usage insights, and goal tracking.</p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-14-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-14"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    AI-driven user experience
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Adaptive flows, content, and recommendations based on
                      behaviour.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-15-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-15"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Gamification &amp; progress tracking
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Streaks, milestones, and achievements to drive repeat use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-16-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-16"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Two-factor authentication (2FA)
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Extra login security via SMS, email, or authenticator
                      apps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/07/asterisk-svgrepo-com-2-17-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-17"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Biometric authentication
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Face ID, Touch ID, or native fingerprint login for fast,
                      secure access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="tabs pb-200 pb-100-mob bg--white relative await-action"
        data-tabs=""
      >
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>Technology stack</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
            Frameworks &amp; <br />
            technologies <span>we use</span>
          </div>{" "}
        </div>
        <div
          className="tabs-holder mt-24 mt-32-mob isview slidetop"
          data-tabs-holder=""
        >
          <div
            className="technology_stack_items tabs-pane is-active"
            data-tabs-pane={1}
          >
            <div className="awards_container ov-hidden">
              <div className="grid col-3 col-1-mob awards_wrap">
                <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span />{" "}
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-16.svg"
                      alt="Icon - asterisk-svgrepo-com 2-16"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Swift</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span />{" "}
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-17.svg"
                      alt="Icon - asterisk-svgrepo-com 2-17"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Kotlin</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span />{" "}
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/05/React-1.svg"
                      alt="Icon - React-1"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">
                      React Native
                    </div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span />{" "}
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-18.svg"
                      alt="Icon - asterisk-svgrepo-com 2-18"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Flutter</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="problems_we_solve pt-200 pb-200 pt-100-mob pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>INSIDE OUR Electrical Installation & Commissioning SERVICES</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02 inner-inherit">
            How our{" "}
            <h3>
              <span>mobile app</span> design company
            </h3>{" "}
            <span>moves you</span> from raw idea to dev-
            <wbr />
            ready product
          </div>{" "}
          <div className="color--dark-secondary txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit">
            <div>
              More than a Electrical Installation & Commissioning and development services provider,
              we act as your partner, helping you validate, structure, and
              launch with speed. Every stage of our Electrical Installation & Commissioning process is
              built for clarity, usability, and traction.
            </div>
          </div>{" "}
        </div>
        <div className="mt-100 mt-40-mob problems process problems--col-2">
          <div className="row sticky row-1 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Stakeholder deep dive</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      01{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>Defining your goals, users, and technical context</h3>
                      <p>
                        As a client-trusted mobile application design company,
                        we start by understanding your product vision, user
                        types, and business model to design mobile app UI and UX
                        that fits your goals
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>Business and product goals</li>
                          <li>Internal team workflows</li>
                          <li>Audience roles and platform needs</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Stakeholder brief</span>
                      <span className="tag tag--light">
                        product context summary
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-2 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Market &amp; user research</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      02{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>
                        Grounding design decisions in competitor logic and user
                        behaviour
                      </h3>
                      <p>
                        Our Electrical Installation & Commissioning services include competitor
                        reviews, audience expectation mapping, and market
                        alignment to uncover what users actually need and what
                        your product must outperform.
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>Feature analysis across competitors</li>
                          <li>UX/UI patterns in your category</li>
                          <li>Platform-specific insights (iOS, Android)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Research report</span>
                      <span className="tag tag--light">UX audit note</span>
                      <span className="tag tag--light">feature benchmark</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-3 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Feature prioritization</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      03{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>Structuring what to build — now vs. next</h3>
                      <p>
                        We help you avoid bloat and dead features. Using
                        business impact and dev feasibility, we define a
                        roadmap-ready feature set for your mobile app MVP or V1
                        release.
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>MVP vs. full-scope breakdown</li>
                          <li>Core flow logic</li>
                          <li>Feature release pipeline</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">
                        Prioritized feature map
                      </span>
                      <span className="tag tag--light">
                        product logic overview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-4 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>UX mapping &amp; wireframes</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      04{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>Structuring how users move through the app</h3>
                      <p>
                        As a Electrical Installation & Commissioning company focused on retention, we
                        map user journeys and translate them into wireframes
                        that solve user goals across devices and user types.
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>Multi-role user flows</li>
                          <li>Key screen wireframes</li>
                          <li>Navigation structure</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">UX flows</span>
                      <span className="tag tag--light">
                        wireframes for core features
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-5 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Visual direction &amp; moodboarding</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      05{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>Setting the design tone before committing pixels</h3>
                      <p>
                        Before UI starts, we define a mobile-first visual
                        direction aligned with your brand, product category, and
                        user psychology, making approval cycles faster and
                        output more consistent.
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>Style exploration (colour, type, motion)</li>
                          <li>Visual benchmarks by industry</li>
                          <li>Brand-system alignment</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Moodboard</span>
                      <span className="tag tag--light">
                        UI direction preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-6 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>UI design &amp; screen delivery</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      06{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>We design mobile app UI ready for development</h3>
                      <p>
                        We deliver mobile app responsive design that’s easy to
                        build, scale, and hand off. From edge cases to empty
                        states, our mobile app UI/UX design services cover every
                        screen that impacts user flow.
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>
                            High-fidelity mockups (iOS, Android, cross-platform)
                          </li>
                          <li>Systemized components and spacing logic</li>
                          <li>Responsive variants for different resolutions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">
                        {" "}
                        Figma file with design system
                      </span>
                      <span className="tag tag--light">screen pack</span>
                      <span className="tag tag--light">specs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-7 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Testing &amp; validation</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      07{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>
                        Making sure the design performs before you build it
                      </h3>
                      <p>
                        We test key flows with real users or stakeholders to
                        validate navigation clarity, interaction behaviour, and
                        overall UX quality before developers touch it.
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>Usability feedback loops</li>
                          <li>Clickable prototype testing</li>
                          <li>UX pain point refinement</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Feedback summary</span>
                      <span className="tag tag--light">
                        final UX refinements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-8 bg--white process-row">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Dev handoff &amp; support</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      08{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div>  */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--m">
                      <h3>
                        Delivering production-ready assets and staying involved
                        post-handoff
                      </h3>
                      <p>
                        Our mobile app UI/UX design services don’t stop at
                        Figma. We provide your dev team with the tools, logic,
                        and support they need to execute cleanly and launch on
                        time.
                      </p>
                    </div>
                    <div className="list_wrap mt-64 mt-24-mob">
                      <div className="txt txt--caption-s color--dark-secondary uppercase mb-12 fw-600">
                        <p>Key steps</p>
                      </div>
                      <div className="divider" />
                      <div className="styled_ul_wrap color--dark-secondary mt-12 font1">
                        <ul>
                          <li>Dev-ready specs and annotations</li>
                          <li>Component naming + asset prep</li>
                          <li>QA support during implementation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="txt txt--caption-s color--dark-secondary uppercase mt-64 mt-24-mob mb-12 fw-600">
                      <p>Deliverables</p>
                    </div>
                    <div className="divider" />
                    <div className="mt-12 tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Final Figma kit</span>
                      <span className="tag tag--light">UI library</span>
                      <span className="tag tag--light">handoff checklist</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space" />
        </div>
      </section>
      <section className="cta pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="cta_content">
            <span className="icon icon--2xl">
              <img
                className="fullw"
                src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/06/Illustration.svg"
                alt="Icon - Illustration"
                loading="lazy"
                decoding="async"
                style={{}}
              />{" "}
            </span>
            <div className="title title--m title--with-mark mt-24 mt-20-mob text--center isview textslide">
              See what it’s like to work with us{" "}
            </div>
            <div className="txt txt--l mt-16 text--center isview slidetop color--dark-secondary fullw inner-inherit">
              <div>
                Your product. Your priorities. One week of focused mobile app
                design at a reduced rate. Use it to test a screen, a flow, or a
                critical feature before committing to a full engagement with our
                mobile application design company.
              </div>{" "}
            </div>
            <div className="mt-48 mt-20-mob flex v--center h--center isview slidetop">
              <a
                className="btn btn--orange arr arr-right hover--dark btn--lg-desk"
                href="#contact-form"
                target="_self"
              >
                <span>
                  <b>START YOUR DESIGN TRIAL</b>
                </span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="cases_section pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>FEATURED CASES</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl isview textslide trd02 inner-inherit">
            The results you get when a time-
            <wbr />
            tested strategy meets <span>great Electrical Installation & Commissioning</span>
          </div>
          <div className="txt txt--l color--dark mt-24 isview slidetop trd02 mw680">
            <div className="inner-inherit">
              See how our <h3>Electrical Installation & Commissioning and development</h3> agency
              helped fast-growing startups launch products that convert, engage,
              and scale.
            </div>
          </div>{" "}
          <div className="cases_wrap grid gap-60 gap-48-mob mt-100 mt-48-mob scrollable">
            <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
              <div className="col flex v--start h--start">
                <a
                  href="../projects/mywisdom-a-digital-platform-for-safer-more-connected-aging/index.html"
                  className="media_wrap radius-12 ov-hidden"
                >
                  <picture>
                    <source
                      srcSet="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-10.png"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-10.png"
                      media="(max-width: 1440px)"
                    />
                    <img
                      className="fullw radius-12"
                      src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Case-preview-1.png"
                      media="(max-width: 768px)"
                      loading="lazy"
                      decoding="async"
                      alt="MyWisdom — a digital platform for safer, more connected aging - image cover"
                    />
                  </picture>
                </a>
              </div>
              <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                  <p>#Product redesign #Mobile app development </p>
                </div>
                <div className="title title--m mt-12 isview textslide fullw">
                  MyWisdom — a digital platform for safer, more connected aging
                </div>
                <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                  <span className="tag">MyWisdom</span>
                  <span className="tag">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/fi_4628635.svg"
                      alt="Icon - fi_4628635"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />
                    USA
                  </span>
                </div>
                <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                  <div className="col">
                    <div className="txt txt--control-s color--dark-secondary uppercase">
                      Client:{" "}
                    </div>
                    <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                      <p>
                        Flutter, Java, Spring Boot, Python, WebSocket, Computer
                        Vision, AWS, PostgreSQL, Redis, Docker, Swagger,
                        Liquibase
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                      Timeline{" "}
                    </div>
                    <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                      <p>5 month</p>
                    </div>
                  </div>
                </div>
                <div className="grid col-1 mt-64 mt-48-mob card_details">
                  <div className="col">
                    <div className="txt txt--control-s color--dark-secondary uppercase">
                      Results{" "}
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
                    href="../projects/mywisdom-a-digital-platform-for-safer-more-connected-aging/index.html"
                    className="btn btn--orange hover--dark arr fullw-mob"
                  >
                    <span>
                      <b>Explore</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
              <div className="col flex v--start h--start">
                <a
                  href="../projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html"
                  className="media_wrap radius-12 ov-hidden"
                >
                  <picture>
                    <source
                      srcSet="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2.png"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2.png"
                      media="(max-width: 1440px)"
                    />
                    <img
                      className="fullw radius-12"
                      src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Picture-2-2.png"
                      media="(max-width: 768px)"
                      loading="lazy"
                      decoding="async"
                      alt="KlickEx – frictionless cross-<wbr>border payments for the Pacific Island communities - image cover"
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
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Clip-path-group.svg"
                      alt="Icon - Clip path group"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />
                    New Zealand
                  </span>
                </div>
                <div className="grid col-2 col-1-mob gap-0 gap-48-mob mt-64 mt-48-mob card_details">
                  <div className="col">
                    <div className="txt txt--control-s color--dark-secondary uppercase">
                      Client:{" "}
                    </div>
                    <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top border-right">
                      <p>Next.js, TypeScript, React Redux</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="txt txt--control-s color--dark-secondary uppercase pl-24 pl-0-mob">
                      Timeline{" "}
                    </div>
                    <div className="txt txt--m mt-12 pt-12 pb-12 pt-12-mob pb-0-mob border-top pl-24 pl-0-mob">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
                <div className="grid col-1 mt-64 mt-48-mob card_details">
                  <div className="col">
                    <div className="txt txt--control-s color--dark-secondary uppercase">
                      Results{" "}
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
                    href="../projects/klickex-how-a-fintech-redesign-boosted-conversion-by-35-and-grew-users-by-3k-monthly/index.html"
                    className="btn btn--orange hover--dark arr fullw-mob"
                  >
                    <span>
                      <b>Explore</b>
                    </span>
                  </a>
                </div>
                <div className="mt-32 mt-48-mob mb--8-mob quote bg--gray radius-16">
                  <div className="top flex auth_wrap v--center h--start gap-16">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/01/Case-preview-.webp"
                      alt="Image - Case preview"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "1.1428571428571" }}
                    />{" "}
                    <div className="bio">
                      <div className="txt txt--s gap-0">
                        <p>Izek Lal</p>
                        <span>Country manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="txt mt-30 mt-20-mob txt--l">
                    <p>
                      We have seen a significant improvement in terms of mobile
                      friendliness and the general flow of the system. I believe
                      this has contributed significantly to the growth of our
                      business. Many thanks, Phenomenon.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid col-2 col-1-mob gap-32 gap-0-mob case_card">
              <div className="col flex v--start h--start">
                <a
                  href="../projects/mindtales-2/index.html"
                  className="media_wrap radius-12 ov-hidden"
                >
                  <picture>
                    <source
                      srcSet="https://cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-7-scaled.jpg"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet="https://cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Cover-7-scaled.jpg"
                      media="(max-width: 1440px)"
                    />
                    <img
                      className="fullw radius-12"
                      src="../../cdn.phenomenonstudio.com/wp-content/uploads/2021/10/Frame-846Mobile-2.jpg"
                      media="(max-width: 768px)"
                      loading="lazy"
                      decoding="async"
                      alt="MindTales – mental health app - image cover"
                    />
                  </picture>
                </a>
              </div>
              <div className="col pt-0 pt-32-mob pb-0 pb-0-mob flex fd--column h--center">
                <div className="txt txt--control-s uppercase fw-600 color--dark-light">
                  <p>#Product discovery #MVP Building </p>
                </div>
                <div className="title title--m mt-12 isview textslide fullw">
                  MindTales – mental health app
                </div>
                <div className="mt-20 mt-16-mob tags flex v--center h--start h--wrap gap-8">
                  <span className="tag">MindTales</span>
                  <span className="tag">
                    <img
                      className=""
                      src="../../cdn.phenomenonstudio.com/wp-content/uploads/2023/10/round-united-arab-emirates-flag-isolated-on-white-background-round-national-flag-of-uae-vector-removebg-preview.png"
                      alt="Image - round-united-arab-emirates-flag-isolated-on-white-background-round-national-flag-of-uae-vector-removebg-preview"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: 1 }}
                    />
                    UAE
                  </span>
                </div>
                <div className="grid col-1 mt-64 mt-48-mob card_details">
                  <div className="col">
                    <div className="txt txt--control-s color--dark-secondary uppercase">
                      Results{" "}
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
                    href="../projects/mindtales-2/index.html"
                    className="btn btn--orange hover--dark arr fullw-mob"
                  >
                    <span>
                      <b>Explore</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="mt-80 mt-40-mob text--center flex h--center isview slidetop">
            <a
              className="btn btn--simple dark arr"
              href="../projects/index.html"
              target="_self"
            >
              <span>
                <b>Explore All Cases</b>
              </span>
            </a>{" "}
          </div>
        </div>
      </section>
      <Comment />
      <section className="services_section bg--white pb-200 pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>Electrical Installation & Commissioning COST</h2>
          </div>{" "}
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02 inner-inherit">
            What <span>shapes the price</span> of Electrical Installation & Commissioning

          </div>{" "}
          <div className="txt txt--l color--dark-secondary mt-24 isview slidetop trd02 mw680">
            <p>
              Every mobile build is its own ecosystem—whether it’s a
              three-screen proof of concept, a consumer app with chat and
              payments, or an enterprise platform streaming real-time analytics.
            </p>
            <p>
              That range means we can’t price design like an off-the-shelf
              template. Instead, we size each engagement against your product
              scope, technical depth, launch timeline, and the capabilities
              already inside your team.
            </p>
          </div>{" "}
          <div className="title title--l color--dark mt-100 mt-64-mob isview slidetop trd02 mw760">
            <h3>What affects your Electrical Installation & Commissioning cost?</h3>
          </div>{" "}
        </div>
        <div className="how_we_do_it_items mt-32 mt-32-mob">
          <div className="">
            <div className="grid col-3 col-1-mob services_row clipped">
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--dark-tertiary">01</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Scope &amp; screen count
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      More logic, more states,
                      <br />
                      more hours
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--dark-tertiary">02</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    App type &amp; Client:
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Native, cross-platform, or hybrid—all impact
                      <br />
                      delivery speed and complexity
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--dark-tertiary">03</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Reusable design systems
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      {" "}
                      Investing in scalable UI libraries increases up-front
                      <br />
                      scope but reduces future cost
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--dark-tertiary">04</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Validation and testing needs
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      MVP? Funding round? Enterprise launch? Each
                      <br />
                      use case changes the design &amp; mobile app
                    </p>
                  </div>
                </div>
              </div>
              <div className="vertical_line grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--dark-tertiary">05</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--dark">
                    Team collaboration
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                    <p>
                      Working with your devs vs delivering turnkey
                      <br />
                      changes how we scope and staff the team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta mb-200 mb-100-mob bg--white">
        <div className="container">
          <div className="cta_content">
            <span className="icon icon--2xl">
              <img
                className="fullw"
                src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/process-1.svg"
                alt="Icon - process-1"
                loading="lazy"
                decoding="async"
                style={{}}
              />{" "}
            </span>
            <div className="title title--m title--with-mark mt-24 mt-20-mob text--center isview textslide">
              <h2>Get a custom Electrical Installation & Commissioning estimate</h2>{" "}
            </div>
            <div className="txt txt--l mt-16 text--center isview slidetop color--dark-secondary fullw inner-inherit">
              Our pricing and your product are not prepackaged. Book a free
              consultation and get a tailored quote for Electrical Installation & Commissioning,
              UI/UX, or full mobile app development services.{" "}
            </div>
            <div className="mt-48 mt-20-mob flex v--center h--center isview slidetop">
              <a
                className="btn btn--orange arr arr-right hover--dark btn--lg-desk"
                href="#contact-form"
                target="_self"
              >
                <span>
                  <b>Get Your Project Estimate</b>
                </span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="services_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob next_block_sticky">
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop">
            <h2>How to work with us</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview textslide trd02 inner-inherit">
            Move your <span>Electrical Installation & Commissioning</span> forward — at your pace,
            with the right <span>level of support</span>
          </div>
          <div className="mt-100 mt-32-mob">
            <div className="pt-32 pt-0-mob pb-32 pb-0-mob flex v--start h--between scroll_slider flex--block-mob">
              <div className="left flex fd--column flex--block-mob disable-scrollbar bg--dark">
                <ul className="flex fd--column gap-4 isview slidetop">
                  <li className="title title--s services_section_link">
                    <a href="#slide-1" data-id={1}>
                      Outsource{" "}
                    </a>
                  </li>
                  <li className="title title--s services_section_link">
                    <a href="#slide-2" data-id={2}>
                      Dedicated team
                    </a>
                  </li>
                  <li className="title title--s services_section_link">
                    <a href="#slide-3" data-id={3}>
                      Team extention
                    </a>
                  </li>
                </ul>
                <div className="btn-wrap mt-auto pt-32 pc-visible isview slidetop">
                  <a
                    className="btn btn--orange arr hover--white"
                    href="../services/index.html"
                    target="_self"
                  >
                    <span>
                      <b>Explore All</b>
                    </span>
                  </a>{" "}
                </div>
              </div>
              <div className="right color--white gap-100 flex fd--column gap-80-mob mt-40-mob pt-8-mob isview fadein">
                <div className="scroll_slide row-1" id="slide-1">
                  <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                    Your trusted partner for reliable, scalable, and standards-compliant electrical engineering solutions.
                  </div>
                  <div className="pl-32 pr-32 pl-12-mob pr-12-mob">
                    <div className="txt txt--m mt-24 color--white-secondary mw706">
                      We’re not just a contractor — we’re your ongoing electrical partner, ensuring performance, compliance, and system reliability long after installation.{" "}
                    </div>
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-2 col-1-mob services_row  clipped">
                      <div className="vertical_line dark grid col-2 col-1-mob span-2 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start minh-auto pr-100 pr-50-tablet pr-0-mob">
                        <div className="title title--s isview slidetop">
                          Best for
                        </div>
                        <div className="styled_ul_wrap mt-8 isview font1 slidetop color--white-light">
                          <ul>
                            <li>
                              Founders who want a senior team thinking beyond
                              sprints
                            </li>
                            <li>
                              Startups scaling beyond MVP and needing deep
                              product ownership
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="vertical_line dark grid col-2 col-1-mob span-2 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start minh-auto pr-100 pr-50-tablet pr-0-mob">
                        <div className="title title--s isview slidetop">
                          What you get
                        </div>
                        <div className="styled_ul_wrap mt-8 isview font1 slidetop color--white-light">
                          <ul>
                            <li>
                              Expert team aligned with your roadmap, KPIs, and
                              business goals
                            </li>
                            <li>Strategic discovery</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-32 pr-32 pl-12-mob pr-12-mob btn-wrap pt-32 isview slidetop">
                    <a
                      className="btn btn--simple arr"
                      href="../services/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Hire Your Full-Cycle Team</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
                <div className="scroll_slide row-2" id="slide-2">
                  <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                    Hire a dedicated team
                  </div>
                  <div className="pl-32 pr-32 pl-12-mob pr-12-mob">
                    <div className="txt txt--m mt-24 color--white-secondary mw706">
                      We deliver your electrical project from concept to completion — efficiently and safely. You receive a fully designed, installed, and tested system supported by a clear project plan, defined scope, and transparent delivery schedule.{" "}
                    </div>
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-2 col-1-mob services_row  clipped">
                      <div className="vertical_line dark grid col-2 col-1-mob span-2 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start minh-auto pr-100 pr-50-tablet pr-0-mob">
                        <div className="title title--s isview slidetop">
                          Best for
                        </div>
                        <div className="styled_ul_wrap mt-8 isview font1 slidetop color--white-light">
                          <ul>
                            <li>
                              MVPs or feature builds with a defined goal and
                              launch window
                            </li>
                            <li>
                              Pre-seed and seed startups that need to ship
                              without building an in-house team
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="vertical_line dark grid col-2 col-1-mob span-2 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start minh-auto pr-100 pr-50-tablet pr-0-mob">
                        <div className="title title--s isview slidetop">
                          What you get
                        </div>
                        <div className="styled_ul_wrap mt-8 isview font1 slidetop color--white-light">
                          <ul>
                            <li>
                              UI/UX, development, QA, and PM in one dedicated
                              team
                            </li>
                            <li>
                              Clear scope, fixed timeline, efficient delivery
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-32 pr-32 pl-12-mob pr-12-mob btn-wrap pt-32 isview slidetop">
                    <a
                      className="btn btn--simple arr"
                      href="../service/dedicated-software-development-team/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Get Your Dedicated Team</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
                <div className="scroll_slide row-3" id="slide-3">
                  <div className="title main_title title--l pl-32 pr-32 pl-12-mob pr-12-mob isview textslide">
                    Augment your existing team
                  </div>
                  <div className="pl-32 pr-32 pl-12-mob pr-12-mob">
                    <div className="txt txt--m mt-24 color--white-secondary mw706">
                      We provide developers, designers, and QA engineers to
                      integrate with your team, helping you scale fast while
                      keeping full control over execution.{" "}
                    </div>
                  </div>
                  <div className="colums_wrap mt-32 ov-hidden">
                    <div className="grid col-2 col-1-mob services_row  clipped">
                      <div className="vertical_line dark grid col-2 col-1-mob span-2 span-1-mob clipped isview full fadein">
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start minh-auto pr-100 pr-50-tablet pr-0-mob">
                        <div className="title title--s isview slidetop">
                          Best for
                        </div>
                        <div className="styled_ul_wrap mt-8 isview font1 slidetop color--white-light">
                          <ul>
                            <li>
                              Startups needing specialized expertise without
                              long-term hiring
                            </li>
                            <li>
                              Seed &amp; Series A+ startups looking to
                              accelerate development
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="vertical_line dark grid col-2 col-1-mob span-2 span-1-mob clipped isview full fadein mob-visible">
                        <span />
                        <span />
                      </div>
                      <div className="col flex p-32 fd--column v--start minh-auto pr-100 pr-50-tablet pr-0-mob">
                        <div className="title title--s isview slidetop">
                          What you get
                        </div>
                        <div className="styled_ul_wrap mt-8 isview font1 slidetop color--white-light">
                          <ul>
                            <li>
                              Embedded designers, developers, or product
                              managers to fill skill gaps
                            </li>
                            <li>
                              Faster product delivery without the hiring delays
                              &amp; overhead costs
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-32 pr-32 pl-12-mob pr-12-mob btn-wrap pt-32 isview slidetop">
                    <a
                      className="btn btn--simple arr"
                      href="../service/team-extension/index.html"
                      target="_self"
                    >
                      <span>
                        <b>Hire Your Full-Cycle Team</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mob-visible mt-40 pt-8">
            <a
              className="btn btn--orange arr fullw"
              href="../services/index.html"
              target="_self"
            >
              <span>
                <b>Explore All</b>
              </span>
            </a>{" "}
          </div>
        </div>
      </section>
      <section className="services_section bg--white pt-200 pt-100-mob pb-200 pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>WHY CHOOSE PHENOMENON STUDIO FOR YOUR Electrical Installation & Commissioning</h2>
          </div>{" "}
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02 inner-inherit">
            Your success is <span>our priority</span>
          </div>{" "}
          <div className="mt-40 mt-32-mob grid col-2 col-1-mob gap-12 benefits_container">
            <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
              <div className="txt txt--control-m uppercase color--dark-secondary">
                Engineering that meets standards{" "}
              </div>
              <div className="txt txt--lead mt-12 mb-auto color--dark">
                Certified expertise in electrical safety and compliance — meeting IEC, ISO, and industry-specific standards across sectors.
              </div>
              <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                <p>
                  At DAMPECON LTD., safety and compliance come first.
We strictly adhere to Nigerian Electrical Standards and international best practices in every project — from healthcare facilities to manufacturing plants. Our certified engineers ensure every installation is efficient, durable, and built to last.
                </p>
              </div>
              {/*  <div class="mob-visible mt-64">
                              </div> */}
              {/* <div class="inner flex fd--column h--between v--start p-40 radius-12">
              <div class="title title--l color--white"></div>
                              </div> */}
            </div>
            <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
              <div className="txt txt--control-m uppercase color--dark-secondary">
                Design that lasts beyond trends{" "}
              </div>
              <div className="txt txt--lead mt-12 mb-auto color--dark">
                We don’t follow trends — we build electrical systems that last..
              </div>
              <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                <p>
                  Our installations are designed for long-term reliability, safety, and efficiency — engineered to meet today’s standards and tomorrow’s demands. Every project we deliver is scalable, compliant, and built for sustained performance — not just short-term fixes.


⚙️ Optional Shorter Version (for tagline or highlight box):

We engineer electrical systems that stand the test of time — safe, efficient, and ready for the future.


Would you like me to now help you rewrite the next paragraph or tagline that appears right after this (for example, the one that transitions into your “Industries We Serve” section)? That will keep your tone consistent across the homepage.
                </p>
              </div>
              {/*  <div class="mob-visible mt-64">
                              </div> */}
              {/* <div class="inner flex fd--column h--between v--start p-40 radius-12">
              <div class="title title--l color--white"></div>
                              </div> */}
            </div>
            <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
              <div className="txt txt--control-m uppercase color--dark-secondary">
                Engineering that’s installation-ready{" "}
              </div>
              <div className="txt txt--lead mt-12 mb-auto color--dark">
                We design for implementation, not just documentation.{" "}
              </div>
              <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                <p>
                  Every electrical layout and system specification is developed with installation teams in mind — focusing on efficiency, safety, and compliance. We coordinate closely with your contractors or facility managers to ensure every component is accurately installed, tested, and commissioned to specification.ilt with devs in mind: design tokens,
                  accessibility, reusability, and real-world constraints. We
                  collaborate with your team, reuse existing elements, and stay
                  involved until everything’s live.
                </p>
              </div>
              {/*  <div class="mob-visible mt-64">
                              </div> */}
              {/* <div class="inner flex fd--column h--between v--start p-40 radius-12">
              <div class="title title--l color--white"></div>
                              </div> */}
            </div>
            <div className="col relative radius-12 p-40 p-20-mob ov-hidden flex fd--column h--between v--start isview slidetop bg--gray">
              <div className="txt txt--control-m uppercase color--dark-secondary">
                Local expertise. Global capability{" "}
              </div>
              <div className="txt txt--lead mt-12 mb-auto color--dark">
                Work directly with experienced engineers and project managers — not layers of intermediaries.
              </div>
              <div className="txt txt--m mt-80 mt-32-mob color--dark-light pb-8 pb-0-mob">
                <p>
                  Our regional teams provide on-site coordination, while our technical and procurement units ensure international-quality standards and timely delivery. We integrate seamlessly into your project workflow, from design and procurement to installation and maintenance, acting as an extension of your engineering team.in North America, while our
                  senior design and development teams in Europe deliver fast,
                  consistent results. We integrate into your tools and workflow,
                  working as part of your team — from a single embedded designer
                  to a full product squad.
                </p>
              </div>
              {/*  <div class="mob-visible mt-64">
                              </div> */}
              {/* <div class="inner flex fd--column h--between v--start p-40 radius-12">
              <div class="title title--l color--white"></div>
                              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="awards_section pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h3>Awards & Winning</h3>{" "}
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
                  className=""
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/clutch.svg"
                  alt="Icon - clutch"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />{" "}
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p>Professional & Credibility-Focused</p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a
                  className="btn btn--simple dark arr arr-45"
                  href="https://clutch.co/profile/phenomenon-studio"
                  target="_blank"
                >
                  <span>
                    <b>View On Clutch</b>
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col flex fd--column v--start col-2">
              <div className="img-wrap">
                <img
                  className=""
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/upwork.svg"
                  alt="Icon - upwork"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />{" "}
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p>Short & Impactful</p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a
                  className="btn btn--simple dark arr arr-45"
                  href="https://www.upwork.com/agencies/1141628280721588224/"
                  target="_blank"
                >
                  <span>
                    <b>View On Upwork</b>
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col flex fd--column v--start col-3">
              <div className="img-wrap">
                <img
                  className=""
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/webflow.svg"
                  alt="Icon - webflow"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />{" "}
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p>Industry-Award Tone</p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a
                  className="btn btn--simple dark arr arr-45"
                  href="https://webflow.com/@phenomenons-workspace"
                  target="_blank"
                >
                  <span>
                    <b>View On Webflow</b>
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col flex fd--column v--start col-1">
              <div className="img-wrap">
                <img
                  className=""
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/design.svg"
                  alt="Icon - design"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />{" "}
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p>
                  Technical Authority Version <br />
                  
                </p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a
                  className="btn btn--simple dark arr arr-45"
                  href="https://ux-design-awards.com/winners/2024-2-isora-grc-collaborative-grc-platform"
                  target="_blank"
                >
                  <span>
                    <b>View On UXDA</b>
                  </span>
                </a>{" "}
              </div>
            </div>
            <div className="col flex fd--column v--start col-2">
              <div className="img-wrap">
                <img
                  className=""
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Awwwards.svg"
                  alt="Icon - Awwwards"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />{" "}
              </div>
              <div className="txt txt--s mt-24 mt-8-mob color--dark-light">
                <p>Site of the Day &amp; honorable mentions</p>
              </div>
              <div className="btn-wrap mt-auto pt-24">
                <a
                  className="btn btn--simple dark arr arr-45"
                  href="https://www.awwwards.com/Phenomenon/"
                  target="_blank"
                >
                  <span>
                    <b>View On Awwwards</b>
                  </span>
                </a>{" "}
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
                    href="../about-our-company/index.html"
                    target="_self"
                    className="btn btn--simple dark arr"
                  >
                    <span>
                      <b>Explore all awards</b>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>Related Services</h2>
          </div>{" "}
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02">
            Services that <span>pair well</span>{" "}
            <span></span>
          </div>{" "}
        </div>
        <div className="mt-100 mt-32-mob services_items ov-hidden">
          <div className="awards_container ov-hidden">
            <div className="grid awards_wrap col-3 col-2-tablet col-1-mob">
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1 isview slidetop">
                <div className="title title--s color--dark">
                  Electrical Engineering Design
                </div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    Comprehensive electrical system design — from load analysis and schematics to control and automation layouts for industrial and commercial projects. UX/UI strategies to improve
                    engagement and conversions.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a
                    href="../service/website-design-services/index.html"
                    className="btn btn--simple dark arr"
                  >
                    <span>Explore</span>
                  </a>
                </div>
              </div>
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2 isview slidetop">
                <div className="title title--s color--dark">
                  Mobile app development
                </div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    End-to-end development of mobile applications for iOS and
                    Android.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a
                    href="../service/mobile-app-development-services/index.html"
                    className="btn btn--simple dark arr"
                  >
                    <span>Explore</span>
                  </a>
                </div>
              </div>
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3 isview slidetop">
                <div className="title title--s color--dark">Procurement & Supply</div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    Reliable sourcing of certified electrical materials and equipment, managed through trusted suppliers to ensure cost-effectiveness and timely delivery. — visually, emotionally, and
                    strategically.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a
                    href="../service/Procurement & Supply-and-identity-services/index.html"
                    className="btn btn--simple dark arr"
                  >
                    <span>Explore</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq_section pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>FAQs</h2>
          </div>{" "}
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02">
            Questions{" "}
            <span>
              already <br />
              answered
            </span>
          </div>{" "}
        </div>
        <div className="faq-wrap mt-40 mt-32-mob">
          <div className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    01{" "}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div> How to install an electrical system? you design a mobile app at Phenomenon?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          We start with your business goals, product vision, and
                          user behavior. Then we move through user journey
                          mapping, wireframes, visual direction, and full UI
                          delivery. Every step is built for clarity, reuse, and
                          launch-readiness. As a Electrical Installation & Commissioning company, we
                          deliver dev-ready Figma files, interactive prototypes,
                          and scalable component libraries — tailored to your
                          app type and stack.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    data-text-primary="More"
                    data-text-secondary="Less"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    02{" "}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div>How to design a mobile phone app?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          The best Electrical Installation & Commissioning process starts with
                          understanding real user problems. We focus on
                          structure, not just visuals — designing mobile app UI
                          that aligns with platform behaviours (iOS, Android, or
                          cross-platform), keeps interfaces familiar, and
                          simplifies user actions. From simple onboarding to
                          complex dashboards, our goal is user clarity and
                          business traction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    data-text-primary="More"
                    data-text-secondary="Less"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    03{" "}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div>Do you offer Electrical Installation & Commissioning and development?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          Yes. Phenomenon is your partner for Electrical Installation & Commissioning,
                          development, and full-stack execution. Our in-house
                          developers and QA engineers work alongside our
                          designers to deliver complete apps across iOS,
                          Android, or hybrid frameworks like Flutter and React
                          Native. You can hire us for delivering mobile app user
                          interface design only, or end-to-end mobile app
                          development services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    data-text-primary="More"
                    data-text-secondary="Less"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    04{" "}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div>
                      What affects the cost of Electrical Installation & Commissioning &amp;
                      development?
                    </div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          The cost of UI UX design for mobile apps depends on
                          feature complexity, app type (native vs
                          cross-platform), number of screens, design system
                          depth, and validation needs. For example, a modern
                          Electrical Installation & Commissioning with animations, multiple user
                          roles, and custom components will cost more than a
                          simple 5-screen MVP. We break this down transparently
                          in our cost section.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    data-text-primary="More"
                    data-text-secondary="Less"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    05{" "}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div> Do you design responsive mobile apps?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          Yes — mobile app responsive design is a standard part
                          of our process. As part of the best Electrical Installation & Commissioning
                          practices, we create screen variants for multiple
                          breakpoints, including mobile, tablet, and small
                          desktop, where applicable. Whether it’s mobile-first
                          or adapted from desktop, we deliver mobile app user
                          interface design that performs across devices without
                          breaking layout or logic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    data-text-primary="More"
                    data-text-secondary="Less"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    06{" "}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div>
                      What are the current trends in mobile app UI/UX design?
                    </div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          Modern Electrical Installation & Commissioning is moving toward clarity,
                          motion, and modularity. Users expect
                          microinteractions, gesture-based flows, and a clean
                          mobile app interface design that adapts across
                          devices.
                        </p>
                        <p>
                          As a Electrical Installation & Commissioning agency, we also see a shift
                          toward mobile app user interface design systems that
                          are flexible, scalable, and dev-aligned — especially
                          for products planning frequent releases. At
                          Phenomenon, we build UI kits and flows that reflect
                          these great Electrical Installation & Commissioning trends while staying
                          grounded in your app’s specific goals and audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    data-text-primary="More"
                    data-text-secondary="Less"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="faq isview slidetop">
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    07{" "}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div>What’s included in UI/UX design for mobile apps?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          Effective Electrical Installation & Commissioning projects go beyond screens
                          — they include user flows, wireframes, visual systems,
                          and interaction logic. Whether you’re building a
                          brand-new Electrical Installation & Commissioning app or reworking an
                          existing product, we design structure-first to support
                          both user behavior and business outcomes.
                        </p>
                        <p>
                          At Phenomenon, our design mobile app development
                          process includes dev-aligned components, motion
                          design, and assets built to scale, not just look good
                          in a Figma file.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    data-text-primary="More"
                    data-text-secondary="Less"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Chat />
      </section>
      
       <Footer />
    </main>
   
  </div>
  <link
    rel="stylesheet"
    href="../../cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/css/swiper-bundle.min.css"
    async=""
  />
  {/* Mirrored from phenomenonstudio.com/mobile-app-design/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 05 Nov 2025 17:36:02 GMT */}
</>
  )
}

export default Mobileapp

import React from 'react'
import Topnav from '../../../Component/Topnav'
import Footer from '../../../Component/Footer'
import Comment from '../../../Component/Comment'
import Chat from '../../../Component/Chat'
import Project from '../../../Component/project'

const Webdev = () => {
  return (
    <>
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
    href="https://phenomenonstudio.com/wp-content/uploads/2025/10/logo_00000.png"
  />
  <link
    rel="shortcut icon"
    id="favicon-b"
    type="image/png"
    sizes="32x32"
    href="https://phenomenonstudio.com/wp-content/uploads/2025/10/logo_00000.png"
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
    content="🟠 Web development services by Phenomenon Studio: A leading web development company offering custom web design and development solutions. We build scalable, high-performance websites tailored to your business goals."
  />
  <link
    rel="canonical"
    href="https://phenomenonstudio.com/service/web-development-services/"
  />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Web development" />
  <meta
    property="og:description"
    content="🟠 Web development services by Phenomenon Studio: A leading web development company offering custom web design and development solutions. We build scalable, high-performance websites tailored to your business goals."
  />
  <meta
    property="og:url"
    content="https://phenomenonstudio.com/service/web-development-services/"
  />
  <meta property="og:site_name" content="Phenomenon" />
  <meta
    property="article:publisher"
    content="https://www.facebook.com/phenomenonstudio"
  />
  <meta property="article:modified_time" content="2025-11-06T13:19:33+00:00" />
  <meta
    property="og:image"
    content="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/website-hyperlink-banner-1328х746-01.png"
  />
  <meta property="og:image:width" content={1993} />
  <meta property="og:image:height" content={1120} />
  <meta property="og:image:type" content="image/png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@phenomenonstud1" />
  {/* / Yoast SEO Premium plugin. */}
  <link
    rel="stylesheet"
    id="main-css"
    href="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/css/main.css?ver=1189254169"
    media="all"
  />
  <link
    rel="icon"
    href="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-32x32.png"
    sizes="32x32"
  />
  <link
    rel="icon"
    href="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-192x192.png"
    sizes="192x192"
  />
  <link
    rel="apple-touch-icon"
    href="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-180x180.png"
  />
  <meta
    name="msapplication-TileImage"
    content="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/cropped-logo_00009-270x270.png"
  />
  <title>
    Web Development Services | Web Development Company - Phenomenon Studio
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
    src="https://px.ads.linkedin.com/collect/?pid=3376562&amp;fmt=gif" /&gt;{" "}
  </noscript>
  <div id="app">
   <Topnav />
    <div className="favicons-wrap" style={{ display: "none" }}>
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00000.png.webp"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00001.png.webp"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00002.png.webp"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00003.png.webp"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00004.png.webp"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00005.png.webp"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00006.png.webp"
        alt=""
      />
      <img
        src="https://phenomenonstudio.com/wp-content/uploads/2025/10/logo_00007.png"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00008.png.webp"
        alt=""
      />
      <img
        src="https://cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00009.png.webp"
        alt=""
      />
    </div>
    <main className="next_block_sticky">
      <section className="hero bg--dark clipped-bottom next_block_sticky">
        <div className="container color--white">
          <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop">
            <h1>Web Development Services</h1>
          </div>{" "}
          <div className="nobr-mob title title--xl mw1040 isview textslide trd02">
            <h2>
              Building{" "}
              <span>
                high-performance
                <br />
                web solutions
              </span>{" "}
              for every business
            </h2>
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
              href="https://phenomenonstudio.com/projects/"
              target="_self"
            >
              <span>
                <b>View our cases</b>
              </span>
            </a>{" "}
          </div>
          <div className="mt-60 mt-24-mob grid col-2 col-1-mob column-gap-32 row-gap-40 row-gap-24-mob">
            <div className="col sticky isview slidetop">
              <div className="media_wrap">
                <video
                  preload="none"
                  className="fullw radius-12"
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/creatorland-Web-Development-cover-1.mp4"
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
                  From sleek marketing websites to powerful custom applications,
                  our web development services ensure your business stands out.
                  We create responsive, scalable, and high-performing web
                  solutions tailored to your needs.
                </div>
              </div>
              <div className="txt txt--caption-m color--white-light uppercase fw-600 mt-auto pt-32 pt-0-mob mt-40-mob pt-8-mob isview slidetop">
                <p>Delivering trusted electrical solutions for organizations</p>
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
                <div>DAMPECON LTD IN NUMBERS</div>
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
      </section>
      <section className="problems_we_solve bg--white pt-200 pb-200 pt-100-mob pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            Challenges
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
            <h2>
              You’re here because your business <br />
              needs <span>a powerful, reliable web solution,</span> right?
            </h2>
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
                        Struggling with outdated or underperforming websites?
                      </p>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit">
                      <div>
                        Our custom web development services build modern,
                        user-friendly, and scalable websites that keep users
                        engaged and businesses growing.
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
                        Looking for a development partner who understands your
                        needs?
                      </p>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit">
                      <div>
                        We are a custom web application development company that
                        tailors every solution to match your industry and
                        business goals, ensuring a competitive edge.
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
                      <p>Having trouble with your web app's performance?</p>
                    </div>
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead inner-inherit">
                      <div>
                        Our web app development services ensure smooth
                        functionality, intuitive user experience, and scalable
                        architecture tailored to your business needs.
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
      <section className="how_we_do_it_section next_block_sticky pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob">
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600">
            <h2>Our Web Development Services</h2>{" "}
          </div>{" "}
          <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview textslide">
            Web development solutions for <span>every business</span>
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
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--white-tertiary">01</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Custom web development
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Tailor-made web solutions designed for your specific
                      needs, offering flexibility, scalability, and robust
                      functionality.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--white-tertiary">02</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Web application development
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      We deliver high-performance electrical systems that integrate seamlessly with your operations — improving efficiency, reliability, and long-term productivity.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--white-tertiary">03</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    WordPress web development
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      We deliver high-performance electrical systems that integrate seamlessly with your operations — improving efficiency, reliability, and long-term productivity.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--white-tertiary">04</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Admin panel development
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Our admin panel development services create intuitive,
                      scalable, and feature-rich dashboards, enabling businesses
                      to manage operations efficiently with real-time data
                      insights.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--white-tertiary">05</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Dedicated web development team
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Our dedicated web development team provides specialized
                      expertise and seamless integration into your projects,
                      ensuring consistent progress and high-quality results.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <div className="h6 color--white-tertiary">06</div>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Web design &amp; development
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Our web design and development services deliver visually
                      compelling and functionally powerful web solution,
                      covering every step of the process—from UI/UX design to
                      final deployment and support.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-200 mt-100-mob" />
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600">
            Benefits of Our web Development Services
          </div>{" "}
          <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview textslide">
            <h2>
              Why should you choose
              <br />
              our digital{" "}
              <span>
                web
                <br />
                development
              </span>{" "}
              agency?
            </h2>{" "}
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
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2.svg"
                    alt="Icon - asterisk-svgrepo-com 2"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Custom-tailored solutions
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Every business is unique, and our custom web development
                      ensures your product aligns with your brand,
                      functionality, and user expectations.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/asterisk-svgrepo-com-2-2-3.svg"
                    alt="Icon - asterisk-svgrepo-com 2-2"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Scalability &amp; flexibility
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Our web solutions are carefully designed to evolve with
                      your business, offering scalability and adaptability to
                      meet your changing needs.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/asterisk-svgrepo-com-2-1.svg"
                    alt="Icon - asterisk-svgrepo-com 2-1"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Optimized performance
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Faster load times, seamless navigation, and mobile
                      responsiveness enhance user experience and SEO rankings.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-3-2.svg"
                    alt="Icon - asterisk-svgrepo-com 2-3"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Mid-level and senior experts
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Our team consists of mid-level and senior web developers
                      with 7+ years of expertise in your specific industry,
                      ensuring your web solution is perfectly aligned with your
                      audience’s expectations.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span />
                <span />
                <span />
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img
                    className=""
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-4-2.svg"
                    alt="Icon - asterisk-svgrepo-com 2-4"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--s color--white">
                    Proven trust and high satisfaction
                  </div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      As a trusted web development company, we prioritize strong
                      relationships with our clients. Our commitment to
                      excellence has resulted in a 98% client satisfaction rate,
                      reflecting our dedication to delivering outstanding
                      solutions.
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
            Process
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
            <h2>
              Our <span>step-by-step approach</span>
              <br />
              to web development
            </h2>{" "}
          </div>{" "}
        </div>
        <div className="mt-100 mt-40-mob problems process problems--col-2">
          <div className="row sticky row-1 bg--white">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Project Consultation</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      01{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        Aligning on business goals and technical requirements.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Detailed brief</span>
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
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Product documentation</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      02{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        We gather and document all product requirements,
                        creating a detailed foundation for development.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">
                        Modules decomposition
                      </span>
                      <span className="tag tag--light">Integration list</span>
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
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Technical documentation</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      03{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        Our team defines architecture, Client:, and key
                        implementation strategies to ensure technical
                        feasibility.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">
                        Infrastructure diagram
                      </span>
                      <span className="tag tag--light">
                        Architecture diagram
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-4 bg--white">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Decomposition &amp; timeline</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      04{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        We break down development phases, setting clear
                        milestones and realistic timelines.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Project timelines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-5 bg--white">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Solution presentation</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      05{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        We finalize and present a strategic roadmap, outlining
                        all technical and implementation details for execution.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">
                        Ready-to-use solution
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-6 bg--white">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Server architecture</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      06{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        Setting up robust, secure and powerful servers for small
                        and large businesses.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">
                        Server architecture
                      </span>
                      <span className="tag tag--light">Security set up</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-7 bg--white">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Development &amp; Testing</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      07{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        Using best coding practices to ensure a seamless,
                        bug-free experience across all devices.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Front-end</span>
                      <span className="tag tag--light">Back-end</span>
                      <span className="tag tag--light">
                        full cycle of QA tests
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky row-8 bg--white">
            <div className="inner">
              <div className="container">
                <div className="flex v--stretch h--between vertical_scroll_slider">
                  <div className="left flex fd--column">
                    <div className="txt txt--l mb-24">
                      <p>Launch &amp; support</p>
                    </div>
                    <div className="num mt-auto h6 color--dark-tertiary mob-hidden">
                      08{" "}
                    </div>
                    {/* <div class="icon icon--xl mt-auto">
                                                      </div> */}
                  </div>
                  <div className="center flex fd--column v--start">
                    <div className="txt txt--lead">
                      <p>
                        After launch, we monitor performance and offer continued
                        support to optimize the web solution and make
                        improvements as needed.
                      </p>
                    </div>
                    <div className="mt-108 mt-32-mob tags flex v--center h--start h--wrap gap-8">
                      <span className="tag tag--light">Live web solution</span>
                      <span className="tag tag--light">
                        WIP on next version
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space" />
        </div>
      </section>
      <section
        className="tabs pb-200 pb-100-mob bg--white relative await-action"
        data-tabs=""
      >
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            Technology stack
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
            Frameworks &amp; <br />
            technologies <span>we use</span>
          </div>{" "}
        </div>
        <div className="container">
          <div className="tabs-actions disable-scrollbar mt-40 isview slidetop">
            <button
              type="button"
              className="btn btn--white hover--gray active--dark is-active"
              data-tabs-link={1}
            >
              <span>
                <b>Frontend</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={2}
            >
              <span>
                <b>Backend</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={3}
            >
              <span>
                <b>CMS</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={4}
            >
              <span>
                <b>Server</b>
              </span>
            </button>
            <button
              type="button"
              className="btn btn--white hover--gray active--dark"
              data-tabs-link={5}
            >
              <span>
                <b>Pre-made libraries</b>
              </span>
            </button>
          </div>
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
              <div className="grid col-4 col-1-mob awards_wrap">
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/React.svg"
                      alt="Icon - React"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">React</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/NextJS.svg"
                      alt="Icon - NextJS"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Next.js</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-2-4.svg"
                      alt="Icon - asterisk-svgrepo-com 2-2"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Solid.js</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-4">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-3-3.svg"
                      alt="Icon - asterisk-svgrepo-com 2-3"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Astro</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-4-3.svg"
                      alt="Icon - asterisk-svgrepo-com 2-4"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">TypeScript</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="technology_stack_items tabs-pane" data-tabs-pane={2}>
            <div className="awards_container ov-hidden">
              <div className="grid col-4 col-1-mob awards_wrap">
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-5-1.svg"
                      alt="Icon - asterisk-svgrepo-com 2-5"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Node.js</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-6-1.svg"
                      alt="Icon - asterisk-svgrepo-com 2-6"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Express.js</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-7-1.svg"
                      alt="Icon - asterisk-svgrepo-com 2-7"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Nest.js</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-4">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-8-1.svg"
                      alt="Icon - asterisk-svgrepo-com 2-8"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">PHP</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-9-1.svg"
                      alt="Icon - asterisk-svgrepo-com 2-9"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Laravel</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-4-3.svg"
                      alt="Icon - asterisk-svgrepo-com 2-4"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">TypeScript</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="technology_stack_items tabs-pane" data-tabs-pane={3}>
            <div className="awards_container ov-hidden">
              <div className="grid col-4 col-1-mob awards_wrap">
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-1-1.svg"
                      alt="Icon - asterisk-svgrepo-com 2-1"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">WordPress</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-5.svg"
                      alt="Icon - asterisk-svgrepo-com 2"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Webflow</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="technology_stack_items tabs-pane" data-tabs-pane={4}>
            <div className="awards_container ov-hidden">
              <div className="grid col-4 col-1-mob awards_wrap">
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-10.svg"
                      alt="Icon - asterisk-svgrepo-com 2-10"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">
                      Amazon web services
                    </div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-11.svg"
                      alt="Icon - asterisk-svgrepo-com 2-11"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">
                      Digital Ocean
                    </div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-12.svg"
                      alt="Icon - asterisk-svgrepo-com 2-12"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Cloudflare</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-4">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-13.svg"
                      alt="Icon - asterisk-svgrepo-com 2-13"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Docker</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-14.svg"
                      alt="Icon - asterisk-svgrepo-com 2-14"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">
                      Gitlab / Github CI / CD
                    </div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-15.svg"
                      alt="Icon - asterisk-svgrepo-com 2-15"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Kubernetes</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="technology_stack_items tabs-pane" data-tabs-pane={5}>
            <div className="awards_container ov-hidden">
              <div className="grid col-4 col-1-mob awards_wrap">
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-21.svg"
                      alt="Icon - asterisk-svgrepo-com 2-21"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Shadcn</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-22.svg"
                      alt="Icon - asterisk-svgrepo-com 2-22"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Radix</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/miui.svg"
                      alt="Icon - miui"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">MUI</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-4">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-26.svg"
                      alt="Icon - asterisk-svgrepo-com 2"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Ant design</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-1-5.svg"
                      alt="Icon - asterisk-svgrepo-com 2-1"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">PrimeReact</div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-2-5.svg"
                      alt="Icon - asterisk-svgrepo-com 2-2"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">
                      Carbon Design System
                    </div>
                    <div className="txt txt--m mt-8 mt-4-mob color--dark-secondary">
                      <p />
                    </div>
                  </div>
                </div>
                <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                  <span />
                  <span />
                  <span /> <span />
                </div>
                <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3">
                  <span className="icon op-04">
                    <img
                      className=""
                      src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/asterisk-svgrepo-com-2-3-4.svg"
                      alt="Icon - asterisk-svgrepo-com 2-3"
                      loading="lazy"
                      decoding="async"
                      style={{}}
                    />{" "}
                  </span>
                  <div className="pt-48 mt-auto">
                    <div className="title title--s color--dark">Chakra UI</div>
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
      <section className="cta  bg--white">
        <div className="container">
          <div className="cta_content">
            <span className="icon icon--2xl">
              <img
                className="fullw"
                src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/process-1.svg"
                alt="Icon - process-1"
                loading="lazy"
                decoding="async"
                style={{}}
              />{" "}
            </span>
            <div className="title title--m title--with-mark mt-24 mt-20-mob text--center isview textslide">
              <h2>
                Wondering about the price? We’ll help you find the best
                solution!
              </h2>{" "}
            </div>
            <div className="mt-48 mt-20-mob flex v--center h--center isview slidetop">
              <a
                className="btn btn--orange arr arr-right hover--dark btn--lg-desk"
                href="#contact-form"
                target="_self"
              >
                <span>
                  <b>Let’s connect</b>
                </span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <Project />
      <section className="services_section bg--white pb-200 pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            why chose us?
          </div>{" "}
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02 inner-inherit">
            <h2>
              Your success is our <br />
              <span>priority</span>
            </h2>
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
                “Engineering solutions built to perform{" "}
              </div>
              <div className="txt txt--lead mt-12 mb-auto color--dark">
                We don’t follow trends — we build electrical systems that last.
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
     <Comment />
      <section className="awards_section pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            Awards{" "}
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
                    href="https://phenomenonstudio.com/about-our-company/"
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
            Related services
          </div>{" "}
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview textslide trd02">
            <h2>
              Looking for <span>more?</span>
            </h2>{" "}
          </div>{" "}
        </div>
        <div className="mt-100 mt-32-mob services_items ov-hidden">
          <div className="awards_container ov-hidden">
            <div className="grid awards_wrap col-3 col-2-tablet col-1-mob">
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1 isview slidetop">
                <div className="title title--s color--dark">
                  Product redesign
                </div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    Upgrade legacy interfaces with scalable, business-driven UX
                    and Ul from a top-notch design agency.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a
                    href="https://phenomenonstudio.com/service/product-redesign/"
                    className="btn btn--simple dark arr"
                  >
                    <span>Explore</span>
                  </a>
                </div>
              </div>
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2 isview slidetop">
                <div className="title title--s color--dark">Web app design</div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    Design responsive, user-focused web platforms with strong
                    UX/UI logic.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a
                    href="https://phenomenonstudio.com/service/web-app-design/"
                    className="btn btn--simple dark arr"
                  >
                    <span>Explore</span>
                  </a>
                </div>
              </div>
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3 isview slidetop">
                <div className="title title--s color--dark">
                  Website development
                </div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    Launch a fast, scalable site that converts and supports
                    product growth.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a
                    href="https://phenomenonstudio.com/service/website-development-agency/"
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
            FAQ
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
                    <div>What is custom web development?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            Custom web development is the process of building
                            tailored websites and applications that meet unique
                            business needs, providing greater flexibility,
                            security, and scalability than off-the-shelf
                            solutions.
                          </span>
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
                    <div>How much does professional web development cost?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            Professional web development services vary in price
                            based on project complexity, features, and
                            customization needs. Simple websites may start at a
                            few thousand dollars, while advanced applications
                            can range significantly higher.
                          </span>
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
                    <div>Why should I hire a web development company?</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            A web development company provides expertise,
                            efficient development processes, and ongoing support
                            to ensure your web solution is secure, functional,
                            and aligned with industry standards.
                          </span>
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
                      How to install an electrical system?es WordPress web development compare to custom
                      development?
                    </div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            WordPress web development services offer flexibility
                            and ease of use for content management, while custom
                            web development provides fully tailored solutions
                            for complex business needs.
                          </span>
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
                    <div>
                      What’s the difference between web design and development?
                    </div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            Web design focuses on the look and user experience,
                            while web development brings designs to life through
                            coding and functionality.
                          </span>
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
                      What are the benefits of hiring a web development agency?
                    </div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            A web development agency ensures technical
                            expertise, faster project completion, and continuous
                            support, allowing businesses to focus on growth
                            rather than technical challenges.
                          </span>
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
    href="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/css/swiper-bundle.min.css"
    async=""
  />
</>

  )
}

export default Webdev

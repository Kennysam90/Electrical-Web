import React from 'react'
import Topnav from '../../Component/Topnav'
import Footer from '../../Component/Footer'

const Contact = () => {
  return (
    <>
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
    <main className="next_block_sticky">
      <section
        className="contact_form_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom contacts_hero ov--hidden next_block_sticky"
        id="contact-form"
      >
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop">
            We turn bold ideas into successful products{" "}
          </div>
          <h2 className="title title--xxl mt-16 color--white mw1040 nobr-mob isview textslide trd02">
            Got an idea? <br />
            <span>Let’s talk!</span>
          </h2>
        </div>
        <div className="mt-40 mt-48-mob contact_form_wrap">
          <div className="container">
            <div className="flex v--stretch h--between flex--block-mob">
              <form
                action="https://phenomenonstudio.com/?form-action=request"
                autoComplete="off"
                className="contact-form"
              >
                <div className="relative">
                  <div className="flex h--wrap v--start h--between row-gap-32 row-gap-24-mob form_wrap">
                    <input type="hidden" name="g-recaptcha-response" />
                    <input
                      type="hidden"
                      name="action"
                      defaultValue="validate_captcha"
                    />
                    <input type="hidden" name="form_type" defaultValue={1} />
                    <input
                      type="hidden"
                      name="source_page"
                      defaultValue="index.html"
                    />{" "}
                    <div className="input-wrap w50 isview slidetop">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Your Name{" "}
                      </div>
                      <input
                        type="text"
                        name="your_name"
                        placeholder=" "
                        className="required"
                        data-max-length={40}
                        data-pattern="[A-Za-z]"
                      />
                      <p>
                        Enter your name <sup>*</sup>
                      </p>
                    </div>
                    <div className="input-wrap w50 isview slidetop">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Your Email{" "}
                      </div>
                      <input
                        type="text"
                        name="your_email"
                        placeholder=" "
                        className="required email"
                        data-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                        data-message-error="Your Email is invalid"
                      />
                      <p>
                        Enter your email <sup>*</sup>
                      </p>
                    </div>
                    <div className="input-wrap isview slidetop">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Message{" "}
                      </div>
                      <textarea
                        name="your_text"
                        className="max-length"
                        placeholder=" "
                        data-max-length={1000}
                        defaultValue={""}
                      />
                      <p>Tell us about your project</p>
                    </div>
                    <div className="attach_wrap mt--8 mt-0-mob isview slidetop">
                      <input
                        type="file"
                        accept=".jpg, .png, .webp, .doc, .docx, .pdf, .csv, .xlsx"
                        id="attach_1"
                        className="attach_input"
                        multiple=""
                        name="files_arr[]"
                      />
                      <label
                        htmlFor="attach_1"
                        className="btn btn--white-light hover--dark-light clip"
                      >
                        <span>
                          <b>Attach file</b>
                        </span>
                      </label>
                      <div id="inner_1" className="attach_inner" />
                      <div className="file-err err fe1">
                        You can upload maximum 5 files
                      </div>
                      <div className="file-err err fe2">
                        Some of your file not loaded, because maximum file size
                        - 5 mb
                      </div>
                    </div>
                    <div className="budget_wrap mt-8-mob isview slidetop">
                      <div className="txt txt--control-s color--white-light uppercase fw-600">
                        Your budget for this project?{" "}
                      </div>
                      <div className="budgets flex v--start h--start h--wrap mt-20 gap-8">
                        <input
                          type="radio"
                          id="budget_1"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="up to $10k"
                        />
                        <label htmlFor="budget_1" className="btn btn--label">
                          up to $10k
                        </label>
                        <input
                          type="radio"
                          id="budget_2"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="$10-$20k"
                        />
                        <label htmlFor="budget_2" className="btn btn--label">
                          $10-$20k
                        </label>
                        <input
                          type="radio"
                          id="budget_3"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="$20-$50k"
                        />
                        <label htmlFor="budget_3" className="btn btn--label">
                          $20-$50k
                        </label>
                        <input
                          type="radio"
                          id="budget_4"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue="$50-$100k"
                        />
                        <label htmlFor="budget_4" className="btn btn--label">
                          $50-$100k
                        </label>
                        <input
                          type="radio"
                          id="budget_5"
                          name="budget"
                          className="custom-validate budget"
                          data-validate-key="budget"
                          defaultValue=">$100k"
                        />
                        <label htmlFor="budget_5" className="btn btn--label">
                          &gt;$100k
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
                        className=""
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/circle-check-svgrepo-com-1.svg"
                        alt="Icon - circle-check-svgrepo-com 1"
                        loading="lazy"
                        decoding="async"
                        style={{}}
                      />{" "}
                    </div>
                    <div className="title title--m mt-24">
                      <span>Thanks</span> for taking time to reachout!{" "}
                    </div>
                    <div className="txt txt--l mt-12 color--white-light">
                      Stay connected with us by subscribing to our LinkedIn
                      account. By following, you’l be the first to hear about
                      our latest updates, news, and exciting development. We
                      look forward to sharing our journey with you!{" "}
                    </div>
                    <div className="btn_wrap mt-24 w-full-mob">
                      <a
                        href="https://www.linkedin.com/company/phenomenonstudio/"
                        target="_blank"
                        rel="nofollow"
                        className="btn btn--orange hover--white btn--lg-desk"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={17}
                          viewBox="0 0 16 17"
                          fill="none"
                        >
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
                        className=""
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/circle-check-svgrepo-com-1.svg"
                        alt="Icon - circle-check-svgrepo-com 1"
                        loading="lazy"
                        decoding="async"
                        style={{}}
                      />{" "}
                    </div>
                    <div className="title title--m mt-24">
                      <span>Thanks</span> for taking time to reachout!{" "}
                    </div>
                    <div className="txt txt--l mt-12 color--white-light">
                      We’d love to hear more about your project! Feel free to
                      schedule a call using the link provided. This will help us
                      better understand your vision and ensure we’re aligned on
                      all the details.{" "}
                    </div>
                    <div className="btn_wrap mt-24 w-full-mob">
                      <a
                        href="https://calendly.com/hello-phenomenon-studio/30min"
                        target="_blank"
                        rel="nofollow"
                        className="btn btn--orange hover--white arr btn--lg-desk"
                      >
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
                      className="radius-6 photo"
                      src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/ksenia.jpg"
                      alt="Image - ksenia"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.75555555555556" }}
                    />{" "}
                    <div className="bio flex fd--column v--start">
                      <a
                        href="https://www.linkedin.com/in/kseniia-shalia-a21921240/"
                        target="_blank"
                        rel="nofollow"
                        className="soc"
                      >
                        <img
                          src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/linkedin-alt.svg"
                          loading="lazy"
                          decoding="async"
                          alt=""
                        />
                      </a>
                      <div className="txt txt--m">Kseniia Shalia </div>
                      <div className="txt txt--s color--white-light">
                        Account Executive{" "}
                      </div>
                      <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                        <div className="copy_wrap">
                          <img
                            src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/copy.svg"
                            loading="lazy"
                            decoding="async"
                            data-text="hello@phenomenon-studio.com"
                            alt=""
                            className="copyme"
                          />
                        </div>
                        <a
                          href="mailto:hello@phenomenon-studio.com"
                          className="btn btn--simple"
                        >
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
                      className="radius-6 photo"
                      src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/polina.jpg"
                      alt="Image - polina"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.75555555555556" }}
                    />{" "}
                    <div className="bio flex fd--column v--start">
                      <a
                        href="https://www.linkedin.com/in/polina-chebanova/"
                        target="_blank"
                        rel="nofollow"
                        className="soc"
                      >
                        <img
                          src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/linkedin-alt.svg"
                          loading="lazy"
                          decoding="async"
                          alt=""
                        />
                      </a>
                      <div className="txt txt--m">Polina Chebanova </div>
                      <div className="txt txt--s color--white-light">
                        Co-Founder &amp; CPO{" "}
                      </div>
                      <div className="email_wrap flex v--start h--start gap-8 mt-10 pt-8">
                        <div className="copy_wrap">
                          <img
                            src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/copy.svg"
                            loading="lazy"
                            decoding="async"
                            data-text="polina@phenomenon-studio.com"
                            alt=""
                            className="copyme"
                          />
                        </div>
                        <a
                          href="mailto:polina@phenomenon-studio.com"
                          className="btn btn--simple"
                        >
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
      <section className="locations_section pt-200 pt-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            Worldwide, Where You Need Us
          </div>{" "}
          <div className="mt-24 mw1040 title title--xl nobr-mob isview textslide trd02">
            Collaborating across borders to deliver seamless solutions —{" "}
            <span>wherever you are</span>
          </div>{" "}
          <div className="map_wrap pc-visible mt-100 mt-60-mob isview fadein">
           
          </div>
          <div className="locations_wrap mt-32-mob">
            <div className="row flex v--start h--between isview slidetop h--wrap">
              <div className="left">
                <img
                  className=""
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/poland.png"
                  alt="Image - poland"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.45" }}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  Poland, Wroclaw
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  Phenomenon Studio sp. z o.o
                  <br />
                  Registration ID (KRS): 1083532
                  <br />
                  Marsz. Józefa Piłsudskiego 74/320, 50-020
                </div>
              </div>
            </div>
            <div className="row flex v--start h--between isview slidetop h--wrap">
              <div className="left">
                <img
                  className=""
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/estonia.png"
                  alt="Image - estonia"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.475" }}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  Estonia, Tallinn
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  Phenomenon Studio OÜ
                  <br />
                  Registration ID: 14811067
                  <br />
                  Kaupmehe tn 7-120, 10114
                </div>
              </div>
            </div>
            <div className="row flex v--start h--between isview slidetop h--wrap">
              <div className="left">
                <img
                  className=""
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/sz.png"
                  alt="Image - sz"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.45" }}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  Switzerland, Lugano
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  Phenomenon Studio Sagl
                  <br />
                  Registration ID: CH-501.4.028.340-3
                  <br />
                  Via Giacomo Brentani, 16, 6900
                </div>
              </div>
            </div>
            <div className="row flex v--start h--between isview slidetop h--wrap">
              <div className="left">
                <img
                  className=""
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/canada.png"
                  alt="Image - canada"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.475" }}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  Canada, Vancouver
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  2015 Main <br />
                  St. Vancouver, BC
                  <br />
                  Canada V5T 3C2
                </div>
              </div>
            </div>
            <div className="row flex v--start h--between isview slidetop h--wrap">
              <div className="left">
                <img
                  className=""
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/usa-flag.svg"
                  alt="Icon - usa flag"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  United States, Dover
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  Phenomenon Studio Inc.
                  <br />
                  8 The Green STER, Dover, USA
                  <br />
                  Registration ID/File number - 10131254
                  <br />
                  EIN 35-2894402
                </div>
              </div>
            </div>
            <div className="row flex v--start h--between isview slidetop h--wrap">
              <div className="left">
                <img
                  className=""
                  src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/Frame-1686558495.svg"
                  alt="Icon - Frame 1686558495"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  Ukraine, Kyiv
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  Phenomenon Studio
                  <br />
                  Evgeniya Konovalets, 36B, 02000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="tabs pb-200 pb-100-mob pt-200 pt-100-mob  bg--white relative await-action industries_new"
        data-tabs=""
      >
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            <h2>Key Industries</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview textslide trd02">
            Our areas of&nbsp;<span>expertise</span>
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
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/tinyvid_optimized_1_c3e89d72e9ca2837d9e85643956c8544.mp4"
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
                    Scalable platforms for growth-focused teams{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Challenges:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>High churn from poor and fragmented UX</li>
                          <li>
                            Scaling product features without compromising speed
                          </li>
                          <li>
                            Converting freemium users into paying subscribers
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we solve them:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>
                            Streamlined flows to improve activation and
                            retention
                          </li>
                          <li>
                            Modular UX and design systems to scale features
                            faster
                          </li>
                          <li>
                            Clean billing and plan management UX to improve
                            conversion
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                    <a
                      className="btn btn--orange hover--dark arr fullw-mob"
                      href="../saas-design-agency/index.html"
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
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/tinyvid_optimized_2_original-7d5a927fb8e1aed94b2f0dadb537fe63.mp4"
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
                    HIPAA-compliant design and development for health tech
                    products{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Challenges:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>
                            UX complexity in health tracking, patient records,
                            and telehealth
                          </li>
                          <li>Data privacy and HIPAA compliance</li>
                          <li>
                            Building trust with patients and practitioners
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we solve them:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>
                            Patient-first UX that simplifies complex workflows
                          </li>
                          <li>
                            Secure infrastructure aligned with regulatory
                            standards
                          </li>
                          <li>Clean, professional Ul that builds user trust</li>
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
                  <video
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/tinyvid_optimized_5_original-c138f335ff5d89bfd76a54cb9b1b76f4.mp4"
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
                    Digital learning platforms that engage and scale{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Challenges:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>
                            Low engagement in self-paced learning environments
                          </li>
                          <li>Accessibility compliance (ADA, WCAG)</li>
                          <li>Performance under high concurrent user loads</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we solve them:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Gamified UX to keep learners motivated</li>
                          <li>
                            Adaptive Ul for different learning needs and devices
                          </li>
                          <li>
                            Cloud-based, scalable architecture for education at
                            scale
                          </li>
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
                  <video
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/tinyvid_optimized_3_original-73b35d49f86d187eea5f51868f628bd4.mp4"
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
                    Secure, compliant digital products for modern finance{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Challenges:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>KYC, AML, and global compliance requirements</li>
                          <li>
                            Drop-offs during complex onboarding and verification
                            flows
                          </li>
                          <li>
                            Real-time integrations with payment and exchange
                            systems
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we solve them:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Frictionless onboarding and verification UX</li>
                          <li>Secure Ul for transactions and money movement</li>
                          <li>
                            API-driven architecture built for performance and
                            scale
                          </li>
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
                  <video
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/tinyvid_optimized_4_original-86dbd5964c5d65bf3957349b5959ceef.mp4"
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
                    Decentralized platforms with human-first UX{" "}
                  </div>
                  <div className="grid col-2 col-1-mob gap-24-mob mt-64 cols_wrap">
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        Challenges:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>Onboarding friction and steep learning curves</li>
                          <li>Low trust from non-crypto-native users</li>
                          <li>
                            Wallet and chain integrations that frustrate new
                            users
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-wrap">
                      <div className="txt txt--control-s uppercase isview color--dark-secondary slidetop">
                        How we solve them:
                      </div>
                      <div className="styled_ul_wrap font1 mt-12 pt-12 pb-8 isview slidetop color--dark">
                        <ul>
                          <li>
                            Simplified wallet connection and onboarding
                            experiences
                          </li>
                          <li>
                            Smart contract interfaces designed for trust and
                            usability
                          </li>
                          <li>
                            Native integration with MetaMask, Solana, and more
                          </li>
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
                        <b>View cases</b>
                      </span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials_section pb-100 pb-100-mob bg--white">
        <div className="container">
          <div className="flex v--end h--between heading_wrap flex--block-mob">
            <div className="left">
              <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
                what our clients say{" "}
              </div>
              <div className="title title--xl mt-16 color--dark mw1040 isview textslide trd02">
                <h2>
                  <span>5.0</span> is our average <br />
                  on clutch &amp; designrush
                </h2>
              </div>
            </div>
            <div className="services_cards grid col-2 gap-8 mt-32-mob">
              <a
                href="https://clutch.co/profile/phenomenon-studio"
                target="_blank"
                rel="nofollow"
                className="card bg--gray radius-12 p-12 flex fd--column isview slidetop"
              >
                <span className="icon">
                  <img
                    className="visible-icon"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/clutch-icon.svg"
                    alt="Icon - clutch-icon"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                  <img
                    className="hover-icon"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/Icon.svg"
                    alt="Icon - Icon"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="ratings flex v--center h--between mt-auto">
                  <div className="stars flex v--center h--start gap-2">
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    5.0
                  </div>
                </div>
              </a>
              <a
                href="https://www.designrush.com/agency/profile/phenomenon-studio"
                target="_blank"
                rel="nofollow"
                className="card bg--gray radius-12 p-12 flex fd--column isview slidetop"
              >
                <span className="icon">
                  <img
                    className="visible-icon"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/design-icon.svg"
                    alt="Icon - design-icon"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                  <img
                    className="hover-icon"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/10/icon2.svg"
                    alt="Icon - icon2"
                    loading="lazy"
                    decoding="async"
                    style={{}}
                  />{" "}
                </span>
                <div className="ratings flex v--center h--between mt-auto">
                  <div className="stars flex v--center h--start gap-2">
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/images/icons/star.svg"
                      alt="star"
                      loading="lazy"
                      decoding="async"
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
                  className="md"
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/1516924597216.jpg"
                  alt="Image - Craig Tortolani"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: 1 }}
                />{" "}
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
                    preload="none"
                    className="fullw"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/review-craig.mp4"
                    poster="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/cover-craig.webp"
                  />{" "}
                  <div className="btn-wrap">
                    <button className="btn btn--play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/av.png"
                  alt="Image - Alex Friedman"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.0064102564103" }}
                />{" "}
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
                  exceptional. I have never worked with a team so talented while
                  also being competitively priced and communicative.
                </p>
              </div>
            </div>
            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/KlickEx.jpg"
                  alt="Image - KlickEx"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: 1 }}
                />{" "}
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
                    preload="none"
                    className="fullw"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/klickex-review.mp4"
                    poster="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/klickex-cover.webp"
                  />{" "}
                  <div className="btn-wrap">
                    <button className="btn btn--play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/Rectangle-34624326.png"
                  alt="Image - George Fry"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.0064102564103" }}
                />{" "}
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
                  works at speed and is extremely punctual with timelines. They
                  deliver top-notch outcomes with exceptional designs.
                </p>
              </div>
            </div>
            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/image.png"
                  alt="Image - Andre Guerra"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.0064102564103" }}
                />{" "}
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
                    preload="none"
                    className="fullw"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/radcat-review.mp4"
                    poster="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/cover-andre-scaled.webp"
                  />{" "}
                  <div className="btn-wrap">
                    <button className="btn btn--play" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/03/1683997337066.jpg"
                  alt="Image - Kevin Alvarez"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: 1 }}
                />{" "}
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>Kevin Alvarez</p>
                    <span>Founder &amp; General Partner, Predictive</span>
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
      <Footer />
    </main>
    
  </div>
  <link
    rel="stylesheet"
    href="../../cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/css/swiper-bundle.min.css"
    async=""
  />
  {/* Mirrored from phenomenonstudio.com/contact-us/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 05 Nov 2025 16:54:34 GMT */}
</>
  )
}

export default Contact

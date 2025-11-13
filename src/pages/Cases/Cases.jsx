// import { useState } from "react";
// import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import Topnav2 from "../../Component/Topnav2";
import Footer from "../../Component/Footer";
import Project from "../../Component/project";
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

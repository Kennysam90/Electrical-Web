import { useState } from 'react'
import Topnav from '../../Component/Topnav'
import Footer from '../../Component/Footer'
import Chat from '../../Component/Chat'
import Comment from '../../Component/Comment'

const Contact = () => {
   const [activeTab, setActiveTab] = useState("");
    
      // when a tab is clicked, update activeTab
      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
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
      <Chat />
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
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
                  alt="Image - poland"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.45" }}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  Lagos Nigeria
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  DAMPECON Ltd.
                  <br />
                  Registration ID (KRS): 1083532
                  <br />
                  82, Olatunji Street, Ojota, Lagos
                </div>
              </div>
            </div>
            <div className="row flex v--start h--between isview slidetop h--wrap">
              <div className="left">
                <img
                  className=""
                  src="../../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
                  alt="Image - estonia"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "1.475" }}
                />{" "}
              </div>
              <div className="center">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600">
                  Abuja Nigeria
                </div>
              </div>
              <div className="right">
                <div className="txt txt--l color--dark">
                  DAMPECON Ltd.
                  <br />
                  Registration ID: 14811067
                  <br />
                  Hilltop House, Boing Luxury Estate, Apo, Abuja
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
          </div>
        </div>
      </section>
      <Comment />
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

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="footer_top  pt-60-mob font2" style={{marginTop:"3em"}}>
          <div className="container">
            <div className="grid col-2 col-1-mob left">
              <div className="col grid col-2 col-1-mob gap-40 gap-0-mob footer_menu_wrap isview slidetop">
                <ul
                  className="footer_menu grid gap-8 gap-4-mob"
                  id="menu-explore">
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18444"
                    id="menu-item-18444">
                    <a href="#">Services</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18445"
                    id="menu-item-18445">
                    <Link to="/cases">Cases</Link>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18446"
                    id="menu-item-18446">
                    <Link to="/about-us">About</Link>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18447"
                    id="menu-item-18447">
                    <Link to="/teams">Team & Advisors</Link>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18448"
                    id="menu-item-18448">
                    <a href="">Career</a>
                  </li>
                </ul>
              </div>
              <div className="col right mt-48-mob isview slidetop">
                <div className="grid col-2 col-1-mob gap-8 countries">
                  <Link
                    className="country_link p-24 p-16-mob radius-8"
                    href="about-our-company/index.html"
                    target="_blank">
                    <img
                      alt="Image - poland"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
                      style={{
                        aspectRatio: "1.45",
                      }}
                    />
                    <div className="mt-24 mt-16-mob">
                      <span className="btn h--between arr btn--simple dark fullw decor-no">
                        <span>Lagos Nigeria</span>
                      </span>
                    </div>
                  </Link>
                  <Link
                    className="country_link p-24 p-16-mob radius-8"
                    to="about-us"
                    target="_blank">
                    <img
                      alt="Image - estonia"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/nigeria.png"
                      style={{
                        aspectRatio: "1.475",
                      }}
                    />
                    <div className="mt-24 mt-16-mob">
                      <span className="btn h--between arr btn--simple dark fullw decor-no">
                        <span>Abuja Nigeria</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_center pt-100 pt-48-mob">
          <div className="container">
            <div className="flex v--center h--between pb-6 menus_wrap isview slidetop">
              <div className="left uppercase">
                <ul
                  className="flex v--center h--start h--wrap gap-12 fw-600"
                  id="menu-legacy">
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16638"
                    id="menu-item-16638">
                    <a href="terms-of-use/index.html">Terms of Use</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16637"
                    id="menu-item-16637">
                    <a href="privacy-policy/index.html">Privacy Policy</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-16636"
                    id="menu-item-16636">
                    <a href="cookies-policy/index.html" rel="privacy-policy">
                      Cookies policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <div className="txt txt--control-m fw-600 uppercase font2">
                  Dampecon LTD © 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

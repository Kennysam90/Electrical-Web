import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="footer_top pt-100 pt-60-mob font2">
          <div className="container">
            <div className="grid col-2 col-1-mob left">
              <div className="col grid col-2 col-1-mob gap-40 gap-0-mob footer_menu_wrap isview slidetop">
                <ul
                  className="footer_menu grid gap-8 gap-4-mob"
                  id="menu-explore">
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18444"
                    id="menu-item-18444">
                    <a href="services/index.html">Services</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18445"
                    id="menu-item-18445">
                    <Link to="/cases">Cases</Link>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18446"
                    id="menu-item-18446">
                    <a href="about-our-company/index.html">About</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18447"
                    id="menu-item-18447">
                    <a href="team-and-advisors/index.html">Team & Advisors</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18448"
                    id="menu-item-18448">
                    <a href="career/index.html">Career</a>
                  </li>
                  <li
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18449"
                    id="menu-item-18449">
                    <a href="blog/index.html">Blog</a>
                  </li>
                </ul>
                <div className="col">
                  <div className="socs flex v--start h--wrap h--start gap-8 isview slidetop mt-48-mob">
                    <a
                      href="https://www.behance.net/phenomenon-studio"
                      rel="nofollow"
                      target="_blank">
                      <img
                        alt="Icon - behance"
                        className=""
                        decoding="async"
                        loading="lazy"
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/behance.svg"
                        style={{}}
                      />
                    </a>
                    <a
                      href="https://dribbble.com/phenomenonstudio"
                      rel="nofollow"
                      target="_blank">
                      <img
                        alt="Icon - dribbble"
                        className=""
                        decoding="async"
                        loading="lazy"
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/dribbble.svg"
                        style={{}}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/phenomenon__studio"
                      rel="nofollow"
                      target="_blank">
                      <img
                        alt="Icon - instagram"
                        className=""
                        decoding="async"
                        loading="lazy"
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/instagram.svg"
                        style={{}}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/26241149"
                      rel="nofollow"
                      target="_blank">
                      <img
                        alt="Icon - linkedin"
                        className=""
                        decoding="async"
                        loading="lazy"
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/linkedin.svg"
                        style={{}}
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/phenomenonstudio"
                      rel="nofollow"
                      target="_blank">
                      <img
                        alt="Icon - facebook"
                        className=""
                        decoding="async"
                        loading="lazy"
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/facebook.svg"
                        style={{}}
                      />
                    </a>
                    <a
                      href="https://x.com/Phenomenon_inc"
                      rel="nofollow"
                      target="_blank">
                      <img
                        alt="Icon - twitter"
                        className=""
                        decoding="async"
                        loading="lazy"
                        src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/twitter.svg"
                        style={{}}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col right mt-48-mob isview slidetop">
                <div className="grid col-2 col-1-mob gap-8 countries">
                  <a
                    className="country_link p-24 p-16-mob radius-8"
                    href="about-our-company/index.html"
                    target="_blank">
                    <img
                      alt="Image - poland"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/poland.png"
                      style={{
                        aspectRatio: "1.45",
                      }}
                    />
                    <div className="mt-24 mt-16-mob">
                      <span className="btn h--between arr btn--simple dark fullw decor-no">
                        <span>Poland, Wroclaw</span>
                      </span>
                    </div>
                  </a>
                  <a
                    className="country_link p-24 p-16-mob radius-8"
                    href="about-our-company/index.html"
                    target="_blank">
                    <img
                      alt="Image - estonia"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/estonia.png"
                      style={{
                        aspectRatio: "1.475",
                      }}
                    />
                    <div className="mt-24 mt-16-mob">
                      <span className="btn h--between arr btn--simple dark fullw decor-no">
                        <span>Estonia, Tallinn</span>
                      </span>
                    </div>
                  </a>
                  <a
                    className="country_link p-24 p-16-mob radius-8"
                    href="about-our-company/index.html"
                    target="_blank">
                    <img
                      alt="Image - sz"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/sz.png"
                      style={{
                        aspectRatio: "1.45",
                      }}
                    />
                    <div className="mt-24 mt-16-mob">
                      <span className="btn h--between arr btn--simple dark fullw decor-no">
                        <span>Switzerland, Lugano</span>
                      </span>
                    </div>
                  </a>
                  <a
                    className="country_link p-24 p-16-mob radius-8"
                    href="about-our-company/index.html"
                    target="_blank">
                    <img
                      alt="Image - canada"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/02/canada.png"
                      style={{
                        aspectRatio: "1.475",
                      }}
                    />
                    <div className="mt-24 mt-16-mob">
                      <span className="btn h--between arr btn--simple dark fullw decor-no">
                        <span>Canada, Vancouver</span>
                      </span>
                    </div>
                  </a>
                  <a
                    className="country_link p-24 p-16-mob radius-8"
                    href="about-our-company/index.html"
                    target="_blank">
                    <img
                      alt="Image - usa"
                      className=""
                      decoding="async"
                      loading="lazy"
                      src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/05/usa.png"
                      style={{
                        aspectRatio: "1.45",
                      }}
                    />
                    <div className="mt-24 mt-16-mob">
                      <span className="btn h--between arr btn--simple dark fullw decor-no">
                        <span>USA, Denver</span>
                      </span>
                    </div>
                  </a>
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
                  Phenomenon © 2025
                </div>
              </div>
            </div>
          </div>
          <div className="mt-40 mt-24-mob ratings_wrap isview slidetop">
            <div className="container pl-0-mob pr-0-mob">
              <div className="grid col-4 col-2-mob">
                <a
                  className="col flex v--center h--center p-24"
                  href="https://webflow.com/@phenomenons-workspace"
                  target="_blank">
                  <img
                    alt="Icon - webflow-rating"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/02/webflow-rating.svg"
                    style={{}}
                  />
                </a>
                <a
                  className="col flex v--center h--center p-24"
                  href="article/raising-the-bar-for-data-security-phenomenon-hipaa-gdpr-certified/index.html"
                  target="_blank">
                  <img
                    alt="Image - footer"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/08/footer.png"
                    style={{
                      aspectRatio: "1.1323529411765",
                    }}
                  />
                </a>
                <a
                  className="col flex v--center h--center p-24"
                  href="https://www.designrush.com/agency/profile/phenomenon-studio"
                  target="_blank">
                  <img
                    alt="Icon - Frame 1686558327-1"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Frame-1686558327-1.svg"
                    style={{}}
                  />
                </a>
                <a
                  className="col flex v--center h--center p-24"
                  href="https://clutch.co/profile/phenomenon-studio"
                  target="_blank">
                  <img
                    alt="Icon - Frame 1686558328"
                    className=""
                    decoding="async"
                    loading="lazy"
                    src="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/08/Frame-1686558328.svg"
                    style={{}}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="accordions">
            <div className="accordion isview fadein">
              <div className="container">
                <div className="top">
                  <a
                    className="title title--s color--inherit"
                    href="services/index.html"
                    target="_self">
                    All services{" "}
                    <span className="color--dark-tertiary">19</span>
                  </a>
                </div>
                <div className="bottom">
                  <div className="grid pt-20 pt-0-mob pb-48-mob pb-40 col-3 col-1-mob col-2-tablet gap-40">
                    <div className="col">
                      <ul className="grid gap-24 gap-20-mob">
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/ux-design-audit/index.html"
                            target="_self">
                            <span>
                              <b>UX Design Audit</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/product-redesign/index.html"
                            target="_self">
                            <span>
                              <b>Product Redesign</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/blockchain-development-services/index.html"
                            target="_self">
                            <span>
                              <b>Blockchain Development</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/no-code-app-development/index.html"
                            target="_self">
                            <span>
                              <b>No-Code Development</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/website-redesign-services/index.html"
                            target="_self">
                            <span>
                              <b>Website Redesign</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/website-development-agency/index.html"
                            target="_self">
                            <span>
                              <b>Website Development</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="product-design/index.html"
                            target="_self">
                            <span>
                              <b>Product Design</b>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="grid gap-24 gap-20-mob">
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/mobile-app-development-services/index.html"
                            target="_self">
                            <span>
                              <b>Mobile App Development</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/web-app-design/index.html"
                            target="_self">
                            <span>
                              <b>Web App Design</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/website-design-services/index.html"
                            target="_self">
                            <span>
                              <b>Website Design Services</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/rapid-mvp-development/index.html"
                            target="_self">
                            <span>
                              <b>Rapid MVP Development</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/team-extension/index.html"
                            target="_self">
                            <span>
                              <b>Team Extension</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/design-prototype/index.html"
                            target="_self">
                            <span>
                              <b>Design Prototype</b>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="grid gap-24 gap-20-mob">
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/custom-mvp-software-development/index.html"
                            target="_self">
                            <span>
                              <b>Custom MVP Development</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/tech-workshop/index.html"
                            target="_self">
                            <span>
                              <b>Technical Workshop</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/dedicated-software-developmen-team/index.html"
                            target="_self">
                            <span>
                              <b>Dedicated Team</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/branding-services/index.html"
                            target="_self">
                            <span>
                              <b>Branding</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="service/product-discovery/index.html"
                            target="_self">
                            <span>
                              <b>Product Discovery</b>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn--simple arr dark"
                            href="ui-ux-design-services/index.html"
                            target="_self">
                            <span>
                              <b>UX/UI Design </b>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
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

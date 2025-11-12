import React from 'react'
import { Link } from 'react-router-dom'

const Explain = () => {
  return (
    <>
      <section className="services_section pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob next_block_sticky">
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600 isview slidetop">
            <h2>How to work with us</h2>
          </div>{" "}
          <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview textslide trd02 inner-inherit">
            Advance your electrical project<span>with flexible engagement options, clear timelines, and full technical support — from concept to commissioning.</span>
            
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
                      We work as your long-term electrical engineering and installation partner — managing every stage from system design and procurement to implementation, testing, and maintenance. This isn’t just a one-time project — it’s a partnership built for reliability, safety, and long-term operational success.{" "}
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
                    <Link
                      className="btn btn--simple arr"
                      to="/contact"
                      target="_self"
                    >
                      <span>
                        <b>Hire Your Full-Cycle Team</b>
                      </span>
                    </Link>{" "}
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
                    <Link
                      className="btn btn--simple arr"
                      to="/contact"
                      target="_self"
                    >
                      <span>
                        <b>Get Your Dedicated Team</b>
                      </span>
                    </Link>{" "}
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
                    <Link
                      className="btn btn--simple arr"
                      to="/contact"
                      target="_self"
                    >
                      <span>
                        <b>Hire Your Full-Cycle Team</b>
                      </span>
                    </Link>{" "}
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
    </>
  )
}

export default Explain

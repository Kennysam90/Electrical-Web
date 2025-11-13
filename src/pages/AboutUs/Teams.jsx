import React from 'react'
import Topnav from '../../Component/Topnav'
import Footer from '../../Component/Footer'
import Award from '../../Component/Award'
import { Link } from 'react-router-dom'
import Chat from '../../Component/Chat'

const Teams = () => {
  return (
    <>
  <div id="app">
    <Topnav />
    <div className="favicons-wrap" style={{ display: "none" }}>
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00000.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00001.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00002.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00003.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00004.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00005.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00006.png.webp"
        alt=""
      />
      <img
        src="/phenomenonstudio.com/wp-content/uploads/2025/10/logo_00007.png"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00008.png.webp"
        alt=""
      />
      <img
        src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/10/logo_00009.png.webp"
        alt=""
      />
    </div>
    <main className="next_block_sticky">
      <section className="about-hero bg--dark color--white section-bottom-rounded-pc">
        <div className="container">
          <div className="about-hero__holder">
            <div className="nobr-mob title title--xxl isview textslide visible">
             Dampecon Engineering Team
               <span>s</span>{" "}
            </div>
            <div className="about-hero__description txt txt--m mt-24 mt-20-mob isview slidetop visible">
              <p>
                Meet our team of experienced engineers and project specialists dedicated to delivering reliable electrical and engineering solutions with precision and quality.
              </p>
            </div>
            <div className="mt-32 mt-24-mob isview slidetop visible">
              <a
                className="btn btn--lg-desk btn--orange arr arr-right hover--white"
                href="#contact-form"
                target="_self"
              >
                <span>
                  <b>Let's talk</b>
                </span>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
      <section
        className="pt-120 pt-64-mob pb-64-mob mb-200 mb-0-mob"
        id="our-team"
      >
        <div className="container">
          <div className="title title--xl isview textslide visible">
            Our leadership <span>team</span>
          </div>
          <div className="team-flex-wrap grid col-3 col-1-mob gap-20-mob gap-40 mt-64 mt-40-mob">
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
              data-card={1}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (4).jpeg"
                    alt="Image - 332025-03-09 21.08.20"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87820512820513" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">John</div>
                  <div className="bio-position color--dark-secondary">
                    Co-founder &amp; Chief Partnership Officer
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                An experienced manager who oversees Phenomenon customer
                relations and leads the team behind it, Polina also has deep
                expertise in design, having created numerous successful products
                in the past.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
              data-card={2}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (2).jpeg"
                    alt="Image - 112025-03-09 20.19.59"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.84210526315789" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Valerii Filimonov</div>
                  <div className="bio-position color--dark-secondary">
                    CEO &amp; Co-founder
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Manager with 8+ years of experience in e-commerce, product IT
                solutions, startups, and background in real estate investments.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
              data-card={3}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (3).jpeg"
                    alt="Image - 3"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Yuliia Apanasenko</div>
                  <div className="bio-position color--dark-secondary">
                    Head of Product Business Unit
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Apart from orchestrating Phenomenon proejcts seamlessly, Yuliia
                manages our team of top-rated and skilled experts to drive them
                towards successful outcomes. She's the one who keeps our
                projects on track and ensures their smooth delivery.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
              data-card={4}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (8).jpeg"
                    alt="Image - 4"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Tunde Adebayo</div>
                  <div className="bio-position color--dark-secondary">
                    Head of Development
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Experienced manager, engineer &amp; skillful tech lead with
                8-year experience of building up high-performative engineering
                teams and delivering top-class tech products to the market.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
              data-card={5}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (5).jpeg"
                    alt="Image - 2024-12-04 15.18.03-2"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87090909090909" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Funke Ogunleye</div>
                  <div className="bio-position color--dark-secondary">
                    HR &amp; Operations Director
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Results-driven and people-focused HR professional with over 7
                years of diverse experience in human resources, spanning
                multiple roles. Combining a strong foundation in psychology with
                well-honed operational and strategic skills, she specializes in
                building high-performing teams, enhancing employee engagement,
                and aligning HR initiatives with organizational goals.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar"
              data-card={6}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (6).jpeg"
                    alt="Team and Advisors"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Kunle Ajayi</div>
                  <div className="bio-position color--dark-secondary">
                    Head of Design
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                With over a decade of experience in the design industry, he
                started his journey as a graphic designer in 2013 and
                transitioned into UX/UI design in 2017, where he found his true
                passion. Now, as Head of Design at a full-cycle design studio,
                he leads a talented team and ensures the delivery of
                high-quality projects.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob"
              data-card={7}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (15).jpeg"
                    alt="Image - 1718240946148"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: 1 }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Bisi Oladipo</div>
                  <div className="bio-position color--dark-secondary">
                    Head of Design, North America
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                A creative strategist and product design leader with a deep
                background in AR/VR, interactive experiences, and innovative
                product launches.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob"
              data-card={8}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (19).jpeg"
                    alt="Image - 1719041617069"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: 1 }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Femi Adewale </div>
                  <div className="bio-position color--dark-secondary">
                    Head of Operations, North America
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                A visionary in product design leadership, with a track record of
                helping brands create standout digital experiences.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob"
              data-card={9}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (17).jpeg"
                    alt="Team and Advisors"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Joshua Caleb</div>
                  <div className="bio-position color--dark-secondary">
                    Head of US Development
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Joshua Caleb, Head of US Development, brings 8+ years of finance
                and blockchain expertise. As the CTO of Dekryption Labs and Head
                of US Development at Phenomenon Studio US, Joshua excels in
                solving blockchain challenges, tailoring solutions for diverse
                needs.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={10}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/04/2-1.png.webp"
                    alt="Team and Advisors"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Mike Kimelman</div>
                  <div className="bio-position color--dark-secondary">
                    Head of US Sales
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Mike Kimelman, Head of US Sales, is a bestselling author,
                entrepreneur, and blockchain expert. He co-founded Crypto.IQ and
                Dekryption Labs, investing in blockchain since 2014. His M&amp;A
                and founding roles enrich his specialization in blockchain
                advisory and investment.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={11}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (4).jpeg"
                    alt="Team and Advisors"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">John Ikechukwu</div>
                  <div className="bio-position color--dark-secondary">
                    Head of US Marketing
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                John Ikechukwu, Head of US Marketing, is a visionary founder of
                Dekryption Labs, a leading blockchain firm. With nearly five
                years' experience, Craig led Dekryption Labs, innovating and
                building advanced systems. He excels in global sales team
                organization and tech startup fundraising.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={12}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/09/8.jpg.webp"
                    alt="Image - 8"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Iryna Rupcheva</div>
                  <div className="bio-position color--dark-secondary">
                    Project Manager Lead
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Iryna is a skilled PM Lead, managing both a team of project
                managers and overseeing key projects. With a strong focus on
                organization, timely delivery, and client success, Iryna ensures
                smooth project execution from start to finish.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={13}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/01/photo_2025-01-27-16.07.25-1.jpeg.webp"
                    alt="Image - photo_2025-01-27 16.07.25"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: 1 }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Dmytro Kirsanov</div>
                  <div className="bio-position color--dark-secondary">
                    Head of Art
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                With over a 8 years as a brand designer, he has a strong
                background in building a complete visual systems for market
                leading brands, that helps to increase the client’s business
                goals in the most effective way. As a Creative Team Lead he
                helps delivering impactful designs and cohesive systems.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={14}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/01/IMG_0139-1-min-scaled-e1741178885860.jpg.webp"
                    alt="Image - IMG_0139 (1)-min"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.86038306451613" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Vadym Stebakov</div>
                  <div className="bio-position color--dark-secondary">
                    Lead ELECTRICAL INSTALLATION Engineer
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                The ELECTRICAL INSTALLATION journey began in 2018. It was at this point that
                Vadym found his true calling. Now he oversees the development
                and delivery of user-facing web apps, ensuring high performance,
                and exceptional UX. His responsibilities include writing and
                reviewing code, mentoring team members, selecting tools and
                technologies, and defining the architecture.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={15}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/01/IMG_8395-1-1.jpg.webp"
                    alt="Image - IMG_8395 (1)"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: 1 }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Alyona Ostroverkh</div>
                  <div className="bio-position color--dark-secondary">
                    Lead UI/UX Designer{" "}
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                With over five years of UX/UI experience, she rose from a junior
                role to Lead UX/UI Designer of the Promo Department. Guided by
                empathy, she excels at building strong client relationships and
                nurturing her team’s potential. A firm believer in continuous
                learning, she constantly seeks new skills to deliver
                user-centric solutions that drive results.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={16}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2023/09/DSC_5363-1.jpg.webp"
                    alt="Team and Advisors"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Denys Rabota</div>
                  <div className="bio-position color--dark-secondary">
                    Head of IT Engineering and Business Analysis
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                An expert with over 6 years of experience in IT software
                development, specializing in banking, fintech, automotive, and
                operations for both enterprises and startups. Delivers top-notch
                solutions across mobile, web, and web3 domains.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={17}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/01/IMG_0292-2-1-scaled.jpg.webp"
                    alt="Image - IMG_0292 (2)"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.75" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Artem Izmalkov</div>
                  <div className="bio-position color--dark-secondary">
                    Lead UI/UX Designer{" "}
                  </div>
                </div>
              </div>
              <div className="txt txt--m color--white description pt-20 pt-8-mob">
                Artem started his journey in design with a passion for graphics
                in 2007 and creating his first website in 2013. In 2015 he
                decided to connect his career with web design. Today as a Design
                Lead he manages the team, inspires designers and ensures high
                quality of projects.
              </div>
              <span
                className="readmore uppercase readmore_team_text txt txt--control-m mt-16"
                data-text-primary="Read more"
                data-text-secondary="Read less"
              />
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={18}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-1.png.webp"
                    alt="Image - Img-1"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">
                    Anastasiia Danylenko
                  </div>
                  <div className="bio-position color--dark-secondary">
                    Sales Lead
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={19}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img.png.webp"
                    alt="Image - Img"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Leo</div>
                  <div className="bio-position color--dark-secondary">
                    Account Executive
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={20}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/DSC_5363-1-4.png.webp"
                    alt="Image - DSC_5363 1-4"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">
                    Oleksandr Kostiuchenko
                  </div>
                  <div className="bio-position color--dark-secondary">
                    Marketing Operations Specialist
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={21}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/DSC_5363-1.png.webp"
                    alt="Image - DSC_5363 1"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Iryna Huk</div>
                  <div className="bio-position color--dark-secondary">
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={22}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/DSC_5363-1-1.png.webp"
                    alt="Image - DSC_5363 1-1"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Valeriia Varlamova</div>
                  <div className="bio-position color--dark-secondary">
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={23}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Yakovenko-Oleksii-1-min-scaled-e1741180197290.jpg.webp"
                    alt="Image - Yakovenko Oleksii (1)-min"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.82115384615385" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Oleksii Yakovenko</div>
                  <div className="bio-position color--dark-secondary">
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={24}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/DSC_5363-1-2.png.webp"
                    alt="Image - DSC_5363 1-2"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Sofiia Pitenko</div>
                  <div className="bio-position color--dark-secondary">
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={25}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/06/2025-06-04-13.58.40-e1749034895609.jpg.webp"
                    alt="Image - 2025-06-04 13.58.40"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.75156576200418" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Natiia Patsatsiia</div>
                  <div className="bio-position color--dark-secondary">
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={26}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/06/photo_2025-06-17-16.56.50-e1750169868355.jpeg.webp"
                    alt="Image - photo_2025-06-17 16.56.50"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.75286849073257" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Daniel Shchadnykh</div>
                  <div className="bio-position color--dark-secondary">
                    Project Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={27}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2024/09/10.jpg.webp"
                    alt="Image - 10"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.8716577540107" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">
                    Oleksandr Kotelevets
                  </div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={28}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-4.png.webp"
                    alt="Image - Img-4"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Daria Lisovenko</div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={29}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-5.png.webp"
                    alt="Image - Img-5"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Kateryna Kolosova</div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={30}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-6.png.webp"
                    alt="Image - Img-6"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Iryna Yarochkina</div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={31}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/IMG_3618.jpg.webp"
                    alt="Image - IMG_3618"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: 1 }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">
                    Anastasiia Morozova
                  </div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={32}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/IMG_3621-min.jpg.webp"
                    alt="Image - IMG_3621-min"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.75" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Yuliia Lahanovska</div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={33}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-7.png.webp"
                    alt="Image - Img-7"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Mariia Zolotonosha</div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={34}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/2025-03-05-14.06.59.jpg.webp"
                    alt="Image - 2025-03-05 14.06.59"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.9171875" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Oleh Falach</div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={35}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/04/2025-04-16-11.55.13-e1744794027486.jpg.webp"
                    alt="Image - 2025-04-16 11.55.13"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.92996108949416" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Serhii Feshchyk</div>
                  <div className="bio-position color--dark-secondary">
                    UX/UI Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={36}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/05/IMG_3857-2-scaled.jpg.webp"
                    alt="Image - IMG_3857 2"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.75" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Kristina Dunaenko</div>
                  <div className="bio-position color--dark-secondary">
                    UI/UX Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={37}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/06/9V0A5322-scaled.jpg.webp"
                    alt="Image - 9V0A5322"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.959375" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Kseniia Dzhhun</div>
                  <div className="bio-position color--dark-secondary">
                    UX/UI Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={38}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/07/photo_2025-07-28-14.53.53-e1753703974308.jpeg.webp"
                    alt="Image - photo_2025-07-28 14.53.53"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.95614035087719" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Daria Korniienko</div>
                  <div className="bio-position color--dark-secondary">
                    UX/UI Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={39}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-8.png.webp"
                    alt="Image - Img-8"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Mykhailo Olan</div>
                  <div className="bio-position color--dark-secondary">
                    Graphic Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={40}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-9.png.webp"
                    alt="Image - Img-9"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Ihor Boiko</div>
                  <div className="bio-position color--dark-secondary">
                    Graphic Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={41}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/photo_2025-03-03-16.19.08-min.jpeg.webp"
                    alt="Image - photo_2025-03-03 16.19.08-min"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: 1 }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Oleh Subotovych</div>
                  <div className="bio-position color--dark-secondary">
                    Graphic Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={42}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/2025-03-05-14.58.38-min.jpg.webp"
                    alt="Image - 2025-03-05 14.58.38-min"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "1.0207667731629" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Vladyslav Molodan</div>
                  <div className="bio-position color--dark-secondary">
                    2D / Motion Designer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={43}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-10.png.webp"
                    alt="Image - Img-10"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Serhiy Holiaka</div>
                  <div className="bio-position color--dark-secondary">
                    ELECTRICAL INSTALLATION developer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={44}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-12.png.webp"
                    alt="Image - Img-12"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Dmytro Harkushka</div>
                  <div className="bio-position color--dark-secondary">
                    Backend developer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={45}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-13.png.webp"
                    alt="Image - Img-13"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Mykola Kolomoyets</div>
                  <div className="bio-position color--dark-secondary">
                    ELECTRICAL INSTALLATION Engineer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={46}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-15.png.webp"
                    alt="Image - Img-15"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Vladyslav Shuhai</div>
                  <div className="bio-position color--dark-secondary">
                    ELECTRICAL INSTALLATION developer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={47}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-16.png.webp"
                    alt="Image - Img-16"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Artem Tkachyk</div>
                  <div className="bio-position color--dark-secondary">
                    Full stack web developer
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={48}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-2.png.webp"
                    alt="Image - Img-2"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Anhelina Rymar</div>
                  <div className="bio-position color--dark-secondary">
                    HR Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={49}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/IMG_9577-1-min-scaled-e1741179028406.jpg.webp"
                    alt="Image - IMG_9577 (1)-min"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.88035069623517" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Olha Apanasenko</div>
                  <div className="bio-position color--dark-secondary">
                    SDR/Sales Operations
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={50}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/03/Img-3.png.webp"
                    alt="Image - Img-3"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87433155080214" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">Hanna Lykhodii</div>
                  <div className="bio-position color--dark-secondary">
                    Billing Manager
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card advisor-card p-40 p-20-mob radius-16 isview slidetop disable-scrollbar check_card unvisible_mob unvisible check_card pc_members"
              data-card={51}
            >
              <div className="mask bg--dark" />
              <div className="top">
                <div className="img-wrap">
                  <img
                    className=""
                    src="/cdn.phenomenonstudio.com/wp-content/webp-express/webp-images/uploads/2025/07/IMG_1442-2-scaled-e1753436285724.jpg.webp"
                    alt="Image - Processed with VSCO with m5 preset"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: "0.87391898042786" }}
                  />{" "}
                </div>
                <div className="bio mt-24">
                  <div className="bio-name color--dark">
                    Anastasiia Yemelianova{" "}
                  </div>
                  <div className="bio-position color--dark-secondary">
                    Junior Marketing Operations Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-load-more-advisors pc-visible text--center mt-40">
            {/* <button className="show_more_team show_more btn btn--dark hover--orange arr arr-down revert">
              <span>
                <b className="visible-text">Show more</b>
                <b className="hidden-text">Show less</b>
              </span>
            </button> */}
          </div>
          <div className="wrap-load-more-advisors mob-visible text--center mt-40">
            <button className="show_more_team show_more btn btn--dark hover--orange arr arr-down revert">
              <span>
                <b className="visible-text">Show more</b>
                <b className="hidden-text">Show less</b>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="mt-200 mt-0-mob pt-64-mob pb-120 pb-64-mob">
        <div className="container">
          <div className="title title--xl isview textslide">
            Company <span>Advisors</span>
          </div>
          <div className="mt-40 grid col-2 col-1-mob">
            <div className="txt txt--m">
              Dampecon is guided and supported by a distinguished team of accomplished professionals and business advisors. With their strategic insight, technical expertise, and years of industry experience, they help us shape our vision, seize opportunities, and deliver consistent value to our clients.
.{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-120 pb-64-mob advisors_section">
        <div className="container">
          <div className="grid col-1 gap-68 gap-40-mob">
            <div className="row card isview fadein" data-offset={300}>
              <div className="row_top">
                <div className="txt txt--control-m uppercase fw-600">
                  Our advisors{" "}
                </div>
                <div className="numbers mt-24">
                  <b>01</b> - 03{" "}
                </div>
              </div>
              <div className="flex v--start h--between mt-40">
                <div className="left">
                  <div
                    className="img-wrap"
                    style={{
                      background:
                        "url(/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/medium.jpg)no-repeat center",
                      backgroundSize: "cover"
                    }}
                  >
                    <img
                      className=""
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/medium.jpg"
                      alt="Team and Advisors"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.982" }}
                    />{" "}
                  </div>
                </div>
                <div className="right">
                  <div className="title title--l isview textslide">
                    Engr. Kehinde Adeyemi <br />
                    {" "}
                  </div>
                  <p className="position txt txt--m mt-16 color--dark-light">
                    CBDO, CDTO, Commercial Director, Board Advisor
                  </p>
                  <div className="description mt-32" data-min-height={150}>
                    <div className="text-block">
                      <div className="txt txt--m">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            Engr. Kehinde Adeyemi, Over 20 years in oil & gas infrastructure and industrial systems design. Provides strategic direction on project execution and safety compliance.
                          </span>
                        </p>
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            With a strong foundation in Physics and Biophysics,
                            coupled with a BA in Economics, he garnered
                            extensive experience in retail network development
                            and operations over 14 years. His notable roles
                            include serving in C-level positions at
                            international companies BP and Shell, such as
                            Director for the development of the network of
                            filling stations and Director for sales and
                            operations.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="readmore uppercase readmore_team_text txt txt--control-m mt-24"
                    data-text-primary="Read more"
                    data-text-secondary="Read less"
                  />
                </div>
              </div>
            </div>
            <div className="row card isview fadein" data-offset={300}>
              <div className="row_top">
                <div className="txt txt--control-m uppercase fw-600">
                  Our advisors{" "}
                </div>
                <div className="numbers mt-24">
                  <b>02</b> - 03{" "}
                </div>
              </div>
              <div className="flex v--start h--between mt-40">
                <div className="left">
                  <div
                    className="img-wrap"
                    style={{
                      background:
                        "url(/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/corporate1.webp)no-repeat center",
                      backgroundSize: "cover"
                    }}
                  >
                    <img
                      className=""
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/corporate1.webp"
                      alt="Team and Advisors"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.98266666666667" }}
                    />{" "}
                  </div>
                </div>
                <div className="right">
                  <div className="title title--l isview textslide">
                    Dr. Tola Akinwunmi <br />
                   {" "}
                  </div>
                  <p className="position txt txt--m mt-16 color--dark-light">
                    Co-founder &amp; CEO of Polyform/Global Mentor at Techstars
                  </p>
                  <div className="description mt-32" data-min-height={150}>
                    <div className="text-block">
                      <div className="txt txt--m">
                        <p>
                          An accomplished startup advisor and expert in Consumer
                          Tech, GenZ, and Augmented Reality, brings his unique
                          skill set to the table. With a co-founder and CEO role
                          at Polyform, a highly acclaimed design studio based in
                          Canada, Dr. Tola Akinwunmi’s journey has been marked by
                          collaborations with globally renowned brands,
                          including Nike, RTFKT, Disney, Shell, NBA, Red Bull,
                          Amazon, Uniqlo, GE, and Lululemon. Notably, the
                          Polyform team’s collaborative efforts have led to the
                          successful creation of over 150 consumer products
                          across mobile, AR, and hardware products, a remarkable
                          accomplishment acknowledged through the receipt of
                          more than 50 awards.
                        </p>
                        <p>
                          The dynamic partnership between Polyform and
                          Phenomenon has evolved into a symbiotic relationship,
                          focused on enriching the expertise of our
                          professionals, pushing the boundaries of creativity,
                          and ultimately, providing enhanced value to our
                          clients.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="readmore uppercase readmore_team_text txt txt--control-m mt-24"
                    data-text-primary="Read more"
                    data-text-secondary="Read less"
                  />
                </div>
              </div>
            </div>
            <div className="row card isview fadein" data-offset={300}>
              <div className="row_top">
                <div className="txt txt--control-m uppercase fw-600">
                  Our advisors{" "}
                </div>
                <div className="numbers mt-24">
                  <b>03</b> - 03{" "}
                </div>
              </div>
              <div className="flex v--start h--between mt-40">
                <div className="left">
                  <div
                    className="img-wrap"
                    style={{
                      background:
                        "url(/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/atricle.jpg)no-repeat center",
                      backgroundSize: "cover"
                    }}
                  >
                    <img
                      className=""
                      src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/atricle.jpg"
                      alt="Team and Advisors"
                      loading="lazy"
                      decoding="async"
                      style={{ aspectRatio: "0.98266666666667" }}
                    />{" "}
                  </div>
                </div>
                <div className="right">
                  <div className="title title--l isview textslide">
                    Chief Fisayo Adediran{" "}
                  </div>
                  <p className="position txt txt--m mt-16 color--dark-light">
                    XR Product Manager / Lead Designer, XR Consultant @ DDD
                    Visions,Co-Organizer @ VRC Toronto
                  </p>
                  <div className="description mt-32" data-min-height={150}>
                    <div className="text-block">
                      <div className="txt txt--m">
                        <p>
                          A product-obsessed designer, MBA, entrepreneur and
                          tech community leader, Diego has been working with XR
                          technologies for over a decade. Driven by a desire for
                          excellence, he fuses design, business and technology
                          in order to envision and materialize products that are
                          complex in nature, yet simple, intuitive and enjoyable
                          to use. A global citizen with international experience
                          working with large multinationals, small family
                          businesses, startups, government and NGOs, he is able
                          to bridge and align the interests of diverse
                          stakeholders in order to find the synergies that lead
                          to shared value creation and sustainable business
                          practices.A longstanding collaborator of Phenomenon,
                          Diego led one of the biggest and most complex projects
                          the studio has faced to date, having developed a
                          special chemistry with the Phenomenon team that is
                          sure to output exceptional results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    className="readmore uppercase readmore_team_text txt txt--control-m mt-24"
                    data-text-primary="Read more"
                    data-text-secondary="Read less"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-64 pt-0-mob pb-120 pb-64-mob">
        <div className="container">
          <div className="mt-24 mt-16-mob mw1040 title title--xl isview textslide">
            <span>Principles</span> we stand behind
          </div>{" "}
          <div className="mt-24 mt-16-mob mw-630 txt txt--m isview slidetop trd02">
            Dampecon Ltd. is a team of skilled engineers and technical experts united by shared values, professionalism, and a commitment to excellence in every project we take on.
          </div>{" "}
          <div className="mt-64 mt-40-mob grid col-3 gap-40 col-1-mob team_columns">
            <div className="col">
              <div className="content">
                <img
                  className=""
                  src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (20).jpeg"
                  alt="Team and Advisors"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />
                <div className="title title--m mt-12">
                  Focus on business results
                </div>
                <div className="txt txt--m mt-12">
                  We don’t just design and build — we deliver. Every project we undertake is guided by precision, safety, and measurable performance. From planning and design to installation and maintenance, our goal is to provide dependable engineering solutions that stand the test of time.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <img
                  className=""
                  src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (13).jpeg"
                  alt="Team and Advisors"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />
                <div className="title title--m mt-12">
                  Transparency in everything
                </div>
                <div className="txt txt--m mt-12">
                  We maintain open and honest communication across every stage of a project. Our clients are kept informed, our engineers are accountable, and our operations are built on trust. We believe that transparency is the foundation of every successful collaboration.
                </div>
              </div>
            </div>
            <div className="col">
              <div className="content">
                <img
                  className=""
                  src="/cdn.phenomenonstudio.com/wp-content/uploads/2025/11/images (11).jpeg"
                  alt="Team and Advisors"
                  loading="lazy"
                  decoding="async"
                  style={{}}
                />
                <div className="title title--m mt-12">
                  Partners, not just vendors
                </div>
                <div className="txt txt--m mt-12">
                  We see every client as a long-term partner, not just a project. Our team invests in understanding your goals and challenges, ensuring that our expertise adds lasting value to your operations. When you work with Dampecon, you gain a partner dedicated to your success and safety.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-64 mt-40-mob text--center">
            <Link
              className="btn btn--lg-desk btn--orange hover--dark arr"
              to="/about-us"
              target="_self"
            >
              <span>
                <b>About us</b>
              </span>
            </Link>{" "}
          </div>
        </div><Award />
        <Chat />
      </section>
       
      
     <Footer />
    </main> 
   
  </div>
  <link
    rel="stylesheet"
    href="/cdn.phenomenonstudio.com/wp-content/themes/phnmn/assets/css/swiper-bundle.min.css"
    async=""
  />
</>

  )
}

export default Teams

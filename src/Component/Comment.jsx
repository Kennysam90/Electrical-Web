import React from 'react'
import Chat from './Chat'

const Comment = () => {
  return (
    <>
        <section className="testimonials_section pb-200 pb-100-mob bg--white">
          <div className="container" style={{marginBottom:"4em"}}>
            <div className="flex v--end h--between heading_wrap flex--block-mob">
              <div className="left">
                <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
                  what our clients say
                </div>
                <div className="title title--xl mt-16 color--dark mw1040 isview textslide trd02">
                  <h2>
                    <span>Trusted by leading organizations </span>and excellence in every project. <br />
                    
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
                    alt="Image - John Ikechukwu"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/medium.jpg"
                    style={{
                      aspectRatio: "1",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>John Ikechukwu</p>
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
                    alt="Image - Favour Ujunwa O."
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/face-black.webp"
                    style={{
                      aspectRatio: "1.0064102564103",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>Favour Ujunwa O.</p>
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
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/corporate1.webp"
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
                    The quality of Work is fantastic. DAMPECON Ltd.
                    works at speed and is extremely punctual with timelines.
                    They deliver top-notch outcomes with exceptional Services.
                  </p>
                </div>
              </div>
              <div className="col radius-12 bg--gray flex fd--column isview slidetop">
                <div className="top auth_wrap flex v--center h--start gap-16">
                  <img
                    alt="Image - Gorfery Obi"
                    className="md"
                    decoding="async"
                    loading="lazy"
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/black.webp"
                    style={{
                      aspectRatio: "1.0064102564103",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>Gorfery Obi</p>
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
                    src="../cdn.phenomenonstudio.com/wp-content/uploads/2025/11/african.webp"
                    style={{
                      aspectRatio: "1",
                    }}
                  />
                  <div className="bio">
                    <div className="txt txt--m gap-0">
                      <p>Rebecca Gift</p>
                      <span>Founder & General Partner, Predictive</span>
                    </div>
                  </div>
                </div>
                <div className="txt txt--l mt-auto pt-24 text_wrap">
                  <p>
                    DAMPECON.Ltd ability to translate concepts and rough
                    Work into high-fidelity assets,and
                    visuals was very impressive. The goal was to maintain simple
                    elegance in their Electircal aesthetic, and they did it very well.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Chat />
        </section> 
    </>
  )
}

export default Comment

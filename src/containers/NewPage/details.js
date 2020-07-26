import React, { Component } from "react";
// import "./de-tails.css";

export class details extends Component {
  render() {
    return (
      <div>
        <div id="page" className="theia-exception">
          <div className="bg_color_1">
            <nav className="secondary_nav sticky_horizontal" style={{marginTop: "75px"}}>
              <div className="container">
                <ul className="clearfix">
                  <li>
                    <a href="#description" className="active">
                      Description
                    </a>
                  </li>
                  <li>
                    <a href="#lessons">Lessons</a>
                  </li>
                  <li>
                    <a href="#reviews">Reviews</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container margin_60_35">
              <div className="row">
                <div className="col-lg-8">
                  <section id="description">
                    <h2>Description</h2>
                    <p>
                      Per consequat adolescens ex, cu nibh commune temporibus
                      vim, ad sumo viris eloquentiam sed. Mea appareat
                      omittantur eloquentiam ad, nam ei quas oportere
                      democritum. Prima causae admodum id est, ei timeam
                      inimicus sed. Sit an meis aliquam, cetero inermis vel ut.
                      An sit illum euismod facilisis, tamquam vulputate
                      pertinacia eum at.
                    </p>
                    <h5>What will you learn</h5>
                    <ul className="list_ok">
                      <li>
                        <h6>Suas summo id sed erat erant oporteat</h6>
                        <p>
                          Ut unum diceret eos, mel cu velit principes, ut quo
                          inani dolorem mediocritatem. Mea in justo posidonium
                          necessitatibus.
                        </p>
                      </li>
                      <li>
                        <h6>Illud singulis indoctum ad sed</h6>
                        <p>
                          Ut unum diceret eos, mel cu velit principes, ut quo
                          inani dolorem mediocritatem. Mea in justo posidonium
                          necessitatibus.
                        </p>
                      </li>
                      <li>
                        <h6>Alterum bonorum mentitum an mel</h6>
                        <p>
                          Ut unum diceret eos, mel cu velit principes, ut quo
                          inani dolorem mediocritatem. Mea in justo posidonium
                          necessitatibus.
                        </p>
                      </li>
                    </ul>
                    <hr />
                    <p>
                      Mea appareat omittantur eloquentiam ad, nam ei quas
                      oportere democritum. Prima causae admodum id est, ei
                      timeam inimicus sed. Sit an meis aliquam, cetero inermis
                      vel ut. An sit illum euismod facilisis, tamquam vulputate
                      pertinacia eum at.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="bullets">
                          <li>Dolorem mediocritatem</li>
                          <li>Mea appareat</li>
                          <li>Prima causae</li>
                          <li>Singulis indoctum</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="bullets">
                          <li>Timeam inimicus</li>
                          <li>Oportere democritum</li>
                          <li>Cetero inermis</li>
                          <li>Pertinacia eum</li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- /row --> */}
                  </section>
                  {/* <!-- /section --> */}

                  <section id="lessons">
                    <div className="intro_title">
                      <h2>Lessons</h2>
                      <ul>
                        <li>18 lessons</li>
                        <li>01:02:10</li>
                      </ul>
                    </div>
                    <div
                      id="accordion_lessons"
                      role="tablist"
                      className="add_bottom_45"
                    >
                      <div className="card">
                        <div className="card-header" role="tab" id="headingOne">
                          <h5 className="mb-0">
                            <a
                              data-toggle="collapse"
                              href="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <i className="indicator ti-minus"></i> Introdocution
                            </a>
                          </h5>
                        </div>

                        <div
                          id="collapseOne"
                          className="collapse show"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                          data-parent="#accordion_lessons"
                        >
                          <div className="card-body">
                            <div className="list_lessons">
                              <ul>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health Science
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health and Social Care
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a href="#0" className="txt_doc">
                                    Audiology
                                  </a>
                                  <span>00:59</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /card --> */}
                      <div className="card">
                        <div className="card-header" role="tab" id="headingTwo">
                          <h5 className="mb-0">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              href="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <i className="indicator ti-plus"></i>Generative
                              Modeling Review
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion_lessons"
                        >
                          <div className="card-body">
                            <div className="list_lessons">
                              <ul>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health Science
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health and Social Care
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    History
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Healthcare Science
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a href="#0" className="txt_doc">
                                    Audiology
                                  </a>
                                  <span>00:59</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /card --> */}
                      <div className="card">
                        <div className="card-header" role="tab" id="headingThree">
                          <h5 className="mb-0">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <i className="indicator ti-plus"></i>Variational
                              Autoencoders
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                          data-parent="#accordion_lessons"
                        >
                          <div className="card-body">
                            <div className="list_lessons">
                              <ul>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health Science
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health and Social Care
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    History
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Healthcare Science
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a href="#0" className="txt_doc">
                                    Audiology
                                  </a>
                                  <span>00:59</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /card --> */}

                      <div className="card">
                        <div className="card-header" role="tab" id="headingFourth">
                          <h5 className="mb-0">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              href="#collapseFourth"
                              aria-expanded="false"
                              aria-controls="collapseFourth"
                            >
                              <i className="indicator ti-plus"></i>Gaussian Mixture
                              Model Review
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseFourth"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="headingFourth"
                          data-parent="#accordion_lessons"
                        >
                          <div className="card-body">
                            <div className="list_lessons">
                              <ul>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health Science
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Health and Social Care
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    History
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                                    className="video"
                                  >
                                    Healthcare Science
                                  </a>
                                  <span>00:59</span>
                                </li>
                                <li>
                                  <a href="#0" className="txt_doc">
                                    Audiology
                                  </a>
                                  <span>00:59</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /card --> */}
                    </div>
                    {/* <!-- /accordion --> */}
                  </section>
                  {/* <!-- /section --> */}

                  <section id="reviews">
                    <h2>Reviews</h2>
                    <div className="reviews-container">
                      <div className="row">
                        <div className="col-lg-3">
                          <div id="review_summary">
                            <strong>4.7</strong>
                            <div className="rating">
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star voted"></i>
                              <i className="icon_star"></i>
                            </div>
                            <small>Based on 4 reviews</small>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{width: "90%"}}
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>5 stars</strong>
                              </small>
                            </div>
                          </div>
                          {/* <!-- /row --> */}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{width: "95%"}}
                                  aria-valuenow="95"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>4 stars</strong>
                              </small>
                            </div>
                          </div>
                          {/* <!-- /row --> */}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{width: "60%"}}
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>3 stars</strong>
                              </small>
                            </div>
                          </div>
                          {/* <!-- /row --> */}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{width: "20%"}}
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>2 stars</strong>
                              </small>
                            </div>
                          </div>
                          {/* <!-- /row --> */}
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{width: "0"}}
                                  aria-valuenow="0"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>1 stars</strong>
                              </small>
                            </div>
                          </div>
                          {/* <!-- /row --> */}
                        </div>
                      </div>
                      {/* <!-- /row --> */}
                    </div>

                    <hr />

                    <div className="reviews-container">
                      <div className="review-box clearfix">
                        <figure className="rev-thumb">
                          <img
                            src="http://via.placeholder.com/150x150/ccc/fff/avatar1.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                          </div>
                          <div className="rev-info">Admin – April 03, 2016:</div>
                          <div className="rev-text">
                            <p>
                              Sed eget turpis a pede tempor malesuada. Vivamus
                              quis mi at leo pulvinar hendrerit. Cum sociis
                              natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /review-box --> */}
                      <div className="review-box clearfix">
                        <figure className="rev-thumb">
                          <img
                            src="http://via.placeholder.com/150x150/ccc/fff/avatar2.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon-star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                          </div>
                          <div className="rev-info">Ahsan – April 01, 2016:</div>
                          <div className="rev-text">
                            <p>
                              Sed eget turpis a pede tempor malesuada. Vivamus
                              quis mi at leo pulvinar hendrerit. Cum sociis
                              natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /review-box --> */}
                      <div className="review-box clearfix">
                        <figure className="rev-thumb">
                          <img
                            src="http://via.placeholder.com/150x150/ccc/fff/avatar3.jpg"
                            alt=""
                          />
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon-star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star voted"></i>
                            <i className="icon_star"></i>
                          </div>
                          <div className="rev-info">Sara – March 31, 2016:</div>
                          <div className="rev-text">
                            <p>
                              Sed eget turpis a pede tempor malesuada. Vivamus
                              quis mi at leo pulvinar hendrerit. Cum sociis
                              natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /review-box --> */}
                    </div>
                    {/* <!-- /review-container --> */}
                  </section>
                  {/* <!-- /section --> */}
                </div>

                {/* <!-- /col --> */}

                <aside className="col-lg-4" id="sidebar">
                  <div className="box_detail">
                    <figure>
                      <a
                        href="https://www.youtube.com/watch?v=LDgd_gUcqCw"
                        className="video"
                      >
                        <i className="arrow_triangle-right"></i>
                        <img
                          src="http://via.placeholder.com/800x533/ccc/fff/course_1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <span>View course preview</span>
                      </a>
                    </figure>
                    <div className="price">
                      $29
                      <span className="original_price">
                        <em>$49</em>60% discount price
                      </span>
                    </div>
                    <a href="#0" className="btn_1 full-width">
                      Purchase
                    </a>
                    <a href="#0" className="btn_1 full-width outline">
                      <i className="icon_heart"></i> Add to wishlist
                    </a>
                    <div id="list_feat">
                      <h3>What's includes</h3>
                      <ul>
                        <li>
                          <i className="icon_mobile"></i>Mobile support
                        </li>
                        <li>
                          <i className="icon_archive_alt"></i>Lesson archive
                        </li>
                        <li>
                          <i className="icon_mobile"></i>Mobile support
                        </li>
                        <li>
                          <i className="icon_chat_alt"></i>Tutor chat
                        </li>
                        <li>
                          <i className="icon_document_alt"></i>Course certificate
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>

          {/* <!-- /bg_color_1 --> */}
          {/* </main> */}
        </div>

        {/* <!-- <footer>
		<div className="container margin_120_95">
			<div className="row">
				<div className="col-lg-5 col-md-12 p-r-5">
					<p><img src="img/logo.png" width="149" height="42" data-retina="true" alt=""></p>
					<p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
					<div className="follow_us">
						<ul>
							<li>Follow us</li>
							<li><a href="#0"><i className="ti-facebook"></i></a></li>
							<li><a href="#0"><i className="ti-twitter-alt"></i></a></li>
							<li><a href="#0"><i className="ti-google"></i></a></li>
							<li><a href="#0"><i className="ti-pinterest"></i></a></li>
							<li><a href="#0"><i className="ti-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 ml-lg-auto">
					<h5>Useful links</h5>
					<ul className="links">
						<li><a href="#0">Admission</a></li>
						<li><a href="#0">About</a></li>
						<li><a href="#0">Login</a></li>
						<li><a href="#0">Register</a></li>
						<li><a href="#0">News &amp; Events</a></li>
						<li><a href="#0">Contacts</a></li>
					</ul>
				</div>
				<div className="col-lg-3 col-md-6">
					<h5>Contact with Us</h5>
					<ul className="contacts">
						<li><a href="tel://61280932400"><i className="ti-mobile"></i> + 61 23 8093 3400</a></li>
						<li><a href="mailto:info@udema.com"><i className="ti-email"></i> info@udema.com</a></li>
					</ul>
					<div id="newsletter">
					<h6>Newsletter</h6>
					<div id="message-newsletter"></div>
					<form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
						<div className="form-group">
							<input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email">
							<input type="submit" value="Submit" id="submit-newsletter">
						</div>
					</form>
					</div>
				</div>
			</div> -->
			<!--/row-->
	<!-- 		<hr>
			<div className="row">
				<div className="col-md-8">
					<ul id="additional_links">
						<li><a href="#0">Terms and conditions</a></li>
						<li><a href="#0">Privacy</a></li>
					</ul>
				</div>
				<div className="col-md-4">
					<div id="copy">© 2017 Udema</div>
				</div>
			</div>
		</div>
	</footer> -->
	<!--/footer--> */}
      </div>
    );
  }
}

export default details;

import React, { Component } from "react";
import { connect } from "react-redux";
import * as api from '../../api/packageApi';

class PackageDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      packageDetail: [],
      levelMedia: []
    }
  }

  componentDidMount() {
    this.packageDetail();
  }

  packageDetail = () => {
    api.packageDetail(this.props.Id).then((resp) => {
      console.log("resp", resp);
      this.setState({
        packageDetail: resp
      })
    })
  }

  packageOrder = (Id) => {
    api.coursepackageOrder(Id).then((resp) => {
      console.log("LevelMediaResponse", resp);
      this.setState({
        levelMedia : resp
      })
    })
  }

  render() {
    return (
      <section id="course-details" className="wide-40 course-section division">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-txt pr-30">
                <h3 className="h3-sm">
                  For Beginners: Create a Website Step by Step
                </h3>
                <p className="p-md">
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus mauris donec magnis
                </p>

                <p className="course-short-data">
                  Created by: Kally Brooks • Last updated: 2/2020 • Languages:
                  English, German + 7 more
                </p>

                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.84 (468 Ratings) • 14,425 Students Enrolled</span>
                </div>

                <div className="what-you-learn">
                  <h5 className="h5-xl">What you'll learn</h5>

                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="txt-list">
                        <li>Nullam rutrum eget nunc varius</li>
                        <li>
                          Integer congue magna at pretium purus pretium ligula
                          undo rutrum{" "}
                        </li>
                        <li>
                          Risus at congue etiam aliquam sapien an egestas
                          posuere blandit
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6">
                      <ul className="txt-list">
                        <li>Pretium ligula at rutrum dolor auctor </li>
                        <li>
                          Ligula at rutrum risus integer congue magna at pretium
                          purus pretium
                        </li>
                        <li>
                          Congue etiam aliquam egestas sapien undo posuere
                          auctor magna
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="cs-requirements cd-block">
                  <h5 className="h5-xl">Requirements</h5>

                  <p>
                    Lorem ipsum dolor sit amet, lectus laoreet impedit gestas.
                    Aenean magna ligula eget dolor suscipit egestas viverra
                    dolor iaculis luctus magna suscipit egestas
                  </p>

                  <ul className="txt-list">
                    <li>
                      Pretium ligula auctor nulla vitae massa aliqum blandit
                    </li>
                    <li>
                      Rutrum risus integer magna at pretium purus pretium
                      cubilia laoreet
                    </li>
                    <li>
                      Aliquam sapien egestas posuere auctor congue magna aliquet
                      non molestie
                    </li>
                  </ul>
                </div> */}

                <div className="cs-description cd-block">
                  <h5 className="h5-xl">Course description</h5>

                  <p>
                    Sagittis congue augue egestas volutpat egestas magna
                    suscipit egestas magna ipsum vitae purus efficitur ipsum
                    primis in cubilia laoreet augue egestas luctus donec diam.
                    Curabitur ac dapibus libero. Quisque eu tristique neque.
                    Phasellus blandit tristique justo
                  </p>

                  <p>Quisque eu tristique neque phasellus:</p>

                  <ul className="txt-list">
                    <li>
                      Pretium ligula dolor auctor nulla vitae massa a purus
                      aliqum blandit
                    </li>
                    <li>
                      Ligula at rutrum risus integer congue magna at pretium
                      purus pretium gravida{" "}
                    </li>
                    <li>
                      Congue etiam aliquam sapien egestas posuere auctor congue
                      magna
                    </li>
                    <li>
                      Suscipit egestas viverra dolor iaculis luctus magna
                      suscipit egestas
                    </li>
                    <li>
                      Aliquet elementum massa vestibulum ut sagittis massa lorem
                    </li>
                  </ul>
                </div>

                {/* <div className="cs-target cd-block">
                  <h5 className="h5-xl">Who this course is for:</h5>

                  <ul className="txt-list">
                    <li>
                      Quisque vel laoreet turpis urna augue, viverra a augue
                      eget, dictum
                    </li>

                    <li>
                      Sagittis congue augue egestas volutpat magna suscipit
                      egestas magna ipsum egestas vitae purus efficitur ipsum
                      primis in cubilia laoreet augue luctus donec diam
                    </li>

                    <li>
                      Nullam non scelerisque lectus. In at mauris vel nisl
                      convallis porta
                    </li>
                  </ul>
                </div> */}

                <div className="cs-content cd-block">
                  <h5 className="h5-xl">Course content</h5>

                  <p className="p-md">
                    Level Beginner • 13 Lectures • 03:06:14 Total Hours
                  </p>

                  <div id="accordion" role="tablist">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        <h5 className="h5-xs">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            className="collapsed"
                          >
                            Introducion
                          </a>
                        </h5>

                        <div className="hdr-data">
                          <p>3 lectures, 34:51 min</p>
                        </div>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <ul className="txt-list mb-10">
                            <li>
                              Pretium ligula auctor nulla vitae massa aliqum
                              blandit
                            </li>
                            <li>
                              Rutrum risus integer magna at pretium purus
                              pretium cubilia laoreet
                            </li>
                          </ul>

                          <p className="cb-video">
                            <a
                              className="video-popup2"
                              href="https://www.youtube.com/watch?v=7e90gBu4pas"
                            >
                              <i className="fas fa-play-circle"></i> Mauris
                              donec ociis magnis sapien
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo">
                        <h5 className="h5-xs">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Getting Started
                          </a>
                        </h5>

                        <div className="hdr-data">
                          <p>5 lectures, 01:32:49 hrs</p>
                        </div>
                      </div>

                      <div
                        id="collapseTwo"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Urna
                            augue, viverra a augue eget, dictum tempor diam.
                          </p>

                          <ul className="txt-list mb-10">
                            <li>
                              Pretium ligula auctor nulla vitae massa aliqum
                              blandit
                            </li>
                            <li>
                              Rutrum risus integer magna at pretium purus
                              pretium cubilia laoreet
                            </li>
                            <li>
                              Aliquam sapien egestas posuere auctor congue magna
                              aliquet non molestie
                            </li>
                            <li>
                              Neque undo luctus feugiat justo integer at odio
                              velna
                            </li>
                          </ul>

                          <p className="download-file">
                            <i className="fas fa-file-archive"></i>
                            <a
                              href="sources/your-file.zip"
                              download="your-file"
                            >
                              Download File
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree">
                        <h5 className="h5-xs">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            User Generated Content
                          </a>
                        </h5>

                        <div className="hdr-data">
                          <p>3 lectures, 54:28 min</p>
                        </div>
                      </div>

                      <div
                        id="collapseThree"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p className="cb-video">
                            <a
                              className="video-popup2"
                              href="https://www.youtube.com/watch?v=7e90gBu4pas"
                            >
                              <i className="fas fa-play-circle"></i> Mauris
                              donec ociis magnis sapien
                            </a>
                          </p>

                          <p className="cb-video">
                            <a
                              className="video-popup1"
                              href="https://www.youtube.com/embed/SZEflIVnhH8"
                            >
                              <i className="fas fa-play-circle"></i> Congue and
                              impedit magna viverra dolor vitae
                            </a>
                          </p>

                          <p className="cb-video">
                            <a
                              className="video-popup3"
                              href="https://www.youtube.com/embed/0gv7OC9L2s8"
                            >
                              <i className="fas fa-play-circle"></i> Efficitur
                              ipsum ligula undo cubilia laoreet
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header" role="tab" id="headingFour">
                        <h5 className="h5-xs">
                          <a
                            className
                            data-toggle="collapse"
                            href="#collapseFour"
                            role="button"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            Course Assessment
                          </a>
                        </h5>
                        <div className="hdr-data">
                          <p>1 lecture, 26:39 min</p>
                        </div>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Curabitur ac dapibus libero. Quisque eu tristique
                            neque. Phasellus blandit tristique justo aliquam.
                            Aliquam vitae molestie nunc. Quisque sapien justo,
                            aliquet non molestie sed purus venenatis semper
                            lacus. Cursus porta a tellus neque dolor primis
                            magna nullam
                          </p>
                          <p className="download-file">
                            <i className="fas fa-file-archive" />
                            <a
                              href="sources/your-file.zip"
                              download="your-file"
                            >
                              Download File
                            </a>
                          </p>
                          <p className="cb-video">
                            <a
                              className="video-popup1"
                              href="https://www.youtube.com/embed/SZEflIVnhH8"
                            >
                              <i className="fas fa-play-circle" /> Congue and
                              impedit magna viverra dolor vitae
                            </a>
                          </p>
                          <p className="cb-video">
                            <a
                              className="video-popup3"
                              href="https://www.youtube.com/embed/0gv7OC9L2s8"
                            >
                              <i className="fas fa-play-circle" /> Efficitur
                              ipsum ligula undo cubilia laoreet
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="cs-rating cd-block">
                  <h5 className="h5-xl">Course Reviews</h5>

                  <p>
                    Lorem ipsum dolor sit amet, lectus laoreet impedit gestas.
                    Aenean magna ligula eget dolor suscipit egestas viverra
                    dolor iaculis luctus magna suscipit egestas
                  </p>

                  <div className="course-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="cr-rating">4.84 Based on 468 Reviews</span>
                  </div>

                  <div className="row d-flex align-items-center">
                    <div className="col-md-9 col-xl-7">
                      <div className="cs-rating-data">
                        <ul>
                          <li className="barWrapper clearfix">
                            <div className="ratingtext-right">
                              <p className="p-sm">5 stars</p>
                            </div>

                            <div className="progress-wrapper">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "82%" }}
                                aria-valuenow="82"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="ratingtext-left">
                              <p className="p-sm">82%</p>
                            </div>
                          </li>

                          <li className="barWrapper clearfix">
                            <div className="ratingtext-right">
                              <p className="p-sm">4 stars</p>
                            </div>

                            <div className="progress-wrapper">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "10%" }}
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="ratingtext-left">
                              <p className="p-sm">10%</p>
                            </div>
                          </li>

                          <li className="barWrapper clearfix">
                            <div className="ratingtext-right">
                              <p className="p-sm">3 stars</p>
                            </div>

                            <div className="progress-wrapper">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "4%" }}
                                aria-valuenow="4"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="ratingtext-left">
                              <p className="p-sm">4%</p>
                            </div>
                          </li>

                          <li className="barWrapper clearfix">
                            <div className="ratingtext-right">
                              <p className="p-sm">2 stars</p>
                            </div>

                            <div className="progress-wrapper">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "2%" }}
                                aria-valuenow="2"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="ratingtext-left">
                              <p className="p-sm">2%</p>
                            </div>
                          </li>

                          <li className="barWrapper clearfix">
                            <div className="ratingtext-right">
                              <p className="p-sm">1 star</p>
                            </div>

                            <div className="progress-wrapper">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "2%" }}
                                aria-valuenow="2"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="ratingtext-left">
                              <p className="p-sm">2%</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="course-data">
                <img
                  className="img-fluid"
                  src="images/course-5-img.jpg"
                  alt="course-preview"
                />

                <div className="course-data-price text-center">
                  $74.99 <span className="old-price">$124.99</span>
                  <p className="p-sm">16 days left at this price!</p>
                </div>

                <div className="course-data-links">
                  <button className="btn btn-md btn-rose tra-grey-hover" onClick={(Id) => this.packageOrder(this.state.packageDetail[0].courseCourseId)}>
                    Start Course Now
                  </button>
                  <a href="#" className="btn btn-md btn-tra-grey rose-hover">
                    Add To List
                  </a>
                </div>

                <div className="course-data-list">
                  <span>This course includes:</span>

                  <p>
                    <i className="fas fa-graduation-cap"></i> English, German,
                    Italian and 7 more
                  </p>
                  <p>
                    <i className="far fa-play-circle"></i> 3 hours on-demand
                    video
                  </p>
                  <p>
                    <i className="fas fa-file-archive"></i> 12 downloadable
                    resources
                  </p>
                  <p>
                    <i className="far fa-bookmark"></i> Full lifetime access
                  </p>
                  <p>
                    <i className="fas fa-mobile-alt"></i> Access on mobile and
                    TV
                  </p>
                  <p>
                    <i className="far fa-id-card"></i> Certificate of Completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = (state, ownProps) => {

  let isLoggedIn = state.authReducer.loggedIn;
  let Id = ownProps.match.params.id;
  console.log("ownProps Id: ", Id);

  return {
    isLoggedIn,
    Id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // popActions: bindActionCreators(PopActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails);

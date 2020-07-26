/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PopActions from "../../store/actions/uploaderActions";
import { Link } from "react-router-dom";
import * as api from "../../api/packageApi";

// import SBI from '../../assets/images/sbi.png';
import PACKAGE from "../../assets/images/packageImg.jpg";
import IMAGE2 from "../../assets/images/about2.png";
import ICONS from "../../assets/images/icons.png";
import VIDEOIMG from "../../assets/images/video-1-img.jpg";

import "./css/menu.css";
import "./css/style.css";
import "./css/flaticon.css";
import "./css/responsive.css";
import "./css/fade-down.css";
import DemoVideo from "../NewPage/demoVideo";
import Tab from "../NewPage/tab"
import Educater from '../NewPage/educater'
import Rankers from '../NewPage/rankers'
import { Form, Row, Col, Button, Image } from "react-bootstrap";
import '../NewPage/index.css'

class NewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
      allsubject: [],
      courses: [],
      subjects: [],
      selectedCourse: "",
      active: "",
      packages: [],
    };
  }

  componentDidMount() {
    // this.getList();
    this.allPackage();
  }

  getList = () => {
    let temp = [];
    this.props.popActions.getCourses().then((resp) => {
      let rows = resp.rows ? resp.rows : [];
      rows.map((res) => {
        temp.push(res.courseName);
        //name of the courses in an array
        // console.log("array:", temp);
      });
      this.setState({
        courseList: temp,
        courses: resp.rows,
      });
      // console.log("Final Array NewPage:", temp);
      this.getSubjects(-1, this.state.courses[0].courseId);
      // orignal course response object stored in courses
      // final array with just the course names stored in courseList state
    });
  };

  getSubjects = (name, i) => {
    let courseId = name
      ? this.state.courses
          .filter((x) => x.courseName === name)
          .map((x) => x.courseId)
      : i;
    let Id = i ? i : courseId[0];
    // this.getCourseDetails(Id, 'course');
    let temp = [];
    this.props.popActions.getCourseSubjects(Id).then((resp) => {
      resp.map((res) => {
        temp.push(res.subjectName);
      });
      this.setState({
        subjects: temp,
        allSubjects: resp,
        selectedCourse: Id,
        active: i,
      });
      console.log(temp);
    });
  };

  allPackage = () => {
    api.allPackage().then((resp) => {
      console.log("resp", resp);
      this.setState({
        packages: resp,
      });
    });
  };

  render() {
    return (
      <div id="page" className="page">
        <section id="hero-1" className="bg-scroll hero-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-2" style={{marginLeft: "0px"}}>
                <div className="hero-txt  white-color">
                  <h2
                //    className="h2-xs"
                   >
                    <span>SCHOOL MUST GO ON</span> 
                    {/* from the leading experts */}
                  </h2>

                  <p className="p-md" style={{padding: '0 5%'}}>
                    Feugiat primis ligula risus auctor egestas augue mauri
                    viverra tortor in iaculis a placerat eugiat mauris ipsum in
                    viverra viverra tortor
                  </p>
                  
                  {/* <form className="hero-form" action="#">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What do you want to learn?"
                        aria-label="Search"
                      />
                      <span className="input-group-btn">
                        <button type="submit" className="btn">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{ width: "35%", marginLeft: "752px", marginTop: "-27em" }}
          id="hboxes-1"
          className="hero-boxes-section division"
        >
          {/* <div className="container"> */}
            <div className="hero-boxes-holder">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="section-title"
                    style={{ paddingRight: "0px" }}
                  >
                    <h4 style={{ lineHeight: "0.7" }} className="h4-xl">
                      FREE Live Classes
                    </h4>
                    <p style={{ fontSize: "12px" }}>
                      In addition, get free access to all of Meritnation's study
                      resources (videos, tests, smart reports, sample papers and
                      more).
                    </p>
                    <Form>
                      <Form.Group
                        controlId="formGridAddress1"
                        style={{ marginBottom: "5px", marginTop: "12px" }}
                      >
                        {/* <Form.Label style={{marginBottom: '0rem'}}>Name</Form.Label> */}
                        <Form.Control size="sm" placeholder="Your name" />
                      </Form.Group>
                      <Form.Row>
                        <Form.Group
                        
                          as={Col}
                          controlId="formGridEmail"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>Email</Form.Label> */}
                          <Form.Control
                          size="sm"
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="formGridPassword"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>Password</Form.Label> */}
                          <Form.Control
                          size="sm"
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group
                          as={Col}
                          controlId="formGridAddress1"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>Address</Form.Label> */}
                          <Form.Control size="sm" placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="formGridZip"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>Area PIN code</Form.Label> */}
                          <Form.Control size="sm" placeholder="Area PIN code" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group
                          as={Col}
                          controlId="formGridCity"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>City</Form.Label> */}
                          <Form.Control size="sm" placeholder="City" />
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="formGridCity"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>Mobile No.</Form.Label> */}
                          <Form.Control size="sm" placeholder="Mobile No."/>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group
                          as={Col}
                          controlId="formGridState"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>State</Form.Label> */}
                          <Form.Control size="sm" as="select" defaultValue="State">
                            <option>Choose...</option>
                            <option>...</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="formGridState"
                          style={{ marginBottom: "5px" }}
                        >
                          {/* <Form.Label style={{marginBottom: '0rem'}}>State</Form.Label> */}
                          <Form.Control size="sm" as="select" defaultValue="Classes">
                            <option>Choose...</option>
                            <option>...</option>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>

                      <fieldset>
                        <Form.Group as={Row} style={{ marginBottom: "0px" }}>
                          {/* <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label> */}
                          <Col
                            sm={10}
                            style={{ display: "-webkit-inline-box" }}
                          >
                            <Form.Check
                              style={{
                                paddingLeft: "3rem",
                                margin: "15px 0 15px 0",
                              }}
                              type="radio"
                              label="Student"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                            <Form.Check
                              style={{
                                paddingLeft: "3rem",
                                margin: "15px 0 15px 0",
                              }}
                              type="radio"
                              label="Perent"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />
                            <Form.Check
                              style={{
                                paddingLeft: "3rem",
                                margin: "15px 0 15px 0",
                              }}
                              type="radio"
                              label="Teacher"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios3"
                            />
                          </Col>
                        </Form.Group>
                      </fieldset>

                      <Button
                        style={{ background: "indianred" }}
                        variant="success"
                        type="submit"
                        size="sm"
                        block
                      >
                        JOIN NOW FOR FREE
                      </Button>
                    </Form>

                    {/* <div className="title-btn">
                                            <a href="#" className="btn btn-sm btn-rose tra-grey-hover">View All Courses</a>
                                        </div> */}
                  </div>
                </div>
              </div>

              {/* <div className="row">
                                <div className="col-lg-12">

                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        {this.state.courses.map((name, index) => {
                                            return (
                                                <li className="nav-item" key={name.courseId}>
                                                    <a className={`nav-link ${this.state.active === name.courseId ? "active" : ""}`} id="home-tab" data-toggle="tab" onClick={(Id) => this.getSubjects(-1, name.courseId)} role="tab" aria-controls="home" aria-selected="true">{name.courseName}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    <div className="tab-content" id="myTabContent">
                                        <If condition={this.state.selectedCourse}>
                                            <div className="tab-pane fade show active" id="banking" role="tabpanel" aria-labelledby="banking-tab">
                                                <div className="govtexam-wrap">
                                                    <div className="row">
                                                        {this.state.allSubjects.map((name, index) => {
                                                            return (
                                                                <div className="col-sm-6 col-lg-3 col-xl-2 text-center" key={name.Id}>
                                                                    <a href="#">
                                                                        <img alt="" src={LIC} />
                                                                        <p>{name.subjectName}</p>
                                                                    </a>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </If>
                                    </div>
                                </div>
                            </div> */}

              {/* <div className="row">
                <div className="col-lg-12">
                  {this.state.packages.map((name, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="col-md-6 col-lg-4 col-xl-3">
                          <div className="cbox-1"> */}
                            {/* <Link to={`/packagedetail/${name.packageId}`}> */}
                              {/* <img
                                className="img-fluid"
                                src={PACKAGE}
                                alt="course-preview"
                              /> */}
                              {/* <div className="cbox-1-txt"> */}
                                {/* <p className="course-tags">
                                                                <span>SEO</span>
                                                                <span>Marketing</span>
                                                            </p> */}
                                {/* <h4 className="h4-xs">{name.PackageName}</h4>
                                <h5 className="h5-xs">{name.PackageDesc}</h5> */}
                                {/* <div className="course-rating clearfix">
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <i className="fas fa-star" />
                                                                <span>5 (281 Ratings)</span>
                                                            </div> */}
                                {/* <span className="course-price">
                                  <i className="fa fa-inr" />
                                  {name.Packageprice}
                                </span> */}
                              {/* </div>
                            </Link>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div> */}
            </div>
          {/* </div> */}
        </section>

        <section id="about-3" className="pt-80 pb-80 about-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-6">
                <div className="txt-block pc-25">
                  {/* <h3 className="h3-sm">
                    Learn new personal & professional skills online
                  </h3> */}

                  {/* <p> Over the years,TathaGat has acquired the reputation of an MBA Entrance
                                    Training Institute for the serious and focused students. We accept a limited number
                                    of students, and provide quality education and training in a personalized manner.
								</p> */}

                                    {/* <ul className="txt-list mb-15">

                                        <li> It comes as no surprise then that our student profile largely . </li>

                                        <li>consists of students from top colleges such as IIT, St. Stephens,
									</li>

                                        <li>SRCC, Hindu, LSR, NSIT, DCE, SSCBS, Hansraj and other prestigious institutes		</li>

                                        <li>Etiam sapien sem at sagittis congue an augue massa and varius egestas at suscipit magna
                                        tempus and aliquet porta vitae
									</li>

                                    </ul> */}
                  <DemoVideo />
                </div>
              </div>

              <div className="col-md-5 col-lg-6">
              <h3 className="h3-sm">
              OUR STUDENTS LOVE US
                  </h3>

                  <p> Over the years,TathaGat has acquired the reputation of an MBA Entrance
                                    Training Institute for the serious and focused students. We accept a limited number
                                    of students, and provide quality education and training in a personalized manner.
								</p>
                                <p> Over the years,TathaGat has acquired the reputation of an MBA Entrance
                                    Training Institute for the serious and focused students.
								</p>
                                {/* <div className="img-block">
                                    <img className="img-fluid" src={IMAGE2} alt="about-image" />
                                </div> */}
                                                  {/* <DsemoVideo /> */}

                         </div>
            </div>
          </div>
        </section>

        <section
          id="categories-2"
          className="bg-whitesmoke wide-70 categories-section division"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <div className="section-title mb-60"> */}
                  <h4 className="h4-xl">Top Trending Categories</h4>

                  {/* <p className="p-md">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta
                  </p>

                  <div className="title-btn">
                    <a
                      href="categories-list.html"
                      className="btn btn-tra-grey rose-hover"
                    >
                      View All Courses
                    </a>
                  </div> */}
                  <Tab/>
                {/* </div> */}
              </div>
            </div>

            <div className="row">
              {this.state.courses.map((name, index) => {
                return (
                  <div
                    className="col-sm-6 col-lg-3 col-xl-2"
                    key={name.courseId}
                  >
                    <a href="category-details.html">
                      <div className="c2-box text-center">
                        <img
                          className="img-70"
                          src={ICONS}
                          alt="category-icon"
                        />
                        <h5 className="h5-sm">{name.courseName}</h5>
                        {/* <p>36 Courses</p> */}
                      </div>
                    </a>
                  </div>
                );
              })}

              {/* <div className="col-sm-6 col-lg-3 col-xl-2">
                                <a href="category-details.html">
                                    <div className="c2-box text-center">

                                        <img className="img-70" src={ICONS} alt="category-icon" />
                                        <h5 className="h5-sm">Finance</h5>
                                        <p>28 Courses</p>

                                    </div>
                                </a>
                            </div>


                            <div className="col-sm-6 col-lg-3 col-xl-2">
                                <a href="category-details.html">
                                    <div className="c2-box text-center">
                                        <img className="img-70" src={ICONS} alt="category-icon" />
                                        <h5 className="h5-sm">IT & Software</h5>
                                        <p>54 Courses</p>
                                    </div>
                                </a>
                            </div>


                            <div className="col-sm-6 col-lg-3 col-xl-2">
                                <a href="category-details.html">
                                    <div className="c2-box text-center">
                                        <img className="img-70" src={ICONS} alt="category-icon" />
                                        <h5 className="h5-sm">Networking</h5>
                                        <p>59 Courses</p>
                                    </div>
                                </a>
                            </div>


                            <div className="col-sm-6 col-lg-3 col-xl-2">
                                <a href="category-details.html">
                                    <div className="c2-box text-center">
                                        <img className="img-70" src={ICONS} alt="category-icon" />
                                        <h5 className="h5-sm">Sciences</h5>
                                        <p>78 Courses</p>
                                    </div>
                                </a>
                            </div>


                            <div className="col-sm-6 col-lg-3 col-xl-2">
                                <a href="category-details.html">
                                    <div className="c2-box text-center">
                                        <img className="img-70" src={ICONS} alt="category-icon" />
                                        <h5 className="h5-sm">Marketing</h5>
                                        <p>68 Courses</p>
                                    </div>
                                </a>
                            </div> */}
            </div>
          </div>
        </section>

        {/* <section id="banner-1" className="bg-carrot banner-section division">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-1-txt text-center">
                  <h5 className="h5-md">
                    Don’t miss the chance to learn the skills you need for less.{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section
          id="services-6"
          className="bg-01 wide-60 services-section division"
        >
           <div className="container white-color">
            <div className="row">
            {/*{/*  <div className="col-lg-10 offset-lg-1 text-center">
                <div className="services-6-txt">
                  <h3 className="h3-md">Get Quality Education with us</h3>

                  <p className="p-md">
                    Integer congue magna at pretium purus pretium ligula at
                    rutrum luctus risus eros dolor auctor ipsum blandit luctus
                    purus vehicula magna a tempor laoreet
                  </p>

                  <a href="#" className="btn btn-md btn-rose tra-white-hover">
                    Start Learning Now!
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="row">
                  <div className="sbox-6 icon-xl">
                    <span className="flaticon-031-select"></span>
                    <h5 className="h5-xs">Trending Courses</h5>
                  </div>

                  <div className="sbox-6 icon-xl">
                    <span className="flaticon-028-learning-1"></span>
                    <h5 className="h5-xs">Certified Teachers</h5>
                  </div>

                  <div className="sbox-6 icon-xl">
                    <span className="flaticon-006-diploma"></span>
                    <h5 className="h5-xs">Graduation Certificate</h5>
                  </div>

                  <div className="sbox-6 icon-xl">
                    <span className="flaticon-013-elearning-5"></span>
                    <h5 className="h5-xs">Online Course Facilities</h5>
                  </div>

                  <div className="sbox-6 icon-xl">
                    <span className="flaticon-001-book"></span>
                    <h5 className="h5-xs">Free Books & Library</h5>
                  </div>
                </div>
              </div>*/}
            </div>
          </div> 
          {/* <div className="col-md-12">
                <div className="banner-1-txt text-center">
                  <h5 className="h5-md">
                    Don’t miss the chance to learn the skills you need for less.{" "}
                  </h5>
                </div>
              </div> */}
               <h4 className="h4-xl" style={{  textAlign: 'center',
    marginBottom: '47px'}}>Our Team</h4>
          <Educater/>



{/* 
          <Container>
  <Row>
<div className="wrapper">
<div className="sub-wapper">

     <h3>Your Name</h3>
     <p>Efficiently envisioneer proactive information before plug-and-play platforms. Synergistically innovate error-free materials whereas intuitive applications. Seamlessly seize business catalysts for change via worldwide sources. Holisticly.</p>
</div>
</div>
</Row>
</Container> */}








        </section>

        <section
          id="video-1"
          className="bg-lightgrey bg-map video-ection division"
        >
          <div className="container">
            <div className="video-1-holder">
              {/* <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="video-link text-center">
                    <div className="text-center">
                      <img className="img-fluid" src={VIDEOIMG} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="video-txt">
                    <h4 className="h3-sm">Best CAT Coaching</h4>
                    <h3 className="h3-xl">Start Today!</h3>

                    <p className="p-md">
                      ARE YOU SERIOUS ABOUT CAT 2020 & 21? DO YOU WANT TO MAKE
                      IT TO AN IIM/XLRI OR ONE OF THE OTHER A GRADE B-SCHOOLS?
                      IF YES, DO REGISTER NOW TO BOOK A PERSONALIZED COUNSELING
                      SESSION.
                    </p>

                    <a href="#" className="btn btn-tra-rose rose-hover">
                      Registration Now!
                    </a>
                  </div>
                </div>
              </div> */}
                                <h4 className="h4-xl" style={{  textAlign: 'center',
    marginBottom: '47px'}}>Top Trending Categories</h4>

                        <Rankers/>
                       

            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let isLoggedIn = state.authReducer.loggedIn;

  return {
    isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    popActions: bindActionCreators(PopActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);

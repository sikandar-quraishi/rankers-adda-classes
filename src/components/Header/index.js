/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PopActions from '../../store/actions/authActions';
import Logo from '../../assets/images/logo.png';
// import Admin from '../admin';
// import './index.scss';

class Header extends Component {

  state = {
    admin: false
  }

  logout = () => {
    this.props.authActions.Logout();
    // const { history } = this.props
    // history.push("/");
  }

  admin = () => {
    console.log("Click Click!")
    this.setState({
      admin: !this.state.admin
    })
  }



  render() {
    return (
      <header id="header" className="header white-menu navbar-dark">
        <div className="header-wrapper">
          <div className="wsmobileheader clearfix">
            <span className="smllogo smllogo-black"><img src={Logo} width="172" height="40" alt="mobile-logo" /></span>
          </div>

          <div className="wsmainfull menu clearfix">
            <div className="wsmainwp clearfix">
              <div className="desktoplogo"><Link to="/" className="logo-black"><img src={Logo} width="172" height="40" alt="header-logo" /></Link></div>
              <nav className="wsmenu clearfix">
                <ul className="wsmenu-list">
                <li className="nl-simple">
                        <Link to="/" className="btn btn-rose ">Home</Link>
                </li>
                <li className="nl-simple">
                        <a className="btn btn-rose ">Courses</a>
                </li>
                <li className="nl-simple">
                        <a className="btn btn-rose ">Our Team</a>
                </li>
                <li className="nl-simple">
                        <a className="btn btn-rose ">Join As Tutor</a>
                </li>
                  <Choose>
                    <When condition={this.props.isLoggedIn}>
                      <li className="nl-simple"><Link to="/uploader" onClick={this.admin}>Admin</Link></li>
                      <li className="nl-simple"><Link to="/login" onClick={this.logout}>Logout</Link></li>
                    </When>
                    <When condition={!this.props.isLoggedIn}>
                      <li className="nl-simple">
                        <Link className="btn btn-rose tra-black-hover last-link" to="/login">LogIn</Link>
                      </li>
                    </When>
                  </Choose>
                </ul>
              </nav>
              {/* <If condition={this.state.admin}>
                <Admin />
              </If> */}
            </div>
          </div>
        </div>
      </header>
    )
  }
};

const mapStateToProps = state => {

  let isLoggedIn = state.authReducer.loggedIn;

  return {
    isLoggedIn
  }
};

const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(PopActions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container } from 'react-bootstrap';

import './app.scss';
import '../../containers/NewPage/css/menu.css';
import '../../containers/NewPage/css/style.css';
import '../../containers/NewPage/css/flaticon.css';
import '../../containers/NewPage/css/responsive.css';
import '../../containers/NewPage/css/fade-down.css';
import '../../style/index.css';
// import './header.scss';

import Aux from '../../hoc/_Aux';
import * as actionTypes from '../../store/actions/actionTypes';
import routes from '../../routes';
import config from '../../config';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Layout extends Component {
  render() {
    const menu = routes.map((route, index) => {
      return (route.component) ? (
        <Route
          key={index}
          path={`${route.path}`}
          exact={route.exact}
          name={route.name}
          render={props => (
            <route.component {...props} />
          )} />
      ) : (null);
    });

    return (
      <Aux>
        <Header />
        <div>
          <Container className="h-100" fluid>
            <Suspense fallback={<Loader />}>
              <Switch>
                {menu}
                <Redirect from="/" to={config.defaultPath} />
              </Switch>
            </Suspense>
          </Container>
        </div>
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    defaultPath: state.questionReducer.defaultPath,
    user: state.questionReducer.user,
    isAuthenticated: state.questionReducer.isAuthenticated,
    toast: state.questionReducer.toast
  }
};

const mapDispatchToProps = dispatch => {
  return {
    hideToast: () => dispatch({ type: actionTypes.HIDE_TOAST })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
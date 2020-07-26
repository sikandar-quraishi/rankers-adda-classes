import React from 'react';
import TrialComp from '../components/TrailComp';
// import NewHome from "../containers/NewHome";
const NewHome = React.lazy(() => import('../containers/NewHome'));

const Test = React.lazy(() => import('../containers/Home'));
const Portal = React.lazy(() => import('../containers/Portal'));
const Uploader = React.lazy(() => import('../containers/Uploader'));
const Creator = React.lazy(() => import('../containers/Creator'));

const Home = React.lazy(() => import('../containers/NewPage'));
const Login = React.lazy(() => import('../containers/Login'));
const Register = React.lazy(() => import('../containers/Register'));
const Package = React.lazy(() => import('../containers/Package'));
const PackageDetail = React.lazy(() => import('../containers/PackageDetails'));
const orderList = React.lazy(() => import('../components/orderList'));
const Details = React.lazy(() => import('../containers/NewPage/details'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
    authRequired: false
  },
  {
    path: '/newhome',
    exact: true,
    name: 'NewHome',
    component: NewHome,
    authRequired: false
  },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: Login,
    authRequired: false
  },
  {
    path: '/register',
    exact: true,
    name: 'Register',
    component: Register,
    authRequired: false
  },
  {
    path: '/exam',
    exact: true,
    name: 'Portal',
    component: Portal,
    authRequired: false
  },
  {
    path: '/uploader',
    exact: true,
    name: 'Uploader',
    component: Uploader,
    authRequired: false
  },
  {
    path: '/creator',
    exact: true,
    name: 'Creator',
    component: Creator,
    authRequired: false
  },
  {
    path: '/test',
    exact: true,
    name: 'Test',
    component: Test,
    authRequired: false
  },
  {
    path: '/package',
    exact: true,
    name: 'Package',
    component: Package,
    authRequired: false
  },
  {
    path: '/packagedetail/:id',
    exact: true,
    name: 'packagedetail',
    component: PackageDetail,
    authRequired: false
  },
  {
    path: '/trial',
    exact: true,
    name: 'TrialComp',
    component: TrialComp,
    authRequired: false
  },
  {
    path: '/orderlist',
    exact: true,
    name: 'orderList',
    component: orderList,
    authRequired: false
  },
  {
    path: '/details',
    exact: true,
    name: 'Details',
    component: Details,
    authRequired: false
  }
];

export default routes;
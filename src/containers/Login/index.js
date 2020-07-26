import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PopActions from '../../store/actions/authActions';
import swal from 'sweetalert';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    getvalues = (e) => {
        // console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    loginHandler = event => {
        event.preventDefault();
        var data = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loginActions.login(data).then((resp) => {
            console.log(resp);
            swal({
                title: 'Success',
                text: 'login successful',
                icon: 'success',
                timer: 900
            })
            const { history } = this.props
            history.push("/");
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">

                    <div className="login-page">
                        <div className="form">
                            <h1>Login Here</h1>
                            <form className="login-form">
                                <input id="username" onChange={this.getvalues} value={this.state.username} type="text" placeholder="Username" />
                                <input id="password" onChange={this.getvalues} value={this.state.password} type="password" placeholder="Password" />
                                <button type="submit" className="btn-lg btn-info btn-block waves-effect waves-light" onClick={this.loginHandler}>login</button>
                            </form>
                            <div className="form-group m-t-15">
                                <div className="col-sm-12 text-center">
                                    <p>Forgot Password <a href={NaN} className="text-info m-l-5"><b>Click Here</b></a></p>
                                </div>
                            </div>

                        </div>

                        <div className="form-group m-b-0">
                            <div className="col-sm-12 text-center">
                                <p>Not have account? <Link to="/register" className="text-info m-l-5"><b>Register</b></Link></p>
                            </div>
                        </div>

                    </div>

                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {

    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginActions: bindActionCreators(PopActions, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
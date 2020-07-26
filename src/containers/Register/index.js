import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as auth from '../../api/Auth';
import swal from 'sweetalert';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    getvalues = (e) => {
        // console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    signupHandler = event => {
        event.preventDefault();
        var { username, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            var data = {
                username: username,
                emailId: email,
                password: password
            }
            auth.signup(data).then((resp) => {
                console.log("Success:", resp);
                swal({
                    title: 'Success',
                    text: 'Register Successful',
                    icon: 'success',
                    timer: 900
                });
                const { history } = this.props
                history.push("/login");
            });
        }

    }

    render() {
        return (

            <div className="page-wrapper">
                <div className="container">

                    <div className="login-page">
                        <form className="form">
                            <h1>Register</h1>
                            <div className="login-form">
                                <input type="text" id="username" onChange={this.getvalues} value={this.state.username} placeholder="Jon Doe" />
                                <input type="email" id="email" onChange={this.getvalues} value={this.state.email} placeholder="abc@xyz.com" />
                                <input type="password" id="password" onChange={this.getvalues} value={this.state.password} placeholder="********" />
                                <input type="password" id="confirmPassword" onChange={this.getvalues} value={this.state.confirmPassword} placeholder="********" />
                                <button type="submit" className="btn-lg btn-info btn-block waves-effect waves-light" onClick={this.signupHandler}>Register</button>
                            </div>
                            <div className="form-group m-t-15">
                                <div className="col-sm-12 text-center">
                                    <p>Forgot Password <a href={NaN} className="text-info m-l-5"><b>Click Here</b></a></p>
                                </div>
                            </div>
                        </form>

                        <div className="form-group m-b-0">
                            <div className="col-sm-12 text-center">
                                <p>Have a have account? <Link to="/login" className="text-info m-l-5"><b>Login</b></Link></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Register;
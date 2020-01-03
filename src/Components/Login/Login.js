/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import labels from './Labels/LoginLabels'
import '../../App.css';
import RegisterForm from '../FormRegister/FormRegister'
import LoginForm from '../FormLogin/FormLogin'


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogin: true,
        };
    }

    register = () => {
        this.setState({
            showLogin: !this.state.showLogin,
        })
    };

    callbackFunction = (childData) => {
        if(childData === 'OK'){
            this.props.parentCallback("OK");
        }
    };

    render() {
        let route = this.state.showLogin ? labels.tittles.register : labels.tittles.login;
        let routeComponent = this.state.showLogin ? <LoginForm parentCallback = {this.callbackFunction}/> : <RegisterForm parentCallback = {this.callbackFunction}/>;
        return (
            <div id="ContentShow" className="row main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <h2>{labels.loginHead}</h2>
                        {routeComponent}
                        <button className="btn btn-link"
                                onClick={this.register}>
                            {route}
                        </button>
                    </div>
                </div>
                <p> {this.state.message} </p>
            </div>
        );
    }
}

export default Login;
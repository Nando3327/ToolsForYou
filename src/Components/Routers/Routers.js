/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import labels from './Labels/RouterLabels'
import GlobalLabels from '../../Labels/GlobalLabels'
import RegisterForm from '../FormRegister/FormRegister'
import LoginForm from '../FormLogin/FormLogin'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from '../../logo.svg';


class Routers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogin: true,
        };
    }
    register = (event) => {
        this.setState({
            showLogin: !this.state.showLogin,
        })
    };
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <div className="container">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <div id="ContentShow">
                                <div className="row">
                                    <div>
                                        <ul>
                                            <li>
                                                <Link to="/">{labels.tittles.login}</Link>
                                            </li>
                                            <li>
                                                <Link to="/Register">{labels.tittles.register}</Link>
                                            </li>
                                        </ul>

                                        <Route exact path="/" component={LoginForm}/>
                                        <Route exact path="/Register" component={RegisterForm}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </Router>
        );
    }
}
export default Routers;
/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import labels from './Labels/RouterLabels'
import GlobalLabels from '../../Labels/GlobalLabels'
import RegisterForm from '../FormRegister/FormRegister'
import LoginForm from '../FormLogin/FormLogin'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Routers extends Component {
    render() {
        return (
            <Router>
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
            </Router>
        );
    }
}
export default Routers;
/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import '../../App.css';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import FormMenu from "../MenuForm/FormMenu";
import EnterpriseInfo from "../EnterpriseInfo/EnterpriseInfo";
import Login from "../Login/Login";


class Routers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogin: true,
            redirect: false,
            showMenu: false,
            showInfo: true
        };
    }

    register = () => {
        this.setState({
            showLogin: !this.state.showLogin,
        })
    };

    callbackFunction = (childData) => {
        if (childData === 'OK') {
            this.setState({
                redirect: !this.state.redirect,
                showMenu: !this.state.showMenu,
                showInfo: !this.state.showInfo
            })
        }
    };

    render() {
        let redirectMenu = (this.state.redirect) ? <Redirect to="/Menu"/> : <Redirect to="/"/>;
        let showMenu = (this.state.showMenu) ? '' : <Login parentCallback={this.callbackFunction}/>;
        let showInfo = (this.state.showInfo) ? <EnterpriseInfo/> : '';
        return (
            <Router>
                <div className="container">
                    <Route exact path="/Menu" component={FormMenu}/>
                    {redirectMenu}
                    {showInfo}
                    {showMenu}
                </div>
            </Router>
        );
    }
}

export default Routers;
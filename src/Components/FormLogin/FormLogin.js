/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import TextBox from '../TextBox/Textbox'
import labels from './Labels/LoginLabels'
import GlobalLabels from '../../Labels/GlobalLabels'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import FormMenu from "../MenuForm/FormMenu";


class FormLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usrName: '',
            password: '',
            redirect: false,
            inputs: [<TextBox/>]
        };
    }
    

    login = (arg) => (event) => {
        let username = this._username.getData().value;
        let password = this._password.getData().value;
        if(username === '' || password === ''){
            this._username.setNote(username);
            this._password.setNote(password);
        }else{
            this.setState({
                redirect: !this.state.redirect,
            })
        }
    };

    render() {
        let redirectMenu = (this.state.redirect) ? <Redirect to="/Menu" /> : <Redirect to="/" />;
        return (
            <Router>
                <div className="col-sm-12" id="visibleForm">
                    <Route exact path="/Menu" component={FormMenu}/>
                    {redirectMenu}
                    {(this.state.redirect) ? '' :
                    <form id="loginForm">
                        <TextBox id="Usuario"
                                 ph={labels.inputs.phUser}
                                 label={labels.inputs.userName}
                                 type='text'
                                 ref={(ref) => this._username = ref}
                                 mandatory/>
                        <TextBox id="password"
                                 label={labels.inputs.password}
                                 type='password'
                                 ph={labels.inputs.phPassword}
                                 ref={(ref) => this._password = ref}
                                 mandatory/>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <button type="button"
                                        className="btn btn-primary"
                                        onClick={this.login('loginForm')}>
                                    <span>{labels.buttons.login} </span>
                                </button>
                            </div>
                        </div>
                    </form> }
                </div>
            </Router>
        );
    }
}
export default FormLogin;
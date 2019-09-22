/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import TextBox from '../TextBox/Textbox'
import labels from './Labels/MenuLabels'
import GlobalLabels from '../../Labels/GlobalLabels'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";


class FormMenu extends Component {
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
        if (username === '' || password === '') {
            this._username.setNote(username);
            this._password.setNote(password);
        } else {
            this.setState({
                redirect: !this.state.redirect,
            })
        }
    };

    render() {
        return (
            <div className="col-sm-12" id="visibleForm">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Library</a></li>
                                <li className="active">Data</li>
                            </ol>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default FormMenu;
/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import TextBox from '../TextBox/Textbox'
import labels from './Labels/LoginLabels'


class FormLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usrName: '',
            password: '',
            inputs: [<TextBox/>]
        };
    }


    login = () => () => {
        let username = this._username.getData().value;
        let password = this._password.getData().value;
        if (username === '' || password === '') {
            this._username.setNote(username);
            this._password.setNote(password);
        } else {
            this.props.parentCallback("OK");
        }
    };

    render() {
        return (
            <div className="col-sm-12" id="visibleForm">
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
                    </form>}
            </div>
        );
    }
}

export default FormLogin;
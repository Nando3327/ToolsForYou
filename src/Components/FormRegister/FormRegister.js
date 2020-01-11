/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import TextBox from '../TextBox/Textbox'
import labels from './Labels/RegisterLabels'

class FormRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usrName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    register = () => {
        let username = this._username.getData().value;
        let email = this._email.getData().value;
        let password = this._password.getData().value;
        let confirmPassword = this._confirmPassword.getData().value;
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            this._username.setNote(username);
            this._email.setNote(email);
            this._password.setNote(password);
            this._confirmPassword.setNote(confirmPassword);
        } else {
            this.props.parentCallback("OK");
        }
    };

    render() {
        return (
            <div className="col-sm-12">
                <TextBox id="UsuarioRegister"
                         ph={labels.inputs.phUser}
                         label={labels.inputs.userName}
                         type='text'
                         ref={(ref) => this._username = ref}
                         mandatory/>
                <TextBox id="EmailRegister"
                         ph={labels.inputs.phEmail}
                         label={labels.inputs.email}
                         ref={(ref) => this._email = ref}
                         type='email'
                         mandatory/>
                <TextBox id="PasswordRegister"
                         label={labels.inputs.password}
                         type='password'
                         ref={(ref) => this._password = ref}
                         mandatory/>
                <TextBox id="passwordRetryRegister"
                         label={labels.inputs.retryPassword}
                         ref={(ref) => this._confirmPassword = ref}
                         type='password'
                         mandatory/>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button type="button"
                                className="btn btn-primary"
                                onClick={this.register}>
                            <span>{labels.buttons.register} </span><i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default FormRegister;
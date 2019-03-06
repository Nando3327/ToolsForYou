/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import TextBox from '../TextBox/Textbox'
import labels from './Labels/LoginLabels'
import GlobalLabels from '../../Labels/GlobalLabels'

class FormLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usrName: '',
            password: '',
            inputs: [<TextBox/>],
        };
    }

    login = (arg) => (event) => {
        var a =this.state.inputs; 
        alert(arg);
    };

    render() {
        return (
            <div className="col-sm-12">
                <form id="loginForm">
                    <TextBox id="Usuario"
                             ph={labels.inputs.phUser}
                             label={labels.inputs.userName}
                             type='text'
                             value={this.state.usrName}
                             mandatory/>
                    <TextBox id="password"
                             label={labels.inputs.password}
                             type='password'
                             value={this.state.password}
                             mandatory/>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={this.login('loginForm')}>
                                <span>{labels.buttons.login} </span><i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default FormLogin;
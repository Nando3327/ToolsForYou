/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import TextBox from '../TextBox/Textbox'
import labels from './Labels/RegisterLabels'
import GlobalLabels from '../../Labels/GlobalLabels'

class FormRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usrName: '',
            password: ''
        };
    }

    login = () => {
        alert('Hello World!');
    };

    render() {
        return (
            <div className="col-sm-12">
                <TextBox id="Usuario"
                         ph={labels.inputs.phUser}
                         label={labels.inputs.userName}
                         type='text'
                         mandatory/>
                <TextBox id="Usuario"
                         ph={labels.inputs.phEmail}
                         label={labels.inputs.email}
                         type='text'
                         mandatory/>
                <TextBox id="password"
                         label={labels.inputs.password}
                         type='password'
                         mandatory/>
                <TextBox id="password"
                         label={labels.inputs.retryPassword}
                         type='password'
                         mandatory/>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button type="button"
                                className="btn btn-primary"
                                onClick={this.login}>
                            <span>{labels.buttons.register} </span><i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}
export default FormRegister;
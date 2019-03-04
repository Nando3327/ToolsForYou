/**
 * Created by Fernando on 03/03/19.
 */
import React, {Component} from 'react';
import TextBox from '../TextBox/Textbox'


class FormLogin extends Component {
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
            <div className="container">
                <TextBox id="Usuario"
                         ph="Usuario"
                         label="Usuario"
                         type='text'
                         mandatory/>
                <TextBox id="password"
                         label="Contraseña"
                         type='password'
                         mandatory/>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button type="button"
                               className="btn btn-primary"
                               onClick={this.login}>
                            <span>Ingresar </span><i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}
export default FormLogin;
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/FormLogin/FormLogin'
import RegisterForm from './Components/FormRegister/FormRegister'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'
import GlobalLabels from './Labels/GlobalLabels'
import Routers from './Components/Routers/Routers'

library.add(faIgloo);

class App extends Component {
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
        var dataShow = this.state.showLogin ? <LoginForm /> : <RegisterForm />;
        var labelsShow = this.state.showLogin ? <label>{GlobalLabels.app.register}</label> :
            <label>{GlobalLabels.app.login}</label>;
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <div className="row">
                            <Routers />
                        </div>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div id="ContentShow">
                            <div className="row">
                                {dataShow}
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4 col-md-offset-4">
                                    <button type="button"
                                            className="btn btn-link"
                                            onClick={this.register}>
                                        {labelsShow}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;

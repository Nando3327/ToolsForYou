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
        return (
            <div className="App">
                <header className="App-header">
                    <div className="container">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div id="ContentShow">
                            <div className="row">
                                <Routers />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;

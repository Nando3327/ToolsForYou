import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/FormLogin/FormLogin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo);

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <LoginForm />
                </header>
            </div>
        );
    }
}

export default App;

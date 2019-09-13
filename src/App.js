import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'
import Routers from './Components/Routers/Routers'

library.add(faIgloo);

class App extends Component {
    render() {
        return (
            <Routers />
        );
    }
}

export default App;

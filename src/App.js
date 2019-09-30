import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DefaultLayout } from './containers'
import './style/App.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
               <Route path='/' exact component={DefaultLayout} />
            </Router>
        );
    }
}

export default App
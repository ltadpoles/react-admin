import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from './utils/loadable'
import './style/App.scss'

const DefaultLayout = loadable(() => import('./containers'))
const App404 = loadable(() => import('./views/404'))
const App500 = loadable(() => import('./views/500'))
const Login = loadable(() => import('./views/Login'))

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={DefaultLayout} />
                    <Route path='/404' exact component={App404} />
                    <Route path='/500' exact component={App500} />
                    <Route path='/login' exact component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default App
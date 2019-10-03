import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import loadable from './utils/loadable'
import './style/App.scss'

const DefaultLayout = loadable(() => import('./containers'))
const App404 = loadable(() => import('./views/404'))

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            
            <Router>
               <Route path='/' exact component={DefaultLayout} />
               <Route path='/404' exact component={App404} />
               {/* <Route path='/500' exact component={DefaultLayout} /> */}
               {/* <Route path='/' exact component={DefaultLayout} /> */}
            </Router>
        );
    }
}

export default App
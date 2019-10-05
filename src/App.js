import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'
import './style/App.scss'

// 公共模块
const DefaultLayout = loadable(() => import('./containers'))

// 基础页面
const App404 = loadable(() => import('./views/404'))
const App500 = loadable(() => import('./views/500'))
const Login = loadable(() => import('./views/Login'))

const App = (props) => (
    <Router>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/index' />} />
            <Route path='/500' component={App500} />
            <Route path='/login' component={Login} />
            <Route path='/404' component={App404} />
            <Route path='/' component={DefaultLayout} />
        </Switch>
    </Router>
)

export default App
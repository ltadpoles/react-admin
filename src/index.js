import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const AppView = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(AppView, document.getElementById('root'))

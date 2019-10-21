import React, { Component } from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class loadingComponent extends Component {
    constructor(props) {
        super(props)
        NProgress.start()
    }
    componentDidMount() {
        NProgress.done()
    }
    render() {
        return <div />
    }
}

export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}

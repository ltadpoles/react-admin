import React, { Component } from 'react'
import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'
import '../../style/containers/DefaultLayout.scss'

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='app'>
                <div className='app-aside'>
                    <AppAside />
                </div>
                <div className='app-body'>
                    <div className='app-header'>
                        <AppHeader />
                    </div>

                    <div className='content'>
                        中间内容
                    </div>

                    <div className='app-footer'>
                        <AppFooter />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DefaultLayout
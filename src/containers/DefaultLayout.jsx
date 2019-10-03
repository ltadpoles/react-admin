import React, { Component } from 'react'
import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'
import routes from '../routes'
import { Route, Switch, Redirect } from 'react-router-dom'
import '../style/containers/layout.scss'


class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            avatar: '',
            menu: [
                {
                    key: '/index',
                    title: '首页',
                    icon: 'home'
                },
                {
                    title: '基础功能',
                    key: '/public',
                    icon: 'appstore',
                    subs: [
                        {title: '按钮', key: '/public/button', icon: ''},
                        {title: '图标', key: '/public/icon', icon: ''}
                    ]
                },
                {
                    title: '三级组件',
                    key: '/three',
                    icon: 'edit',
                    subs: [
                        { 
                            title: '三级子组件', 
                            key: '/three/ss', 
                            icon: 'bars',
                            subs: [
                                {title: '子组件', key: '/three/ss/s', icon: ''}
                            ]
                        },
                        {
                            title: '表单',
                            key: '/three/list',
                            icon: ''
                        }
                    ]
                }
            ]
        }
    }
    render() { 
        return ( 
            <div className='app'>
                <div className='app-aside'>
                    <AppAside menu={this.state.menu} />
                </div>
                <div className='app-body'>
                    <div className='app-header'>
                        <AppHeader avatar={this.state.avatar} />
                    </div>

                    <div className='content' style={{minHeight: (document.body.offsetHeight - 115) + 'px'}}>
                        <Switch>
                            {
                                routes.map(res => {
                                    return <Route key={res.path} path={res.path}  exact={res.exact} component={res.component}></Route>
                                } )
                            }
                            <Redirect to='/404' />
                        </Switch>
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
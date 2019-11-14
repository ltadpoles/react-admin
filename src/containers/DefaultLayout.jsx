import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, BackTop, message } from 'antd'
import routes from '@/routes'
import { menuToggleAction } from '@/store/actionCreators'
import echarts from 'echarts/lib/echarts'
import avatar from '@/assets/images/user.jpg'
import menus from './menu'
import '@/style/layout.scss'

import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'

const { Content } = Layout

const getMenu = menu => {
    let newMenu,
        auth = JSON.parse(localStorage.getItem('user')).auth
    if (!auth) {
        return menu
    } else {
        newMenu = menu.filter(res => res.auth && res.auth.indexOf(auth) !== -1)
        return newMenu
    }
}

const DefaultLayout = props => {
    const [menu] = useState(prevState => {
        if (!localStorage.getItem('user')) {
            props.history.push('/login')
            return []
        } else {
            return getMenu(menus)
        }
    })

    let { menuClick, menuToggle } = props
    let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''

    const loginOut = () => {
        localStorage.clear()
        props.history.push('/login')
        message.success('登出成功!')
    }

    useEffect(() => {
        let { pathname } = props.location
        let timer

        // 菜单收缩展开时 echarts 图表的自适应
        if (pathname === '/' || pathname === '/index') {
            timer = setTimeout(() => {
                echarts.init(document.getElementById('bar')).resize()
                echarts.init(document.getElementById('line')).resize()
                echarts.init(document.getElementById('pie')).resize()
                echarts.init(document.getElementById('pictorialBar')).resize()
                echarts.init(document.getElementById('scatter')).resize()
            }, 500)
        } else {
            timer = null
        }
        return () => {
            timer && clearTimeout(timer)
        }
    })

    return (
        <Layout className='app'>
            <BackTop />
            <AppAside menuToggle={menuToggle} menu={menu} />
            <Layout style={{ marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
                <AppHeader menuToggle={menuToggle} menuClick={menuClick} avatar={avatar} loginOut={loginOut} />
                <Content className='content'>
                    <Switch>
                        {routes.map(item => {
                            return (
                                <Route
                                    key={item.path}
                                    path={item.path}
                                    exact={item.exact}
                                    render={props =>
                                        !auth ? (
                                            <item.component {...props} />
                                        ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
                                            <item.component {...props} />
                                        ) : (
                                            // 这里也可以跳转到 403 页面
                                            <Redirect to='/404' {...props} />
                                        )
                                    }></Route>
                            )
                        })}
                        <Redirect to='/404' />
                    </Switch>
                </Content>
                <AppFooter />
            </Layout>
        </Layout>
    )
}

const stateToProp = state => ({
    menuToggle: state.menuToggle
})

const dispatchToProp = dispatch => ({
    menuClick() {
        dispatch(menuToggleAction())
    }
})

export default withRouter(
    connect(
        stateToProp,
        dispatchToProp
    )(DefaultLayout)
)

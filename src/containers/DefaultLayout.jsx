import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, BackTop, message } from 'antd'
import routes from '../routes'
import { menuToggleAction } from '../store/actionCreators'
import echarts from 'echarts/lib/echarts'
import avatar from '../assets/images/user.jpg'
import '../style/layout.scss'

import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'

const { Content } = Layout

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar,
            show: true,
            menu: [
                {
                    key: '/index',
                    title: '首页',
                    icon: 'home'
                },
                {
                    title: '通用',
                    key: '/public',
                    icon: 'appstore',
                    subs: [
                        { title: '按钮', key: '/public/button', icon: '' },
                        { title: '图标', key: '/public/icon', icon: '' }
                    ]
                },
                {
                    title: '导航',
                    key: '/nav',
                    icon: 'bulb',
                    subs: [
                        { title: '下拉菜单', key: '/nav/dropdown', icon: '' },
                        { title: '导航菜单', key: '/nav/menu', icon: '' },
                        { title: '步骤条', key: '/nav/steps', icon: '' }
                    ]
                },
                {
                    title: '表单',
                    key: '/form',
                    icon: 'form',
                    subs: [
                        { title: '基础表单', key: '/form/base-form', icon: '' },
                        { title: '步骤表单', key: '/form/step-form', icon: '' }
                    ]
                },
                {
                    title: '展示',
                    key: '/show',
                    icon: 'pie-chart',
                    subs: [
                        { title: '表格', key: '/show/table', icon: '' },
                        { title: '折叠面板', key: '/show/collapse', icon: '' },
                        { title: '树形控件', key: '/show/tree', icon: '' },
                        { title: '标签页', key: '/show/tabs', icon: '' },
                    ]
                },
                {
                    title: '其它',
                    key: '/others',
                    icon: 'paper-clip',
                    subs: [
                        { title: '进度条', key: '/others/progress', icon: '' },
                        { title: '动画', key: '/others/animation', icon: '' },
                        { title: '上传', key: '/others/upload', icon: '' },
                        { title: '富文本', key: '/others/editor', icon: '' },
                        { title: '404', key: '/404', icon: '' },
                        { title: '500', key: '/500', icon: '' }
                    ]
                },
                {
                    title: '多级导航',
                    key: '/one',
                    icon: 'bars',
                    subs: [
                        {
                            title: '二级',
                            key: '/one/two',
                            icon: '',
                            subs: [
                                { title: '三级', key: '/one/two/three', icon: '' }
                            ]
                        }
                    ]
                },
                {
                    title: '关于',
                    key: '/about',
                    icon: 'user'
                }
            ]
        }
    }

    isLogin = () => {
        if (!localStorage.getItem('user')) {
            this.props.history.push('/login')
        }
    }

    loginOut = () => {
        localStorage.removeItem('user')
        this.props.history.push('/login')
        message.success('登出成功!')
    }

    componentDidMount() {
        this.isLogin()
    }

    componentDidUpdate() {
        // 菜单收缩展开时 echarts 图表的自适应
        setTimeout(() => {
            echarts.init(document.getElementById('bar')).resize()
            echarts.init(document.getElementById('line')).resize()
            echarts.init(document.getElementById('pie')).resize()
            echarts.init(document.getElementById('pictorialBar')).resize()
            echarts.init(document.getElementById('scatter')).resize()
        });
        
    }
    
    render() {
        let { menuClick, menuToggle } = this.props
        return (
            <Layout className='app'>
                <BackTop />
                <AppAside menuToggle={menuToggle} menu={this.state.menu} />
                <Layout style={{ marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
                    <AppHeader menuToggle={menuToggle} menuClick={menuClick} avatar={this.state.avatar} show={this.state.show} loginOut={this.loginOut} />
                    <Content className='content'>
                        <Switch>
                            {
                                routes.map(res => {
                                    return <Route key={res.path} path={res.path} exact={res.exact} component={res.component}></Route>
                                })
                            }
                            <Redirect to='/404' />
                        </Switch>
                    </Content>
                    <AppFooter />
                </Layout>
            </Layout>
        );
    }
}

const stateToProp = state => ({
    menuToggle: state.menuToggle
})

const dispatchToProp = dispatch => ({
    menuClick() {
        dispatch(menuToggleAction())
    }
})

export default withRouter(connect(stateToProp, dispatchToProp)(DefaultLayout))
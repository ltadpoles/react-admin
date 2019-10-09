import React, { Component } from 'react'
import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import AppFooter from './AppFooter.jsx'
import routes from '../routes'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { menuToggleAction } from '../store/actionCreators'
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
                    title: '通用',
                    key: '/public',
                    icon: 'appstore',
                    subs: [
                        {title: '按钮', key: '/public/button', icon: ''},
                        {title: '图标', key: '/public/icon', icon: ''}
                    ]
                },
                {
                    title: '导航',
                    key: '/nav',
                    icon: 'bulb',
                    subs: [
                        {title: '面包屑', key: '/nav/breadcrumb', icon: ''},
                        {title: '下拉菜单', key: '/nav/dropdown', icon: ''},
                        {title: '导航菜单', key: '/nav/menu', icon: ''},
                        {title: '分页', key: '/nav/pagination', icon: ''},
                        {title: '步骤条', key: '/nav/steps', icon: ''}
                    ]
                },
                {
                    title: '表单类',
                    key: '/form',
                    icon: 'form',
                    subs: [
                        {title: '单选框', key: '/form/radio', icon: ''},
                        {title: '多选框', key: '/form/checkbox', icon: ''},
                        {title: '级联选择', key: '/form/cascader', icon: ''},
                        {title: '日期选择', key: '/form/datepicker', icon: ''},
                        {title: '表单', key: '/form/formlist', icon: ''},
                        {
                            title: '输入框', 
                            key: '/form/input', 
                            icon: 'edit',
                            subs: [
                                {title: '普通输入框', key: '/form/input/base', icon: ''},
                                {title: '数字输入框', key: '/form/input/number', icon: ''}
                            ]
                        },
                        {title: '评分', key: '/form/rate', icon: ''},
                        {title: 'switch开关', key: '/form/switch', icon: ''},
                        {title: '下拉选择框', key: '/form/select', icon: ''},
                        {title: '穿梭框', key: '/form/transfer', icon: ''},
                        {title: '时间选择框', key: '/form/timepicker', icon: ''},
                        {title: '上传', key: '/form/upload', icon: ''},
                    ]
                }
            ]
        }
    }
    render() { 
        let { menuClick, menuToggle } = this.props
        return ( 
            <div className='app'>
                <div className='app-aside'>
                    <AppAside menuToggle={menuToggle} menu={this.state.menu} />
                </div>
                <div className='app-body' style={{marginLeft: menuToggle ? '80px' : '200px'}}>
                    <div className='app-header'>
                        <AppHeader menuToggle={menuToggle} menuClick={menuClick} avatar={this.state.avatar} />
                    </div>
                    <div className='content' style={{minHeight: '35rem'}}>
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

const stateToProp = state => ({
    menuToggle: state.menuToggle
})

const dispatchToProp = dispatch => ({
    menuClick() {
        dispatch(menuToggleAction())
    }
})

export default connect(stateToProp, dispatchToProp)(DefaultLayout)
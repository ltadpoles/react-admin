import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import store from '../store'
import '../style/containers/app-aside.scss'

class AppAside extends Component {

    constructor(props) {
        super(props)
    }

    renderMenuItem = ({key, icon, title}) => (
        <Menu.Item key={key}>
            <Link to={key}>
                {icon && <Icon type={icon}/>}
                <span>{title}</span>
            </Link>
        </Menu.Item>
    )
    
    // 循环遍历数组中的子项 subs ，生成子级 menu
    renderSubMenu = ({key, icon, title, subs}) => {
        return (
            <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
                {
                    subs && subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }

    render() {
        let {menuToggle, menu} = this.props
        return (
            <aside className='aside'>
                <div className="logo"></div>
                <Menu
                    defaultSelectedKeys={['/index']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={menuToggle}
                >
                   {
                       menu && menu.map(item => {
                           return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                       })
                   }
                </Menu>
             </aside>
        );
    }
}
 
export default AppAside
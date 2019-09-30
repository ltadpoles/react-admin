import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

class AppAside extends Component {

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
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['/index']}
                    mode="inline"
                    theme="dark"
                    style={{width: '17rem'}}
                >
                   {
                       this.props.menu && this.props.menu.map(item => {
                           return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                       })
                   }
                </Menu>
             </div>
        );
    }
}
 
export default AppAside
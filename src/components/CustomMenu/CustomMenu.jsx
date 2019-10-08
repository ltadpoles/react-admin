import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'


class CustomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
        let { menu } = this.props
        return ( 
            <Menu
                defaultSelectedKeys={['/index']}
                mode="inline"
                theme="dark"
            >
            {
                menu && menu.map(item => {
                    return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                })
            }
            </Menu>
         );
    }
}
 
export default CustomMenu;
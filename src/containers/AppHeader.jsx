import React, { Component } from 'react'
import '../style/containers/app-header.scss'
import baseAvatar from '../assets/images/user.jpg'
import { Menu, Dropdown, Icon } from 'antd'

const menu = (
    <Menu>
        <Menu.Item>个人信息</Menu.Item>
        <Menu.Item>系统设置</Menu.Item>
        <Menu.Item><Icon type="logout" />退出登录</Menu.Item>
    </Menu>
)

class AppHeader extends Component {
    render() { 
        let { menuClick, avatar, menuToggle } = this.props
        return ( 
            <header className='header'>
                <div className="left">
                    <Icon style={{fontSize: '2rem'}} onClick={menuClick} type={menuToggle ? "menu-unfold" : "menu-fold"} />
                </div>
                <div className="right">
                    {/* <div><Icon style={{fontSize: '2rem', marginRight: '2rem'}} type="sound" /></div> */}
                    <Dropdown overlay={menu}>
                        <div className="ant-dropdown-link">
                            <img src={avatar ? avatar : baseAvatar} alt='头像'></img>
                        </div>
                    </Dropdown>
                </div> 
            </header>
        );
    }
}
 
export default AppHeader;
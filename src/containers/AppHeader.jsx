import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Layout, Avatar } from 'antd'

const { Header } = Layout

const menu = (
    <Menu>
        <Menu.ItemGroup title='用户设置'>
            <Menu.Divider />
            <Menu.Item><Icon type="edit" />个人设置</Menu.Item>
            <Menu.Item><Icon type="setting" theme="filled" />系统设置</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.Item><Icon type="logout" className='out' />退出登录</Menu.Item>
    </Menu>
)

class AppHeader extends Component {
    render() {
        let { menuClick, avatar, menuToggle } = this.props
        return (
            <Header className='header'>
                <div className="left">
                    <Icon style={{ fontSize: '2rem' }} onClick={menuClick} type={menuToggle ? "menu-unfold" : "menu-fold"} />
                </div>
                <div className="right">
                    <Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
                        <div className='ant-dropdown-link'>
                            <Avatar icon="user" src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
                        </div>
                    </Dropdown>
                </div>
            </Header>
        );
    }
}

export default AppHeader;
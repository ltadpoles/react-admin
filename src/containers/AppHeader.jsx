import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Layout, Avatar, Badge } from 'antd'

const { Header } = Layout



class AppHeader extends Component {
    render() {
        let { menuClick, avatar, menuToggle, show, loginOut } = this.props
        const menu = (
            <Menu>
                <Menu.ItemGroup title='用户设置'>
                    <Menu.Divider />
                    <Menu.Item><Icon type="edit" />个人设置</Menu.Item>
                    <Menu.Item><Icon type="setting" theme="filled" />系统设置</Menu.Item>
                </Menu.ItemGroup>
                <Menu.Divider />
                <Menu.Item><span onClick={loginOut}><Icon type="logout" className='out' /> 退出登录</span></Menu.Item>
            </Menu>
        )
        return (
            <Header className='header'>
                <div className="left">
                    <Icon style={{ fontSize: '2rem' }} onClick={menuClick} type={menuToggle ? "menu-unfold" : "menu-fold"} />
                </div>
                <div className="right">
                    <a rel="noopener noreferrer" href="https://github.com/ltadpoles/react-admin" target='_blank' style={{ color: '#000' }}><Icon type="github" /></a>
                    <div style={{ padding: '0 1.5rem' }}>
                        <Badge dot={show} offset={[-2, 0]}>
                            <a href="https://github.com/ltadpoles/react-admin" style={{ color: '#000' }}><Icon type="bell" /></a>
                        </Badge>
                    </div>
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
import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import CustomMenu from '../components/CustomMenu'

const { Sider } = Layout

class AppAside extends Component {
    render() {
        let { menuToggle, menu } = this.props
        return (
            <Sider className="aside" collapsed={menuToggle}>
                <div className="logo">
                    <a rel="noopener noreferrer" href="https://github.com/ltadpoles" target="_blank">
                        <Icon type="github" style={{ fontSize: '3.8rem', color: '#fff' }} />
                    </a>
                </div>
                <CustomMenu menu={menu}></CustomMenu>
            </Sider>
        )
    }
}

export default AppAside

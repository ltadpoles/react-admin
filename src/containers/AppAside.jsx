import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomMenu from '../components/CustomMenu'

const { Sider } = Layout

class AppAside extends Component {

    render() {
        let { menuToggle, menu } = this.props
        return (
            <Sider className='aside' collapsed={menuToggle}>
                <div className="logo"></div>
                <CustomMenu menu={menu}></CustomMenu>
            </Sider>
        );
    }
}

export default AppAside
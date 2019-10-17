import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomMenu from '../components/CustomMenu'
import logo from '../assets/images/logo.svg'

const { Sider } = Layout

class AppAside extends Component {

    render() {
        let { menuToggle, menu } = this.props
        return (
            <Sider className='aside' collapsed={menuToggle}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <CustomMenu menu={menu}></CustomMenu>
            </Sider>
        );
    }
}

export default AppAside
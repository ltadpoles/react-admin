import React, { Component } from 'react'
import { Layout } from 'antd'
import CustomMenu from '../components/CustomMenu'
import '../style/containers/app-aside.scss'

const { Sider } = Layout

class AppAside extends Component {

    render() {
        let {menuToggle, menu} = this.props
        return (
            <Layout>
                <Sider className='aside' collapsed={menuToggle}>
                    <div className="logo"></div>
                    <CustomMenu menu={menu}></CustomMenu>
                </Sider>
            </Layout>
        );
    }
}
 
export default AppAside
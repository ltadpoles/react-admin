import React from 'react'
import PropTypes from 'prop-types'
import { GithubOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import CustomMenu from '@/components/CustomMenu'

const { Sider } = Layout

const AppAside = props => {
    let { menuToggle, menu } = props
    return (
        <Sider className='aside' collapsed={menuToggle}>
            <div className='logo'>
                <a rel='noopener noreferrer' href='https://github.com/ltadpoles' target='_blank'>
                    <GithubOutlined style={{ fontSize: '3.8rem', color: '#fff' }} />
                </a>
            </div>
            <CustomMenu menu={menu}></CustomMenu>
        </Sider>
    );
}

AppAside.propTypes = {
    menuToggle: PropTypes.bool,
    menu: PropTypes.array.isRequired
}

export default AppAside

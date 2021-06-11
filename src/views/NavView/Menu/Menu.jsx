import React, { useState } from 'react'

import {
    AppstoreOutlined,
    CalendarOutlined,
    DesktopOutlined,
    InboxOutlined,
    MailOutlined,
    PieChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';

import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Layout, Divider, Row, Col, Menu, Button, Switch } from 'antd';
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const { SubMenu } = Menu

const MenuView = () => {
    const [current, setCurrent] = useState('mail')
    const [collapsed, setCollapsed] = useState(false)
    const [openKeys, setOpenkeys] = useState(['sub1'])
    const [mode, setMode] = useState('inline')
    const [theme, setTheme] = useState('light')

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

    const handleClick = e => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
        setOpenkeys(prevState => {
            if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                return openKeys
            } else {
                return latestOpenKey ? [latestOpenKey] : []
            }
        })
    }

    return (
        <Layout className='animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>何时使用</h3>
                <Divider />
                <p>
                    导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
                </p>
            </div>
            <Row gutter={8}>
                <Col>
                    <div className='base-style'>
                        <Divider orientation='left'>顶部导航</Divider>
                        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
                            <Menu.Item key='mail'>
                                <MailOutlined />
                                Navigation One
                            </Menu.Item>
                            <Menu.Item key='app' disabled>
                                <AppstoreOutlined />
                                Navigation Two
                            </Menu.Item>
                            <SubMenu
                                title={
                                    <span className='submenu-title-wrapper'>
                                        <SettingOutlined />
                                        Navigation Three - Submenu
                                    </span>
                                }>
                                <Menu.ItemGroup title='Item 1'>
                                    <Menu.Item key='setting:1'>Option 1</Menu.Item>
                                    <Menu.Item key='setting:2'>Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title='Item 2'>
                                    <Menu.Item key='setting:3'>Option 3</Menu.Item>
                                    <Menu.Item key='setting:4'>Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <Menu.Item key='alipay'>
                                <Button type='link'>Navigation Four - Link</Button>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider>内嵌菜单</Divider>
                        <Menu
                            onClick={handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode='inline'>
                            <SubMenu
                                key='sub1'
                                title={
                                    <span>
                                        <MailOutlined />
                                        <span>Navigation One</span>
                                    </span>
                                }>
                                <Menu.ItemGroup key='g1' title='Item 1'>
                                    <Menu.Item key='1'>Option 1</Menu.Item>
                                    <Menu.Item key='2'>Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key='g2' title='Item 2'>
                                    <Menu.Item key='3'>Option 3</Menu.Item>
                                    <Menu.Item key='4'>Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu
                                key='sub2'
                                title={
                                    <span>
                                        <AppstoreOutlined />
                                        <span>Navigation Two</span>
                                    </span>
                                }>
                                <Menu.Item key='5'>Option 5</Menu.Item>
                                <Menu.Item key='6'>Option 6</Menu.Item>
                                <SubMenu key='sub3' title='Submenu'>
                                    <Menu.Item key='7'>Option 7</Menu.Item>
                                    <Menu.Item key='8'>Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu
                                key='sub4'
                                title={
                                    <span>
                                        <SettingOutlined />
                                        <span>Navigation Three</span>
                                    </span>
                                }>
                                <Menu.Item key='9'>Option 9</Menu.Item>
                                <Menu.Item key='10'>Option 10</Menu.Item>
                                <Menu.Item key='11'>Option 11</Menu.Item>
                                <Menu.Item key='12'>Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>

                    <div className='base-style'>
                        <Divider>只展开当前父级菜单</Divider>
                        <Menu mode='inline' openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
                            <SubMenu
                                key='sub1'
                                title={
                                    <span>
                                        <MailOutlined />
                                        <span>Navigation One</span>
                                    </span>
                                }>
                                <Menu.Item key='1'>Option 1</Menu.Item>
                                <Menu.Item key='2'>Option 2</Menu.Item>
                                <Menu.Item key='3'>Option 3</Menu.Item>
                                <Menu.Item key='4'>Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key='sub2'
                                title={
                                    <span>
                                        <AppstoreOutlined />
                                        <span>Navigation Two</span>
                                    </span>
                                }>
                                <Menu.Item key='5'>Option 5</Menu.Item>
                                <Menu.Item key='6'>Option 6</Menu.Item>
                                <SubMenu key='sub3' title='Submenu'>
                                    <Menu.Item key='7'>Option 7</Menu.Item>
                                    <Menu.Item key='8'>Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu
                                key='sub4'
                                title={
                                    <span>
                                        <SettingOutlined />
                                        <span>Navigation Three</span>
                                    </span>
                                }>
                                <Menu.Item key='9'>Option 9</Menu.Item>
                                <Menu.Item key='10'>Option 10</Menu.Item>
                                <Menu.Item key='11'>Option 11</Menu.Item>
                                <Menu.Item key='12'>Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider>可收缩菜单</Divider>
                        <div style={{ width: 256 }}>
                            <Button
                                type='primary'
                                onClick={() => setCollapsed(!collapsed)}
                                style={{ marginBottom: 16 }}>
                                <LegacyIcon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode='inline'
                                theme='dark'
                                inlineCollapsed={collapsed}>
                                <Menu.Item key='1'>
                                    <PieChartOutlined />
                                    <span>Option 1</span>
                                </Menu.Item>
                                <Menu.Item key='2'>
                                    <DesktopOutlined />
                                    <span>Option 2</span>
                                </Menu.Item>
                                <Menu.Item key='3'>
                                    <InboxOutlined />
                                    <span>Option 3</span>
                                </Menu.Item>
                                <SubMenu
                                    key='sub1'
                                    title={
                                        <span>
                                            <MailOutlined />
                                            <span>Navigation One</span>
                                        </span>
                                    }>
                                    <Menu.Item key='5'>Option 5</Menu.Item>
                                    <Menu.Item key='6'>Option 6</Menu.Item>
                                    <Menu.Item key='7'>Option 7</Menu.Item>
                                    <Menu.Item key='8'>Option 8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key='sub2'
                                    title={
                                        <span>
                                            <AppstoreOutlined />
                                            <span>Navigation Two</span>
                                        </span>
                                    }>
                                    <Menu.Item key='9'>Option 9</Menu.Item>
                                    <Menu.Item key='10'>Option 10</Menu.Item>
                                    <SubMenu key='sub3' title='Submenu'>
                                        <Menu.Item key='11'>Option 11</Menu.Item>
                                        <Menu.Item key='12'>Option 12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>

                    <div className='base-style'>
                        <Divider>可切换动态菜单</Divider>
                        <div>
                            <Switch onChange={val => setMode(() => (val ? 'vertical' : 'inline'))} /> Change Mode
                            <span className='ant-divider' style={{ margin: '0 1em' }} />
                            <Switch onChange={val => setTheme(() => (val ? 'dark' : 'light'))} /> Change Theme
                            <br />
                            <br />
                            <Menu
                                style={{ width: 256 }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode={mode}
                                theme={theme}>
                                <Menu.Item key='1'>
                                    <MailOutlined />
                                    Navigation One
                                </Menu.Item>
                                <Menu.Item key='2'>
                                    <CalendarOutlined />
                                    Navigation Two
                                </Menu.Item>
                                <SubMenu
                                    key='sub1'
                                    title={
                                        <span>
                                            <AppstoreOutlined />
                                            <span>Navigation Three</span>
                                        </span>
                                    }>
                                    <Menu.Item key='3'>Option 3</Menu.Item>
                                    <Menu.Item key='4'>Option 4</Menu.Item>
                                    <SubMenu key='sub1-2' title='Submenu'>
                                        <Menu.Item key='5'>Option 5</Menu.Item>
                                        <Menu.Item key='6'>Option 6</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu
                                    key='sub2'
                                    title={
                                        <span>
                                            <SettingOutlined />
                                            <span>Navigation Four</span>
                                        </span>
                                    }>
                                    <Menu.Item key='7'>Option 7</Menu.Item>
                                    <Menu.Item key='8'>Option 8</Menu.Item>
                                    <Menu.Item key='9'>Option 9</Menu.Item>
                                    <Menu.Item key='10'>Option 10</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
}

export default MenuView

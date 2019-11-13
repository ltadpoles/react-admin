import React from 'react'
import { Layout, Divider, Menu, Dropdown, Icon, Row, Col, message, Button } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/dropdown.scss'

const { SubMenu } = Menu

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`)
}

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key='0'>1st menu item</Menu.Item>
        <Menu.Item key='1'>2nd menu item</Menu.Item>
        <Menu.Item key='2' disabled>
            3rd menu item (disabled)
        </Menu.Item>
        <SubMenu title='sub menu'>
            <Menu.Item>4rd menu item</Menu.Item>
            <Menu.Item>5th menu item</Menu.Item>
        </SubMenu>
    </Menu>
)

function handleButtonClick(e) {
    message.info('Click on left button.')
    console.log('click left button', e)
}
const DropdownView = () => (
    <Layout className='animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>何时使用</h3>
            <Divider />
            <p>
                当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
            </p>
        </div>
        <Row gutter={8}>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown overlay={menu}>
                        <Button type='link'>
                            Hover me <Icon type='down' />
                        </Button>
                    </Dropdown>
                </div>
                <div className='base-style'>
                    <Dropdown overlay={menu} placement='bottomLeft'>
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='bottomCenter'>
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='bottomRight'>
                        <Button>bottomRight</Button>
                    </Dropdown>
                    <br />
                    <Dropdown overlay={menu} placement='topLeft'>
                        <Button>topLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='topCenter'>
                        <Button>topCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement='topRight'>
                        <Button>topRight</Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button type='link'>
                            Click me <Icon type='down' />
                        </Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <div id='components-dropdown-demo-dropdown-button'>
                        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button overlay={menu} icon={<Icon type='user' />}>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
                            Dropdown
                        </Dropdown.Button>
                        <Dropdown overlay={menu}>
                            <Button>
                                Button <Icon type='down' />
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </Col>
        </Row>
    </Layout>
)

export default DropdownView

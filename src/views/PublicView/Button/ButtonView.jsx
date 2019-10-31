import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/button.scss'

import { Layout, Row, Col, Button, Divider, Icon } from 'antd'

const ButtonGroup = Button.Group

class ButtonView extends Component {
    state = {
        loading: false,
        iconLoading: false
    }

    enterLoading = () => {
        this.setState({ loading: true })
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true })
    }
    render() {
        return (
            <Layout className='button animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['通用', '按钮']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
                </div>
                <div>
                    <Row gutter={8}>
                        <Col span={12}>
                            <div className='base-style'>
                                <Button type='primary'>Primary</Button>
                                <Button>Default</Button>
                                <Button type='dashed'>Dashed</Button>
                                <Button type='danger'>Danger</Button>
                                <Button type='link'>Link</Button>
                            </div>
                            <div className='base-style'>
                                <Button type='primary' loading>
                                    Loading
                                </Button>
                                <Button type='primary' size='small' loading>
                                    Loading
                                </Button>
                                <Button type='primary' loading={this.state.loading} onClick={this.enterLoading}>
                                    Click me!
                                </Button>
                                <Button
                                    type='primary'
                                    icon='poweroff'
                                    loading={this.state.iconLoading}
                                    onClick={this.enterIconLoading}>
                                    Click me!
                                </Button>
                                <Button type='primary' loading />
                                <Button type='primary' shape='circle' loading />
                                <Button type='danger' shape='round' loading />
                            </div>
                            <div className='base-style'>
                                <h4>Basic</h4>
                                <ButtonGroup>
                                    <Button>large</Button>
                                    <Button>small</Button>
                                    <Button>mini</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button disabled>L</Button>
                                    <Button disabled>M</Button>
                                    <Button disabled>R</Button>
                                </ButtonGroup>

                                <h4>With Icon</h4>
                                <ButtonGroup>
                                    <Button type='primary'>
                                        <Icon type='left' />
                                        Go back
                                    </Button>
                                    <Button type='primary'>
                                        Go forward
                                        <Icon type='right' />
                                    </Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button type='primary' icon='cloud' />
                                    <Button type='primary' icon='cloud-download' />
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button type='primary' size='small' icon='cloud' />
                                    <Button type='primary' size='small' icon='cloud-download' />
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className='base-style'>
                                <Button type='primary' shape='circle' icon='search' />
                                <Button type='primary' shape='circle'>
                                    A
                                </Button>
                                <Button type='primary' icon='search'>
                                    Search
                                </Button>
                                <Button shape='circle' icon='search' />
                                <Button icon='search'>Search</Button>
                                <Button type='dashed' shape='circle' icon='search' />
                                <Button type='dashed' icon='search'>
                                    Search
                                </Button>
                            </div>
                            <div className='base-style'>
                                <Button type='primary'>Primary</Button>
                                <Button type='primary' disabled>
                                    Primary(disabled)
                                </Button>
                                <Button>Default</Button>
                                <Button disabled>Default(disabled)</Button>
                                <Button type='dashed'>Dashed</Button>
                                <Button type='dashed' disabled>
                                    Dashed(disabled)
                                </Button>
                            </div>
                            <div className='base-style'>
                                <Button type='primary' block>
                                    Primary
                                </Button>
                                <Button block>Default</Button>
                                <Button type='dashed' block>
                                    Dashed
                                </Button>
                                <Button type='danger' block>
                                    Danger
                                </Button>
                                <Button type='link' block>
                                    Link
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Layout>
        )
    }
}

export default ButtonView

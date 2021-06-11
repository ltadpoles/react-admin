import React, { useState } from 'react'
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Divider, Row, Col, Steps, Button, message } from 'antd';
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/step.scss'

const { Step } = Steps

const steps = [
    {
        title: 'First',
        content: 'First-content'
    },
    {
        title: 'Second',
        content: 'Second-content'
    },
    {
        title: 'Last',
        content: 'Last-content'
    }
]

const StepView = () => {
    const [current, setCurrent] = useState(0)

    return (
        <Layout className='animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['导航', '下拉菜单']}></CustomBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>何时使用</h3>
                <Divider />
                <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
            </div>
            <Row gutter={8}>
                <Col span={12}>
                    <div className='base-style'>
                        <Steps direction='vertical' current={1}>
                            <Step title='Finished' description='This is a description.' />
                            <Step title='In Progress' description='This is a description.' />
                            <Step title='Waiting' description='This is a description.' />
                        </Steps>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Steps direction='vertical' size='small' current={1}>
                            <Step title='Finished' description='This is a description.' />
                            <Step title='In Progress' description='This is a description.' />
                            <Step title='Waiting' description='This is a description.' />
                        </Steps>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='base-style'>
                        <Steps current={1}>
                            <Step title='Finished' description='This is a description.' />
                            <Step title='In Progress' subTitle='Left 00:00:08' description='This is a description.' />
                            <Step title='Waiting' description='This is a description.' />
                        </Steps>
                    </div>
                </Col>
                <Col>
                    <div className='base-style'>
                        <Steps size='small' current={1}>
                            <Step title='Finished' />
                            <Step title='In Progress' />
                            <Step title='Waiting' />
                        </Steps>
                    </div>
                </Col>
                <Col>
                    <div className='base-style'>
                        <Steps>
                            <Step status='finish' title='Login' icon={<UserOutlined />} />
                            <Step status='finish' title='Verification' icon={<SolutionOutlined />} />
                            <Step status='process' title='Pay' icon={<LoadingOutlined />} />
                            <Step status='wait' title='Done' icon={<SmileOutlined />} />
                        </Steps>
                    </div>
                </Col>
                <Col>
                    <div className='base-style'>
                        <div>
                            <Steps current={current} onChange={current => setCurrent(current)}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <div className='steps-content'>{steps[current].content}</div>
                            <div className='steps-action'>
                                {current < steps.length - 1 && (
                                    <Button type='primary' onClick={() => setCurrent(current + 1)}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type='primary' onClick={() => message.success('Processing complete!')}>
                                        Done
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button style={{ marginLeft: 8 }} onClick={() => setCurrent(current - 1)}>
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='base-style'>
                        <Steps current={1} status='error'>
                            <Step title='Finished' description='This is a description' />
                            <Step title='In Process' description='This is a description' />
                            <Step title='Waiting' description='This is a description' />
                        </Steps>
                    </div>
                </Col>
            </Row>
        </Layout>
    );
}

export default StepView

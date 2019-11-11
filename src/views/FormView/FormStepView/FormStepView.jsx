import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Steps, Button, Form, Input, Select, Alert, Result } from 'antd'
import '@/style/view-style/form.scss'

const { Step } = Steps
const { Option } = Select

const formItemLayout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 8
    }
}

const tailFormItemLayout = {
    wrapperCol: {
        offset: 8
    }
}

class Step1 extends Component {
    handleSelectChange = value => {
        this.props.form.setFieldsValue({
            Email: `${value === 'kenan' ? 'kenan@google.com' : 'maoli@google.com'}`
        })
    }

    step1Submit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, val) => {
            if (!err) {
                this.props.getFormData(val)
                this.props.setCurrent(1)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const selectBefore = getFieldDecorator('Type', {
            initialValue: 'twitter'
        })(
            <Select style={{ width: '8rem' }}>
                <Option value='twitter'>twitter</Option>
                <Option value='facebook'>facebook</Option>
                <Option value='weixin'>微信</Option>
            </Select>
        )
        return (
            <div>
                <Form hideRequiredMark {...formItemLayout}>
                    <Form.Item label='接收人'>
                        {getFieldDecorator('User', {
                            initialValue: '柯南',
                            rules: [
                                {
                                    required: true,
                                    message: '请选择接收人'
                                }
                            ]
                        })(
                            <Select onChange={this.handleSelectChange}>
                                <Option value='柯南'>柯南</Option>
                                <Option value='毛利大叔'>毛利大叔</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label='接收邮箱'>
                        {getFieldDecorator('Email', {
                            initialValue: 'kenan@google.com',
                            rules: [
                                {
                                    required: true,
                                    message: '请选择接收人'
                                }
                            ]
                        })(
                            <Select disabled>
                                <Option value='kenan@google.com'>kenan@google.com</Option>
                                <Option value='maoli@google.com'>maoli@google.com</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label='暗号'>
                        {getFieldDecorator('Password', {
                            initialValue: '真相只有一个!',
                            rules: [
                                {
                                    required: true,
                                    message: '请输入对接暗号'
                                }
                            ]
                        })(<Input placeholder='请输入对接暗号' />)}
                    </Form.Item>
                    <Form.Item label='联系方式'>
                        {getFieldDecorator('Code', {
                            initialValue: 'kenan0528',
                            rules: [
                                {
                                    required: true,
                                    message: '请输入联系方式'
                                }
                            ]
                        })(<Input addonBefore={selectBefore} placeholder='请输入联系方式' />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type='primary' onClick={this.step1Submit}>
                            下一步
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

class Step2From extends Component {
    state = {
        visible: true,
        iconLoading: false
    }

    handleClose = () => {
        this.setState({ visible: false })
    }

    step2Submit = () => {
        this.setState({ iconLoading: true })
        setTimeout(() => {
            this.setState({ iconLoading: false })
            this.props.setCurrent(2)
        }, 2000)
    }
    step2Cancle = () => {
        this.props.setCurrent(0)
    }
    render() {
        const { formData } = this.props
        return (
            <div>
                <Row>
                    <Col span={8} offset={8}>
                        {this.state.visible ? (
                            <Alert
                                message='请确保输入正确的暗号，不然他们可能不会理你哦!'
                                type='warning'
                                closable
                                banner
                                afterClose={this.handleClose}
                                {...formItemLayout}
                            />
                        ) : null}
                    </Col>
                </Row>
                <Form hideRequiredMark {...formItemLayout} className='show-data'>
                    <Form.Item label='接收人'>{formData.User}</Form.Item>
                    <Form.Item label='接收邮箱'>{formData.Email}</Form.Item>
                    <Form.Item label='暗号'>{formData.Password}</Form.Item>
                    <Form.Item label='联系渠道'>{formData.Type}</Form.Item>
                    <Form.Item label='联系方式'>{formData.Code}</Form.Item>
                    <Divider />
                    <Form.Item {...tailFormItemLayout}>
                        <Button type='primary' loading={this.state.iconLoading} onClick={this.step2Submit}>
                            发送
                        </Button>
                        <Button onClick={this.step2Cancle}>上一步</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

class Step3From extends Component {
    oneMore = () => {
        this.props.setCurrent(0)
    }
    render() {
        return (
            <Result
                status='success'
                title='发送成功!'
                subTitle='耐心地等待好消息吧!'
                extra={[
                    <Button type='primary' key='console' onClick={this.oneMore}>
                        再发一封
                    </Button>,
                    <Button key='buy'>查看记录</Button>
                ]}
            />
        )
    }
}

const Step1From = Form.create()(Step1)

class FormStepView extends Component {
    state = {
        current: 0,
        formData: null
    }

    getFormData = val => {
        this.setState({
            formData: val
        })
    }

    setCurrent = val => {
        this.setState({
            current: val
        })
    }

    render() {
        const { current, formData } = this.state
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['表单', '步骤表单']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当用户需要分步收集不同信息时</p>
                </div>
                <Row>
                    <Col>
                        <div className='base-style'>
                            <Divider orientation='left'>分步表单</Divider>
                            <div>
                                <Steps style={{ margin: '3rem auto', maxWidth: '65rem' }} current={current}>
                                    <Step title='填写接收信息'></Step>
                                    <Step title='确认接收信息'></Step>
                                    <Step title='完成'></Step>
                                </Steps>

                                {current === 0 && (
                                    <Step1From getFormData={this.getFormData} setCurrent={this.setCurrent} />
                                )}
                                {current === 1 && <Step2From formData={formData} setCurrent={this.setCurrent} />}
                                {current === 2 && <Step3From setCurrent={this.setCurrent} />}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default FormStepView

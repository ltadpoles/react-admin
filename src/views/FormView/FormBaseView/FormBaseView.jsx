import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import {
    Alert,
    Layout,
    Row,
    Col,
    Divider,
    Form,
    Button,
    Icon,
    Input,
    InputNumber,
    Checkbox,
    Tooltip,
    Cascader,
    Select,
    DatePicker,
    Radio,
    Rate,
    Switch,
    Slider,
    AutoComplete,
    message
} from 'antd'
import '@/style/view-style/form.scss'

const { Option } = Select
const AutoCompleteOption = AutoComplete.Option

const residences = [
    {
        value: 'sichuan',
        label: '四川',
        children: [
            {
                value: 'chengdu',
                label: '成都',
                children: [
                    {
                        value: 'gaoxin',
                        label: '高新区'
                    }
                ]
            }
        ]
    },
    {
        value: 'gansu',
        label: '甘肃',
        children: [
            {
                value: 'lanzhou',
                label: '兰州',
                children: [
                    {
                        value: 'anning',
                        label: '安宁区'
                    }
                ]
            }
        ]
    }
]

class FromView extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        visible: true
    }

    handleClose = () => {
        this.setState({ visible: false })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
            if (err) return
            const values = {
                ...fieldsValue,
                'date-picker': fieldsValue['date-picker'] ? fieldsValue['date-picker'].format('YYYY-MM-DD') : ''
            }
            console.log('这就是你填好的数据' + values)
            message.info('你很棒哦,这么快就填好了!')
        })
    }

    handleConfirmBlur = e => {
        const { value } = e.target
        this.setState({ confirmDirty: this.state.confirmDirty || !!value })
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入密码不一致!')
        } else {
            callback()
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true })
        }
        callback()
    }

    handleWebsiteChange = value => {
        let autoCompleteResult
        if (!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = ['@google.com', '@163.com', '@qq.com'].map(domain => `${value}${domain}`)
        }
        this.setState({ autoCompleteResult })
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form

        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 10 }
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 16,
                    offset: 0
                },
                sm: {
                    span: 10,
                    offset: 6
                }
            }
        }
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86'
        })(
            <Select style={{ width: 70 }}>
                <Option value='86'>+86</Option>
                <Option value='87'>+87</Option>
            </Select>
        )

        const websiteOptions = this.state.autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ))

        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['表单', '基础表单']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider></Divider>
                    <p>用于创建一个实体或收集信息。</p>
                    <p>需要对输入的数据类型进行校验时。</p>
                </div>

                <Row>
                    <Col>
                        <div className='base-style'>
                            <div>
                                {this.state.visible ? (
                                    <Alert
                                        message='你最好认真的填写表单!'
                                        type='warning'
                                        closable
                                        banner
                                        afterClose={this.handleClose}
                                    />
                                ) : null}
                            </div>
                            <Divider orientation='left'>基础功能</Divider>
                            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                                <Form.Item
                                    label={
                                        <span>
                                            用户名&nbsp;
                                            <Tooltip title='可以尽量好听点，真的!'>
                                                <Icon type='question-circle-o' />
                                            </Tooltip>
                                        </span>
                                    }>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请输入用户名' }]
                                    })(<Input placeholder='请输入用户名' />)}
                                </Form.Item>
                                <Form.Item label='性别'>
                                    {getFieldDecorator('sex', {
                                        rules: [{ required: true, message: '请选择性别' }]
                                    })(
                                        <Radio.Group>
                                            <Radio value='man'>男</Radio>
                                            <Radio value='women'>女</Radio>
                                            <Radio value='unknow'>不详</Radio>
                                        </Radio.Group>
                                    )}
                                </Form.Item>
                                <Form.Item label='爱好'>
                                    {getFieldDecorator('hobby', {
                                        rules: [{ required: true, message: '请至少选择一个爱好' }],
                                        initialValue: ['A', 'B']
                                    })(
                                        <Checkbox.Group style={{ width: '100%' }}>
                                            <Row>
                                                <Col span={8}>
                                                    <Checkbox value='A'>A</Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox disabled value='B'>
                                                        B
                                                    </Checkbox>
                                                </Col>
                                                <Col span={8}>
                                                    <Checkbox value='C'>C</Checkbox>
                                                </Col>
                                            </Row>
                                        </Checkbox.Group>
                                    )}
                                </Form.Item>
                                <Form.Item label='年龄'>
                                    {getFieldDecorator('age', {
                                        rules: [{ required: true, message: '请输入年龄' }]
                                    })(<InputNumber placeholder='请输入年龄' style={{ width: '100%' }} />)}
                                </Form.Item>
                                <Form.Item label='出生年月'>
                                    {getFieldDecorator('date-picker', {
                                        rules: [{ type: 'object', required: true, message: '请选择日期' }]
                                    })(<DatePicker style={{ width: '100%' }} placeholder='请选择日期' />)}
                                </Form.Item>

                                <Form.Item label='邮箱'>
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {
                                                type: 'email',
                                                message: '请输入正确的邮箱!'
                                            },
                                            {
                                                required: true,
                                                message: '请输入邮箱'
                                            }
                                        ]
                                    })(
                                        <AutoComplete
                                            dataSource={websiteOptions}
                                            onChange={this.handleWebsiteChange}
                                            placeholder='请输入邮箱'>
                                            <Input />
                                        </AutoComplete>
                                    )}
                                </Form.Item>
                                <Form.Item label='密码' hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入密码!'
                                            },
                                            {
                                                validator: this.validateToNextPassword
                                            }
                                        ]
                                    })(<Input.Password placeholder='请输入密码' />)}
                                </Form.Item>
                                <Form.Item label='确认密码' hasFeedback>
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请确认密码!'
                                            },
                                            {
                                                validator: this.compareToFirstPassword
                                            }
                                        ]
                                    })(<Input.Password onBlur={this.handleConfirmBlur} placeholder='请确认密码' />)}
                                </Form.Item>
                                <Form.Item label='家庭住址'>
                                    {getFieldDecorator('adress', {
                                        initialValue: ['sichuan', 'chengdu', 'gaoxin'],
                                        rules: [{ type: 'array', required: true, message: '请选择住址!' }]
                                    })(<Cascader options={residences} placeholder='请选择住址' />)}
                                </Form.Item>
                                <Form.Item label='联系电话' extra='你最好写真实的电话号码.'>
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: '请输入联系电话!' }]
                                    })(<Input addonBefore={prefixSelector} />)}
                                </Form.Item>
                                <Form.Item label='评分' extra='这个项目怎么样.'>
                                    {getFieldDecorator('rate', {
                                        initialValue: 5
                                    })(<Rate disabled allowHalf />)}
                                </Form.Item>
                                <Form.Item label='switch'>
                                    {getFieldDecorator('switch', {
                                        valuePropName: 'checked',
                                        initialValue: true
                                    })(<Switch />)}
                                </Form.Item>
                                <Form.Item label='slider'>
                                    {getFieldDecorator('slider', {
                                        initialValue: 30
                                    })(<Slider disabled={getFieldValue('switch') ? false : true} />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    {getFieldDecorator('agreement', {
                                        valuePropName: 'checked'
                                    })(
                                        <Checkbox>
                                            阅读并理解 <a href='https://github.com/ltadpoles'>此协议</a>
                                        </Checkbox>
                                    )}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button
                                        type='primary'
                                        htmlType='submit'
                                        disabled={getFieldValue('agreement') ? false : true}>
                                        注册
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FromView)

export default WrappedNormalLoginForm

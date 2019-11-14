import React, { useState, useEffect } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
// import axios from '@/api'
// import { API } from '@/api/config'
import '@/style/view-style/login.scss'

const Login = props => {
    const [loading, setLoading] = useState(false)

    const { getFieldDecorator } = props.form

    const handleSubmit = e => {
        e.preventDefault()
        props.form.validateFields((err, values) => {
            if (!err) {
                // let { username, password } = values
                // axios
                //     .post(`${API}/login`, { username, password })
                //     .then(res => {
                //         if (res.data.code === 0) {
                //             localStorage.setItem('user', JSON.stringify(res.data.data.user))
                //             localStorage.setItem('token', res.data.data.token)
                //             props.history.push('/')
                //             message.success('登录成功!')
                //         } else {
                //             // 这里处理一些错误信息
                //         }
                //     })
                //     .catch(err => {})

                // 这里可以做权限校验 模拟接口返回用户权限标识
                switch (values.username) {
                    case 'admin':
                        values.auth = 0
                        break
                    default:
                        values.auth = 1
                }

                localStorage.setItem('user', JSON.stringify(values))
                setLoading(true)
                setTimeout(() => {
                    message.success('登录成功!')
                    props.history.push('/')
                }, 2000)
            }
        })
    }

    useEffect(() => {
        notification.open({
            message: '欢迎使用后台管理平台',
            duration: null,
            description: '账号 admin(管理员) 其他(游客) 密码随意'
        })
        return () => {
            notification.destroy()
        }
    }, [])

    return (
        <Layout className='login animated fadeIn'>
            <div className='model'>
                <div className='login-form'>
                    <h3>后台管理系统</h3>
                    <Divider />
                    <Form onSubmit={handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }]
                            })(
                                <Input
                                    prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='用户名'
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }]
                            })(
                                <Input
                                    prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type='password'
                                    placeholder='密码'
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button' loading={loading}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(Form.create()(Login))

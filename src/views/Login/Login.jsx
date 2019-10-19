import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message } from 'antd'
import { withRouter } from 'react-router-dom'
import axios from '../../api'
import '../../style/view-style/login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios({
                    url: 'http://rap2api.taobao.org/app/mock/234047/login',
                    method: 'post',
                    data: {
                        username: values.username,
                        password: values.password
                    }
                }).then(res => {
                    console.log(res.data.code)
                    if (res.data.code === 0) {
                        // 请求成功
                        localStorage.setItem('user', JSON.stringify(res.data.data.user))
                        this.props.history.push('/')
                        message.success('登录成功!')
                    } else {
                        // 这里处理一些错误信息
                    }
                })
            }
        });
    };

    componentDidMount() {
        // notification.open({
        //     message: '欢迎使用后台管理平台',
        //     duration: null,
        //     description:
        //         '账号:admin  密码:admin'
        // });
    }

    componentWillUnmount() {
        // notification.destroy()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Layout className='login animated fadeIn'>
                <div className="model">
                    <div className="login-form">
                        <h3>后台管理系统</h3>
                        <Divider />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className='login-form-button'>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withRouter(Form.create()(Login));
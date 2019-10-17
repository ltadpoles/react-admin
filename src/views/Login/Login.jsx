import React, { Component } from 'react'
import { Layout, Input, Icon, Form, Button, Divider, message, notification } from 'antd'
import { withRouter } from 'react-router-dom'
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
                if (values.username === 'admin' && values.password === 'admin') {
                    // 这里可以做一些请求 成功登录之后将信息或者token保存起来
                    localStorage.setItem('user', JSON.stringify(values))
                    this.props.history.push('/')
                    message.success('登录成功!')
                } else {
                    message.warning('用户名或密码错误，请重新输入!');
                }
            }
        });
    };

    componentDidMount() {
        notification.open({
            message: '欢迎使用后台管理平台',
            duration: null,
            description:
                '账号:admin  密码:admin'
        });
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
                                    登陆
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
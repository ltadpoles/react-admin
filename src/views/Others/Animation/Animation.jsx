import React, { Component } from 'react'
import { Layout, Divider, Row, Col, Button } from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import 'animate.css'

const animationType = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada']

class AnimationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontType: 'animated bounce'
        }
    }
    changeType = v => {
        console.log(v)
        this.setState({
            fontType: `animated ${v}`
        })
    }
    render() {
        return (
            <Layout>
                <div>
                    <CustomBreadcrumb arr={['其他', '动画']}></CustomBreadcrumb>
                </div>
                <div className="base-style">
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当页面需要动态效果时。</p>
                </div>
                <Row>
                    <Col>
                        <div className="base-style">
                            <Divider orientation='left'>进场</Divider>
                            {
                                animationType.map((v, i) => (
                                    <Button key={i} onClick={this.changeType.bind(this, v)}>{v}</Button>
                                ))
                            }
                            <div style={{ fontSize: '4.8rem', textAlign: 'center', padding: '3rem'}} className={this.state.fontType}>
                                Animate.css
                            </div>
                        </div>

                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default AnimationView;
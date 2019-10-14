import React, { Component } from 'react'
import { Layout, Divider, Row, Col, Button, Tabs } from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import '../../../style/view-style/animation.scss'
import 'animate.css'

const { TabPane } = Tabs
const typeIn = ['bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'zoomIn', 'rotateIn']
const typeOut = ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeInDown', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'rotateOut']
const typeOther = ['bounceIn', 'bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello']

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
                <Row gutter={8}>
                    <Col span={10}>
                        <div className="base-style">
                            <Tabs type="card">
                                <TabPane tab="进场" key="1">
                                    {
                                        typeIn.map((v, i) => (
                                            <Button type="primary" size='small' key={i} onClick={this.changeType.bind(this, v)}>{v}</Button>
                                        ))
                                    }
                                </TabPane>
                                <TabPane tab="出场" key="2">
                                    {
                                        typeOut.map((v, i) => (
                                            <Button type="primary" size='small' key={i} onClick={this.changeType.bind(this, v)}>{v}</Button>
                                        ))
                                    }
                                </TabPane>
                                <TabPane tab="其它" key="3">
                                    {
                                        typeOther.map((v, i) => (
                                            <Button type="primary" size='small' key={i} onClick={this.changeType.bind(this, v)}>{v}</Button>
                                        ))
                                    }
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={14}>
                        <div className="base-style">
                            <div style={{ fontSize: '4.8rem', textAlign: 'center', padding: '3rem' }} className={this.state.fontType}>
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
import React, { Component } from 'react'
import { Layout, Row, Col, Icon } from 'antd'
import '../../style/view-style/index.scss'

import BarEcharts from './bar.jsx'
import CircleEcharts from './circle.jsx'




class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout className='index'>
                <Row gutter={24} className='index-header'>
                    <Col span={6}>
                        <div className="base-style wechat">
                            <Icon type="wechat" className='icon-style' />
                            <div>
                                <span>999</span>
                                <div>微信</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="base-style qq">
                            <Icon type="qq" className='icon-style' />
                            <div>
                                <span>366</span>
                                <div>QQ</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="base-style dingding">
                            <Icon type="dingding" className='icon-style' />
                            <div>
                                <span>666</span>
                                <div>钉钉</div>
                            </div>
                        </div>
                    </Col><Col span={6}>
                        <div className="base-style weibo">
                            <Icon type="weibo" className='icon-style' />
                            <div>
                                <span>689</span>
                                <div>微博</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row> 
                    <Col>
                        <div className="base-style">
                            <BarEcharts />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={8}>
                        <div className="base-style">
                            {/* <CircleEcharts /> */}
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Index;
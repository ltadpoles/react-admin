import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Divider } from 'antd'
import screenfull from 'screenfull'
import '@/style/view-style/index.scss'

import BarEcharts from './bar.jsx'

class Index extends Component {
    fullToggle = () => {
        if (screenfull.isEnabled) {
            screenfull.request(document.getElementById('bar'))
        }
    }
    render() {
        return (
            <Layout className='index animated fadeIn'>
                <Row>
                    <Col>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>版本信息管理展示</div>
                                <Icon type='fullscreen' style={{ cursor: 'pointer' }} onClick={this.fullToggle} />
                            </div>
                            {/* <Divider /> */}
                            <p>放置一些版本信息数据，例如</p>
                            <Divider />
                            <BarEcharts />
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Index

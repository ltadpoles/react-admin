import React, { Component } from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb'

class TestView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Layout>
                <div>
                    <CustomBreadcrumb arr={['多级导航']}></CustomBreadcrumb>
                </div>
                <div className="base-style">
                    <h3>多级导航</h3>
                    <Divider />
                    <p>这个是多级导航</p>
                </div>
            </Layout>
        )
    }
}

export default TestView

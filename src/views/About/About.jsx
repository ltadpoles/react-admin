import React, { Component } from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb'

class AboutView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout>
                <div>
                    <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
                </div>
                <div className="base-style">
                    <h3>关于作者</h3>
                    <Divider />
                </div>
            </Layout>
        );
    }
}

export default AboutView;
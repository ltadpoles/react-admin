import React, { Component } from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import { Layout, Divider } from 'antd';

class FormStepView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout>
                <div>
                    <CustomBreadcrumb arr={['表单', '步骤表单']}></CustomBreadcrumb>
                </div>
                <div className="base-style">
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当用户需要确认不同信息时</p>
                </div>
            </Layout>
        );
    }
}

export default FormStepView;
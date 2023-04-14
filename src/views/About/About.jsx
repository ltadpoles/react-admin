import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const AboutView = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>WFS</h3>
            <Divider />
            <p>介绍WFS的基本功能，版本更新情况</p>
        </div>
    </Layout>
)
export default AboutView

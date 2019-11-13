import React from 'react'
import { Layout, Divider } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const AboutView = () => (
    <Layout>
        <div>
            <CustomBreadcrumb arr={['关于']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>关于作者</h3>
            <Divider />
            <p>这个人很懒，什么都没有留下……</p>
        </div>
    </Layout>
)
export default AboutView

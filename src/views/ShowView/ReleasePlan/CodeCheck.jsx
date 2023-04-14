import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tag, Table, Button, Anchor } from 'antd'
import '@/style/view-style/table.scss'

const { Column } = Table
const { Link } = Anchor

const columns = [
    {
        title: 'FE/BE',
        dataIndex: 'fe_be',
        key: 'fe_be'
        // render: text => <Button type='link'>{text}</Button>
    },
    {
        title: 'Service',
        dataIndex: 'service',
        key: 'service'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: '代码合入检查结果',
        key: 'merged',
        dataIndex: 'merged',
        render: reporter => (
            <span>
                {reporter.map(reporter => {
                    let color = reporter.length > 2 ? 'success' : 'error'
                    return (
                        <Tag color={color} key={reporter}>
                            {reporter.toUpperCase()}
                        </Tag>
                    )
                })}
            </span>
        )
    },
    {
        title: '代码合并错误信息',
        dataIndex: 'merged_message',
        key: 'merged_message'
    }
]

const Table1 = () => <Table columns={columns} dataSource={data} />

const data = []
for (let i = 0; i < 46; i++) {
    let merge = i % 2 === 0 ? 'Yes' : 'No'
    data.push({
        key: i,
        fe_be: `BE`,
        service: `Account`,
        type: `Task`,
        merged: [merge],
        merged_message: ''
    })
}

const CodeCheckView = () => (
    <Layout className='animated fadeIn'>
        <Row>
            <Col>
                <div className='base-style'>
                    <Table1 />
                </div>
            </Col>
        </Row>
    </Layout>
)

export default CodeCheckView

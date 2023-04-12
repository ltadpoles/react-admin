import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tag, Table, Button, Anchor } from 'antd'
import '@/style/view-style/table.scss'

const { Column } = Table
const { Link } = Anchor

const columns = [
    {
        title: 'Stage',
        dataIndex: 'stage',
        key: 'stage',
        render: text => <Button type='link'>{text}</Button>
    },
    {
        title: 'ServiceType',
        dataIndex: 'service_type',
        key: 'service_type'
    },
    {
        title: 'Service',
        dataIndex: 'service',
        key: 'service'
    },
    {
        title: 'Owner',
        key: 'owner',
        dataIndex: 'owner',
        render: reporter => (
            <span>
                {reporter.map(reporter => {
                    let color = reporter.length > 5 ? 'geekblue' : 'green'
                    if (reporter === 'loser') {
                        color = 'volcano'
                    }
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
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button type='link'>Invite {record.name}</Button>
                <Divider type='vertical' />
                <Button type='link'>Delete</Button>
            </span>
        )
    }
]

const Table1 = () => <Table columns={columns} dataSource={data} />

const data = []
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        stage: `${i + 1}`,
        service_type: `BE`,
        service: `London, Park Lane no. ${i}`,
        owner: ['nice', 'developer']
    })
}

const ConfigView = () => (
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

export default ConfigView

import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tag, Table, Button, Anchor } from 'antd'
import '@/style/view-style/table.scss'

const { Column } = Table
const { Link } = Anchor

const columns = [
    {
        title: 'JiraId',
        dataIndex: 'jira_id',
        key: 'jira_id',
        render: text => <Button type='link'>{text}</Button>
    },
    {
        title: 'TaskName',
        dataIndex: 'task_name',
        key: 'task_ame'
    },
    {
        title: 'Assignee',
        dataIndex: 'assignee',
        key: 'assignee'
    },
    {
        title: 'Reporter',
        key: 'reporter',
        dataIndex: 'reporter',
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

const data = []
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        jira_id: `${i + 1}`,
        task_name: `Edward King ${i}`,
        assignee: `London, Park Lane no. ${i}`,
        reporter: ['nice', 'developer']
    })
}

const Table1 = () => <Table columns={columns} dataSource={data} />

const VersionView = () => (
    <Layout className='animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['版本管理', '版本号']}></CustomBreadcrumb>
        </div>

        <Row>
            <Col>
                <div className='base-style'>
                    <h3 id='basic'>版本列表页</h3>
                    <Divider />
                    <Table1 />
                </div>
            </Col>
        </Row>
    </Layout>
)

export default VersionView

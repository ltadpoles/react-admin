import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tag, Table, Button, Anchor } from 'antd'
import '@/style/view-style/table.scss'

const { Column } = Table
const { Link } = Anchor

const columns = [
    {
        title: 'Jira Id',
        dataIndex: 'jiraid',
        key: 'jiraid',
        render: text => <Button type='link'>{text}</Button>
    },
    {
        title: 'Ticket Name',
        dataIndex: 'ticket_name',
        key: 'ticket_name'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: reporter => (
            <span>
                {reporter.map(reporter => {
                    let color = reporter.length > 3 ? 'geekblue' : 'green'
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
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: reporter => (
            <span>
                {reporter.map(reporter => {
                    let color = reporter.length > 4 ? 'success' : 'error'
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
        title: 'Assignee',
        dataIndex: 'assignee',
        key: 'assignee'
    },
    {
        title: 'Reporter',
        dataIndex: 'reporter',
        key: 'reporter'
    }
]

const Table1 = () => <Table columns={columns} dataSource={data} />

const data = []
for (let i = 0; i < 46; i++) {
    let typeName = i % 2 === 0 ? 'Task' : 'Bug'
    let status = i % 2 === 0 ? 'Doing' : 'Done'
    data.push({
        key: i,
        jiraid: `spcsp-${i + 1}`,
        ticket_name: `eeeee`,
        type: [typeName],
        status: [status],
        assignee: 'yi.he@shopee.com',
        reporter: 'yi.he@shopee.com'
    })
}

const TaskView = () => (
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

export default TaskView

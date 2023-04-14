import type { ProColumns } from '@ant-design/pro-components'
import { EditableProTable, ProCard, ProFormField, ProFormRadio } from '@ant-design/pro-components'
import React, { useState, Space, Tag } from 'react'

const waitTime = (time: number = 100) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}
type DataSourceType = {
    id: React.Key,
    reporter?: string,
    jiraid?: string,
    tenant?: string,
    service?: string,
    type?: string,
    detail?: string,
    published?: string,
    comment?: string
}

const defaultData: DataSourceType[] = [
    {
        id: 624748504,
        reporter: 'yi.he@shopee.com',
        jiraid: 'spcsp-123',
        tenant: 'shopee',
        service: 'account',
        type: 'task',
        detail: 'eeeeeeerrrrrrrrrrrrrrr',
        published: 'yes',
        comment: '发布前更新'
    },
    {
        id: 624748505,
        reporter: 'yi.he@shopee.com',
        jiraid: 'spcsp-123',
        tenant: 'shopee',
        service: 'account',
        type: 'task',
        detail: 'eeeeeee',
        published: 'no',
        comment: ''
    }
]

export default function ConfigView() {
    // 实现一个可编辑表格
    const [editableKeys, setEditableRowKeys] = useState([])
    const [dataSource, setDataSource] = useState([])
    //   const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

    const columns: ProColumns[] = [
        {
            title: 'Reporter',
            dataIndex: 'reporter',
            width: '15%'
        },
        {
            title: 'JiraId',
            dataIndex: 'jiraid',
            width: '15%'
        },
        {
            title: 'Tenant',
            dataIndex: 'tenant',
            width: '15%'
        },
        {
            title: 'Service',
            dataIndex: 'service',
            width: '15%'
        },
        {
            title: 'Type',
            dataIndex: 'type',
            width: '15%',
            valueType: 'select',
            valueEnum: {
                task: {
                    text: 'Task'
                },
                bug: {
                    text: 'Bug'
                }
            }
        },
        {
            title: 'Detail',
            dataIndex: 'detail',
            width: '15%'
        },
        {
            title: 'Published',
            dataIndex: 'published',
            width: '15%',
            valueType: 'select',
            valueEnum: {
                no: {
                    text: 'No',
                    status: 'Error'
                },
                yes: {
                    text: 'Yes',
                    status: 'Success'
                }
            }
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            width: '15%'
        },
        {
            title: 'Action',
            valueType: 'option',
            width: 200,
            render: (text, record, _, action) => [
                <a
                    key='editable'
                    onClick={() => {
                        action?.startEditable?.(record.id)
                    }}>
                    编辑
                </a>,
                <a
                    key='delete'
                    onClick={() => {
                        setDataSource(dataSource.filter(item => item.id !== record.id))
                    }}>
                    删除
                </a>
            ]
        }
    ]

    return (
        <>
            <EditableProTable
                rowKey='id'
                maxLength={5}
                scroll={{
                    x: 960
                }}
                recordCreatorProps={{
                    position: 'bottom',
                    record: () => ({ id: (Math.random() * 1000000).toFixed(0) })
                }}
                loading={false}
                columns={columns}
                request={async () => ({
                    data: defaultData,
                    total: 3,
                    success: true
                })}
                value={dataSource}
                onChange={setDataSource}
                editable={{
                    type: 'multiple',
                    editableKeys,
                    onSave: async (rowKey, data, row) => {
                        console.log(rowKey, data, row)
                        await waitTime(100)
                    },
                    onChange: setEditableRowKeys
                }}
            />
        </>
    )
}

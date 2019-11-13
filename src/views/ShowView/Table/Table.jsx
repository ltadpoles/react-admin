import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tag, Table, Button, Anchor } from 'antd'
import '@/style/view-style/table.scss'

const { Column } = Table
const { Link } = Anchor

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <Button type='link'>{text}</Button>
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
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
        name: `Edward King ${i}`,
        age: `${i + 1}`,
        address: `London, Park Lane no. ${i}`,
        tags: ['nice', 'developer']
    })
}

const Table1 = () => <Table columns={columns} dataSource={data} />

const Table2 = () => (
    <Table dataSource={data}>
        <Column title='Name' dataIndex='name' key='lastName' />
        <Column title='Age' dataIndex='age' key='age' />
        <Column title='Address' dataIndex='address' key='address' />
        <Column
            title='Tags'
            dataIndex='tags'
            key='tags'
            render={tags => (
                <span>
                    {tags.map(tag => (
                        <Tag color='blue' key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </span>
            )}
        />
        <Column
            title='Action'
            key='action'
            render={(text, record) => (
                <span>
                    <Button type='link'>Invite {record.lastName}</Button>
                    <Divider type='vertical' />
                    <Button type='link'>Delete</Button>
                </span>
            )}
        />
    </Table>
)

class Table3 extends Component {
    state = {
        selectedRowKeys: []
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const { selectedRowKeys } = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: 'Select All Data',
                    onSelect: () => {
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()] // 0...45
                        })
                    }
                },
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = []
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false
                            }
                            return true
                        })
                        this.setState({ selectedRowKeys: newSelectedRowKeys })
                    }
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = []
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true
                            }
                            return false
                        })
                        this.setState({ selectedRowKeys: newSelectedRowKeys })
                    }
                }
            ]
        }
        return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    }
}

class Table4 extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter)
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter
        })
    }

    clearFilters = () => {
        this.setState({ filteredInfo: null })
    }

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null
        })
    }

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age'
            }
        })
    }
    render() {
        let { sortedInfo, filteredInfo } = this.state
        sortedInfo = sortedInfo || {}
        filteredInfo = filteredInfo || {}
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [
                    { text: 'Edward King 20', value: 'Edward King 20' },
                    { text: 'Edward King 25', value: 'Edward King 25' }
                ],
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value)
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [
                    { text: 'London, Park Lane no. 24', value: 'London, Park Lane no. 24' },
                    { text: 'London, Park Lane no. 27', value: 'London, Park Lane no. 27' }
                ],
                filteredValue: filteredInfo.address || null,
                onFilter: (value, record) => record.address.includes(value)
            }
        ]
        return (
            <div>
                <div className='table-operations'>
                    <Button onClick={this.setAgeSort}>Sort age</Button>
                    <Button onClick={this.clearFilters}>Clear filters</Button>
                    <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                </div>
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        )
    }
}

const TableView = () => (
    <Layout className='animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['通用', '按钮']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>何时使用</h3>
            <Divider />
            <p>当有大量结构化的数据需要展现时；</p>
            <p>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</p>
        </div>

        <Row>
            <Anchor className='toc-affix'>
                <Link href='#basic' title='基础表格' />
                <Link href='#JSX' title='JSX表格' />
                <Link href='#checked' title='可选表格' />
                <Link href='#sort' title='可筛选排序表格' />
            </Anchor>
            <Col>
                <div className='base-style'>
                    <h3 id='basic'>基础表格</h3>
                    <Divider />
                    <Table1 />
                </div>
            </Col>
            <Col>
                <div className='base-style'>
                    <h3 id='JSX'>JSX表单</h3>
                    <Divider orientation='left'>JSX表格</Divider>
                    <Table2 />
                </div>
            </Col>
            <Col>
                <div className='base-style'>
                    <h3 id='checked'>可选表单</h3>
                    <Divider orientation='left'>可选表格</Divider>
                    <Table3 />
                </div>
            </Col>
            <Col>
                <div className='base-style'>
                    <h3 id='sort'>可筛选排序表单</h3>
                    <Divider orientation='left'>可筛选排序表格</Divider>
                    <Table4 />
                </div>
            </Col>
        </Row>
    </Layout>
)

export default TableView

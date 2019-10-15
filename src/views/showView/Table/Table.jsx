import React, { Component } from "react";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb"
import { Layout, Divider, Row, Col, Tag, Table, Button } from "antd"

const { Column, ColumnGroup } = Table

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>Invite {record.name}</a>
                <Divider type="vertical" />
                <a>Delete</a>
            </span>
        ),
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        tags: ['nice', 'developer']
    });
}

class Table1 extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}

class Table2 extends Component {
    render() {
        return (
            <Table dataSource={data}>
                <Column title="Name" dataIndex="name" key="lastName" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={tags => (
                        <span>
                            {tags.map(tag => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </span>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <a>Invite {record.lastName}</a>
                            <Divider type="vertical" />
                            <a>Delete</a>
                        </span>
                    )}
                />
            </Table>
        )
    }
}



class TableView extends Component {
    state = {};
    render() {
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={["通用", "按钮"]}></CustomBreadcrumb>
                </div>
                <div className="base-style">
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当有大量结构化的数据需要展现时；</p>
                    <p>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</p>
                </div>
                <Row>
                    <Col>
                        <div className="base-style">
                            <Divider orientation='left'>基础表单</Divider>
                            <Table1 />
                        </div>
                    </Col>
                    <Col>
                        <div className="base-style">
                            <Divider orientation='left'>JSX表单</Divider>
                            <Table2 />
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default TableView;
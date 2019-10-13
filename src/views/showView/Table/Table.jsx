import React, { Component } from "react";
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";
import { Layout, Divider, Row, Col, Tag, Table, Button } from "antd";

// 数据源

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `John ${i}`,
        // lastName: `Brown ${i}`,
        age: i + 1,
        address: `London, Park Lane no. ${i}`,
        tags: [`nice ${i}`]
    });
}


class TableView extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
                filteredValue: filteredInfo.address || null,
                onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
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
                        <Button type='link'>Invite {record.name}</Button>
                        <Divider type="vertical" />
                        <Button type='link'>Delete</Button>
                    </span>
                ),
            },
        ];
        return (
            <Layout>
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
                            <div>
                                <div className="table-operations">
                                    <Button onClick={this.setAgeSort}>Sort age</Button>
                                    <Button onClick={this.clearFilters}>Clear filters</Button>
                                    <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                                </div>
                                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default TableView;
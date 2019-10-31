import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tree, Input, Icon } from 'antd'

const { TreeNode } = Tree

const treeData = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' }
                ]
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' }
                ]
            },
            {
                title: '0-0-2',
                key: '0-0-2'
            }
        ]
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' }
        ]
    },
    {
        title: '0-2',
        key: '0-2'
    }
]

const { Search } = Input

const x = 3
const y = 2
const z = 1
const gData = []

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0'
    const tns = _tns || gData

    const children = []
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`
        tns.push({ title: key, key })
        if (i < y) {
            children.push(key)
        }
    }
    if (_level < 0) {
        return tns
    }
    const level = _level - 1
    children.forEach((key, index) => {
        tns[index].children = []
        return generateData(level, key, tns[index].children)
    })
}
generateData(z)

const dataList = []
const generateList = data => {
    for (let i = 0; i < data.length; i++) {
        const node = data[i]
        const { key } = node
        dataList.push({ key, title: key })
        if (node.children) {
            generateList(node.children)
        }
    }
}
generateList(gData)

const getParentKey = (key, tree) => {
    let parentKey
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i]
        if (node.children) {
            if (node.children.some(item => item.key === key)) {
                parentKey = node.key
            } else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children)
            }
        }
    }
    return parentKey
}

class TreeView extends Component {
    state = {
        expandedKeys: ['0-0-0', '0-0-1'],
        autoExpandParent: true,
        checkedKeys: ['0-0-0'],
        selectedKeys: [],
        searchValue: '',
        gData
    }

    onDragEnter = info => {
        console.log(info)
        // expandedKeys 需要受控时设置
        this.setState({
            expandedKeys: info.expandedKeys
        })
    }

    onExpand = expandedKeys => {
        console.log('onExpand', expandedKeys)
        this.setState({
            expandedKeys,
            autoExpandParent: false
        })
    }

    onDrop = info => {
        console.log(info)
        const dropKey = info.node.props.eventKey
        const dragKey = info.dragNode.props.eventKey
        const dropPos = info.node.props.pos.split('-')
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])

        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr)
                }
                if (item.children) {
                    return loop(item.children, key, callback)
                }
            })
        }
        const data = [...this.state.gData]

        // Find dragObject
        let dragObj
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1)
            dragObj = item
        })

        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, item => {
                item.children = item.children || []
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.push(dragObj)
            })
        } else if (
            (info.node.props.children || []).length > 0 && // Has children
            info.node.props.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, item => {
                item.children = item.children || []
                // where to insert 示例添加到尾部，可以是随意位置
                item.children.unshift(dragObj)
            })
        } else {
            let ar
            let i
            loop(data, dropKey, (item, index, arr) => {
                ar = arr
                i = index
            })
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj)
            } else {
                ar.splice(i + 1, 0, dragObj)
            }
        }

        this.setState({
            gData: data
        })
    }

    onCheck = checkedKeys => {
        console.log('onCheck', checkedKeys)
        this.setState({ checkedKeys })
    }

    onSelect = (selectedKeys, info) => {
        console.log('onSelect', info)
        this.setState({ selectedKeys })
    }

    renderTreeNodes = data =>
        data.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                )
            }
            return <TreeNode key={item.key} {...item} />
        })

    onChange = e => {
        const { value } = e.target
        const expandedKeys = dataList
            .map(item => {
                if (item.title.indexOf(value) > -1) {
                    return getParentKey(item.key, gData)
                }
                return null
            })
            .filter((item, i, self) => item && self.indexOf(item) === i)
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true
        })
    }

    render() {
        const { searchValue, expandedKeys, autoExpandParent } = this.state
        const loopDrop = data =>
            data.map(item => {
                if (item.children && item.children.length) {
                    return (
                        <TreeNode key={item.key} title={item.title}>
                            {loop(item.children)}
                        </TreeNode>
                    )
                }
                return <TreeNode key={item.key} title={item.title} />
            })
        const loop = data =>
            data.map(item => {
                const index = item.title.indexOf(searchValue)
                const beforeStr = item.title.substr(0, index)
                const afterStr = item.title.substr(index + searchValue.length)
                const title =
                    index > -1 ? (
                        <span>
                            {beforeStr}
                            <span style={{ color: '#f50' }}>{searchValue}</span>
                            {afterStr}
                        </span>
                    ) : (
                        <span>{item.title}</span>
                    )
                if (item.children) {
                    return (
                        <TreeNode key={item.key} title={title}>
                            {loop(item.children)}
                        </TreeNode>
                    )
                }
                return <TreeNode key={item.key} title={title} />
            })
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['展示', '树形控件']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>
                        文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件
                        可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
                    </p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>基础用法</Divider>
                            <Tree
                                checkable
                                showIcon
                                defaultExpandedKeys={['0-0-0', '0-0-1']}
                                defaultSelectedKeys={['0-0-0', '0-0-1']}
                                defaultCheckedKeys={['0-0-0', '0-0-1']}
                                onSelect={this.onSelect}
                                onCheck={this.onCheck}>
                                <TreeNode title='parent 1' key='0-0'>
                                    <TreeNode icon={<Icon type='meh-o' />} title='parent 1-0' key='0-0-0' disabled>
                                        <TreeNode title='leaf' key='0-0-0-0' disableCheckbox />
                                        <TreeNode title='leaf' key='0-0-0-1' />
                                    </TreeNode>
                                    <TreeNode title='parent 1-1' key='0-0-1' icon={<Icon type='meh-o' />}>
                                        <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key='0-0-1-0' />
                                    </TreeNode>
                                </TreeNode>
                            </Tree>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>可搜索</Divider>
                            <Search style={{ marginBottom: 8 }} placeholder='Search' onChange={this.onChange} />
                            <Tree
                                showLine
                                onExpand={this.onExpand}
                                expandedKeys={expandedKeys}
                                autoExpandParent={autoExpandParent}>
                                {loop(gData)}
                            </Tree>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>受控控件</Divider>
                            <Tree
                                checkable
                                onExpand={this.onExpand}
                                expandedKeys={this.state.expandedKeys}
                                autoExpandParent={this.state.autoExpandParent}
                                onCheck={this.onCheck}
                                checkedKeys={this.state.checkedKeys}
                                onSelect={this.onSelect}
                                selectedKeys={this.state.selectedKeys}>
                                {this.renderTreeNodes(treeData)}
                            </Tree>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>可拖拽</Divider>
                            <Tree
                                className='draggable-tree'
                                defaultExpandedKeys={this.state.expandedKeys}
                                draggable
                                blockNode
                                onDragEnter={this.onDragEnter}
                                onDrop={this.onDrop}>
                                {loopDrop(this.state.gData)}
                            </Tree>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default TreeView

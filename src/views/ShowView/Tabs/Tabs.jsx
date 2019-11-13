import React, { Component } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Tabs, Select, Icon, Radio, Button } from 'antd'

const { TabPane } = Tabs
const { Option } = Select

function callback(key) {
    console.log(key)
}

const panes = [
    { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' }
]

class TabsViews extends Component {
    state = {
        activeKey: panes[0].key,
        panes,
        tabPosition: 'top',
        size: 'small'
    }
    newTabIndex = 0

    changeTabPosition = tabPosition => {
        this.setState({ tabPosition })
    }

    onChange = e => {
        this.setState({ size: e.target.value })
    }

    onTabsChange = activeKey => {
        this.setState({ activeKey })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }

    add = () => {
        const { panes } = this.state
        const activeKey = `newTab${this.newTabIndex++}`
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey })
        this.setState({ panes, activeKey })
    }

    remove = targetKey => {
        let { activeKey } = this.state
        let lastIndex
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1
            }
        })
        const panes = this.state.panes.filter(pane => pane.key !== targetKey)
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key
            } else {
                activeKey = panes[0].key
            }
        }
        this.setState({ panes, activeKey })
    }

    render() {
        const { size, tabPosition, activeKey, panes } = this.state
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['展示', '标签页']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁</p>
                    <p>Ant Design 依次提供了三级选项卡，分别用于不同的场景</p>
                    <p>- 卡片式的页签，提供可关闭的样式，常用于容器顶部。</p>
                    <p>- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</p>
                    <p>- RadioButton 可作为更次级的页签来使用。</p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>基础</Divider>
                            <Tabs defaultActiveKey='1' onChange={callback}>
                                <TabPane tab='Tab 1' key='1'>
                                    Content of Tab Pane 1
                                </TabPane>
                                <TabPane tab='Tab 2' key='2' disabled>
                                    Content of Tab Pane 2
                                </TabPane>
                                <TabPane tab='Tab 3' key='3'>
                                    Content of Tab Pane 3
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>控制大小</Divider>
                            <div>
                                <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
                                    <Radio.Button value='small'>Small</Radio.Button>
                                    <Radio.Button value='default'>Default</Radio.Button>
                                    <Radio.Button value='large'>Large</Radio.Button>
                                </Radio.Group>
                                <Tabs defaultActiveKey='1' size={size}>
                                    <TabPane tab='Tab 1' key='1'>
                                        Content of tab 1
                                    </TabPane>
                                    <TabPane tab='Tab 2' key='2'>
                                        Content of tab 2
                                    </TabPane>
                                    <TabPane tab='Tab 3' key='3'>
                                        Content of tab 3
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>控制显示位置</Divider>
                            <div>
                                <div style={{ marginBottom: 16 }}>
                                    Tab position：
                                    <Select
                                        value={tabPosition}
                                        onChange={this.changeTabPosition}
                                        dropdownMatchSelectWidth={false}>
                                        <Option value='top'>top</Option>
                                        <Option value='bottom'>bottom</Option>
                                        <Option value='left'>left</Option>
                                        <Option value='right'>right</Option>
                                    </Select>
                                </div>
                                <Tabs tabPosition={tabPosition}>
                                    <TabPane tab='Tab 1' key='1'>
                                        Content of Tab 1
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <span>
                                                <Icon type='android' />
                                                Tab 2
                                            </span>
                                        }
                                        key='2'>
                                        Content of Tab 2
                                    </TabPane>
                                    <TabPane tab='Tab 3' key='3'>
                                        Content of Tab 3
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>可增加删除</Divider>
                            <div>
                                <div style={{ marginBottom: 16 }}>
                                    <Button onClick={this.add}>ADD</Button>
                                </div>
                                <Tabs
                                    hideAdd
                                    onChange={this.onTabsChange}
                                    activeKey={activeKey}
                                    type='editable-card'
                                    onEdit={this.onEdit}>
                                    {panes.map(pane => (
                                        <TabPane tab={pane.title} key={pane.key}>
                                            {pane.content}
                                        </TabPane>
                                    ))}
                                </Tabs>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default TabsViews

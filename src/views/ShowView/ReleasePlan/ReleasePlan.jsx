import React from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider, Row, Col, Collapse, Icon } from 'antd'
import StageView from './Stage.jsx'
import TaskView from './Task.jsx'
import CodeCheckView from './CodeCheck.jsx'
import ConfigView from './Config.jsx'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function callback(key) {
    console.log(key)
}

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden'
}

const ReleasePlanView = () => (
    <Layout className='animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['版本管理', '发布计划']}></CustomBreadcrumb>
        </div>
        {/* <div className='base-style'>
            <h3>何时使用</h3>
            <Divider />
            <p>对复杂区域进行分组和隐藏，保持页面的整洁。</p>
            <p>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。</p>
        </div> */}
        <Row>
            <Col>
                {/* 需要调整画板为全屏 */}
                <div className='base-style'>
                    {/* <Divider orientation='left'>简单使用</Divider> */}
                    <Collapse defaultActiveKey={['1']} onChange={callback} ghost>
                        <Panel header='发布步骤' key='1'>
                            <StageView />
                        </Panel>
                        <Panel header='需求/bug列表' key='2'>
                            <TaskView />
                        </Panel>
                        <Panel header='代码检查' key='3'>
                            <CodeCheckView />
                        </Panel>
                        <Panel header='配置计划' key='4'>
                            <ConfigView />
                        </Panel>
                    </Collapse>
                </div>
            </Col>
            {/* <Col>
                <div className='base-style'>
                    <Divider orientation='left'>手风琴</Divider>
                    <Collapse accordion>
                        <Panel header='This is panel header 1' key='1'>
                            <p>{text}</p>
                        </Panel>
                        <Panel header='This is panel header 2' key='2'>
                            <p>{text}</p>
                        </Panel>
                        <Panel header='This is panel header 3' key='3'>
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
            </Col> */}
            {/* <Col>
                <div className='base-style'>
                    <Divider orientation='left'>自定义样式功能</Divider>
                    <Collapse
                        onChange={callback}
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <Icon type='caret-right' rotate={isActive ? 90 : 0} />}>
                        <Panel header='This is panel header 1' key='1' style={customPanelStyle}>
                            <Collapse defaultActiveKey='1'>
                                <Panel header='This is panel nest panel' key='1'>
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </Panel>
                        <Panel header='This is panel header 2' key='2' style={customPanelStyle}>
                            <p>{text}</p>
                        </Panel>
                        <Panel header='This is panel header 3' key='3' style={customPanelStyle}>
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
            </Col> */}
        </Row>
    </Layout>
)

export default ReleasePlanView

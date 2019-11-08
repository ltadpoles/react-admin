import React, { useState } from 'react'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Row, Col, Progress, Divider, Button } from 'antd'
import '@/style/view-style/progress.scss'

const ButtonGroup = Button.Group

const DrawerView = () => {
    const [percent, setPercent] = useState(0)

    return (
        <Layout className='progress animated fadeIn'>
            <div>
                <CustomBreadcrumb arr={['其他', '进度条']}></CustomBreadcrumb>
            </div>
            <div className='base-style'>
                <h3>何时使用</h3>
                <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
            </div>
            <Row gutter={8}>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>基本</Divider>
                        <Progress percent={30} />
                        <Progress percent={50} status='active' />
                        <Progress percent={70} status='exception' />
                        <Progress percent={100} size='small' />
                        <Progress percent={50} showInfo={false} size='small' />
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>动态进度条</Divider>
                        <Progress type='circle' percent={percent} />
                        <ButtonGroup>
                            <Button
                                onClick={() => setPercent(percent => (percent < 0 ? 0 : percent - 10))}
                                icon='minus'
                            />
                            <Button
                                onClick={() => setPercent(percent => (percent > 100 ? 100 : percent + 10))}
                                icon='plus'
                            />
                        </ButtonGroup>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>圆环</Divider>
                        <Progress type='circle' percent={75} />
                        <Progress type='circle' percent={70} status='exception' />
                        <Progress type='circle' percent={100} width={80} />
                    </div>
                    <div className='base-style'>
                        <Divider orientation='left'>自定义文字</Divider>
                        <Progress type='circle' percent={75} format={percent => `${percent} Days`} />
                        <Progress type='circle' percent={100} format={() => 'Done'} />
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default DrawerView

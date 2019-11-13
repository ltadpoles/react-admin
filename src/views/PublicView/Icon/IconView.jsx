import React from 'react'
import { Layout, Divider, Icon, Tooltip } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import '@/style/view-style/icon.scss'

const HeartSvg = () => (
    <svg width='1em' height='1em' fill='currentColor' viewBox='0 0 1024 1024'>
        <path d='M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z' />
    </svg>
)

const PandaSvg = () => (
    <svg viewBox='0 0 1024 1024' width='1em' height='1em' fill='currentColor'>
        <path
            d='M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z'
            fill='#6B676E'
            p-id='1143'
        />
        <path
            d='M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z'
            fill='#FFEBD2'
            p-id='1144'
        />
        <path
            d='M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z'
            fill='#E9D7C3'
            p-id='1145'
        />
        <path
            d='M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z'
            fill='#FFFFFF'
            p-id='1146'
        />
        <path
            d='M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z'
            fill='#6B676E'
            p-id='1147'
        />
        <path
            d='M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z'
            fill='#464655'
            p-id='1148'
        />
        <path
            d='M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z'
            fill='#464655'
            p-id='1149'
        />
        <path
            d='M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z'
            fill='#464655'
            p-id='1150'
        />
    </svg>
)

const HeartIcon = props => <Icon component={HeartSvg} {...props} />

const PandaIcon = props => <Icon component={PandaSvg} {...props} />

const IconView = () => (
    <Layout className='icon animated fadeIn'>
        <div>
            <CustomBreadcrumb arr={['通用', '图标']}></CustomBreadcrumb>
        </div>
        <div className='base-style'>
            <h3>何时使用</h3>
            <Divider />
            <p>语义化的矢量图形。</p>
        </div>

        <div className='base-style'>
            <ul className='anticons-list'>
                <li>
                    <Icon type='sync' spin />
                </li>
                <li>
                    <Icon type='smile' theme='outlined' spin />
                </li>
                <li>
                    <Icon type='smile' rotate={180} />
                </li>
                <li>
                    <Icon type='smile' theme='twoTone' />
                </li>
                <li>
                    <Icon type='heart' theme='twoTone' twoToneColor='#eb2f96' />
                </li>
                <li>
                    <Icon type='check-circle' theme='twoTone' twoToneColor='#52c41a' />
                </li>
                <li>
                    <HeartIcon style={{ color: 'hotpink' }} />
                    <PandaIcon style={{ fontSize: '32px' }} />
                </li>
            </ul>
        </div>

        <div className='base-style'>
            <h4>方向性图标</h4>
            <Divider />
            <ul className='anticons-list'>
                <Tooltip title='step-backward'>
                    <li>
                        <Icon type='step-backward' />
                    </li>
                </Tooltip>
                <Tooltip title='step-forward'>
                    <li>
                        <Icon type='step-forward' />
                    </li>
                </Tooltip>
                <Tooltip title='fast-backward'>
                    <li>
                        <Icon type='fast-backward' />
                    </li>
                </Tooltip>
                <Tooltip title='fast-forward'>
                    <li>
                        <Icon type='fast-forward' />
                    </li>
                </Tooltip>
                <Tooltip title='down'>
                    <li>
                        <Icon type='down' />
                    </li>
                </Tooltip>
                <Tooltip title='up'>
                    <li>
                        <Icon type='up' />
                    </li>
                </Tooltip>
                <Tooltip title='left'>
                    <li>
                        <Icon type='left' />
                    </li>
                </Tooltip>
                <Tooltip title='right'>
                    <li>
                        <Icon type='right' />
                    </li>
                </Tooltip>
                <Tooltip title='up-circle'>
                    <li>
                        <Icon type='up-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='down-circle'>
                    <li>
                        <Icon type='down-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='left-circle'>
                    <li>
                        <Icon type='left-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='right-circle'>
                    <li>
                        <Icon type='right-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='vertical-align-bottom'>
                    <li>
                        <Icon type='vertical-align-bottom' />
                    </li>
                </Tooltip>
                <Tooltip title='forward'>
                    <li>
                        <Icon type='forward' />
                    </li>
                </Tooltip>
                <Tooltip title='backward'>
                    <li>
                        <Icon type='backward' />
                    </li>
                </Tooltip>
                <Tooltip title='arrow-up'>
                    <li>
                        <Icon type='arrow-up' />
                    </li>
                </Tooltip>
                <Tooltip title='arrow-down'>
                    <li>
                        <Icon type='arrow-down' />
                    </li>
                </Tooltip>
                <Tooltip title='arrow-left'>
                    <li>
                        <Icon type='arrow-left' />
                    </li>
                </Tooltip>
                <Tooltip title='arrow-right'>
                    <li>
                        <Icon type='arrow-right' />
                    </li>
                </Tooltip>
                <Tooltip title='login'>
                    <li>
                        <Icon type='login' />
                    </li>
                </Tooltip>
                <Tooltip title='logout'>
                    <li>
                        <Icon type='logout' />
                    </li>
                </Tooltip>
                <Tooltip title='fullscreen'>
                    <li>
                        <Icon type='fullscreen' />
                    </li>
                </Tooltip>
                <Tooltip title='fullscreen-exit'>
                    <li>
                        <Icon type='fullscreen-exit' />
                    </li>
                </Tooltip>
            </ul>
        </div>
        <div className='base-style'>
            <h4>提示建议性图标</h4>
            <Divider />
            <ul className='anticons-list'>
                <Tooltip title='question-circle'>
                    <li>
                        <Icon type='question-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='plus-circle'>
                    <li>
                        <Icon type='plus-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='pause-circle'>
                    <li>
                        <Icon type='pause-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='minus-circle'>
                    <li>
                        <Icon type='minus-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='plus-square'>
                    <li>
                        <Icon type='plus-square' />
                    </li>
                </Tooltip>
                <Tooltip title='minus-square'>
                    <li>
                        <Icon type='minus-square' />
                    </li>
                </Tooltip>
                <Tooltip title='info-circle'>
                    <li>
                        <Icon type='info-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='exclamation-circle'>
                    <li>
                        <Icon type='exclamation-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='close-circle'>
                    <li>
                        <Icon type='close-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='check-circle'>
                    <li>
                        <Icon type='check-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='clock-circle'>
                    <li>
                        <Icon type='clock-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='warning'>
                    <li>
                        <Icon type='warning' />
                    </li>
                </Tooltip>
            </ul>
        </div>

        <div className='base-style'>
            <h4>编辑类图标</h4>
            <Divider />
            <ul className='anticons-list'>
                <Tooltip title='edit'>
                    <li>
                        <Icon type='edit' />
                    </li>
                </Tooltip>
                <Tooltip title='form'>
                    <li>
                        <Icon type='form' />
                    </li>
                </Tooltip>
                <Tooltip title='copy'>
                    <li>
                        <Icon type='copy' />
                    </li>
                </Tooltip>
                <Tooltip title='delete'>
                    <li>
                        <Icon type='delete' />
                    </li>
                </Tooltip>
                <Tooltip title='align-left'>
                    <li>
                        <Icon type='align-left' />
                    </li>
                </Tooltip>
                <Tooltip title='align-right'>
                    <li>
                        <Icon type='align-right' />
                    </li>
                </Tooltip>
                <Tooltip title='italic'>
                    <li>
                        <Icon type='italic' />
                    </li>
                </Tooltip>
                <Tooltip title='redo'>
                    <li>
                        <Icon type='redo' />
                    </li>
                </Tooltip>
                <Tooltip title='undo'>
                    <li>
                        <Icon type='undo' />
                    </li>
                </Tooltip>
                <Tooltip title='zoom-in'>
                    <li>
                        <Icon type='zoom-in' />
                    </li>
                </Tooltip>
                <Tooltip title='zoom-out'>
                    <li>
                        <Icon type='zoom-out' />
                    </li>
                </Tooltip>
                <Tooltip title='drag'>
                    <li>
                        <Icon type='drag' />
                    </li>
                </Tooltip>
                <Tooltip title='unordered-list'>
                    <li>
                        <Icon type='unordered-list' />
                    </li>
                </Tooltip>
                <Tooltip title='ordered-list'>
                    <li>
                        <Icon type='ordered-list' />
                    </li>
                </Tooltip>
            </ul>
        </div>

        <div className='base-style'>
            <h4>数据类图标</h4>
            <Divider />
            <ul className='anticons-list'>
                <Tooltip title='area-chart'>
                    <li>
                        <Icon type='area-chart' />
                    </li>
                </Tooltip>
                <Tooltip title='pie-chart'>
                    <li>
                        <Icon type='pie-chart' />
                    </li>
                </Tooltip>
                <Tooltip title='bar-chart'>
                    <li>
                        <Icon type='bar-chart' />
                    </li>
                </Tooltip>
                <Tooltip title='dot-chart'>
                    <li>
                        <Icon type='dot-chart' />
                    </li>
                </Tooltip>
                <Tooltip title='line-chart'>
                    <li>
                        <Icon type='line-chart' />
                    </li>
                </Tooltip>
                <Tooltip title='stock'>
                    <li>
                        <Icon type='stock' />
                    </li>
                </Tooltip>
            </ul>
        </div>

        <div className='base-style'>
            <h4>品牌和标识</h4>
            <Divider />
            <ul className='anticons-list'>
                <Tooltip title='ant-design'>
                    <li>
                        <Icon type='ant-design' />
                    </li>
                </Tooltip>
                <Tooltip title='android'>
                    <li>
                        <Icon type='android' />
                    </li>
                </Tooltip>
                <Tooltip title='apple'>
                    <li>
                        <Icon type='apple' />
                    </li>
                </Tooltip>
                <Tooltip title='windows'>
                    <li>
                        <Icon type='windows' />
                    </li>
                </Tooltip>
                <Tooltip title='github'>
                    <li>
                        <Icon type='github' />
                    </li>
                </Tooltip>
                <Tooltip title='weibo-circle'>
                    <li>
                        <Icon type='weibo-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='weibo'>
                    <li>
                        <Icon type='weibo' />
                    </li>
                </Tooltip>
                <Tooltip title='taobao-circle'>
                    <li>
                        <Icon type='taobao-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='taobao'>
                    <li>
                        <Icon type='taobao' />
                    </li>
                </Tooltip>
                <Tooltip title='wechat'>
                    <li>
                        <Icon type='wechat' />
                    </li>
                </Tooltip>
                <Tooltip title='alipay-circle'>
                    <li>
                        <Icon type='alipay-circle' />
                    </li>
                </Tooltip>
                <Tooltip title='qq'>
                    <li>
                        <Icon type='qq' />
                    </li>
                </Tooltip>
                <Tooltip title='google'>
                    <li>
                        <Icon type='google' />
                    </li>
                </Tooltip>
                <Tooltip title='facebook'>
                    <li>
                        <Icon type='facebook' />
                    </li>
                </Tooltip>
                <Tooltip title='twitter'>
                    <li>
                        <Icon type='twitter' />
                    </li>
                </Tooltip>
                <Tooltip title='youtube'>
                    <li>
                        <Icon type='youtube' />
                    </li>
                </Tooltip>
            </ul>
        </div>
    </Layout>
)

export default IconView

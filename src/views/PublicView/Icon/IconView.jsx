import React from 'react'

import Icon, {
    AlignLeftOutlined,
    AlignRightOutlined,
    AlipayCircleOutlined,
    AndroidOutlined,
    AntDesignOutlined,
    AppleOutlined,
    AreaChartOutlined,
    ArrowDownOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ArrowUpOutlined,
    BackwardOutlined,
    BarChartOutlined,
    CheckCircleOutlined,
    CheckCircleTwoTone,
    ClockCircleOutlined,
    CloseCircleOutlined,
    CopyOutlined,
    DeleteOutlined,
    DotChartOutlined,
    DownCircleOutlined,
    DownOutlined,
    DragOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    FacebookOutlined,
    FastBackwardOutlined,
    FastForwardOutlined,
    FormOutlined,
    ForwardOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined,
    GithubOutlined,
    GoogleOutlined,
    HeartTwoTone,
    InfoCircleOutlined,
    ItalicOutlined,
    LeftCircleOutlined,
    LeftOutlined,
    LineChartOutlined,
    LoginOutlined,
    LogoutOutlined,
    MinusCircleOutlined,
    MinusSquareOutlined,
    OrderedListOutlined,
    PauseCircleOutlined,
    PieChartOutlined,
    PlusCircleOutlined,
    PlusSquareOutlined,
    QqOutlined,
    QuestionCircleOutlined,
    RedoOutlined,
    RightCircleOutlined,
    RightOutlined,
    SmileOutlined,
    SmileTwoTone,
    StepBackwardOutlined,
    StepForwardOutlined,
    StockOutlined,
    SyncOutlined,
    TaobaoCircleOutlined,
    TaobaoOutlined,
    TwitterOutlined,
    UndoOutlined,
    UnorderedListOutlined,
    UpCircleOutlined,
    UpOutlined,
    VerticalAlignBottomOutlined,
    WarningOutlined,
    WechatOutlined,
    WeiboCircleOutlined,
    WeiboOutlined,
    WindowsOutlined,
    YoutubeOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';

import { Layout, Divider, Tooltip } from 'antd';
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

const IconView = () => {
    return (
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
                        <SyncOutlined spin />
                    </li>
                    <li>
                        <SmileOutlined spin />
                    </li>
                    <li>
                        <SmileOutlined rotate={180} />
                    </li>
                    <li>
                        <SmileTwoTone />
                    </li>
                    <li>
                        <HeartTwoTone twoToneColor='#eb2f96' />
                    </li>
                    <li>
                        <CheckCircleTwoTone twoToneColor='#52c41a' />
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
                            <StepBackwardOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='step-forward'>
                        <li>
                            <StepForwardOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='fast-backward'>
                        <li>
                            <FastBackwardOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='fast-forward'>
                        <li>
                            <FastForwardOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='down'>
                        <li>
                            <DownOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='up'>
                        <li>
                            <UpOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='left'>
                        <li>
                            <LeftOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='right'>
                        <li>
                            <RightOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='up-circle'>
                        <li>
                            <UpCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='down-circle'>
                        <li>
                            <DownCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='left-circle'>
                        <li>
                            <LeftCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='right-circle'>
                        <li>
                            <RightCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='vertical-align-bottom'>
                        <li>
                            <VerticalAlignBottomOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='forward'>
                        <li>
                            <ForwardOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='backward'>
                        <li>
                            <BackwardOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='arrow-up'>
                        <li>
                            <ArrowUpOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='arrow-down'>
                        <li>
                            <ArrowDownOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='arrow-left'>
                        <li>
                            <ArrowLeftOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='arrow-right'>
                        <li>
                            <ArrowRightOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='login'>
                        <li>
                            <LoginOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='logout'>
                        <li>
                            <LogoutOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='fullscreen'>
                        <li>
                            <FullscreenOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='fullscreen-exit'>
                        <li>
                            <FullscreenExitOutlined />
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
                            <QuestionCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='plus-circle'>
                        <li>
                            <PlusCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='pause-circle'>
                        <li>
                            <PauseCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='minus-circle'>
                        <li>
                            <MinusCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='plus-square'>
                        <li>
                            <PlusSquareOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='minus-square'>
                        <li>
                            <MinusSquareOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='info-circle'>
                        <li>
                            <InfoCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='exclamation-circle'>
                        <li>
                            <ExclamationCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='close-circle'>
                        <li>
                            <CloseCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='check-circle'>
                        <li>
                            <CheckCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='clock-circle'>
                        <li>
                            <ClockCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='warning'>
                        <li>
                            <WarningOutlined />
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
                            <EditOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='form'>
                        <li>
                            <FormOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='copy'>
                        <li>
                            <CopyOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='delete'>
                        <li>
                            <DeleteOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='align-left'>
                        <li>
                            <AlignLeftOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='align-right'>
                        <li>
                            <AlignRightOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='italic'>
                        <li>
                            <ItalicOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='redo'>
                        <li>
                            <RedoOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='undo'>
                        <li>
                            <UndoOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='zoom-in'>
                        <li>
                            <ZoomInOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='zoom-out'>
                        <li>
                            <ZoomOutOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='drag'>
                        <li>
                            <DragOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='unordered-list'>
                        <li>
                            <UnorderedListOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='ordered-list'>
                        <li>
                            <OrderedListOutlined />
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
                            <AreaChartOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='pie-chart'>
                        <li>
                            <PieChartOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='bar-chart'>
                        <li>
                            <BarChartOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='dot-chart'>
                        <li>
                            <DotChartOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='line-chart'>
                        <li>
                            <LineChartOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='stock'>
                        <li>
                            <StockOutlined />
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
                            <AntDesignOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='android'>
                        <li>
                            <AndroidOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='apple'>
                        <li>
                            <AppleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='windows'>
                        <li>
                            <WindowsOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='github'>
                        <li>
                            <GithubOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='weibo-circle'>
                        <li>
                            <WeiboCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='weibo'>
                        <li>
                            <WeiboOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='taobao-circle'>
                        <li>
                            <TaobaoCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='taobao'>
                        <li>
                            <TaobaoOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='wechat'>
                        <li>
                            <WechatOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='alipay-circle'>
                        <li>
                            <AlipayCircleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='qq'>
                        <li>
                            <QqOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='google'>
                        <li>
                            <GoogleOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='facebook'>
                        <li>
                            <FacebookOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='twitter'>
                        <li>
                            <TwitterOutlined />
                        </li>
                    </Tooltip>
                    <Tooltip title='youtube'>
                        <li>
                            <YoutubeOutlined />
                        </li>
                    </Tooltip>
                </ul>
            </div>
        </Layout>
    );
}

export default IconView

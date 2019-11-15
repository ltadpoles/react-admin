import React, { Component } from 'react'
import { Layout, Row, Col, Upload, message, Button, Icon, Divider, Modal } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'

const { Dragger } = Upload

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text'
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    }
}

function getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

function getBase_64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
}

class UploadView extends Component {
    state = {
        loading: false,
        previewVisible: false,
        previewImage: '',
        imageUrl: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }
        ]
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true })
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false
                })
            )
        }
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase_64(file.originFileObj)
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true
        })
    }
    handle_Change = ({ fileList }) => this.setState({ fileList })

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className='ant-upload-text'>Upload</div>
            </div>
        )
        const { imageUrl, previewVisible, previewImage, fileList } = this.state
        return (
            <Layout>
                <div>
                    <CustomBreadcrumb arr={['其它', '上传']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程</p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>普通模式</Divider>
                            <Upload {...props}>
                                <Button>
                                    <Icon type='upload' /> Click to Upload
                                </Button>
                            </Upload>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>照片墙</Divider>
                            <div className='clearfix'>
                                <Upload
                                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                    listType='picture-card'
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handle_Change}>
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt='example' style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>自定义模式</Divider>
                            <Upload
                                name='avatar'
                                listType='picture-card'
                                className='avatar-uploader'
                                showUploadList={false}
                                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}>
                                {imageUrl ? (
                                    <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </div>
                        <div className='base-style'>
                            <Divider orientation='left'>可拖拽上传</Divider>
                            <Dragger {...props}>
                                <p className='ant-upload-drag-icon'>
                                    <Icon type='inbox' />
                                </p>
                                <p className='ant-upload-text'>Click or drag file to this area to upload</p>
                                <p className='ant-upload-hint'>
                                    Support for a single or bulk upload. Strictly prohibit from uploading company data
                                    or other band files
                                </p>
                            </Dragger>
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default UploadView

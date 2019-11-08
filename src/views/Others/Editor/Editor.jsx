import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider } from 'antd'
import '@/style/view-style/editor.scss'

class EditorView extends Component {
    state = {
        editorState: BraftEditor.createEditorState('<p>你好 <b>世界!</b></p>'),
        outputHTML: '<p>你好 <b>世界!</b></p>'
    }

    componentDidMount() {
        this.isLiving = true
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount() {
        this.isLiving = false
    }

    handleEditorChange = editorState => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }

    setEditorContentAsync = () => {
        this.isLiving &&
            this.setState({
                editorState: BraftEditor.createEditorState('你好,<b>可爱的人! 很幸运在这里与你相遇!</b>')
            })
    }

    render() {
        const { editorState, outputHTML } = this.state
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['其他', '富文本']}></CustomBreadcrumb>
                </div>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>
                        当用户需要一些特定输入时，此页面使用的富文本编辑器是
                        <a href='https://github.com/margox/braft-editor'>braft-editor</a>
                    </p>
                </div>
                <div className='base-style'>
                    <div className='editor'>
                        <BraftEditor value={editorState} onChange={this.handleEditorChange} />
                    </div>
                </div>
                <div className='base-style'>
                    <h5>输出内容</h5>
                    <div className='output-content'>{outputHTML}</div>
                </div>
            </Layout>
        )
    }
}

export default EditorView

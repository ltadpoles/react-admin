import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import { Layout, Divider } from 'antd'
import '../../../style/view-style/editor.scss'

class EditorView extends Component {

    state = {
        editorState: null
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {
        const { editorState } = this.state
        return (
            <Layout className='animated fadeIn'>
                <div>
                    <CustomBreadcrumb arr={['其他', '富文本']}></CustomBreadcrumb>
                </div>
                <div className="base-style">
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当用户需要一些特定输入时，此页面使用的富文本编辑器是<a href="https://github.com/margox/braft-editor">braft-editor</a></p>
                </div>
                <div className="base-style">
                    <div className='editor'>
                        <BraftEditor
                            value={editorState}
                            onChange={this.handleEditorChange}
                        />
                    </div>
                </div>
            </Layout>
        )

    }

}

export default EditorView
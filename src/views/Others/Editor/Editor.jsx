import React, { useState, useEffect } from 'react'
import BraftEditor from 'braft-editor'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import { Layout, Divider } from 'antd'
import '@/style/view-style/editor.scss'
import 'braft-editor/dist/index.css'

const EditorView = () => {
    const [state, setState] = useState({
        editorState: BraftEditor.createEditorState('<p>你好 <b>世界!</b></p>'),
        outputHTML: '<p>你好 <b>世界!</b></p>'
    })

    let { editorState, outputHTML } = state

    useEffect(() => {
        let timer = setTimeout(() => {
            setState(prevState => {
                return {
                    ...prevState,
                    editorState: BraftEditor.createEditorState('你好,<b>可爱的人! 很幸运在这里与你相遇!</b>')
                }
            })
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [state])

    let editorChange = editorState => {
        setState(prevState => {
            return { ...prevState, editorState, outputHTML: editorState.toHTML() }
        })
    }

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
                    <BraftEditor value={editorState} onChange={editorChange} />
                </div>
            </div>
            <div className='base-style'>
                <h5>输出内容</h5>
                <div className='output-content'>{outputHTML}</div>
            </div>
        </Layout>
    )
}

export default EditorView

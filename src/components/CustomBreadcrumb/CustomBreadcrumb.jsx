import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const CustomBreadcrumb = props => {
    return (
        <Breadcrumb style={{ marginBottom: 16 }}>
            <Breadcrumb.Item>
                <Link to="/index">首页</Link>
            </Breadcrumb.Item>
            {props.arr &&
                props.arr.map(res => {
                    if (typeof res === 'object') {
                        return (
                            <Breadcrumb.Item key={res.path}>
                                <Link to={res.path}>{res.title}</Link>
                            </Breadcrumb.Item>
                        )
                    } else {
                        return <Breadcrumb.Item key={res}>{res}</Breadcrumb.Item>
                    }
                })}
        </Breadcrumb>
    )
}

export default CustomBreadcrumb

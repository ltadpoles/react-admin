import React from 'react'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router-dom'
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem'

const Test = props => {
    console.log(props)
    let { location } = props
    let a = location.pathname.split('/').filter(i => i)
    return (
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {
                a.map(res => (
                    <Breadcrumb.Item>{res}</Breadcrumb.Item>
               ))
            }
        </Breadcrumb>
    )
}

export default withRouter(Test)
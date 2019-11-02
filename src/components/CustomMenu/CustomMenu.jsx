import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

class CustomMenu extends Component {
    state = {
        openKeys: [],
        selectedKeys: []
    }

    // 处理 pathname
    getOpenKeys = string => {
        let newStr = '',
            newArr = [],
            arr = string.split('/').map(i => '/' + i)
        for (let i = 1; i < arr.length - 1; i++) {
            newStr += arr[i]
            newArr.push(newStr)
        }
        return newArr
    }

    // 页面刷新的时候可以定位到 menu 显示
    componentDidMount() {
        let { pathname } = this.props.location
        this.setState({
            selectedKeys: [pathname],
            openKeys: this.getOpenKeys(pathname)
        })
    }

    // 点击面包屑导航时 侧边栏同步响应
    componentDidUpdate(prevProps, prevState) {
        let { pathname } = this.props.location
        if (prevProps.location.pathname !== pathname) {
            this.setState({
                selectedKeys: [pathname],
                openKeys: this.getOpenKeys(pathname)
            })
        }
    }

    // 只展开一个 SubMenu
    onOpenChange = openKeys => {
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
                openKeys
            })
            return
        }

        // 最新展开的 SubMenu
        const latestOpenKey = openKeys[openKeys.length - 1]

        // 这里与定义的路由规则有关
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
                openKeys
            })
        } else {
            this.setState({
                openKeys: [latestOpenKey]
            })
        }
    }

    renderMenuItem = ({ key, icon, title }) => (
        <Menu.Item key={key}>
            <Link to={key}>
                {icon && <Icon type={icon} />}
                <span>{title}</span>
            </Link>
        </Menu.Item>
    )

    // 循环遍历数组中的子项 subs ，生成子级 menu
    renderSubMenu = ({ key, icon, title, subs }) => {
        return (
            <Menu.SubMenu
                key={key}
                title={
                    <span>
                        {icon && <Icon type={icon} />}
                        <span>{title}</span>
                    </span>
                }>
                {subs &&
                    subs.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })}
            </Menu.SubMenu>
        )
    }

    render() {
        let { openKeys, selectedKeys } = this.state
        return (
            <Menu
                mode='inline'
                theme='dark'
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                onClick={({ key }) => this.setState({ selectedKeys: [key] })}
                onOpenChange={this.onOpenChange}>
                {this.props.menu &&
                    this.props.menu.map(item => {
                        return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    })}
            </Menu>
        )
    }
}

CustomMenu.propTypes = {
    menu: PropTypes.array.isRequired
}

export default withRouter(CustomMenu)

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'

// 处理 pathname
const getOpenKeys = string => {
    let newStr = '',
        newArr = [],
        arr = string.split('/').map(i => '/' + i)
    for (let i = 1; i < arr.length - 1; i++) {
        newStr += arr[i]
        newArr.push(newStr)
    }
    return newArr
}

const CustomMenu = props => {
    const [state, setstate] = useState({
        openKeys: [],
        selectedKeys: []
    })

    let { openKeys, selectedKeys } = state

    // 页面刷新的时候可以定位到 menu 显示
    useEffect(() => {
        let { pathname } = props.location
        setstate(prevState => {
            return {
                ...prevState,
                selectedKeys: [pathname],
                openKeys: getOpenKeys(pathname)
            }
        })
    }, [props])

    // 只展开一个 SubMenu
    const onOpenChange = openKeys => {
        setstate(prevState => {
            if (openKeys.length === 0 || openKeys.length === 1) {
                return { ...prevState, openKeys }
            }
            const latestOpenKey = openKeys[openKeys.length - 1]

            // 这里与定义的路由规则有关
            if (latestOpenKey.includes(openKeys[0])) {
                return { ...prevState, openKeys }
            } else {
                return { ...prevState, openKeys: [latestOpenKey] }
            }
        })
    }

    const renderMenuItem = ({ key, icon, title }) => (
        <Menu.Item key={key}>
            <Link to={key}>
                {icon && <Icon type={icon} />}
                <span>{title}</span>
            </Link>
        </Menu.Item>
    )

    // 循环遍历数组中的子项 subs ，生成子级 menu
    const renderSubMenu = ({ key, icon, title, subs }) => {
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
                        return item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
                    })}
            </Menu.SubMenu>
        )
    }

    return (
        <Menu
            mode='inline'
            theme='dark'
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onClick={({ key }) => setstate(prevState => ({ ...prevState, selectedKeys: [key] }))}
            onOpenChange={onOpenChange}>
            {props.menu &&
                props.menu.map(item => {
                    return item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
                })}
        </Menu>
    )
}

CustomMenu.propTypes = {
    menu: PropTypes.array.isRequired
}

export default withRouter(CustomMenu)

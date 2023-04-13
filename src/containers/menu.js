const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        title: '版本管理',
        key: '/show',
        icon: 'pie-chart',
        subs: [
            { title: '版本号', key: '/show/table', icon: '' },
            { title: '发布计划', key: '/show/collapse', icon: '' }
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'user',
        auth: [1]
    }
]

export default menu

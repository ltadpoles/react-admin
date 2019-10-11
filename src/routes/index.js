import loadable from '../utils/loadable'

const Index = loadable(() => import('../views/Index'))
// 通用
const ButtonView = loadable(() => import('../views/ButtonView'))
const IconView = loadable(() => import('../views/IconView'))
// 导航
const NavView = loadable(() => import('../views/NavView'))

const routes = [
    {path: '/index', exact: true, name: 'Index', component: Index},
    {path: '/public/button', exact: false, name: '按钮', component: ButtonView},
    {path: '/public/icon', exact: false, name: '图标', component: IconView},
    {path: '/nav/dropdown', exact: false, name: '下拉菜单', component: NavView}
]

export default routes
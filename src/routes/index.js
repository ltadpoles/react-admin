import loadable from '../utils/loadable'

const Index = loadable(() => import('../views/Index'))
const ButtonView = loadable(() => import('../views/ButtonView'))
const IconView = loadable(() => import('../views/IconView'))

const routes = [
    {path: '/index', exact: true, name: 'Index', component: Index},
    {path: '/public/button', exact: false, name: '按钮', component: ButtonView},
    {path: '/public/icon', exact: false, name: '图标', component: IconView}
]

export default routes
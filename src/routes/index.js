import loadable from '../utils/loadable'

const Index = loadable(() => import('../views/Index'))
const ButtonView = loadable(() => import('../views/ButtonView'))

const routes = [
    {path: '/index', exact: true, name: 'Index', component: Index},
    {path: '/public/button', exact: false, name: '按钮', component: ButtonView}
]

export default routes
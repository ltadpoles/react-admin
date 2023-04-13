import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))

// 版本管理
const VersionView = loadable(() => import(/* webpackChunkName: 'table' */ '@/views/ShowView/Version'))
const ReleasePlanView = loadable(() => import(/* webpackChunkName: 'collapse' */ '@/views/ShowView/ReleasePlan'))

const About = loadable(() => import(/* webpackChunkName: 'about' */ '@/views/About'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/show/table', exact: false, name: '表格', component: VersionView },
    { path: '/show/collapse', exact: false, name: '折叠面板', component: ReleasePlanView },
    { path: '/about', exact: false, name: '关于', component: About, auth: [1] }
]

export default routes

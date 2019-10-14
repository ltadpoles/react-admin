import loadable from '../utils/loadable'

const Index = loadable(() => import('../views/Index'))

// 通用
const ButtonView = loadable(() => import('../views/PublicView/Button'))
const IconView = loadable(() => import('../views/PublicView/Icon'))

// 导航
const DropdownView = loadable(() => import('../views/NavView/Dropdown'))
const MenuView = loadable(() => import('../views/NavView/Menu'))
const StepView = loadable(() => import('../views/NavView/Step'))

// 表单
const FormView = loadable(() => import('../views/FormView'))

// 展示
const TableView = loadable(() => import('../views/showView/Table'))
const CollapseView = loadable(() => import('../views/showView/Collapse'))
const TreeView = loadable(() => import('../views/showView/Tree'))
const TabsView = loadable(() => import('../views/showView/Tabs'))

// 其它
const ProgressView = loadable(() => import('../views/Others/Progress'))
const AnimationView = loadable(() => import('../views/Others/Animation'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index },
    { path: '/public/button', exact: false, name: '按钮', component: ButtonView },
    { path: '/public/icon', exact: false, name: '图标', component: IconView },
    { path: '/nav/dropdown', exact: false, name: '下拉菜单', component: DropdownView },
    { path: '/nav/menu', exact: false, name: '下拉菜单', component: MenuView },
    { path: '/nav/steps', exact: false, name: '步骤条', component: StepView },
    { path: '/form', exact: false, name: '表单', component: FormView },
    { path: '/show/table', exact: false, name: '表格', component: TableView },
    { path: '/show/collapse', exact: false, name: '折叠面板', component: CollapseView },
    { path: '/show/tree', exact: false, name: '树形控件', component: TreeView },
    { path: '/show/tabs', exact: false, name: '标签页', component: TabsView },
    { path: '/others/progress', exact: false, name: '进度条', component: ProgressView },
    { path: '/others/animation', exact: false, name: '动画', component: AnimationView }
]

export default routes
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
const FormBaseView = loadable(() => import('../views/FormView/FormBaseView'))
const FormStepView = loadable(() => import('../views/FormView/FormStepView'))

// 展示
const TableView = loadable(() => import('../views/ShowView/Table'))
const CollapseView = loadable(() => import('../views/ShowView/Collapse'))
const TreeView = loadable(() => import('../views/ShowView/Tree'))
const TabsView = loadable(() => import('../views/ShowView/Tabs'))

// 其它
const ProgressView = loadable(() => import('../views/Others/Progress'))
const AnimationView = loadable(() => import('../views/Others/Animation'))
const EditorView = loadable(() => import('../views/Others/Editor'))
const UploadView = loadable(() => import('../views/Others/Upload'))

const Three = loadable(() => import('../views/TestView'))
const About = loadable(() => import('../views/About'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/public/button', exact: false, name: '按钮', component: ButtonView, auth: [1] },
    { path: '/public/icon', exact: false, name: '图标', component: IconView, auth: [1] },
    { path: '/nav/dropdown', exact: false, name: '下拉菜单', component: DropdownView },
    { path: '/nav/menu', exact: false, name: '下拉菜单', component: MenuView },
    { path: '/nav/steps', exact: false, name: '步骤条', component: StepView },
    { path: '/form/base-form', exact: false, name: '表单', component: FormBaseView },
    { path: '/form/step-form', exact: false, name: '表单', component: FormStepView },
    { path: '/show/table', exact: false, name: '表格', component: TableView },
    // { path: '/show/collapse', exact: false, name: '折叠面板', component: CollapseView },
    { path: '/show/tree', exact: false, name: '树形控件', component: TreeView },
    { path: '/show/tabs', exact: false, name: '标签页', component: TabsView },
    { path: '/others/progress', exact: false, name: '进度条', component: ProgressView, auth: [1] },
    { path: '/others/animation', exact: false, name: '动画', component: AnimationView, auth: [1] },
    { path: '/others/editor', exact: false, name: '富文本', component: EditorView, auth: [1] },
    { path: '/others/upload', exact: false, name: '上传', component: UploadView, auth: [1] },
    { path: '/one/two/three', exact: false, name: '三级', component: Three },
    { path: '/about', exact: false, name: '关于', component: About, auth: [1] }
]

export default routes

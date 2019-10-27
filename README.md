## React 后台管理系统

> [项目预览地址](https://ltadpoles.github.io/#/index)

基于 `React` 生态系统搭建的后台管理系统模板

此项目为闲暇时间所做，主要是为了熟悉 `React` 项目的开发流程，打造一个快速开发后台管理系统的模板

既为模板，可能就添加了一些你觉得并不需要的东西，比如菜单栏收缩将判断值存储在 `Redux` 之中，其实完全可以采用组件传值的方式解决，并不需要引入 `Redux` 。添加这个东西只是为了方便项目的拓展、展示它的使用方式。当然，如果你不需要，完全可以很简单的移除它们

由于每个管理项目可能会有不同的定制化需求，所以对于模板中的一些功能并没有做完善的封装，比如对 `axios` 的封装、前端路由权限的控制。当然，结构或者思路已经存在代码之中了,只需要添加具体的业务代码即可

此项目会不断进行优化迭代，后期可能会用 `react-hook` 重写一版

如果觉得不错或者对你有些许的帮助，欢迎 `star`，或者你有更好的实现方式、有趣的 `idea`，也欢迎留言交流 

以下为项目基本信息↓

### 技术栈

`react + react-Router + redux + antd + axios`

> `Create React App`    脚手架工具快速搭建项目结构

> `react-loadable`    路由懒加载

> `react-redux`     配合 `Redux` 更舒心

> `animate.css`     页面动画展示

> `braft-editor`    富文本插件

> `echarts`   数据可视化

> `nprogress`     顶部加载条

> `screenfull`    全屏插件

> `prettier`    代码风格统一

### 基本功能

- [x] 路由懒加载
- [x] 面包屑导航
- [x] 常用 UI 展示
- [x] echarts 全屏展示
- [x] 登陆/注销功能
- [x] axios 封装
- [x] 简单权限管理

### 项目结构

```
├── public                   # 不参与编译的资源文件
├── src                      # 主程序目录
│   ├── api                     # axios 封装
│   ├── assets                  # 资源文件
│   │   ├── font                    # 字体文件
│   │   └── images                  # 图片资源
│   ├── components              # 全局公共组件
│   │   ├── CustomBreadcrumb        # 面包屑导航
│   │   └── CustomMenu              # menu 菜单
│   ├── contatiners             # 页面结构组件
│   ├── routes                  # 路由目录
│   ├── store                   # redux 配置
│   ├── style                   # 样式目录
│   ├── utils                   # 工具类
│   ├── views                   # UI 页面
│   ├── APP.js                  # App.js
│   └── index.js                # index.js
├── .prettierrc.js           # 代码规范
├── config-overrides.js      # antd 样式按需加载
```

### 使用方法

```npm
git clone https://github.com/ltadpoles/react-admin.git

cd react-admin

// 安装依赖
yarn

// 启动
yarn start

// 打包
yarn build

```

### 截图

![image](https://raw.githubusercontent.com/ltadpoles/react-admin/master/src/assets/images/index.jpg)

![image](https://raw.githubusercontent.com/ltadpoles/react-admin/master/src/assets/images/form.jpg)

![image](https://raw.githubusercontent.com/ltadpoles/react-admin/master/src/assets/images/editor.jpg)
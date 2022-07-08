export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '查询表格',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  // 测试
  {
    path: '/test',
    name: '示范案例',
    icon: 'icon-anli1',
    routes: [
      {
        path: '/test/protable',
        name: '超级表格',
        icon: 'icon-biaoge',
        component: './Test/ProTable',
      },
      {
        path: '/test/tag',
        name: 'tag切换',
        icon: 'icon-qiehuan',
        component: './Test/Tag',
      },
      {
        path: '/test/detail',
        name: '记录详情',
        icon: 'icon-qiehuan',
        component: './Test/Detail',
      },
    ],
  },
  // 模拟插槽使用
  {
    path: '/solt',
    name: '模拟插槽',
    icon: 'icon-anli1',
    component: './Slot',
  },
  //Tree组件使用测试
  {
    path: '/tree',
    name: 'Tree组件',
    icon: 'icon-anli1',
    component: './Tree',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];

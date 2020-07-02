/**任务管理 */
const Home = () => import('@/views/home/index.vue')

const dynamicRoutes = [
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      name: '任务管理',
      // icon: 'icon-task'
    },
    // children: [
    //   {
    //     path: 'taskCreate',
    //     name: 'task-create',
    //     component: TaskCreate,
    //     meta: {
    //       name: '创建任务',
    //       icon: 'icon-chuangjianrenwumoban'
    //     }
    //   }
    // ]
  }
]

export default dynamicRoutes
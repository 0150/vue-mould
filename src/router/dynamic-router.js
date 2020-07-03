const Home = () => import('@/views/home/index.vue')
const Custom = () => import('@/views/custom')
const Enquiry = () => import('@/views/enquiry')
const Person = () => import('@/views/person')
const Bond = () => import('@/views/bond')
const User = () => import('@/views/user')

const dynamicRoutes = [
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      name: '系统首页'
    },
  },
  {
    path: '/custom',
    component: Custom,
    name: 'custom',
    meta: {
      name: '客户管理'
    },
  },
  {
    path: '/enquiry',
    component: Enquiry,
    name: 'enquiry',
    meta: {
      name: '询价管理'
    },
  },
  {
    path: '/person',
    component: Person,
    name: 'person',
    meta: {
      name: '人员管理'
    },
  },
  {
    path: '/bond',
    component: Bond,
    name: 'bond',
    meta: {
      name: '债券管理'
    },
  },
  {
    path: '/user',
    component: User,
    name: 'user',
    meta: {
      name: '用户管理'
    },
  }
]

export default dynamicRoutes
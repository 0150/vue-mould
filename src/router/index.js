import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Layout = () => import("@/views/layout/index.vue");

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

import DynamicRoutes from "./dynamic-router";

const router = new VueRouter({
  //开发环境
  // mode: "hash",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/home",
      children: DynamicRoutes
    }
  ]
});

export default router;
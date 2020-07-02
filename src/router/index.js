import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Layout = () => import("@/views/layout/index.vue");

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
console.log(router)
export default router;
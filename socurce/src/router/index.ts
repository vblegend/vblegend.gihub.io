import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Index from '../views/Index.vue';


import Display2D from '../views/2d/Display2D.vue';
import Designer2D from '../views/2d/Designer2D.vue';

import Display3D from '../views/3d/Display3D.vue';
import Designer3D from '../views/3d/Designer3D.vue';




Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/',
    component: Home,
    meta: { title: '自述文件' },
    children: [
      {
        path: '/index',
        component: Index,
        meta: { title: 'Home' },
      },
      {
        path: '/designer3d',
        component: Designer3D,
        meta: { title: '3D Designer' },
      }, {
        path: '/display3d',
        component: Display3D,
        meta: { title: '3D Display' },
      },
      {
        path: '/display2d',
        component: Display2D,
        meta: { title: '2D Display' },
      },
      {
        path: '/designer2d',
        component: Designer2D,
        meta: { title: '2D Designer' },
      },
      {
        path: '/filemanager',
        component: About,
        meta: { title: 'File Manager' },
      },
      {
        path: '/about',
        component: About,
        meta: { title: 'About' },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
  },
];

const router = new VueRouter({
  routes,
});

export default router;

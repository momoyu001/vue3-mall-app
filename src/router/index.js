import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        },
        {
            path: '/category',
            name: 'category',
            component: () => import(/* webpackChunkName: category */ '@/views/Category.vue'),
            meta: {
                index: 1,
            },
        },
        {
            path: '/product-list',
            name: 'productList',
            component: () => import(/* webpackChunName: product-list */ '@/views/ProductList.vue'),
            meta: {
                index: 2,
            },
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import(/* webpackChunkName: Login */ '@/views/Login.vue'),
            meta: {
                index: 1,
            },
        },
        {
            path: '/user',
            name: 'user',
            component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
            meta: {
                index: 1,
            },
        },
    ],
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Index.vue')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/Index.vue')
    },
    {
        path: '/show',
        name: 'show',
        component: () => import('@/views/home/Show.vue')
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import('@/views/pricing/Index.vue')
    },
    {
        path: '/success',
        name: 'success',
        component: () => import('@/views/success/Index.vue')
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
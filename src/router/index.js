import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import TestStore from '@/views/TestStore.vue'
import TestMock from '@/views/TestMock.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/store',
            component: TestStore
        },
        {
            path: '/mock',
            component: TestMock
        }
    ]
})
export default router
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/home/home.vue';
import About from '@/views/about/about.vue';
import Employee from '@/views/employee/employee.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/employee',
            component: Employee
        }
    ]
})
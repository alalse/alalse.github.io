import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Project from '../views/Project'
import Projects from '../views/Projects'
import Courses from '../views/Courses'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/project/:id',
        name: 'Project',
        component: Project
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import UserDetails from '../cmps/UserDetails.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'user/:id',
                component: UserDetails
            }
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router

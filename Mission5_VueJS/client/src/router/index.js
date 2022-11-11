import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import('../views/HomeView.vue')
        },
        {
            path: "/create",
            component: () => import('../views/CreateView.vue')
        },
        {
            path: "/edit/:id",
            component: () => import('../views/EditView.vue')
        }
    ]
})

export default router
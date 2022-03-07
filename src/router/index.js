import { createRouter, createWebHashHistory } from "vue-router";
import AppContainer from "../pages/AppContainer"

const routes = [
    {
        path: '/',
        component: AppContainer
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import AppContainer from "../pages/AppContainer";
import LoginPage from "../pages/LoginPage";

const routes = [
    {
        path: '/',
        name: 'App',
        component: AppContainer
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home/HomeView.vue"),
    },
    {
        path: "/movies",
        name: "movies-&-shows",
        component: () => import("@/views/home/HomeView.vue"),
    },
    {
        path: "/support",
        name: "support",
        component: () => import("@/views/home/HomeView.vue"),
    },
    {
        path: "/subscriptions",
        name: "subscriptions",
        component: () => import("@/views/home/HomeView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

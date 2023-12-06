import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const DEFAULT_TITLE = "StreamVibe";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        meta: { title: "Home" },
        component: () => import("@/views/home/HomeView.vue"),
    },
    {
        path: "/movies",
        name: "movies-&-shows",
        meta: { title: "Movies" },
        component: () => import("@/views/home/HomeView.vue"),
    },
    {
        path: "/support",
        name: "support",
        meta: { title: "Support" },
        component: () => import("@/views/home/HomeView.vue"),
    },
    {
        path: "/subscriptions",
        name: "subscriptions",
        meta: { title: "Subscriptions" },
        component: () => import("@/views/home/HomeView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${DEFAULT_TITLE} | ${to.meta.title}`;
    next();
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import LandingComponent from "./components/LandingComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AboutMe from './components/AboutMeComponent.vue';
import store from './store/store';

const routes = [
    { path: '/', component: LandingComponent },
    {
        path: '/home',
        component: HomeComponent,
        meta: { requiresAuth: true },
    },
    {
        path: '/about-me',
        component: AboutMe,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['isLoggedIn'];

    if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;

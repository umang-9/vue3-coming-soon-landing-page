import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import ThankYou from './pages/ThankYou.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/thank-you', component: ThankYou, name: 'Thankyou' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
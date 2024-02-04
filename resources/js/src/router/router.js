import { createRouter, createWebHistory } from 'vue-router';
import routes from "./routes";
import store from "@/store/store.js";

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    if (store.state.auth.authenticated || localStorage.getItem('x_xsrf_token')) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next({
                name: 'home' // TODO: change path
            })
        } else {
            return next();
        }
    } else {
        if (to.name === 'user.personal') {
            return next({
                name: 'user.login'
            })
        } else {
            return next();
        }
    }

})

export default router;

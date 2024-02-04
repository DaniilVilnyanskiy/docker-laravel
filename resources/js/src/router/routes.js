import Home from "@/pages/Home.vue";
import Catalog from "@/pages/Catalog.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Personal from "@/pages/Personal.vue";

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/catalog', component: Catalog, name: 'catalog' },
    { path: '/user/login', component: Login, name: 'user.login' },
    { path: '/user/register', component: Register, name: 'user.register' },
    { path: '/user/personal', component: Personal, name: 'user.personal' },
]

export default routes;

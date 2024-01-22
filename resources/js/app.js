// import './bootstrap';
import {createApp} from 'vue'

import App from "@/App.vue";

import router from "@/router/router";
import store from "@/store/store";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App)
    .use(BootstrapVue)
    .use(store)
    .use(router)
    .mount("#app")

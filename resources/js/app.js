// import './bootstrap';
import {createApp} from 'vue'

import App from "@/App.vue";

import router from "@/router/router";
import store from "@/store/store";
// import BootstrapVue from 'bootstrap-vue'
import './bootstrap.js';
import '../css/style.scss';

createApp(App)
    // .use(BootstrapVue)
    .use(store)
    .use(router)
    .mount("#app")

import axios from 'axios'
import router from '@/router/router.js'

async function getUser(context, goToPersonalCabinet = false) {
    return axios.get('/api/user').then(({data})=>{
        context.commit('SET_USER',data)
        context.commit('SET_AUTHENTICATED',true)
        context.commit('SET_LOGIN_LOADING_FALSE')
        if (goToPersonalCabinet) router.push({name: 'user.personal'})
    }).catch(()=> {
        context.commit('SET_USER',{})
        context.commit('SET_AUTHENTICATED',false)
        context.commit('SET_LOGIN_LOADING_FALSE')
    })
}
async function sendAuth(context, userData, path) {
    const goToPersonalCabinet = true
    context.commit('SET_LOGIN_LOADING_TRUE')
    if (path !== 'register') await axios.get('/sanctum/csrf-cookie')
    await axios.post(`/${path}`, userData).then(async res => {
        localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
        await getUser(context, goToPersonalCabinet);
    }).catch((err) => {
        alert(err)
        context.commit('SET_LOGIN_LOADING_FALSE')
    }).finally(()=>{
        context.commit('SET_LOGIN_LOADING_FALSE')
    })
}
export default {
    namespaced: true,
    state:{
        authenticated: false,
        loginLoading: false,
        user: {}
    },
    getters:{
        authenticated(state){
            return state.authenticated;
        },
        user(state){
            return state.user;
        },
        loading(state) {
            return state.loginLoading;
        }
    },
    mutations:{
        SET_LOGIN_LOADING_TRUE (state) {
            state.loginLoading = true
        },
        SET_LOGIN_LOADING_FALSE (state) {
            state.loginLoading = false
        },
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },
        SET_USER (state, value) {
            state.user = value
        }
    },
    actions:{
        async registered(context, userData) {
            await sendAuth(context, userData, 'register')
        },
        async login(context, userData){
            await sendAuth(context, userData, 'login')
        },
        logout({commit}){
            axios.post('/logout').then(res => {
                localStorage.removeItem('x_xsrf_token');
                router.push({name: 'home'});
                commit('SET_USER',{});
                commit('SET_AUTHENTICATED',false);
                console.log('logout');
            })
        },
        checkAuth(context) {
            const token = localStorage.getItem('x_xsrf_token');

            if (token) {
                getUser(context)
            }
        }
    }
}

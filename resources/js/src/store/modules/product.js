export default {
    namespaced: true,
    // initial value
    state: {
        productsLoading: false,
        products: []
    },
    actions: {
        async fetchProducts(context) {
            context.commit('SET_LOADING_TRUE');
            const searchParams = window.location.search;

            const data = await fetch(`/api/products${searchParams}`)
                .then((res) => res.json())

            if (!data) return;

            context.commit('SET_LOADING_FALSE');
            context.commit('UPDATE', data);
        }
    },
    mutations: {
        UPDATE(state, products) {
            state.products = products;
        },
        SET_LOADING_TRUE(state) {
            state.productsLoading = true;
        },
        SET_LOADING_FALSE(state) {
            state.productsLoading = false;
        }
    },
    getters: {
        products(state) {
            return state.products
        },
        productsLoading(state) {
            return state.productsLoading
        }
    },
}

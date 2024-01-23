export default {
    // initial value
    state: {
        productsLoading: false,
        products: []
    },
    actions: {
        async fetchProducts(context) {
            context.commit('setLoading');

            const data = await fetch('/api/products')
                .then((res) => res.json())

            if (!data) return;

            context.commit('removeLoading');
            context.commit('updateProducts', data);
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        setLoading(state) {
            state.productsLoading = true;
        },
        removeLoading(state) {
            state.productsLoading = false;
        }
    },
    getters: {
        allProducts(state) {
            return state.products
        },
        getStateLoading(state) {
            return state.productsLoading
        }
    },
}

export default {
    // initial value
    state: {
        productsLoading: false,
        products: []
    },
    actions: {
        async fetchProducts(context) {
            context.commit('setLoadingProducts');

            const data = await fetch('/api/products')
                .then((res) => res.json())

            if (!data) return;

            context.commit('removeLoadingProducts');
            context.commit('updateProducts', data);
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        setLoadingProducts(state) {
            state.productsLoading = true;
        },
        removeLoadingProducts(state) {
            state.productsLoading = false;
        }
    },
    getters: {
        allProducts(state) {
            return state.products
        },
        productsLoading(state) {
            return state.productsLoading
        }
    },
}

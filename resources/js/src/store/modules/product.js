export default {
    // initial value
    state: {
        products: []
    },
    actions: {
        async fetchProducts(context) {
            const data = await fetch('/api/products')
                .then((res) => res.json())
            if (!data) return
            context.commit('updateProducts', data)
        }
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        }
    },
    getters: {
        allProducts(state) {
            return state.products
        }
    },
}

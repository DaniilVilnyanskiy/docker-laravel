import filterInitial from "@/store/modules/filterInitial.js";
export default {
    // initial value
    state: {
        filtersLoading: false,
        filters: filterInitial,
        activeFilters: [],
        filtersRow: ''
    },
    actions: {
        async fetchFilters(context) {
            context.commit('setLoadingFilters');

            const responseData = await fetch('/api/products/filters')
                .then((res) => res.json())

            if (!responseData) return;

            context.commit('removeLoadingFilters');
            context.commit('updateFilters', responseData);
        },
        async fetchActiveFilters(context, searchParams) {
            context.commit('setLoadingFilters');
            context.commit('setLoadingProducts');

            const responseData = await fetch('/api/products?' + searchParams)
                .then((res) => res.json())

            if (!responseData) return;

            context.commit('removeLoadingFilters');
            context.commit('removeLoadingProducts');
            context.commit('updateProducts', responseData);
        }
    },
    mutations: {
        updateFilters(state, filters) {
            state.filters = filters;
        },
        setLoadingFilters(state) {
            state.filtersLoading = true;
        },
        removeLoadingFilters(state) {
            state.filtersLoading = false;
        },
        addActiveFilter(state, data) {
            const { name, filter } = data;
            state.activeFilters.push({name, value: filter.value})
        },
        clearActiveFilter(state, data) {
            const activeFilters = JSON.parse(JSON.stringify(state.activeFilters));
            const dataParse = JSON.parse(JSON.stringify(data));
            activeFilters.forEach((filter, index) => {
                if (filter.name === dataParse.name && filter.value === dataParse.filter?.value) {
                    state.activeFilters.splice(index, 1)
                }
            })
        },
        addFilterRow(state, data) {
            state.filtersRow = data
        }
    },
    getters: {
        allFilters(state) {
            return state.filters;
        },
        allActiveFilters(state) {
            return state.activeFilters;
        },
        filtersLoading(state) {
            return state.filtersLoading
        }
    },
}

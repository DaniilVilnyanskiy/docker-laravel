export default {
    // initial value
    state: {
        filtersLoading: false,
        filters: [],
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

            const responseData = await fetch('/api/products/filters?' + searchParams)
                .then((res) => res.json())

            if (!responseData) return;

            context.commit('removeLoadingFilters');
            context.commit('updateFilters', responseData);
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
            if (!state.activeFilters[data.name]) {
                state.activeFilters[data.name] = [];
            }
            state.activeFilters[data.name].push(JSON.stringify(data.filter));
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
        }
    },
}

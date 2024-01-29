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

            const responseData = await fetch('/api/products?' + searchParams)
                .then((res) => res.json())

            if (!responseData) return;

            context.commit('removeLoadingFilters');
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
            if (!state.activeFilters[data.name]) {
                state.activeFilters[data.name] = [];
            }
            let index = -1;
            const isDuplicate = state.activeFilters[data.name]
                .some((item, ind) => {
                    if (JSON.parse(item).id === data.filter.id) index = ind
                    return JSON.parse(item).id === data.filter.id
                });

            if (!isDuplicate) {
                state.activeFilters[data.name]?.push(JSON.stringify(data.filter));
            } else if (index !== -1) {
                state.activeFilters[data.name].splice(index, 1)
            }
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

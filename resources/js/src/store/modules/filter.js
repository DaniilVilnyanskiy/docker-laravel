import filterInitial from "@/store/modules/filterInitial.js";
export default {
    namespaced: true,
    // initial value
    state: {
        filtersReceived: false,
        filtersLoading: false,
        filters: filterInitial,
        activeFilters: [],
        isShowedApply: false,
    },
    actions: {
        async fetchFilters(context) {
            context.commit('SET_LOADING_TRUE');
            const searchParams = window.location.search;

            const responseData = await fetch(`/api/products/filters${searchParams}`)
                .then((res) => res.json())

            if (!responseData) return;

            context.commit('SET_LOADING_FALSE');
            context.commit('UPDATE', responseData);
            if (searchParams) {
                context.commit('SET_ACTIVE_FILTERS', responseData);
            }
        },
        async fetchActiveFilters(context, searchParams) {
            // context.commit('SET_LOADING_TRUE');
            context.commit('product/SET_LOADING_TRUE', null, { root: true })

            const responseData = await fetch('/api/products?' + searchParams)
                .then((res) => res.json())

            if (!responseData) return;

            // context.commit('SET_LOADING_FALSE');
            context.commit('product/SET_LOADING_FALSE', null, { root: true })
            context.commit('product/UPDATE', responseData, { root: true });
        }
    },
    mutations: {
        UPDATE(state, filters) {
            if (!state.filtersReceived) state.filtersReceived = true
            state.filters = filters;
        },
        SET_LOADING_TRUE(state) {
            state.filtersLoading = true;
        },
        SET_LOADING_FALSE(state) {
            state.filtersLoading = false;
        },
        SET_SHOW_APPLY_TRUE(state) {
            state.isShowedApply = true;
        },
        SET_SHOW_APPLY_FALSE(state) {
            state.isShowedApply = false;
        },
        PUSH_ACTIVE_FILTER(state, data) {
            const { name, filter } = data;
            state.activeFilters.push({name, value: filter.value})
        },
        SET_ACTIVE_FILTERS(state, responseData) {
            for (const responseDataKey in responseData) {
                if (responseData[responseDataKey].items) {
                    responseData[responseDataKey].items.forEach((item) => {
                        if (item.checked) {
                            this.commit('filter/PUSH_ACTIVE_FILTER', {name: responseDataKey, filter: item})
                        }
                    })
                }
            }
            // state.activeFilters = data;
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
    },
    getters: {
        filters(state) {
            return state.filters;
        },
        activeFilters(state) {
            return state.activeFilters;
        },
        filtersLoading(state) {
            return state.filtersLoading
        },
        isExist(state) {
            return state.filtersReceived
        },
        isShowedApply(state) {
            return state.isShowedApply;
        }
    },
}

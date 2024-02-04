<template>
    <div class="d-flex flex-column filter">
        <FilterSelect v-for="(value, id) in Object.entries(this.allFilters)"
            :keyName="value[0]"
            :filterId="id"
            :filter="value[1]"
            :filtersLoading="this.filtersLoading"
        />
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FilterSelect from "@/components/Filter/FilterSelect.vue";

export default {
    name: "Filter",
    props: [],
    components: {FilterSelect},
    data() {
      return {

      }
    },
    setup() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            allFilters: 'filter/filters',
            filtersLoading: 'filter/filtersLoading',
            isFiltersExist: 'filter/isExist'
        }),
    },
    methods: {
        ...mapActions({
            fetchFilters: 'filter/fetchFilters'
        }),
    },
    async mounted() {
        if (!this.isFiltersExist) {
            this.fetchFilters();
        }
    }
}
</script>

<style lang="scss" scoped>
.filter {
    min-width: 200px;
    gap: 14px;
}
</style>

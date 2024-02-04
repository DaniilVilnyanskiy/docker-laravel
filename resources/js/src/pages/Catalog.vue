<template>
    <div class="container">
        <h1>Catalog</h1>

        <div class="d-flex justify-content-between gap-4">
            <Filter/>
            <Loader v-if="this.productsLoading" />
            <CatalogList v-else :products="this.allProducts"/>
            <!--    <pre style="width: 774px;" v-for="item in Object.entries(this.activeFilters)">{{ item }}</pre>-->
            <!--    <pre style="width: 774px;">{{ this.activeFilters["category"][0] && JSON.parse(this.activeFilters["category"][0]) }}</pre>-->
        </div>

    </div>
</template>

<script>
import Loader from "@/components/ui/Loader.vue";
import CatalogList from "@/components/CatalogList.vue";
import Filter from "@/components/Filter/Filter.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Catalog",
    components: {Loader, CatalogList, Filter},
    setup() {
        return {};
    },
    computed: {
        ...mapGetters({
            allProducts: 'product/products',
            productsLoading: 'product/productsLoading',
            allActiveFilters: 'filter/activeFilters',
        }),
    },
    methods: {
        ...mapActions({
            fetchProducts: 'product/fetchProducts'
        }),
    },
    async mounted() {
        if (this.allProducts.length === 0) {
            this.fetchProducts();
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

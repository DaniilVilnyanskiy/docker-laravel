<template>
    <Filter/>
    <Loader v-if="this.productsLoading" />
    <CatalogList v-else :products="this.allProducts"/>
<!--    <pre style="width: 774px;" v-for="item in Object.entries(this.allActiveFilters)">{{ item }}</pre>-->
<!--    <pre style="width: 774px;">{{ this.allActiveFilters["category"][0] && JSON.parse(this.allActiveFilters["category"][0]) }}</pre>-->
</template>

<script>
import Filter from "@/components/Filter/Filter.vue";
import CatalogList from "@/components/CatalogList.vue";
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/Loader.vue";

export default {
    name: "Catalog",
    components: {Loader, CatalogList, Filter},
    setup() {
        return {};
    },
    computed: {
        ...mapGetters(['allProducts']),
        ...mapGetters(['productsLoading']),
        ...mapGetters(['allActiveFilters'])
    },
    methods: {
        ...mapActions(['fetchProducts']),
    },
    async mounted() {
        this.fetchProducts();
    }
}
</script>

<style lang="scss" scoped>

</style>

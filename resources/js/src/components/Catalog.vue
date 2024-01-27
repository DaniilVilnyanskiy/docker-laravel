<template>
    <Filter :allFilters="this.allFilters"/>
    <Loader v-if="this.productsLoading" />
    <CatalogList v-else :products="this.allProducts"/>
    <pre style="width: 774px;">{{ this.allFilters }}</pre>
</template>

<script>
import {defineComponent} from 'vue';
import Filter from "@/components/Filter/Filter.vue";
import CatalogList from "@/components/CatalogList.vue";
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/Loader.vue";

export default defineComponent({
    name: "Catalog",
    components: {Loader, CatalogList, Filter},
    setup() {
        return {};
    },
    computed: {
        ...mapGetters(['allProducts']),
        ...mapGetters(['allFilters']),
        ...mapGetters(['productsLoading']),
    },
    methods: {
        ...mapActions(['fetchProducts']),
        ...mapActions(['fetchFilters']),
    },
    async mounted() {
        await this.fetchFilters();
        // await this.fetchProducts();
    }
})
</script>

<style lang="scss" scoped>

</style>

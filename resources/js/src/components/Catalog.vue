<template>
    <Filter/>
    <CatalogList :products="this.allProducts"/>
</template>

<script>
import {defineComponent} from 'vue';
import Filter from "@/components/Filter/Filter.vue";
import CatalogList from "@/components/CatalogList.vue";
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
    name: "Catalog",
    components: {CatalogList, Filter},
    setup() {
        return {};
    },
    computed: {
        ...mapGetters(['allProducts'])
    },
    methods: {
        ...mapActions(['fetchProducts'])
    },
    async mounted() {
        await this.fetchProducts();
    }
})
</script>

<style lang="scss" scoped>

</style>

<template>
    <Filter/>
    <Loader v-if="this.getStateLoading" />
    <CatalogList v-else :products="this.allProducts"/>
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
        ...mapGetters(['getStateLoading']),
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

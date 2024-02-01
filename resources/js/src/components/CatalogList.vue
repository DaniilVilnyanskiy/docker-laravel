<template>
    <div class="catalog__list">
        <ProductCard
            v-for="product in this.products"
            :key="product.id"
            :params="product"
        />
    </div>
</template>

<script>
import ProductCard from "@/components/Cards/ProductCard.vue";

export default {
    name: "CatalogList",
    components: {ProductCard},
    props: ['products'],
    setup() {
        return {};
    }
}
</script>

<style lang="scss" scoped>

.catalog {
    &__list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
}

</style>

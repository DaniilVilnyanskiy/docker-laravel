<template>
    <div class="catalog__list" v-for="product in this.products" :key="product.id">
        <b-card
            :title="product.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text v-if="product.description">
                {{ product.description }}
            </b-card-text>

            <b-button href="#" class="mr-1" variant="primary">Добавить в корзину</b-button>
            <b-button href="#" variant="">Подробнее</b-button>
        </b-card>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: "CatalogList",
    components: {},
    props: ['products'],
    setup() {
        return {};
    }
})
</script>

<style lang="scss" scoped>

</style>

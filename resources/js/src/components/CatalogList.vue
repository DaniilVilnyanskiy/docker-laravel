<template>
    <div class="catalog__list">
        <b-card
            v-for="product in this.products" :key="product.id"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            no-body
            class="card"
        >
            <b-card-body>
                <b-card-title>{{ product.title }}</b-card-title>
                <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                <b-card-text v-if="product.description">
                    {{ product.description }}
                </b-card-text>
            </b-card-body>
            <b-card-footer class="card__footer">
                <b-button href="#" class="card__btn" variant="primary">Добавить в корзину</b-button>
                <b-button href="#" class="card__btn" variant="">Подробнее</b-button>
            </b-card-footer>
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

.catalog {
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }
}
.card {
    width: calc(33.33% - 8px);
    &__footer {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    &__btn {
        flex: 1 1 auto;
        margin: 0;
    }
}
</style>

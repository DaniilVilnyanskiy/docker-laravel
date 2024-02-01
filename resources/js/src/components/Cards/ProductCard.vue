<template>
    <div class="card">
        <div class="card__img"></div>
        <div class="card__body">
            <div class="card__title">{{ params.title }}</div>
            <div v-if="params.description" class="card__description">
                {{ params.description }}
            </div>
        </div>
        <div class="card__footer">
            <Button
                :classes="'btn-primary'"
                :title="'Добавить в корзину'"
            />
            <Button
                :classes="''"
                :title="'Подробнее'"
            />
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import Button from "@/components/ui/Button.vue";

export default defineComponent({
    name: "ProductCard",
    props: ['params'],
    components: {Button},
    setup() {
        return {};
    }
})
</script>

<style lang="scss" scoped>
.card {
    width: calc(33.33% - 8px);

    &__img {
        height: 200px;
    }

    &__body, &__footer {
        padding-left: 14px;
        padding-right: 14px;
    }

    &__body {
        padding-top: 14px;
        margin-bottom: auto;
    }

    &__footer {
        margin-top: 14px;
        padding-bottom: 14px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .btn {
            flex: 1 1 auto;
            margin: 0;
        }
    }
    &__btn {

    }
}
</style>

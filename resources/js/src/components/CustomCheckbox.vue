<template>
    <div :class="['checkbox', filtersLoading && 'loading']">
        <input
            :checked="params.model"
            @click="this.changeCheckbox"
            class="checkbox__input"
            :id="keyName + id"
            type="checkbox"
        />
        <label class="checkbox__label" :for="keyName + id"
        >
            {{ params.value }}
        </label>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "CustomCheckbox",
    props: ['params', 'id', 'keyName'],
    components: {},
    computed: {
        ...mapGetters(['allFilters']),
        ...mapGetters(['filtersLoading']),
    },
    data() {
        return {

        }
    },
    setup() {
        return {};
    },
    methods: {
        changeCheckbox() {
            this.params.model = !this.params.model;

            this.$emit('changeCheckbox');
        },
    }
}
</script>

<style lang="scss" scoped>
.checkbox {
    display: flex;
    align-items: flex-end;

    &__input, &__label {
        &:hover {
            cursor: pointer;
        }
    }

    &__label {
        padding-left: 8px;
        line-height: 16px;
    }
}
</style>

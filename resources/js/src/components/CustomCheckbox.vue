<template>
    <div :class="['checkbox', filtersLoading && 'loading']">
        <input
            :checked="params.checked"
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
        ...mapGetters({
            allFilters: 'filter/filters',
            filtersLoading: 'filter/filtersLoading'
        }),
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
            this.params.checked = !this.params.checked;

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

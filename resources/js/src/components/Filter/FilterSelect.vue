<template>
    <b-button
        v-b-toggle="`collapse-${btn.id}`"
        ref="button"
        class="filter__btn"
        variant="outline-secondary"
    >
        {{ btn.name }}
    </b-button>
    <b-collapse :id="`collapse-${btn.id}`" @show="onShow" @hide="onHide">
        <b-form-checkbox
            v-for="item in items"
            id="checkbox-1"
            v-model="status"
            name="sort"
            value="accepted"
            unchecked-value="not_accepted"
        >
            {{ item.title }}
        </b-form-checkbox>
    </b-collapse>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: "FilterSelect",
    props: ["btn", "items"],
    components: {},
    setup() {
        return {};
    },
    methods: {
        onShow() {
            this.$refs.button.classList.add('active');
        },
        onHide() {
            this.$refs.button.classList.remove('active');
        }
    }
})
</script>

<style lang="scss" scoped>

</style>

<template>
    <b-button
        v-b-toggle="`collapse-${btn.id}`"
        ref="button"
        class="filter__btn"
        variant="outline-secondary"
    >
        {{ btn.title }}
    </b-button>
    <b-collapse :id="`collapse-${btn.id}`" @show="onShow" @hide="onHide">

        <CustomCheckbox
            v-for="(item, id) in items"
            :params="item"
            :id="id"
            :selectId="btn.id"
            @changeCheckbox="this.changeCheckbox(btn.id, id)"
            :showApplyModalForEl="showApplyModalForEl"
        />

    </b-collapse>
</template>

<script>
import {defineComponent} from 'vue';
import CustomCheckbox from "@/components/CustomCheckbox.vue";

export default defineComponent({
    name: "FilterSelect",
    props: ['btn', 'items', 'showApplyModalForEl'],
    components: {CustomCheckbox},
    setup() {
        return {

        };
    },
    methods: {
        onShow() {
            this.$refs.button.classList.add('active');
        },
        onHide() {
            this.$refs.button.classList.remove('active');
        },
        changeCheckbox(selectId, checkboxId) {
            // console.log(selectId)
            // console.log(checkboxId)
            // console.log(this.showApplyModalForEl);
            this.showApplyModalForEl.selectId = selectId;
            this.showApplyModalForEl.checkboxId = checkboxId;
        }
    }
})
</script>

<style lang="scss" scoped>

</style>

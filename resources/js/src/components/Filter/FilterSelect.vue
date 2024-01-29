<template>
    <b-button
        v-b-toggle="`collapse-${filterId}`"
        ref="button"
        class="filter__btn"
        variant="outline-secondary"
    >
        {{ filter.title }}
    </b-button>
    <b-collapse visible :id="`collapse-${filterId}`" @show="onShow" @hide="onHide">

        <CustomCheckbox
            v-for="(item, checkboxId) in filter.items"
            :params="item"
            :id="checkboxId"
            :filterId="filterId"
            :filterKeyName="keyName"
            :showApply="allActiveFilters[keyName]&& allActiveFilters[keyName][checkboxId]"
            @changeCheckbox="this.changeCheckbox(filterId, checkboxId, item)"
            :showApplyModalForEl="showApplyModalForEl"
        />

    </b-collapse>
</template>

<script>
import {defineComponent} from 'vue';
import CustomCheckbox from "@/components/CustomCheckbox.vue";
import {mapGetters, mapMutations} from "vuex";

export default defineComponent({
    name: "FilterSelect",
    props: ['filter', 'showApplyModalForEl', 'keyName', 'filterId'],
    components: {CustomCheckbox},
    computed: {
        ...mapGetters(['allActiveFilters'])
    },
    setup() {
        return {

        };
    },
    methods: {
        ...mapMutations(['addActiveFilter']),
        ...mapMutations(['addFilterRow']),
        onShow() {
            this.$refs.button.classList.add('active');
        },
        onHide() {
            this.$refs.button.classList.remove('active');
        },
        changeCheckbox(selectId, checkboxId, item) {
            this.addActiveFilter({name:this.keyName, filter: item});

            this.showApplyModalForEl.filterId = selectId;
            this.showApplyModalForEl.checkboxId = checkboxId;
        }
    }
})
</script>

<style lang="scss" scoped>

</style>

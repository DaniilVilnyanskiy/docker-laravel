<template>
    <div class="d-flex flex-column filter">
        {{showApplyModalForEl}}
        <FilterSelect v-for="(value, id) in Object.entries(allFilters)"
            :keyName="value[0]"
            :filterId="id"
            :filter="value[1]"
            :showApplyModalForEl="showApplyModalForEl"
        />
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import FilterSelect from "@/components/Filter/FilterSelect.vue";

export default defineComponent({
    name: "Filter",
    props: ['allFilters'],
    components: {FilterSelect},
    data() {
      return {
          showApplyModalForEl: {
              "filterId": -1,
              "checkboxId": -1
          }
      }
    },
    setup() {
        return {

        };
    },
    methods: {

    }
})
</script>

<style lang="scss" scoped>
.filter {
    min-width: 200px;
    gap: 14px;
}
</style>

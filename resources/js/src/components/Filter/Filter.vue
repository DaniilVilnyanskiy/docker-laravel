<template>
    <div class="d-flex flex-column filter">
        <FilterSelect
            :btn="{name: 'Сорт', id: 0}"
            :items="[{title: 'Сосна'},{title: 'Береза'}]"

        />
        <FilterSelect
            :btn="{name: 'Размеры', id: 1}"
            :items="[{title: '20*20'},{title: '30*30'}]"

        />
        <FilterSelect
            :btn="{name: 'Вид', id: 2}"
            :items="[{title: 'Вагонка'},{title: 'Доска'}]"

        />
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import FilterSelect from "@/components/Filter/FilterSelect.vue";

export default defineComponent({
    name: "Filter",
    components: {FilterSelect},
    setup() {
        return {};
    }
})
</script>

<style lang="scss" scoped>
.filter {
    min-width: 200px;
    gap: 14px;
}
</style>

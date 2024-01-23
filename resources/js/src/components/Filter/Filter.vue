<template>
    <div class="d-flex flex-column filter">
        <FilterSelect v-for="accordion in filterSelect"
            :btn="accordion.btn"
            :items="accordion.items"
            :showApplyModalForEl="showApplyModalForEl"
        />
<!--        <div>{{showApplyModalForEl}}</div>-->
<!--        <div>{{ filterSelect }}</div>-->
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import FilterSelect from "@/components/Filter/FilterSelect.vue";

export default defineComponent({
    name: "Filter",
    props: {
        modelValue: {
            default: false,
            required: true,
            type: Boolean,
        },
    },
    components: {FilterSelect},
    data() {
      return {
          showApplyModalForEl: {
              "selectId": -1,
              "checkboxId": -1
          },
          filterSelect: [
              {
                  btn: {title: 'Сорт', name: 'sort', id: 0},
                  items: [
                      {title: 'Сосна', value: 'pine', model: false},
                      {title: 'Дуб', value: 'oak', model: false},
                  ]
              },
              {
                  btn: {title: 'Размеры', name: 'size', id: 1},
                  items: [
                      {title: '20*20*1000', value: '20*20*1000', model: false},
                      {title: '20*30*1000', value: '20*30*1000', model: false},
                  ]
              },
              {
                  btn: {title: 'Категория', name: 'category', id: 2},
                  items: [
                      {title: 'Вагонка', value: 'clapboard', model: false},
                      {title: 'Доска', value: 'board', model: false},
                  ]
              }
          ]
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

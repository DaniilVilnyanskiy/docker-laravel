<template>
    <div class="filter__select">
        <Button
            :classes="['filter__btn btn-outline-primary', filtersLoading && 'loading']"
            :title="filter.title"
        />

        <div :id="`collapse-${filterId}`"
             :class="['filter__items']"
        >
            <CustomCheckbox
                v-for="(item, checkboxId) in filter.items"
                :params="item"
                :id="checkboxId"
                :keyName="keyName"
                @changeCheckbox="this.changeCheckbox(filterId, checkboxId, item)"
            />
            <div
                class="filter__apply"
                @click="this.sendFilters"
                v-if="isApplyActive"
            >Применить</div>
        </div>
    </div>
</template>

<script>
import CustomCheckbox from "@/components/CustomCheckbox.vue";
import {mapActions, mapGetters, mapMutations} from "vuex";
import Button from "@/components/ui/Button.vue";
import {convertProxyToObject, createUrlFormObj} from "@/components/lib/lib.js";

export default{
    name: "FilterSelect",
    props: ['filter', 'keyName', 'filterId', 'filtersLoading'],
    components: {Button, CustomCheckbox},
    computed: {
        ...mapGetters(['allActiveFilters']),
        ...mapGetters(['allFilters']),
        isApplyActive() {
            const lastActiveFilter = this.allActiveFilters[this.allActiveFilters.length - 1];
            console.log();
            return (
                lastActiveFilter?.name === this.keyName
            )
        },
    },
    setup() {
        return {

        };
    },
    methods: {
        ...mapMutations(['addActiveFilter']),
        ...mapMutations(['clearActiveFilter']),
        ...mapActions(['fetchActiveFilters']),
        sendFilters() {
            const resultObject = convertProxyToObject(this.allFilters);
            this.fetchActiveFilters(createUrlFormObj(resultObject))
        },
        changeCheckbox(selectId, checkboxId, item) {
            if (item.model) {
                this.addActiveFilter({name:this.keyName, filter: item});
            } else {
                this.clearActiveFilter({name:this.keyName, filter: item})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.filter {
    &__items {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__btn {
        margin-bottom: 14px;
        width: 100%;
    }

    &__apply {
        background: #9ca3af;
        position: absolute;
        right: 0;
        padding: 8px;
        border-radius: 8px;
        top: 50%;
        transform: translate(72px, -50%);
        z-index: 1;

        &:hover {
            cursor: pointer;
        }

        span {
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>

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
import {convertProxyToObject, createUrlFormObj, parseUrlParams} from "@/components/lib/lib.js";

export default{
    name: "FilterSelect",
    props: ['filter', 'keyName', 'filterId', 'filtersLoading'],
    components: {Button, CustomCheckbox},
    computed: {
        ...mapGetters({
            allFilters: 'filter/filters',
            allActiveFilters: 'filter/activeFilters',
            isShowedApply: 'filter/isShowedApply'
        }),
        isApplyActive() {
            const lastActiveFilter = this.allActiveFilters[this.allActiveFilters.length - 1];
            console.log();
            return (
                this.isShowedApply && lastActiveFilter?.name === this.keyName
            )
        },
    },
    setup() {
        return {

        };
    },
    methods: {
        ...mapMutations({
            addActiveFilter: 'filter/PUSH_ACTIVE_FILTER',
            clearActiveFilter: 'filter/clearActiveFilter',
            showApplyBlock: 'filter/SET_SHOW_APPLY_TRUE',
            hideApplyBlock: 'filter/SET_SHOW_APPLY_FALSE'
        }),
        ...mapActions({
            fetchActiveFilters: 'filter/fetchActiveFilters'
        }),
        sendFilters() {
            console.log(this.allActiveFilters);
            console.log(this.allFilters);
            const resultObject = convertProxyToObject(this.allFilters);
            const searchParams = createUrlFormObj(resultObject);

            // Add searchParams in current URL
            const currentUrl = window.location.origin + window.location.pathname ;
            const newUrl = currentUrl + `?${searchParams}`;
            window.history.pushState({ path: newUrl }, '', newUrl);

            if (this.isShowedApply) this.hideApplyBlock();
            this.fetchActiveFilters(searchParams);
        },
        changeCheckbox(selectId, checkboxId, item) {
            if (!this.isShowedApply) this.showApplyBlock();

            if (item.checked) {
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

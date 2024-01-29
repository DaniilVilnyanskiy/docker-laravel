<template>
    <div class="checkbox">
        <input
            :checked="isFilterActive"
            @click="this.changeCheckbox"
            class="custom-control-input"
            :id="id"
            type="checkbox"
        />
        <label class="checkbox__label" :for="id"
        >
            {{ params.value }}
<!--            {{ showApply }}-->
        </label>
        <div
            class="checkbox__apply"
            @click="this.sendFilters"
            v-if="isApplyActive"
        >Применить <span @click.prevent.stop="this.closeApply">x</span></div>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import {mapActions, mapGetters} from "vuex";
import {convertProxyToObject, createUrlFormObj} from "@/components/lib/lib.js";

export default defineComponent({
    name: "CustomCheckbox",
    props: ['params', 'showApplyModalForEl', 'id', 'filterId', 'filterKeyName', 'showApply'],
    components: {},
    computed: {
        ...mapGetters(['allActiveFilters']),
        isApplyActive() {
            return (
                this.showApplyModalForEl.checkboxId === this.id
                && this.showApplyModalForEl.filterId === this.filterId
            )
        },
        isFilterActive() {
            return (
                this.showApply && (JSON.parse(this.showApply).id - 1) === this.id
            )
        }
    },
    data() {
        return {
            status: this.params.model,
        }
    },
    setup() {
        return {};
    },
    methods: {
        ...mapActions(['fetchActiveFilters']),
        changeCheckbox() {
            this.status = !this.status;
            this.params.model = this.status;
            this.$emit('changeCheckbox');
        },
        closeApply() {
            this.showApplyModalForEl.filterId = -1;
            this.showApplyModalForEl.checkboxId = -1;
        },
        sendFilters() {
            const resultObject = convertProxyToObject(this.allActiveFilters);
            this.fetchActiveFilters(createUrlFormObj(resultObject))
        }
    }
})
</script>

<style lang="scss" scoped>
.checkbox {
    position: relative;
    display: flex;
    align-items: end;
    gap: 8px;

    &__label {
        line-height: 16px;
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
        span {
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>

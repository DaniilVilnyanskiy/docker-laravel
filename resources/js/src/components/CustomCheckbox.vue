<template>
    <div class="checkbox">
        <input
            :checked="status"
            @click="this.changeCheckbox"
            class="custom-control-input"
            id="my-id"
            type="checkbox"
        />
        <label class="custom-control-label" for="my-id"
        >{{ params.title }}</label>
        <div
            class="checkbox__apply"
            v-if="showApplyModalForEl.checkboxId === id && showApplyModalForEl.selectId === selectId"
        >Применить <span @click="this.closeApply">x</span></div>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: "CustomCheckbox",
    props: ['params', 'showApplyModalForEl', 'id', 'selectId'],
    components: {},
    data() {
        return {
            status: this.params.model,
        }
    },
    setup() {
        return {};
    },
    methods: {
        changeCheckbox() {
            this.status = !this.status;
            this.params.model = this.status;
            this.$emit('changeCheckbox');
            // if (this.status) {
            //     this.$emit('changeCheckbox');
            // } else {
            //     console.log(this.status);
            //     this.showApplyModalForEl.selectId = -1;
            //     this.showApplyModalForEl.checkboxId = -1;
            // }
        },
        closeApply() {
            this.showApplyModalForEl.selectId = -1;
            this.showApplyModalForEl.checkboxId = -1;
        }
    }
})
</script>

<style lang="scss" scoped>
.checkbox {
    position: relative;
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

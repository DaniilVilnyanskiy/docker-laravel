<template>
    <button :class="['btn', classes]">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: ["classes", "title"],
    components: {},
    setup() {
        return {};
    }
}
</script>

<style lang="scss" scoped>

</style>

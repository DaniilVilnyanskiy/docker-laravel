<template>
    <PrimaryHeader/>
    <router-view></router-view>
</template>

<script>
import {defineComponent} from 'vue';
import PrimaryHeader from "./components/PrimaryHeader.vue";

export default defineComponent({
    components: {
        PrimaryHeader
    }
})
</script>

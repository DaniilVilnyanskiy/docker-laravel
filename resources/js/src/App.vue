<template>
    <PrimaryHeader/>
    <router-view></router-view>
    <div class="container d-flex justify-content-between gap-2">
        <Catalog/>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import PrimaryHeader from "@/components/PrimaryHeader.vue";
import Catalog from "@/components/Catalog.vue";

export default defineComponent({
    components: {
        Catalog,
        PrimaryHeader
    },
    computed: {

    },
    methods: {

    },
    async mounted() {

    }
})
</script>

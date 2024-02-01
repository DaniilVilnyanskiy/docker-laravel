<template>
    <PrimaryHeader/>
    <router-view></router-view>
    <div class="container d-flex justify-content-between gap-4">
        <Catalog/>
    </div>
</template>

<script>
import PrimaryHeader from "@/components/PrimaryHeader.vue";
import Catalog from "@/components/Catalog.vue";

export default {
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
}
</script>

<style>
@import '../../css/app.css';
</style>

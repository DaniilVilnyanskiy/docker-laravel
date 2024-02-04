<template>
    <PrimaryHeader/>
    <router-view class="temp-wrapper"></router-view>
    <div class="container d-flex justify-content-between gap-4">

    </div>
</template>

<script>
import PrimaryHeader from "@/components/PrimaryHeader.vue";
import {mapActions} from "vuex";
import {parseUrlParams} from "@/components/lib/lib.js";

export default {
    components: {
        PrimaryHeader
    },
    computed: {

    },
    methods: {
        ...mapActions({
            checkAuth: 'auth/checkAuth'
        })
    },
    async mounted() {
        await this.checkAuth();
    }
}
</script>

<style>
@import '../../css/app.css';
</style>

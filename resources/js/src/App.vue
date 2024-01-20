<template>
    <PrimaryHeader/>
    <router-view></router-view>
    <div v-for="product in this.allProducts" :key="product.id">
        {{ product.title }}
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import { mapGetters, mapActions } from 'vuex'
import PrimaryHeader from "@/components/PrimaryHeader.vue";

export default defineComponent({
    components: {
        PrimaryHeader
    },
    computed: {
        ...mapGetters(['allProducts'])
    },
    methods: {
        ...mapActions(['fetchProducts'])
    },
    async mounted() {
        this.fetchProducts();
    }
})
</script>

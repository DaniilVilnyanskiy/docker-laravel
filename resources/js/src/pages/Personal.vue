<template>
    <div class="container">
        <h1>Personal</h1>
        {{ this.user.name }}
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Personal",
    props: [],
    components: {},
    setup() {
        return {};
    },
    data() {

    },
    mounted() {
    },
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    },
    methods: {}
}
</script>

<style lang="scss" scoped>

</style>

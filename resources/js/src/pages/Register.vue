<template>
    <div class="container">
        <h1>Register</h1>
        <Form
            :fields="registerFields"
            @updateFields="this.updateFields"
            @handlerSubmit="this.handlerSubmit"
        />
    </div>
</template>

<script>
import Form from "@/components/ui/Form.vue";
import {mapActions} from "vuex";

export default {
    name: "Register",
    components: {Form},
    setup() {
        return {};
    },
    data() {
        return {
            registerFields: {
                name: 'Daniil',
                email: 'test@ya.ru',
                password: 'admin123',
                password_confirmation: 'admin123',
            }
        }
    },
    mounted() {
    },
    computed: {

    },
    methods: {
        ...mapActions({
            registered: 'auth/registered'
        }),
        updateFields({key, value}) {
            this.registerFields[key] = value
        },
        handlerSubmit() {
            this.registered(this.registerFields);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

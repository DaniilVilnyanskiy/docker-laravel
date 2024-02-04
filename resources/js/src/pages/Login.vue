<template>
    <div class="container">
        <h1>Register</h1>
        <div class="d-flex w-100 h-50">
            <Loader v-if="this.isUserLoading" />
            <Form
                v-else
                :fields="loginFields"
                @updateFields="this.updateFields"
                @handlerSubmit="this.handlerSubmit"
            />
        </div>
    </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/ui/Loader.vue";
import Form from "@/components/ui/Form.vue";
export default {
    name: "Register",
    components: {Form, Loader},
    setup() {
        return {};
    },
    data() {
        return {
            loginFields: {
                name: 'Daniil',
                email: 'viln-daniil@ya.ru',
                password: 'admin123',
            }
        };
    },
    computed: {
        ...mapGetters({
            getUser: 'auth/user',
            isUserLoading: 'auth/loading'
        })
    },
    methods: {
        ...mapActions({
            logIn:'auth/login'
        }),
        updateFields({key, value}) {
            this.loginFields[key] = value
        },
        handlerSubmit() {
            this.logIn(this.loginFields);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

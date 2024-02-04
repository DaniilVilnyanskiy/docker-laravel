<template>
    <header class="header shadow-md">
        <div class="container header__container mx-auto py-4 md:py-8">
            <div class="header__logo">
<!--                <img src="{{ asset('img/content/logo.png') }}" alt="logo">-->
            </div>
            <nav class="ml-auto">
                <ul class="header__nav">
                    <li>
                        <router-link class="header__nav_link" to="/">Главная</router-link>
                    </li>
                    <li>
                        <router-link class="header__nav_link" to="/catalog">Каталог</router-link>
                    </li>
                    <li v-if="!this.isUserAuth">
                        <router-link
                            class="header__nav_link"
                            to="/user/login"
                        >Авторизация</router-link>
                    </li>
                    <li v-if="!this.isUserAuth">
                        <router-link
                            class="header__nav_link"
                            to="/user/register"
                        >Регистрация</router-link>
                    </li>
                    <li v-if="this.isUserAuth">
                        <router-link
                            class="header__nav_link"
                            to="/user/personal"
                        >Кабинет</router-link>
                    </li>
                </ul>
            </nav>
            <div class="header__auth d-flex">
                <button v-if="this.isUserAuth" class="header__nav_link" @click="this.logOut">Выйти</button>
            </div>
        </div>
    </header>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "PrimaryHeader",
    components: {},
    setup() {
        return {};
    },
    data() {
        return {

        };
    },
    computed: {
      ...mapGetters({
          isUserAuth: 'auth/authenticated'
      })
    },
    methods: {
        ...mapActions({
            logOut: 'auth/logout'
        })
    }
}
</script>

<style lang="scss">
.header {
    height: 75px;
    &__container {
        display: flex;
        justify-content: space-between;
        gap: 32px;
    }
    &__logo {
        width: 180px;
    }
    &__nav {
        display: flex;
        gap: 12px;
        list-style: none;

        &_link {
            border-radius: 12px;
            border: 1px solid black;
            padding: 4px 12px;
            line-height: 100%;

            &.active {
                background-color: #2f2f30;
                color: white;
            }
        }
    }
}
</style>

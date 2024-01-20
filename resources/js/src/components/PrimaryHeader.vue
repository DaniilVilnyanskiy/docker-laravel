<template>
    <header class="shadow-md">
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
                </ul>
            </nav>
            <div class="header__auth d-flex">
<!--                @guest-->
<!--                <x-ui.button text="Войти" class="btn btn__primary"/>-->
<!--                <x-ui.button text="Зарегистрироваться" class="btn"/>-->
<!--                @else-->
<!--                <x-ui.button text="Кабинет"/>-->
<!--                <x-ui.button text="Выйти"/>-->
<!--                @endif-->
            </div>
        </div>
    </header>
</template>

<script>
// import {Button} from './Button.vue';
//
// export default defineComponent({
//     components: {
//         Button
//     }
// })
</script>

<style lang="scss">
.header {
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

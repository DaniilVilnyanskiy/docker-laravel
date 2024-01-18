<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        @vite(['resources/css/app.css', 'resources/css/app.scss', 'resources/js/app.js'])
        <!-- Styles -->
        <style></style>
    </head>
    <body class="">
        <header class="shadow-md">
            <div class="container header__container mx-auto py-4 md:py-8">
                <div class="header__logo">
                    <img src="{{ asset('img/content/logo.png') }}" alt="logo">
                </div>
                <nav class="ml-auto">
                    <ul class="header__nav">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/catalog">Каталог</a></li>
                        <li><a href="/about">О нас</a></li>
                    </ul>
                </nav>
                <div class="header__auth d-flex">
                    @guest
                        <x-ui.button text="Войти" class="btn btn__primary"/>
                        <x-ui.button text="Зарегистрироваться" class="btn"/>
                    @else
                        <x-ui.button text="Кабинет"/>
                        <x-ui.button text="Выйти"/>
                    @endif
                </div>
            </div>
        </header>

        <main class="container mx-auto px-4 md:px-20">
            @yield('content')
        </main>
    </body>
</html>

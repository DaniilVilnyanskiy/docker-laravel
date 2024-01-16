# Используем официальный образ PHP
FROM php:8.2-fpm

# Обновляем пакеты и устанавливаем необходимые зависимости
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    mc \
    mariadb-client && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Устанавливаем расширения PHP, необходимые для Laravel
RUN docker-php-ext-install pdo pdo_mysql zip

# Устанавливаем Composer (менеджер зависимостей для PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Создаем рабочую директорию для Laravel приложения
WORKDIR /var/www/html

# Копируем файлы проекта в контейнер (включая файл composer.json и composer.lock)
COPY .. /var/www/html

# Устанавливаем зависимости Laravel через Composer
RUN composer update --ignore-platform-reqs

# Устанавливаем права доступа к каталогам
RUN chown -R www-data:www-data /var/www/html/storage

# Устанавливаем MySQL client и импортируем дамп базы данных
RUN apt-get install -y mariadb-client

# Копируем дамп базы данных из проекта в контейнер
COPY dump/licenzia.sql /docker-entrypoint-initdb.d/licenzia.sql

# Устанавливаем переменные окружения для подключения к базе данных
ENV MYSQL_HOST=localhost \
    MYSQL_DATABASE=licenzia \
    MYSQL_USER=licenzia \
    MYSQL_PASSWORD=licenzia

# Импортируем дамп базы данных при инициализации контейнера
#RUN /usr/bin/mysqld_safe --datadir='/var/lib/mysql' &

# Опционально: Публикуем порт 9000 (PHP-FPM)
EXPOSE 9000

# Запускаем PHP-FPM
CMD ["php-fpm"]

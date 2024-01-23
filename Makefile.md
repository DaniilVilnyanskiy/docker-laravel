# Start containers
make start:
    docker-compose up -d

# Stop
make stop:
    docker-compose down

# go inside container
make bash:
    docker-compose exec licenzion-app /bin/bash
    docker exec -it licenzion-app /bin/bash


php artisan make:model --migration

# fcbnarede
Projeto colaborativo e voluntário de uma rede social para igreja familia campo de boaz

### INSTALAÇÃO
- Comando: `docker-compose build`
- Comando: `docker-compose up`
- Comando: `docker-compose exec fcb composer install`
- Comando: `sudo chgrp -R www-data storage bootstrap/cache`
- Comando: `sudo chmod -R ug+rwx storage bootstrap/cache`
- Comando: `docker-compose exec fcb php artisan key:generate`
- Comando: `npm install`
- Comando: `npm run dev`

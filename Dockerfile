# Використовуємо офіційний Node.js образ
FROM node:latest

# Встановлюємо робочу директорію
WORKDIR /srv/node/app

# Копіюємо файли package.json та package-lock.json
COPY package*.json ./

# Встановлюємо глобально nodemon
RUN npm install -g nodemon;

# Встановлюємо залежності для проєкту
RUN npm install

# Копіюємо всі файли проєкту
COPY . .

# Встановлюємо правильні права для користувача node на каталог /srv/node/app
RUN chown -R node:node /srv/node/app

# Не використовуємо команду USER node, щоб не бути залежним від створення користувача
# USER node

# Вказуємо порт, на якому запускається сервер
EXPOSE 3000
EXPOSE 9229

# Команда для запуску сервера з nodemon та інспекцією
CMD ["nodemon", "--inspect=0.0.0.0:9229", "server.js"]

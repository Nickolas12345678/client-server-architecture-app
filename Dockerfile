# Використовуємо офіційний Node.js образ
FROM node:latest

# Встановлюємо робочу директорію
WORKDIR /usr/src/app

# Копіюємо файли package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли проєкту
COPY . .

# Вказуємо порт, на якому запускається сервер
EXPOSE 3000

# Команда для запуску сервера
CMD ["node", "app.js"]

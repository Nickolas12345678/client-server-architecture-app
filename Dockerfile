FROM node:18

# Встановлення робочого каталогу
WORKDIR /app

# Копіювання package.json та package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання файлів проекту
COPY . .

# Експонування порту
EXPOSE 3000

# Запуск сервера
CMD ["node", "server.js"]
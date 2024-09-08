FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Run Prisma migrations and start the application
CMD ["sh", "-c", "npx prisma migrate deploy --preview-feature && npm start"]

EXPOSE 5000
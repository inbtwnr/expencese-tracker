FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Run Prisma migrations
CMD ["npx", "prisma", "migrate", "deploy", "--preview-feature"]

EXPOSE 5000
CMD ["npm", "start"]
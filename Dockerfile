FROM node:16-alpine3.16 As build

WORKDIR /usr/src/app
# Copy package files
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY  . .

# This is needed for Prisma ORM.
RUN npx prisma generate

# migrate db
ENV DATABASE_URL='postgresql://username:password@postgres-db:5432/blog_db?schema=public'
RUN npx prisma migrate deploy

RUN npm run build

FROM node:16-alpine3.16 As production

ENV NODE_ENV production

# # Copy the bundled code from the build stage to the production image
COPY  --from=build /usr/src/app/node_modules ./node_modules
COPY  --from=build /usr/src/app/dist ./dist
COPY  --from=build /usr/src/app/.env ./.env
# Seed database
RUN node "dist/prisma/seed.js"

EXPOSE 4000

CMD ["node", "dist/src/main.js"]
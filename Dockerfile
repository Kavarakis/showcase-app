FROM node:16.3-alpine As build
WORKDIR /usr/src/app
# Copy package files
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY  . .
RUN npm run build
# This is needed for Prisma ORM.
RUN npx prisma generate

FROM node:16.13-alpine As production
ENV NODE_ENV production
# # Copy the bundled code from the build stage to the production image
COPY  --from=build /usr/src/app/node_modules ./node_modules
COPY  --from=build /usr/src/app/dist ./dist
COPY  --from=build /usr/src/app/.env ./.env

EXPOSE 4000

ENV DATABASE_URL='postgresql://username:password@postgres:5432/blog_db?schema=public'
CMD ["node", "dist/src/main.js"]
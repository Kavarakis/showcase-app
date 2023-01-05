# showcase-app

## App is deployed on AWS E2

Frontend:
`3.71.90.245`

Backend:
`3.71.90.245:4000`

Existing routes on backend are documented via OpenAPI:

`{host}:4000/docs`

Test can be run for backend
`npm test`
Test can be run for frontend
`cd frontend`
`npm test`

To run app-backend locally:

- `npm i`
- `npx prisma generate`
- `sudo docker-compose up -d postgres`
- `npx prisma migrate dev`
- `npm run seed`
- `npm start`
- `http://localhost:4000`

To run app-frontend locally:

`cd frontend`
`npm start`
`http://localhost:3000`

### Tech Stack:

#### Backend:

- I used NestJS (`9.0.0`)(node `node:16-alpine3.16`) for developing
  coupled with:
- Prisma ORM (`4.7.1`)
- Postgres DB (`postgres:15-alpine`).

I have started with db infrastructure via dockerized container for postgres DB. After that I have used Prisma ORM for easier query building and fast prototyping with usage of NestJS as NodeJS framework.

#### Frontend:

- ReactJS (Typescript) (`18.2.0`)
- ReactDOM (`18.2.0`)
- Sass (`1.57.1`)
- Bootstrap (`5.2.3`)
- React Bootstrap (`2.7.0`)

Regarding frontend, I opted for usage of ReactJS where I divided design in parts for each topic. After that I have implemented each component separately and introduced Lazy loading for large images and InView rendering for each component.
Also, I have introduced responsive breakpoints for mobile view render handling.

### Deployment:

Apps and db were deployed on AWS EC2 micro, frontend app was built and served via nginx (`nginx.conf`).
Also each app has its appropiate dockerfile while everything is combined in `docker-compose.yml` file.

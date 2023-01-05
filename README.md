# showcase-app

## App is deployed on AWS E2

Frontend:
`3.71.90.245`

Backend:
`3.71.90.245:4000`

Existing routes on backend are documented:

`{host}:4000/docs`

Test can be run for backend
`npm test`
Test can be run for frontend
`cd frontend`
`npm test`

To run app-backend locally:
`npm i`
`npx prisma generate`
`sudo docker-compose up -d postgres`
`npx prisma migrate dev`
`npm run seed`
`npm start`
`http://localhost:4000`

To run app-frontend locally:

`cd frontend`
`npm start`
`http://localhost:3000`

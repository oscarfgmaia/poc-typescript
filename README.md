# poc-typescript

<h3> Small project to log payments 

## Get list of Payments

## About

 This application assists in log payments

## How to run for development

1. Clone this repository
2. Install all dependencies

bash
npm i


3. Create a new PostgreSQL database using the file dump.sql
5. Run the back-end in a development environment:

bash
npm run dev

## Starting for production

bash
npm run dev

## Usage
`GET /payment`
<br><br>
`GET /payment/:id`
<br><br>
`GET /total-payment`
<br><br>
`DELETE /payment`
<br><br>
`PUT /payment`
<br><br>
`POST /payment`
<br><br>
Body: { "value": "number", "description": "string" }

## License

MIT

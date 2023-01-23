import pg from "pg";
const { Pool } = pg;
const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "oscar*2760194",
  database: "carpentry_payments",
});

export default connection;

import connection from "../database/database.js";
import { Payment } from "../protocols.js";

async function registerPayment(payment: Payment) {
  try {
    await connection.query(
      `
            INSERT INTO payments (value,description) VALUES ($1,$2)
            `,
      [payment.value, payment.description]
    );
  } catch (error) {
    throw error
  }
}

const paymentsRepository = {
  registerPayment,
};

export default paymentsRepository;

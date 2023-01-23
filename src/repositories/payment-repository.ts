import { QueryResult } from "pg";
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
    throw error;
  }
}

async function getAllPayments(): Promise<QueryResult<Payment>> {
  try {
    return await connection.query(`
        SELECT * FROM payments;
      `);
  } catch (error) {
    throw error;
  }
}

async function deletePayment(id: string) {
  try {
    await connection.query(
      `
          DELETE FROM payments WHERE id=$1;
        `,
      [id]
    );
  } catch (error) {
    throw error;
  }
}

//TODO FIX UPDATE
async function updatePayment(payment: Payment, id: string) {
  try {

    await connection.query(
      `
            UPDATE payments SET value=$2, description=$3 WHERE id=$4;
          `,
      [payment.value, payment.description, id]
    );
  } catch (error) {
    throw error;
  }
}

const paymentsRepository = {
  registerPayment,
  getAllPayments,
  deletePayment,
  updatePayment,
};

export default paymentsRepository;

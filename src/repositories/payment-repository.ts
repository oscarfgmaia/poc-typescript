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
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

async function getAllPayments(): Promise<QueryResult<Payment>> {
  try {
    return await connection.query(`
        SELECT * FROM payments;
      `);
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

export async function getPayment(id: string): Promise<QueryResult<Payment>> {
  try {
    return await connection.query("SELECT * FROM payments WHERE id=$1", [id]);
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
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
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

//TODO FIX UPDATE
async function updatePayment(payment: Payment, id: string) {
  try {
    await connection.query(
      `
      UPDATE payments SET value=$1, description=$2 WHERE id=$3;
    `,
      [payment.value, payment.description, id]
    );
  } catch (error) {
    throw {
      name: "Database",
      message: "anything went wrong in connection with database",
    };
  }
}

const paymentsRepository = {
  registerPayment,
  getAllPayments,
  deletePayment,
  updatePayment,
  getPayment,
};

export default paymentsRepository;

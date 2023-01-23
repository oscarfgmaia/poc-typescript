import { Payment } from "../protocols.js";
import { Request, Response } from "express";
import paymentsRepository from "../repositories/payment-repository.js";
import { paymentSchema } from "../schemas/paymentSchema.js";
import httpStatus from "http-status";

export async function registerPayment(req: Request, res: Response) {
  const payment = req.body as Payment;
  const { error } = paymentSchema.validate(payment, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }
  try {
    await paymentsRepository.registerPayment(payment);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getPayments(req: Request, res: Response) {
  try {
    const payments = await paymentsRepository.getAllPayments();
    if (payments.rowCount === 0) {
      return res.sendStatus(httpStatus.NO_CONTENT);
    } else {
      return res.send(payments.rows);
    }
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deletePayment(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await paymentsRepository.deletePayment(id);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function updatePayment(req: Request, res: Response) {
  const payment = req.body as Payment;
  const { id } = req.params;
  console.log(payment)
  console.log(id)
  try {
    await paymentsRepository.updatePayment(payment, id);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

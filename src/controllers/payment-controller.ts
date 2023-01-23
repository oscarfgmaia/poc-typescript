import { Payment } from "../protocols.js";
import { Request, Response } from "express";
import paymentsRepository from "../repositories/payment-repository.js";
import { paymentSchema } from "../schemas/paymentSchema.js";

export async function registerPayment(req: Request, res: Response) {
  const payment = req.body as Payment;
  const { error } = paymentSchema.validate(payment,{abortEarly:false});
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }
  try {
    await paymentsRepository.registerPayment(payment);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
}

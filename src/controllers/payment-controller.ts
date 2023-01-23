import { Payment } from "../protocols.js";
import { Request, Response } from "express";
import paymentsRepository from "../repositories/payment-repository.js";

export async function registerPayment(req: Request, res: Response) {
  const payment = req.body;
  console.log(payment)
  try {
    await paymentsRepository.registerPayment(payment);
    res.sendStatus(201);
  } catch (error) {
    console.log(error)
  }
}

import { paymentSchema } from "../schemas/paymentSchema.js";
import { Payment } from "../protocols.js";
import { Request, Response } from "express";

export default function (req: Request, res: Response, next: () => void) {
  const payment = req.body as Payment;
  const { error } = paymentSchema.validate(payment, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }else{
  }
  next();
}

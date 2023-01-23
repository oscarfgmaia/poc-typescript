import { Payment } from "../protocols.js";
import { Request, Response } from "express";
import paymentsRepository from "../repositories/payment-repository.js";
import httpStatus, { NOT_FOUND } from "http-status";

export async function registerPayment(req: Request, res: Response) {
  const payment = req.body as Payment;
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
    if (payments.rows.length === 0) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } else {
      return res.send(payments.rows);
    }
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function getPayment(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const payments = await paymentsRepository.getPayment(id);
    if (payments.rows.length === 0) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } else {
      return res.send(payments.rows[0]);
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
  try {
    const paymentExists = await paymentsRepository.getPayment(id);
    if (paymentExists.rows.length === 0) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    } else {
      await paymentsRepository.updatePayment(payment, id);
      res.sendStatus(httpStatus.OK);
    }
  } catch (error) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

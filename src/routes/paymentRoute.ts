import { Router } from "express";
import {
  registerPayment,
  getPayments,
  deletePayment,
  updatePayment,
  getPayment
} from "../controllers/payment-controller.js";
import paymentValidation from "../middlewares/paymentValidation.js";
const router = Router();

router.post("/payment", paymentValidation, registerPayment);
router.get("/payment", getPayments);
router.get("/payment/:id", getPayment);
router.delete("/payment/:id", deletePayment);
router.put("/payment/:id", paymentValidation, updatePayment);
export default router;

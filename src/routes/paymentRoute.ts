import { Router } from "express";
import { registerPayment } from "../controllers/payment-controller.js";

const router = Router()

router.post('/payment',registerPayment)

export default router;
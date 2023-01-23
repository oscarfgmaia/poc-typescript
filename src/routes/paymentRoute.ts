import { Router } from "express";
import { registerPayment,getPayments, deletePayment,updatePayment } from "../controllers/payment-controller.js";

const router = Router()

router.post('/payment',registerPayment)
router.get('/payment/all',getPayments)
router.delete('/payment/:id',deletePayment)
router.put('/payment/:id',updatePayment)
export default router;


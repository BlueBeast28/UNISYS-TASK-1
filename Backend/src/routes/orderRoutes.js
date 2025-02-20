import express from 'express';
import { createOrder, getOrders, updateOrder, archiveOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.put('/:id', updateOrder);
router.put('/:id/archive', archiveOrder);

export default router;
import express from 'express';

import {getTransactions, createTransaction} from '../controllers/transactions.js'

const router = express.Router();


router.get('/', getTransactions);
router.post('/new', createTransaction);

export default router;
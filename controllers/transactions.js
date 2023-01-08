import Transaction from "../models/transactions.js";
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

export const getTransactions = async (req, res) =>{
    try{
        const transactions = await Transaction.find();
        console.log(transactions);

        res.status(200).json(transactions);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createTransaction = async (req, res) =>{
    const transaction = req.body;
    const newTransaction = new Transaction({...transaction, createdAt: new Date().toISOString()});

    try{
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch(error){
        res.status(409).json({message: error.message});
    }
}

export default router;
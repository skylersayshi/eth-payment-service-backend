import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    senderName: {
        type: String,
    },
    senderAddress:{
        type: String,
    },
    receiverName: {
        type: String
    },
    receiverAddress: {
        type: String,
    },
    amountETH: {
        type: String,
    },
    remark: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
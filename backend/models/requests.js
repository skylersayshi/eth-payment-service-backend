import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
    requestToName: {
        type: String,
    },
    requestToAddress:{
        type: String,
    },
    requestFromName: {
        type: String
    },
    requestFromAddress: {
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

const Request = mongoose.model('Request', requestSchema);

export default Request;
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'
import requestRoutes from './routes/requests.js'
import transactionRoutes from './routes/transactions.js'

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
// app.use(cors(
//   // origin: 'https://rodeopay.xyz'
// ));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://rodeopay.xyz");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use('/users', userRoutes)
app.use('/requests', requestRoutes)
app.use('/transactions', transactionRoutes)

app.get('/', (req, res)=>{
  res.send('APP IS RUNNING')
})

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error + 'did not connect'));

export default mongoose
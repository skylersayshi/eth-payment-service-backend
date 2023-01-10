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

app.use(cors())
app.use((req, res, next) => {
  const allowedOrigins = ['https://rodeopay.xyz', 'http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

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
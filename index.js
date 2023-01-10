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
app.use(cors());
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', 'https://rodeopay.xyz');
//   res.append('Access-Control-Allow-Headers', 'Content-Type');
//   res.set('Access-Control-Expose-Headers', '*')
//   next();
// })
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// })
// var allowlist = ['https://rodeopay.xyz']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'https://rodeopay.xyz');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });
app.use('/users', cors(corsOptionsDelegate), userRoutes)
app.use('/requests', cors(corsOptionsDelegate), requestRoutes)
app.use('/transactions', cors(corsOptionsDelegate), transactionRoutes)

app.get('/', (req, res)=>{
  res.send('APP IS RUNNING')
})

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error + 'did not connect'));

export default mongoose
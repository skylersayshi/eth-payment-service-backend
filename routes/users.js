import express from 'express';
import cors from 'cors';

import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users.js'

const router = express.Router()

// router.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'https://rodeopay.xyz');
  
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
  
//     // Pass to next layer of middleware
//     next();
//   });

router.get('/', getUsers)
router.post('/new', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
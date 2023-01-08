import express from 'express';

import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users.js'

const router = express.Router()

router.get('/you', getUsers)
router.post('/new', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
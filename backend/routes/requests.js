import express from 'express'

import { getRequests, createRequest, deleteRequest } from '../controllers/requests.js'

const router = express.Router()


router.get('/', getRequests)
router.post('/new', createRequest)
router.delete('/:id', deleteRequest)

export default router
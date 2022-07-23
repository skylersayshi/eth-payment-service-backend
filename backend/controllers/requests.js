import Request from "../models/requests.js"
import express from "express"
import mongoose from "mongoose"
const router = express.Router()

export const getRequests = async (req, res) =>{
    try{
        const requests = await Request.find()
        console.log(requests)

        res.status(200).json(requests)
    } catch(error){
        res.status(404).json({message: error.message})
    }
}

export const createRequest = async (req, res) =>{
    const request = req.body
    const newRequest = new Request({...request, createdAt: new Date().toISOString()})

    try{
        await newRequest.save()
        res.status(201).json(newRequest)
    } catch(error){
        res.status(409).json({message: error.message})
    }
}

export const deleteRequest = async (req, res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await Request.findByIdAndRemove(id)

    res.json({message: 'This request has been successfully deleted'})
}

export default router
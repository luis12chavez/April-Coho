import Run from "../models/run.model.js";
import jwt from 'jsonwebtoken'

const runController =  {
    create: async (req, res) => {
        try {
            console.log('LINE 7 runController:', req.body)
            const decodedJwt = jwt.decode(req.cookies.accountToken, { complete: true})
            console.log('LINE 9 runController: ', decodedJwt.payload)

            req.body.userId = decodedJwt.payload._id
            console.log('LINE 11 runController:', req.body)

            const newRun = await Run.create(req.body)
            res.status(201).json(newRun)
        }
        catch (err) {
            res.status(500).json(err)
            console.log('LINE 19 runController:')
        }
    },

    getAllRuns : async (req, res) => {
        try {
            const allRuns = await Run.find()
            res.status(200).json(allRuns)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    getAllRunsById : async (req, res) => {
        try {
            const allRuns = await Run.find({userId : req.params.id})
            res.status(200).json(allRuns)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    getOneRunById: async (req, res) => {
        try {
            const run = await Run.findById(req.params.id)
            res.json(run)
        }
        catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    },

    getRunBySearch: async (req, res) => {
        try {
            const run = await Run.find({name: req.param.id})
            // res.json(run)
            res.status(200).json(run)

        }
        catch(error) {
            console.log(error)
            res.status(400).json(error)
        }
    },
    
    updateOneRun: async (req, res) => {
        const options = {
            new: true,
            runValidators: true,
        }
        try {
            const run = await Run.findByIdAndUpdate(req.params.id, req.body, options)
            res.status(200).json(run)
        }
        catch (error) {
            res.status(400).json(error)
        }
    },

    deleteRunById : async (req, res) => {
        try {
            const run = await Run.findByIdAndDelete(req.params.id)
            res.status(200).json(run)
        }
        catch(error) {
            res.status(400).json(error)
        }
    }

}
export default runController
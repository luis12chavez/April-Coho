import runController from "../controllers/run.controller.js";
import { Router } from 'express'
import authenticate from "../config/jwt.config.js";

const runRouter = Router()

runRouter.route("/runs")
    .get(authenticate, runController.getAllRuns)
    .post(authenticate, runController.create)

runRouter.route('/runs/:id')
    .get(runController.getAllRunsById)
    .put(runController.updateOneRun)
    .delete(runController.deleteRunById)

runRouter.route('/runs/:id/details')
    .get(runController.getOneRunById)

runRouter.route('/runs/:id/search')
    .get(runController.getRunBySearch)

export default runRouter



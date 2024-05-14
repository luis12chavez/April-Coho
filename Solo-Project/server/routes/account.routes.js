import {Router} from 'express'
import accountController from '../controllers/account.controller.js'
import authenticate from '../config/jwt.config.js'

const router = Router()

router.route("/users")
    .post(accountController.register)
    
router.route('/login')
    .post(accountController.login)

router.route('/logout')
    .post(accountController.logOut)

router.route('/users/:id')
    .get(accountController.getOneAccountById)

export default router
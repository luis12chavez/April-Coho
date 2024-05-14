import Account from "../models/account.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"

const myKey = process.env.SECRET_KEY
const accountController = {
    register: async (req, res) => {
        try {
            const potentialAccount = await Account.findOne({ email: req.body.email })
            if (potentialAccount) {
                // Successful Status Message
                res.status(400).json({ message: 'This email is already in use' })
            }
            else {
                // Creating Account if user is trying for the first time
                const newAccount = await Account.create(req.body)

                // Generate account token for new account created
                const accountToken = jwt.sign({ _id: newAccount._id, email: newAccount.email }, myKey, { expiresIn: '2h' })
                console.log(accountToken)
                // res.json({ msg: 'Account created', account: newAccount })
                res.status(201).cookie('accountToken', accountToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).json(newAccount)
            }
        }
        catch (err) {
            console.log(err)
            res.status(400).json({ error: err })
        }
    },

    login: async (req, res) => {
        try {

            const account = await Account.findOne({ email: req.body.email })
            if (account) {
                const correctPassword = await bcrypt.compare(req.body.password, account.password)
                if (correctPassword) {
                    const accountToken = jwt.sign({ _id: account._id, email: account.email }, myKey, { expiresIn: '2h' })
                    res.status(201).cookie('accountToken', accountToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 100 }).json(account)
                }
                else {
                    res.status(400).json({ message: 'Invalid Email/Password' })
                }
            }
            else {
                res.status(400).json({ message: 'Invalid Email/Password' })
            }
        }
        catch (err) {
            res.status(400).json({ error: err })
        }
    },

    logOut: (req, res) => {
        res.clearCookie('accountToken')
        res.status(200).json({ message: 'Logged Out Account' })
    },

    getOneAccountById: async (req, res) => {
        try {
            const account = await Account.findById(req.params.id)
            res.json(account)
        }
        catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
}
export default accountController
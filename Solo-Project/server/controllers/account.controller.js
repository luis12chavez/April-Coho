import Account from "../models/account.model.js";
import jwt from 'jsonwebtoken'

const accountController = {
    register : async (req, res) => {
        try{
            const potentialAccount = await Account.findOne({email:req.body.email})
        }
        catch {
            
        }
    }
}
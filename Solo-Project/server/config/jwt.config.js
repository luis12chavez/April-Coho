import jwt from 'jsonwebtoken' 
// jwt = require("jsonwebtoken");



const Secret = process.env.SECRET_KEY
const authenticate = (req, res, next) => {
    // console.log('Line 7', req.cookies)
    jwt.verify(req.cookies.accountToken, Secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            
            // console.log(payload)
            next();
        }
    });
}
export default authenticate




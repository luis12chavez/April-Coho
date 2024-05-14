import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const AccountSchema = new Schema(
    {
        fName: {
            type: String,
            required: [true, 'Name is required...'],
            minlength: [3, 'Name must be a minimum of 3 characters'],
            maxlength: [25, 'Name has a maximum limit of 25 characters']
        },
        lName: {
            type: String,
            required: [true, 'Last name is required...'],
            minlength: [3, 'Last name must be a minimum of 3 characters'],
            maxlength: [25, 'Last name a maximum limit of 25 characters']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            }

        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be a minimum of 8 characters or more']
        }
    },
    { timestamps: true }
)

AccountSchema.virtual('confirmPassword')
    .get(function () {
        return this._confirmPassword
    })
    .set(function (value) {
        return this._confirmPassword = value
    })

AccountSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

// near the top is a good place to group our imports
// const bcrypt = require('bcrypt');
// // this should go after 
AccountSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});



const Account = model("Account", AccountSchema)
export default Account
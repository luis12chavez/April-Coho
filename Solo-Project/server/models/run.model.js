import mongoose, { model, Schema } from 'mongoose'


const RunSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'The Run requires a name'],
            minlength: [4, 'Name requires a minimum of 4 characters']
        },

        location: {
            type: String,
            required: [true, 'Location requires a name'],
            minlength: [4, 'Location requires a minimum of 4 characters'],
        },

        description: {
            type: String,
            required: [true, 'Description requires a name'],
            minlength: [4, 'Description requires a minimum of 10 characters'],
        },

        userId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account"
        }

    },
    { timestamps: true }
)
const Run  = model("Run", RunSchema)
export default Run
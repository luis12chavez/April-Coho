import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnect from './config/mongoose.config.js'
import router from './routes/temp.routes.js'
import cookieParser from 'cookie-parser'

dbConnect();

const app = express();
app.use(express.json(), cors({credentials:true, origin:'http://localhost:5173'}));

dotenv.config();
app.use('/api', router)


app.listen(process.env.PORT, () =>
    console.log(`Listening on port: ` + process.env.PORT )
);
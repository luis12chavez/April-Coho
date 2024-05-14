import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnect from './config/mongoose.config.js'
import router from './routes/account.routes.js'
import runRouter from './routes/run.routes.js'
import cookieParser from 'cookie-parser'


const app = express();

app.use(express.json(), cors({credentials:true, origin:'http://localhost:5173'}));
app.use(cookieParser())
app.use('/api', router, runRouter)
dotenv.config();


dbConnect();
app.listen(process.env.PORT, () =>
    console.log(`Listening on port: ` + process.env.PORT )
);
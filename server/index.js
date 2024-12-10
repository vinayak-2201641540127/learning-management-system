import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({});
connectDB();

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/api/v1/user', userRoute)

app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`);  
})
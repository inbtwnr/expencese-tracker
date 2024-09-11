import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {userRouter} from './user/users';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', userRouter);
// app.use('/api/expenses', indexRouter);

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`);
});
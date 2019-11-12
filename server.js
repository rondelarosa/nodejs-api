import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Import Routes
import authRoute from './routes/auth';

const app = express();

// Connect to DB
// eslint-disable-next-line no-undef
mongoose.connect(process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('connected to db!'));

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => 
	console.log('Server Up and Running')
);

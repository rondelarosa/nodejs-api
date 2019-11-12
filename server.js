import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import Routes
import authRoute from './routes/auth';
import postRoute from './routes/posts';

dotenv.config();

const app = express();

// Connect to DB
// eslint-disable-next-line no-undef
mongoose.connect(process.env.DB_CONNECT,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('connected to db!'));

//Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => 
	console.log('Server Up and Running')
);

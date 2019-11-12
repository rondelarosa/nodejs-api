import express from 'express';
import User from '../models/user';
const router = express.Router();

router.post('/register', (req, res)=> {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
});

module.exports = router;

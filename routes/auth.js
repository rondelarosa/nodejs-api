import express from 'express';
import User from '../models/user';
import userValidation from '../validations/user';
import bcrypt from 'bcryptjs';

const router = express.Router();

const registerUser = () => {
	return async (req, res) => {
		// validate
		const { error } = userValidation(req.body);
		if (error) return res.status(400).send(error.details[0].message);

		// check if user in database
		const findUser = await User.findOne({ email: req.body.email });
		if (findUser) return res.status(400).send('Email alredy exist');

		// hash passwords
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		// crate new user
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: hashPassword
		});
		try {
			const savedUser = await user.save();
			res.send(savedUser);
		} catch (error) {
			res.status(400).send(error);
		}
	};
};

router.post('/register', registerUser());

module.exports = router;

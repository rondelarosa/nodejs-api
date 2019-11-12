import express from 'express';
import User from '../models/user';
import Joi from '@hapi/joi';

const schema = Joi.object({
	name: Joi.string()
		.min(6)
		.required(),
	email: Joi.string()
		.min(6)
		.required()
		.email(),
	password: Joi.string()
		.min(6)
		.required()
});

const router = express.Router();

const registerUser = () => {
	return (req, res) => {
		// validate
		const validation = schema.validate(req.body);
		res.send(validation);
		// const user = new User({
		// 	name: req.body.name,
		// 	email: req.body.email,
		// 	password: req.body.password,
		// });
		// try {
		// 	const savedUser = user.save();
		// 	savedUser.then( s => res.send(s));
		// }
		// catch (error) {
		// 	res.status(400).send(error);
		// }
	};
};

router.post('/register', registerUser());

module.exports = router;

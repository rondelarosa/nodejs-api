import Joi from '@hapi/joi';

const schema = Joi.object({
	email: Joi.string()
		.min(6)
		.required()
		.email(),
	password: Joi.string()
		.min(6)
		.required()
});

const loginValidation = data => schema.validate(data);

module.exports = loginValidation;

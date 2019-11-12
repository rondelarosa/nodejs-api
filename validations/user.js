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

const userValidation = data => schema.validate(data);

module.exports = userValidation;

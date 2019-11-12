import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
	const token = req.header('Authorization');
	console.log({token});
	if(!token) return res.status(401).send('Access Denied');

	try {
		// eslint-disable-next-line no-undef
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	}
	catch(error) {
		res.status(400).send('Invalid Token');
	}
};

module.exports = auth;

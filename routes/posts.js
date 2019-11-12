import express from 'express';
import verify from './verifyToken';


const router = express.Router();

router.get('/', verify, (req, res) => {
	res.json({
		posts: {
			title: 'my first post',
			description: 'random data you shouldn`t access'
		}
	});
});

module.exports = router;

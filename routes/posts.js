import express from 'express';
import verify from './verifyToken';
import User from '../models/user';

const router = express.Router();

router.get('/', verify, (req, res) => {
	res.send(req.user);
	User.findOne({_id: req.user});
});

module.exports = router;

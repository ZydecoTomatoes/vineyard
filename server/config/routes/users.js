import express from 'express';
import { newUser, getUserByUsername, getUserById } from '../../controllers/users';

const router = express.Router();

router.route('/').post(/*newUser*/);
router.route('/').get(/*getUserByUsername*/);

export default router;

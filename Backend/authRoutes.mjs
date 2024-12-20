import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.mjs';

const router = express.Router();

// Route for user registration
router.post('/signup', registerUser);

// Route for user login
router.post('/login', loginUser);

export default router;
import { Router } from 'express';
import { getHome } from '../controllers/home.controller.js';

const router = Router();

// GET /
router.get('/', getHome);

export default router;

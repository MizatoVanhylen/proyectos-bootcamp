import { Router } from 'express';
import { getNotes, getNote, postNote } from '../controllers/notes.controller.js';

const router = Router();

// GET /api/notes
router.get('/', getNotes);

// GET /api/notes/:id
router.get('/:id', getNote);

// POST /api/notes
router.post('/', postNote);

export default router;


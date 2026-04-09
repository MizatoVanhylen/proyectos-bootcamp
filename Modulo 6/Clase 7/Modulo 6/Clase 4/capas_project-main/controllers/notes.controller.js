import {
  getAllNotes,
  getNoteById,
  createNote
} from '../services/notes.service.js';

// Obtener todas las notas
export const getNotes = (req, res) => {
  const notes = getAllNotes();
  res.json(notes);
};

// Obtener una nota por id
export const getNote = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const note = getNoteById(id);

  if (!note) {
    return res.status(404).json({ error: 'Nota no encontrada' });
  }

  res.json(note);
};

// Crear una nueva nota
export const postNote = (req, res) => {
  const { content, important = false } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Falta contenido' });
  }

  const newNote = createNote({ content, important });
  res.status(201).json(newNote);
};

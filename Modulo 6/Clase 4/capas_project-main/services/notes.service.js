// "Base de datos" en memoria
// Más adelante esto podría reemplazarse por PostgreSQL o MongoDB
let notes = [
  { id: 1, content: 'Aprender Node.js', important: true },
  { id: 2, content: 'Entender Express', important: false }
];

// Obtener todas las notas
export const getAllNotes = () => {
  return notes;
};

// Obtener una nota por id
export const getNoteById = (id) => {
  return notes.find(note => note.id === id);
};

// Crear una nueva nota
export const createNote = ({ content, important = false }) => {
  const newNote = {
    id: notes.length + 1,
    content,
    important
  };

  notes.push(newNote);
  return newNote;
};

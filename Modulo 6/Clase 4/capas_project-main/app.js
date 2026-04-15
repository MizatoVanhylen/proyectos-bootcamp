import express from 'express';

// Importamos rutas (YA NO controllers)
import homeRoutes from './routes/home.routes.js';
import notesRoutes from './routes/notes.routes.js';

const app = express();
const PORT = 3000;

// Middleware base
app.use(express.json());

// Servir archivos estáticos
app.use(express.static('public'));


// Montamos rutas

// Ruta raíz
app.use('/', homeRoutes);

// API notas
app.use('/api/notes', notesRoutes);


// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
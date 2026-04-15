import express from 'express';
import morgan from 'morgan';
import moment from 'moment';
import fs from 'fs';

const app = express();

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  const horaActual = moment().format('h:mm:ss a');
  console.log(`[${horaActual}] Petición: ${req.method} ${req.url}`);
  next();
});

let tareas = [
  { id: 1, titulo: "Aprende Node", estado: "pendiente" }
];

function guardarTareas() {
  fs.writeFile('tareas.json', JSON.stringify(tareas, null, 2), err => {
    if (err) {
      console.log("❌ Error al guardar en disco", err);
    } else {
      console.log("💾 Tareas guardadas correctamente en tareas.json");
    }
  });
}

// Listar tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// Agregar tareas (POST)
app.post('/tareas', (req, res) => {
  const nuevaTarea = {
    id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1,
    titulo: req.body.titulo,
    estado: "pendiente"
  };

  tareas.push(nuevaTarea);
  guardarTareas()

  console.log(`📝 Tarea creada: ${nuevaTarea.titulo}`);
  res.status(201).json(nuevaTarea);
});


// Completar tareas

app.put('/tareas/:id', (req, res) => {
  const idABuscar = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === idABuscar);

  if (tarea) {
    tarea.estado = "completada";
    guardarTareas();
    res.json({ mensaje: "Tarea Actualizada", tarea });
  } else {
    res.status(404).json({ mensaje: "Tarea no encontrada" });
  }
});


app.get('/', (req, res) => {
  res.send('API de tareas funcionando correctamente')
})


app.listen(PORT, () => {
  console.log(`🚀 El servidor iniciaro en http://localhost:${PORT}`);

});
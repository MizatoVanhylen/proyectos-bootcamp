import express from 'express';
import moment from 'moment';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static('public'))

// Configuración de hadlebars

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


// Middleware personalizado (logging básico) con fecha (usando moment)
app.use((req, res, next) => {
  const fecha = moment().format("YYYY-MM-DD HH:mm:ss");

  console.log(`[${fecha}] ${req.method} ${req.url}`);
  next();
});

// Middleware 2: Medición de tiempo de respuesta (muy útil en industria)
app.use((req, res, next) => {
  const inicio = Date.now();

  res.on("finish", () => {
    const duracion = Date.now() - inicio;
    console.log(`Tiempo de respuesta: ${duracion}ms`);
  });

  next();
});

// RUTAS

// app.get('/', (req, res) => {
//   res.send("API funcionando correctamente");
// });

app.get('/', (req, res) => {
  res.render('index', {
    nombre: "Ivan Gonzales",
    profesion: "Abogado"
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    nombre: "Ivan Gonzales",
    descripcion: "Abogado y programador a tiempo completo"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor inciado en http://localhost:${PORT}`);
})
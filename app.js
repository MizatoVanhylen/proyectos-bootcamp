import express from "express"; // Módulo Express
import moment from "moment";
import path from "path";
import hbs from "hbs";
import { fileURLToPath } from "url";

// Creamos la aplicacion expresss.
const app = express();

// Configuracion de entorno
const PORT = 3000;

// Configuracion de hadlebars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Helper 1: convertir a mayúscula
hbs.registerHelper('mayuscula', function (texto) {
  return texto.toUpperCase();
});

// Helper 2: obtener año actual
hbs.registerHelper('anio', function () {
  return new Date().getFullYear();
});

// Helper 3: formatear fecha con moment
hbs.registerHelper('fecha', function () {
  return moment().format("DD/MM/YYYY");
});

// Helper 4: condicional simple
hbs.registerHelper('esAbogado', function (profesion) {
  return profesion === 'Abogado' ? 'Es abogado' : 'Otro rubro';
});

// Helper 5: contador de caracteres
hbs.registerHelper('longitud', function (texto) {
  return texto.length;
});


// Middlewares
app.use(express.json());
app.use(express.static("public"));

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

// Rutas
app.get("/", (req, res) => {
  console.log("Renderizando Home");
  res.render("index", {
    nombre: "Ivan Gonzales",
    profesion: "Abogado",
  });
});

app.get("/about", (req, res) => {
  console.log("Renderizando about");

  res.render("about", {
    nombre: "Ivan Gonzales",
    Descripcion: "Abogado y programador a tiempo completo",
  });
});

app.get("/array", (req, res) => {
  const personas = [
    { name: "Juan", profession: "Desarrollador Web" },
    { name: "María", profession: "Diseñadora UX" },
    { name: "Pedro", profession: "Data Scientist" },
  ];

  res.render("array", {
    listaPersonas: personas,
  });
});

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
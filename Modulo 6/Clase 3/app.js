import express from "express";

const app = express();
const PORT = 3000;

// Middleware base
app.use(express.json());

// "Base de Datos" en memoria

let notas = [
  { id: 1, content: "Aprender Node.js", important: true },
  { id: 2, content: "Entender Express", important: false },
];

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SPA Notas</title>
      </head>
      <body>
        <h1>Notas</h1>
        <ul id="notes"></ul>
 
        <script>
          // Cliente (SPA): consume la API
          fetch('/api/notes')
            .then(res => res.json())
            .then(data => {
              const list = document.getElementById('notes');
              data.forEach(note => {
                const li = document.createElement('li');
                li.textContent = note.content + (note.important ? ' ⭐' : '');
                list.appendChild(li);
              });
            });
        </script>
      </body>
    </html>
  `);
});

// API - obtener notas
app.get('/api/notes', (req, res) => {
  res.json(notas)
})





// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


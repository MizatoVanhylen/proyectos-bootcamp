import http from 'http';

let notas = [
  {
    id: 1,
    content: "Node.js permite ejecutar JavaScript en el backend",
    important: true
  },

  {
    id: 2,
    content: "El backend maneja requests y responses",
    important: false
  },

  {
    id: 3,
    content: "GET y POST son métodos clave en APIs",
    important: true
  }

];

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end(JSON.stringify(notas));
})

const PORT = 3001

app.listen(PORT)
console.log(`Servidor corriendo en el puerto ${PORT}`)
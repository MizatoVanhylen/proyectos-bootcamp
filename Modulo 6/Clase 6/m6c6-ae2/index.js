import express from 'express';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import morgan from 'morgan';
import moment from 'moment';
import fs from 'fs';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(morgan('dev'));

// 1.Configuración de yargs para capturar el puerto 
const argv = yargs(hideBin(process.argv))
  .option('port', {
    alias: 'p',
    description: 'Puerto del servidor',
    type: 'number',
    default: 3000 //Puerto por defecto si no se indica uno
  })
  .argv;

// 2. Ruta principal requerida por la actividad
app.get('/', (req, res) => {
  res.send('Bienbenida a la API: Servidor levantado con éxito');
});

// 3. Ruta opcional /ejemplo
app.get('/ejemplo', (req, res) => {
  res.send('Esta es una ruta adicional de prueba');
});

// 4. Servidor escuchando en el puerto definido por Yargs
// app.listen(argv.port, () => {
//   console.log(`Servidor corriendo en el puerto ${argv.port}`);
// });

app.get('/hora', (req, res) => {
  const fecha = {
    formato1: moment().format('MMMM do YYYY, h:mm:ss a'),
    formato2: moment().format('dddd'),
    formato3: moment().format('YYYY-MM-DD')
  };
  res.json(fecha);
});

io.on('connection', (Socket) => {
  console.log('Nuevo cliente conectado');

  Socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

httpServer.listen(argv.port, () => {
  console.log(`Servidor con Socket.IO en el puerto ${argv.port}`);
});
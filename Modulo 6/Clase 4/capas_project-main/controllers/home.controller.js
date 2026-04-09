// Controlador de la ruta principal
// En este caso simplemente entregamos el archivo HTML inicial
export const getHome = (req, res) => {
  res.sendFile('index.html', { root: 'public' });
};

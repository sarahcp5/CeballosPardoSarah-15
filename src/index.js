import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;


const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});

app.get('/', (req, res) => {
    res.send(`La petición fue tomada por el PID ${process.pid} en el puerto ${PORT}`);
});
  
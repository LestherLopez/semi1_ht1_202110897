const express = require('express');
const app = express();
const port = 5000;


app.get('/check', (req, res) => {
  res.status(200).send('OK');
});


app.get('/', (req, res) => {
  const data = {
    "Instancia": "Instancia #1 - API #1",
    "Curso": "Seminario de sistemas 1",
    "Seccion": "Seccion A",
    "Periodo": "2do Semestre 2024",
    "Estudiante": "Lesther Kevin Federico López Miculax - 202110897"
  };
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`API ejecutándose en http://localhost:${port}`);
});

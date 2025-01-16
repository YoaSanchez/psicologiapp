const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Validar las credenciales (simulación)
  if (email === 'test@example.com' && password === '123456') {
    res.status(200).json({ message: 'Login exitoso', user: { email } });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

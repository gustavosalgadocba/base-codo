require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // Puedes cambiar el puerto según sea necesario

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Middleware para procesar datos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para servir la página HTML estática
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Rutas para las operaciones CRUD

// Ruta para obtener todos los estudiantes
app.get('/estudiantes', (req, res) => {
    const sql = 'SELECT * FROM estudiantes';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(result);
        }
    });
});

// Ruta para agregar un estudiante
app.post('/estudiantes', (req, res) => {
    const { nombre, edad, email } = req.body;
    const sql = `INSERT INTO estudiantes (nombre, edad, email) VALUES (?, ?, ?)`;
    db.query(sql, [nombre, edad, email], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Estudiante agregado correctamente' });
        }
    });
});

// Ruta para eliminar un estudiante por ID
app.delete('/estudiantes/:id', (req, res) => {
    const id_estudiante = req.params.id;
    const sql = `DELETE FROM estudiantes WHERE id_estudiante = ?`;
    db.query(sql, [id_estudiante], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Estudiante eliminado correctamente' });
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

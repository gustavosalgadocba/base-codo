const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (err, isMatch) => {
                if (isMatch) {
                    res.json({ message: 'Login exitoso' });
                } else {
                    res.json({ message: 'Contraseña incorrecta' });
                }
            });
        } else {
            res.json({ message: 'Usuario no encontrado' });
        }
    });
});

module.exports = app;

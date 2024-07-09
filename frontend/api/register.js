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

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err, results) => {
            if (err) throw err;
            res.json({ message: 'Usuario registrado' });
        });
    });
});

module.exports = app;

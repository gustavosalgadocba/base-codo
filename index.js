/**
 * El objetivo de este trabajo 
 * es proporcionar una práctica introductoria 
 * para el desarrollo de autientificación de usuarios 
 * utilizando Node.js y los frameworks Express, Bcrypt y JsonWebToken.
 * Aplicamos los siguientes pasos
* 1- Diseñamos la estructura de carpetas
 * 2- Inicializamos NPM: npm init -y
 * 3- Instalamos las dependencias: npm i express bcryptjs jsonwebtoken
 * 4- Configuramos el servidor en index.js
 * 5- Configurar start
 * 6- Para compatibilizar con un front de puerto 5000 importar cors
 * 7- Instalamos cors - npm i cors
 * 8- Instalamos dotenv - npm i dotenv
 */
// importamos express
const express = require('express');

//instanciamos express
const app = express();

//importamos cors esto es para compatibiliazar los puertos del front con el back
const cors = require('cors');



//importamos un modulo propio que nos ayuda a autenticar rutas
const authRoutes = require('./routes/authRoutes');

//importamos el modulo dotenv
const dotenv = require('dotenv');

//inicializamos dotenv
dotenv.config();

// declaramos un puerto
const port = process.env.port || 3001;

//habilitamos cors
app.use(cors());

//gestion de json entrantes
app.use(express.json());

//declaracion de rutas principal

app.use('/auth', authRoutes);
//arrancamos el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});    

//pasamos a configurar config.js en la carpeta config

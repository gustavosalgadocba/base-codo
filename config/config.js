/**
 * Este archivo contiene la configuración necesaria 
 * para manejar los tokens JWT en la aplicación. 
 * Incluye la clave secreta utilizada para firmar los tokens 
 * y la duración de validez de los tokens.
 */

module.exports = {
    secretKey: "process.env.SECRET_KEY || 'clave_secreta",
    tokenExpiresIn: "1h"
};


/*

En esta sección, se define un objeto que contiene la clave secreta
utilizada para firmar los tokens JWT y la duración de validez de los tokens.

El objeto exportado es un ejemplo de configuración, que incluye la clave
secreta "clave_secreta" y la duración de validez de los tokens en 1 hora.

Puedes ajustar los valores de la clave secreta y la duración de validez
 según tus necesidades y requerimientos.
*/
/**
 * Crearemos una estructura básica 
 * para almacenar usuarios en la aplicación. 
 * Este modelo se utiliza para almacenar y manejar los datos 
 * de los usuarios de manera temporal en la memoria 
 * durante el tiempo de ejecución de la aplicación. 
 */

/***
 * Nota: A los fines de centrar el ejercicio en JWT, 
 * almacenaremos los usuarios en memoria. 
 * En un proyecto real, 
 * los usuarios deben almacenarse en base de datos.
 * Es decir este archivo o archivos que resulten, 
 * manejar
 * */
//
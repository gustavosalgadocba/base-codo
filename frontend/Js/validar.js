// Acerca del archivo
/*
>   Autora: Karina Serrano
>   Versión: 1
>   Fecha: 15-05-2024
>   El siguiente código contiene una función para validar los campos del
    formulario en contacto.html (no permitir que estos estén vacíos)
*/

function validarCampos(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    // Operador ternario que verifica si el teléfono tiene 10 caracteres
    var esValido = telefono.length === 10 ? true : false;

    if (!nombre || !apellido || !email || !telefono) {
        
        alert('Por favor, completa todos los campos.');
    }else if (!esValido) {
        console.log("hola")
        alert('Teléfono inválido');
    }
    return esValido;
}
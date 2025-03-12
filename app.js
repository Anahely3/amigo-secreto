/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema.*/

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para añadir un a igo a la lista
function agregarAmigo() {
    // Captura el valor del campo de entrada
    const nombreAmigo = document.getElementById('amigo').value;
    // verificar que el campo de texto no esté vacío
    if (nombreAmigo.trim() === '') {
        alert('Por favor, agregue un nombre.');
        return; // Salir de la funci{on si el campo está vacío}
    }

    // Actualizar el array de amigos
    amigos.push(amigo);

    // Crear un nuevo elemento de lista y agregarlo a la lista de amigos.
    const li = document.createElement('li');
    li.textContent = nombreAmigo;
    document.getElementById('listaAmigos').appendChild(li);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}
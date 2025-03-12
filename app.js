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
    amigos.push(nombreAmigo);

    // Actualizar la lista HTML
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    // Limpiar lista existente
    lista.innerHTML = '';
    // Recorrer arreglo e iterar elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i];
        // agregar el nuevo elemento <li> a la lista
        lista.appendChild(li);
    }
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Desarrollado por Yorvis M. 
// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 * Se activa al hacer clic en el botón "Añadir".
 */
function agregarAmigo() {
    // Obtener el valor del campo de texto con ID 'amigo'
    let nombreAmigo = document.getElementById('amigo').value;
    
    // Validar que el campo de texto no esté vacío
    if (nombreAmigo.trim() === '') {
        alert('Por favor, escribe un nombre para añadir a la lista.');
        return; // Detiene la ejecución de la función
    }
    
    // Convertir el nombre a un formato capitalizado (ej. "juan" -> "Juan")
    nombreAmigo = nombreAmigo.charAt(0).toUpperCase() + nombreAmigo.slice(1).toLowerCase();
    
    // Validar si el nombre ya existe en la lista (sin importar mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert('Este amigo ya ha sido agregado a la lista.');
        return;
    }
    
    // Añadir el nombre al array
    amigos.push(nombreAmigo);
    
    // Mostrar la lista actualizada en la página
    mostrarAmigos();
    
    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';
}

/**
 * Función para mostrar los amigos en la lista HTML.
 * Recorre el array 'amigos' y crea elementos <li>.
 */
function mostrarAmigos() {
    // Obtener el elemento <ul> con ID 'listaAmigos'
    let listaHTML = document.getElementById('listaAmigos');
    
    // Limpiar el contenido actual de la lista para evitar duplicados
    listaHTML.innerHTML = '';
    
    // Iterar sobre el array 'amigos' y crear un <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        listaHTML.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

/**
 * Función para sortear un amigo secreto de la lista.
 * Se activa al hacer clic en el botón "Sortear amigo".
 */
function sortearAmigo() {
    // Obtener el elemento <ul> con ID 'resultado'
    let resultadoHTML = document.getElementById('resultado');
    
    // Validar que la lista de amigos no esté vacía
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agrega algunos nombres antes de sortear.');
        resultadoHTML.innerHTML = '';
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento 'resultado'
    resultadoHTML.innerHTML = `<li class="amigo-sorteado">¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}


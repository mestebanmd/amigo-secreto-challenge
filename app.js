// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Obtener elementos del DOM usando los nombres del HTML
const inputAmigo = document.getElementById('amigo'); // Campo de entrada para el nombre
const btnAgregar = document.getElementById('btnAgregar'); // Botón "Añadir"
const btnSortear = document.getElementById('btnSortear'); // Botón "Sortear amigo"
const listaAmigos = document.getElementById('listaAmigos'); // Lista de nombres
const resultado = document.getElementById('resultado'); // Elemento para mostrar el resultado

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
btnAgregar.addEventListener('click', function () {
    const nombre = inputAmigo.value.trim(); // Obtener el valor del campo de entrada y eliminar espacios en blanco

    if (nombre) { // Verificar que el nombre no esté vacío
        if (!amigos.includes(nombre)) { // Verificar que el nombre no esté ya en la lista
            amigos.push(nombre); // Agregar el nombre al array de amigos
            actualizarLista(); // Actualizar la lista visual en el DOM
            inputAmigo.value = ''; // Limpiar el campo de entrada
        } else {
            alert('Este nombre ya ha sido agregado.'); // Mostrar una alerta si el nombre ya existe
        }
    } else {
        alert('Por favor, ingresa un nombre válido.'); // Mostrar una alerta si el campo está vacío
    }
});

// Función para actualizar la lista visual en el DOM
function actualizarLista() {
    listaAmigos.innerHTML = ''; // Limpiar la lista actual
    amigos.forEach(function (nombre) {
        const li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = nombre; // Asignar el nombre al contenido del <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para sortear un amigo secreto
btnSortear.addEventListener('click', function () {
    if (amigos.length < 2) { // Verificar que haya al menos dos nombres en la lista
        alert('Ingrese al menos 2 nombres para realizar el sorteo.'); // Mostrar una alerta si no hay suficientes nombres
    } else {
        const indiceGanador = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
        const ganador = amigos[indiceGanador]; // Obtener el nombre del ganador
        resultado.textContent = `¡El amigo secreto es: ${ganador}!`; // Mostrar el resultado
    }
});
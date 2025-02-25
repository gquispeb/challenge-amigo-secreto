// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("nombre");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debe haber al menos dos nombres para el sorteo.");
        return;
    }
    
    let indice = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + nombres[indice];
}
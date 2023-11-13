// script.js
let numeroTrucado = Math.ceil(Math.random() * 6);
let lanzamiento = 0;
let frecuencias = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

document.getElementById("lanzarDado").addEventListener("click", lanzarDado);

function toggleModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

document.getElementById("toggleFrecuencias").addEventListener("click", function() {
    toggleModal('modalFrecuencias');
});

document.getElementById("mostrarTrucado").addEventListener("click", function() {
    document.getElementById("numeroTrucadoOculto").innerHTML = "Número Trucado: " + numeroTrucado;
    toggleModal('modalDadoTrucado');
});

function lanzarDado() {
    lanzamiento++;
    document.getElementById("contador").innerText = lanzamiento;
    let resultado = Math.random() < 0.2 ? numeroTrucado : Math.ceil(Math.random() * 6);
    actualizarTablaResultados(lanzamiento, resultado);
    actualizarFrecuencias(resultado);
}

function actualizarTablaResultados(numLanzamiento, valor) {
    let tabla = document.getElementById("resultados");
    let fila = tabla.insertRow(-1);
    let celdaLanzamiento = fila.insertCell(0);
    let celdaValor = fila.insertCell(1);
    celdaLanzamiento.innerHTML = numLanzamiento;
    celdaValor.innerHTML = valor;
}

function actualizarFrecuencias(numero) {
    frecuencias[numero]++;
    document.getElementById("freq" + numero).innerHTML = frecuencias[numero];
}



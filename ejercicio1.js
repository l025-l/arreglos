let notas = [];

function agregarElemento() {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

function recorrerArreglo() {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

function probarAgregar() {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

function agregarNota(nota) {
    notas.push(nota);
}

function calcularPromedio() {
    let sumaNotas = 0;
    let promedio;

    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + notas[i];
    }
    promedio = sumaNotas / notas.length;

    console.log("promedio " + promedio.toFixed(2));
    return promedio;
    
}


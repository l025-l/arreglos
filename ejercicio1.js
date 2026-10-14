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
    mostrarNotas();
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

function generarTabla(){
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");

    contenidoTabla += "<table><tr><td>UNO</td></tr>"+
                        "<tr><td>DOS</td></tr>"+
                        "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

function mostrarNotas(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><td>NOTA</th></td>";
    let miNota;

    for (let i = 0; i<notas.length;i++){
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
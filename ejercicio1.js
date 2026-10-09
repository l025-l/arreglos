let notas = [];

function agregarElemento(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
} 

function probarAgregar(){
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

function agregarNota(nota){
    notas.push(nota);
}
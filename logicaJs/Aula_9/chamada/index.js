function chamadaWhile() {
    var resposta = '';

    while (resposta !== "tech4FM é show") {
        resposta = prompt('TRIM TRIM... Atenda o telefone!')
    }

    alert("Parabéns você ganhou a camisa da tech4FM!");
}


function chamadaDoWhile() {

    do {
        var resposta = prompt('TRIM TRIM... Atenda o telefone!')
    } while (resposta !== "tech4FM é show");

    alert("Parabéns você ganhou a camisa da tech4FM!");
}

function exemplo() {
    var numero = prompt("Até quanto vc quer que eu liste um número");
    var contador = 0;

    while (contador < numero) {
        contador = contador + 1;
        console.log(contador);
    }
}

function exemploFor() {
    var numero = prompt("Até quanto vc quer que eu liste um número");
    for (var contador = 0; contador < numero; contador++) {
        console.log(index);
    }
}


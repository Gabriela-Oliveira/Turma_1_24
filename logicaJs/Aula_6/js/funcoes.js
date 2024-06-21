// FUNÇÕES COM PARÂMETROS

function soma() {
    var num1 = 5;
    var num2 = 10;

    var resultado = num1 + num2;

    alert(resultado);
}

// soma();

function receberNotas() {
    var nota1 = prompt("Digite a sua nota da prova teórica: ");
    var nota2 = prompt("Digite a sua nota da prova prática: ");

    soma1(nota1, nota2);
}

function soma1(primeiroNumero, segundoNumero) {
    console.log(primeiroNumero);
    console.log(segundoNumero);
    
    var resultado = primeiroNumero + segundoNumero;

    alert(resultado);
}

// receberNotas();

// soma1(20, 60);
// soma1(1, 0);


// FUNÇÕES COM RETORNOS

function mesada() {
    var banco = 500;

    // todo dia 5 do mes, vai ter um...
    return banco;
}

var filhao = mesada();

console.log(filhao);

// function boasVindas() {
//     var nomeRecebido = nome();

//     alert("Seja bem vindo " + nomeRecebido);
// }

// boasVindas();

// function nome1() {
//     var nome = prompt("Qual é o seu nome?");

//     boasVindas1(nome);
// }

// function boasVindas1(nomeParametro) {
//     var nomeRecebido = nomeParametro;

//     alert("Seja bem vindo " + nomeRecebido);
// }

// nome1();

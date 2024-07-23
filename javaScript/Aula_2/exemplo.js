function soma(a, b) {
    alert("Seja bom vindo!");
    return a + b;
}

const multiplica = function(a, b) {
    alert("Seja bom vindo!");
    return a * b;
}

// const subtrai = valor => valor - 10;
const subtrai = (a, b) => a - b;
// const subtrai = (a, b) => {
//     alert("Seja bom vindo!");
//     return a - b;
// };

const disparaAlerta = () => alert("Seja bom vindo!");

const resultSoma = soma(5, 3);
console.log("O resultado da soma é: " + resultSoma);

const resultMultiplica = multiplica(5, 3);
console.log("O resultado da multiplicação é: " + resultMultiplica);

const resultSubtrai = subtrai(5, 3);
console.log("O resultado da subtração é: " + resultSubtrai);

disparaAlerta();

// var i = 0;
// const time = setInterval(() => {
//     console.log(i);
//     i++;
// }, 1000);

// clearInterval(time);
class Carro {
    constructor(marcaaa, rodaArooo, placaaa, volante, cor, banco, caixaMarcha, freio, gps) {
        this.marca = marcaaa;
        this.rodaAro = rodaArooo;
        this.placa = placaaa;
        this.volante = volante;
        this.cor = cor;
        this.banco = banco;
        this.caixaMarcha = caixaMarcha;
        this.freio = freio;
        this.gps = gps;
    }
}

var carroFord = new Carro("Ford", 16, "BRA2E19", "Padrão", "Azul", "Couro", "Manual", "Manual", true);

console.log("Vindo da minha class:");
console.log(carroFord);



var carroFord1 = {
    marca: "Ford",
    rodaAro: 16,
    placa: "BRA2E19",
    volante: "Padrão" ,
    cor: "Azul",
    banco: "Couro",
    caixaMarcha: "Manual",
    freio: "Manual",
    gps: true
}

console.log("Vindo do meu objeto:");
console.log(carroFord1);
// console.log(carroFord.volante);
// console.log(carroFord.rodaAro);
// console.log(carroFord.placa);
// console.log(carroFord.marca);
// console.log(carroFord.gps);
// console.log(carroFord.freio);
// console.log(carroFord.cor);
// console.log(carroFord.caixaMarcha);
// console.log(carroFord.banco);
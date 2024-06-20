function ifEncadeado() {
    var sexo = "Masculino";
    var idade = 32;

    // var emancipada = sexo === "Feminino" && idade === 32;

    // if (emancipada) {
    //     alert("A mina é emancipada");
    // }

    // if (sexo === "Feminino" && idade === 32) {
    //     alert("A mina é emancipada");
    // }

    if (sexo === "Feminino") {
        if (idade >= 21) {
            alert("A mina é emancipada");
        }
    } else {
        if (idade >= 18) {
            alert("A cara é emancipada");
        }
    }
}

ifEncadeado();
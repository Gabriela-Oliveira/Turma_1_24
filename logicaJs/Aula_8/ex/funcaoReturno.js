// function nome() {
//     var nome = prompt("Qual é o seu nome?");

//     if (nome === 'Gabriela') {
//         return;
//     }

//     alert(nome);
// }

// nome();



// function nome() {
//     var nome = prompt("Qual é o seu nome?");

//     return nome;
// }

// function disparaAlerta() {
//     alert(nome());
// }

// disparaAlerta();

function nome() {
    var nome = prompt("Qual é o seu nome?");

    return nome;
}

function disparaAlerta(apelido) {
    alert(apelido);
}

disparaAlerta(nome());
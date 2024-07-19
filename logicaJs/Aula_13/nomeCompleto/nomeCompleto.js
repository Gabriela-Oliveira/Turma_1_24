var aluno = {
    nome: "Gabriela",
    sobreNome: "Oliveira"
}

var informacao = {
    mostrar() {
        console.log(aluno.nome + " " + aluno.sobreNome);
    }
}

informacao.mostrar();


function mostrar() {
    console.log(aluno.nome + " " + aluno.sobreNome);
}

mostrar();


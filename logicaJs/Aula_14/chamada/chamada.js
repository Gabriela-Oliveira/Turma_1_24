class Aluno {
    constructor(nome, sobreNome, idade) {
        this.nome = nome,
        this.sobreNome = sobreNome,
        this.idade = idade
    }
}

function dadosAlunos() {
    const alunos = [];
    var continuar = true;

    while (continuar) {
        const nome = prompt("Digite o primeiro nome do aluno (ou deixe vazio para encherrar o sistema).");

        // !nome ESTA CONDIÇÃO É O MESMO QUE: nome === ""
        if (!nome) {
            continuar = false;
            break;
        }

        const sobreNome = prompt("Digite o segundo nome do aluno.");
        const idade = prompt("Digite a idade do aluno");

        // const aluno = {
        //     nome: nome,
        //     sobreNome: sobreNome,
        //     idade: parseInt(idade)
        // }

        const aluno = new Aluno(nome, sobreNome, idade);

        alunos.push(aluno);
    }

    return alunos;
}

function formatacaoDadosAluno(qualquerNome) {
    console.log('Lista de alunos:');

    for (var i = 0; i < qualquerNome.length; i++) {
        console.log("Nome: " + qualquerNome[i].nome + " " + qualquerNome[i].sobreNome, " Idade: " + qualquerNome[i].idade);
    }
}

// ESTAS DUAS LINHAS DE CODIGO É A MESMA COISA QUE:
var chamaFuncao = dadosAlunos();
formatacaoDadosAluno(chamaFuncao);

// MESMA COISA QUE ESTA LINHA AQUI
formatacaoDadosAluno(dadosAlunos());
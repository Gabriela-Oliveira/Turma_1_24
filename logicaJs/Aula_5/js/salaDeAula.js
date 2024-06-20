function limiteAlunos() {
    var qtdTotalAlunos = 15;
    var qtdAlunosNaSala = 15;

    var atingiuMaxAlunos = qtdTotalAlunos === qtdAlunosNaSala;

    if(atingiuMaxAlunos) {
        alert("Hoje temos em sala de aula 100% dos alunos");
    } else {
        alert("Infelizmente hoje NÂO temos em sala de aula 100% dos alunos");
    }

    if(atingiuMaxAlunos) {
        alert("Hoje temos em sala de aula 100% dos alunos");
    } else if(qtdAlunosNaSala > 10) {
        alert("Infelizmente hoje NÂO temos em sala de aula 100% dos alunos");
    }
}

limiteAlunos();
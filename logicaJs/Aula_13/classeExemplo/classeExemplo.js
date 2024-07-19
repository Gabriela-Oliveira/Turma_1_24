class Pessoa {
    constructor(nome, sobreNome, idade, sexo, corFavorita) {
        this.nome = nome,
        this.sobreNome = sobreNome,
        this.idade = idade,
        this.sexo = sexo,
        this.corFavorita = corFavorita
    }
}

function chamada() {
    var pessoa1 = new Pessoa("Ronaldo", "Fenômeno", 45, "Masculino", "Amarelo");
    var pessoa2 = new Pessoa("Gabriela", "Oliveira", 32, "Feminino", "Vermelho");
    var pessoa3 = new Pessoa("Matheus", "Firmino", 18, "Masculino", "Azul");

    console.log(pessoa1);
    console.log(pessoa2);
    console.log(pessoa3);
}

chamada();
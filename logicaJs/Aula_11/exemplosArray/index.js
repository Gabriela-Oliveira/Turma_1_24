function numeros() {
    // var n1 = 1
    // var n2 = 2
    // var n3 = 3
    // var n4 = 4
    // var n5 = 5

    var array = [1, 2, 3, 4, 5];
    // array[2]

    array[4] = 0;

    console.log(array);

    // console.log(n1);
    // console.log(n2);
    // console.log(n3);
    // console.log(n4);
    // console.log(n5);
}

// numeros();

function exemplo2() {
    const sapateira = new Array(10);
    sapateira[1] = 'Nike'
    sapateira[2] = 'Olympkus'
    sapateira[4] = 'Adidas'
    sapateira[6] = 'Beira Rio'
    sapateira[9] = 'ASICS'
    sapateira[2873] = 'blablabla'

    sapateira.push('Papai Noel');

    console.log(sapateira);
    // console.log(sapateira.length);
}

exemplo2();

function exemplo3() {
    const sapateira = ['Nike', 'Olympkus', 'Adidas', 'Beira Rio', 'ASICS'];

    var indiceArray = parseInt(prompt("De qual posição da sua sapateira você gostaria de saber o tênis que tem?"));

    alert("Na posição " + indiceArray + " da sua sapateira, tem: " + sapateira[indiceArray - 1]);
}

// exemplo3();

function exemplo() {
    const sapateira = ['Nike', 'Olympkus', 'Adidas', 'Beira Rio', 'ASICS'];

    var indiceArray = parseInt(prompt("De qual posição da sua sapateira você gostaria de saber o tênis que tem?"));

    alert("Na posição " + indiceArray + " da sua sapateira, tem: " + sapateira[indiceArray - 1]);
}

// exemplo3();

function exemplo4() {
    var alunos = [];

    for (let index = 0; index < 5; index++) {
        var aluno = prompt("Qual o nome do aluno");
        // alunos[index] = aluno;
        alunos.push(aluno);
    }    

    console.log(alunos);
}

exemplo4();
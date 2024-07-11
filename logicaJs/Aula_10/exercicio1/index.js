function sapateira() {
    // var sapato1 = 'Nike';
    // var sapato2 = 'Olympkus';
    // var sapato3 = 'Adidas';
    // var sapato4 = 'Beira Rio';
    // var sapato5 = 'ASICS';

    // const sapateira = new Array(10);
    // sapateira[0] = 'Nike'
    // sapateira[1] = 'Olympkus'
    // sapateira[2] = 'Adidas'
    // sapateira[3] = 'Beira Rio'
    // sapateira[4] = 'ASICS'

    // const sapateira = ['Nike', 'Olympkus', 'Adidas', 'Beira Rio', 'ASICS'];


    do {
        var sapatoPergunta = prompt("Qual é a posição do sapato que você deseja? ");
    
        switch (sapatoPergunta) {
        case "1":
            alert("O sapato desse aluno é da " + sapateira[0]);
            break;
        case "2":
            alert("O sapato desse aluno é da " + sapateira[1]);
            break;
        case "3":
            alert("O sapato desse aluno é da " + sapateira[2]);
            break;
        case "4":
            alert("O sapato desse aluno é da " + sapateira[3]);
            break;
        case "5":
            alert("O sapato desse aluno é da " + sapateira[4]);
            break;
        default: 
            console.log("Entrou");
            if (sapatoPergunta != "0") {
                alert("O programa vai ser encerrado agora")
            }
            break;
    }
    } while (sapatoPergunta != "0" );

    alert("Você encerrou esse programa.")
}

sapateira();
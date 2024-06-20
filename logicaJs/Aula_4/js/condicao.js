// Vamos ao clube se hoje for domigo e se o tempo estiver sol.

function condicao() {
    var diaSemana = prompt("Qual é o dia da semana?");
    var tempo = prompt("Como está o tempo hoje?");

    var diaCerto = diaSemana == "domingo";
    var tempoCerto = tempo == "sol";

    var partiuClube = diaCerto && tempoCerto;

    // var partiuClube = diaSemana == "domingo" && tempo == "sol";

    alert(partiuClube);
}

// condicao();

function boaTarde() {
    
    var horas = prompt("Quantas horas são");;

    var validadeHora = horas >= 13 || validadeHora <= 17;

    console.log('Boa tarde?' + validadeHora )
}

boaTarde();

function horas() {

    var horario = prompt ("Que horas são?")

    var boa_tarde = horario >= 12 && horario < 18

    alert("Posso desejar boa tarde?")
    alert(boa_tarde)
}

horas()
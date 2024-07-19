function dataHoje() {
    var dataHoje = new Date();

    console.log(dataHoje);
    console.log(dataHoje.toISOString());
    console.log(dataHoje.toLocaleString());
    console.log(dataHoje.toLocaleDateString());
    console.log(dataHoje.toLocaleTimeString());

    var dataFormatada = {
        mm: dataHoje.getMonth() + 1,
        dd: dataHoje.getDate(),
        aaaa: dataHoje.getFullYear()
    }

    console.log(dataFormatada);

    var mesLongo = dataHoje.toLocaleString("pt-br", {month: "long"});
    var mesCurto = dataHoje.toLocaleString("pt-br", {month: "short"});

    console.log(mesLongo);
    console.log(mesCurto);

    console.log("Teresópolis, " + dataFormatada.dd + " de " + mesLongo + " de " + dataFormatada.aaaa);
}

dataHoje();
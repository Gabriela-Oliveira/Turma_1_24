function listaCarros() {
    const fusca = {
        marca: "Volkswagen",
        modelo: "Fusca",
        ano: "1965"
    }
    
    const mustang = {
        marca: "Ford",
        modelo: "Mustang",
        ano: "2021"
    }
    
    var carros = [];
    
    carros.push(fusca, mustang);

    console.log(carros);

    carros[0].ano = 1970;

    console.log(carros);
    console.log(fusca);
}

listaCarros();
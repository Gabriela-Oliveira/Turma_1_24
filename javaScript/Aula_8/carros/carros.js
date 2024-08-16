const listaCarros = async () => {
    let listaCarros = await getCarros();

    let addLi = "";
    let itemLi = "";

    for (let i = 0; i < listaCarros.length; i++) {
        addLi = document.createElement("li");
        itemLi = document.createTextNode(`ID: ${listaCarros[i].id} - ${listaCarros[i].nome} - ${listaCarros[i].modelo}`);
        addLi.appendChild(itemLi);
        document.getElementById("listaCarros").appendChild(addLi);
    }
}

const getCarros = async () => {
    const response = await fetch("http://localhost:3000/carros");
    let respParse = await response.json();

    return respParse;
}

const postCarros = async () => {
    
    fetch("http://localhost:3000/carros", {
        method: "POST",
        body: JSON.stringify({
            id: 2,
            nome: "Jeep",
            modelo: "Compass",
            cor: "vermelho",
            ano: 2023
        })
    });

    return respParse;
}

listaCarros();
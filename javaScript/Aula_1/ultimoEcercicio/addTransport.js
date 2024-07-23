function addLI(veiculo) {
    if (veiculo === "") {
        alert("Informe um veículo");
    } else {
        const lista = document.getElementById("transporte");
        const novoItem = document.createElement("li");
        novoItem.textContent = veiculo;

        console.log(lista);
        console.log(lista.children);

        if (lista.children.length % 2 === 0) {
            novoItem.style.backgroundColor = "#f0f0f0";
        } else {
            novoItem.style.backgroundColor = "#d0d0d0";
        }

        lista.appendChild(novoItem);
    }
}

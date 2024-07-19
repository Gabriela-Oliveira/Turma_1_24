function letraMaiuscula() {
    const minhaFrase = "o rato roeu a roupa do rei de roma";
    const palavraArray = minhaFrase.split(" ");

    console.log(palavraArray);

    for (let i = 0; i < palavraArray.length; i++) {
        palavraArray[i] = palavraArray[i][0].toUpperCase() + palavraArray[i].substring(1);
        console.log(palavraArray[i]);
        
        var textoPronto = palavraArray.join(" ");
    }
    console.log(textoPronto);

    // console.log(palavraArray);
}

letraMaiuscula();
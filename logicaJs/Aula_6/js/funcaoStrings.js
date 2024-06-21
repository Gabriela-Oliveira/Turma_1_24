function upperCase() { 
    var text = "bora codar!";
    var resultado = text.toLocaleUpperCase();

    alert(resultado);
}

function lowerCase() {
    var text = "BORA CODAR!";

    var resultado = text.toLocaleLowerCase();

    alert(resultado);
}

function substrings() {
    var text = "BORA CODAR!";

    var resultado = text.substring(5, 11);

    alert(resultado);
}

function indexxOf() {
    var text = "BORA CODAR!";

    var resultado = text.indexOf("CODAR");

    alert(resultado);
}

function trimmm() {
    var text = "          BORA CODAR!            ";
    var resultado = text.trim();

    alert(text);
    alert(resultado);
}
//A senha digitada deve ser igual à: abc123

function login() {
    var senha = prompt("Digite a sua senha:");

    var logado = senha == "abc123";

    alert(logado);
}
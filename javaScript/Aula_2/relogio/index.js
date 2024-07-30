const getHoras = function () {
    const hora = document.getElementsByClassName('hora')[0];
    const data = new Date();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const hora1 = horas
    const minuto = minutos
    const segundo = segundos    

    // hora.innerHTML = hora1 + ':' + minuto + ':' + segundo
    hora.innerHTML = `${hora1}:${minuto}:${segundo}`
}

setInterval(function () {
    getHoras();
}, 1000)
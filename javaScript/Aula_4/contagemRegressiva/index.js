let hora = document.getElementsByClassName('hora')[0]
let oferta = document.getElementsByClassName('oferta')[0]

class Tempo {
  constructor(minutes, seconds) {
    this.minutes = minutes;
    this.seconds = seconds;
  }

  get minutes() {
    return this._minutes;
  }

  set minutes(minutos) {
    this._minutes = minutos;
  }

  get seconds() {
    return this._seconds;
  }

  set seconds(segundos) {
    this._seconds = segundos;
  }
}

let tempo = new Tempo(3, 59)

// Arrow function:

const getHours = () => {
  oferta.innerHTML = `Oferta ATIVA!`

  let minute = tempo._minutes < 10 ? '0' + tempo._minutes : tempo._minutes
  let second = tempo._seconds < 10 ? '0' + tempo._seconds : tempo._seconds

  let controlador = parseInt(tempo._seconds) === 1 && parseInt(tempo._minutes) === 0

  if (tempo._seconds === 0) {
    tempo._minutes -= 1
    tempo._seconds = 60;
  }

  hora.innerHTML = `${minute}:${second}`

  if (!controlador) {
    tempo._seconds -= 1;
  } else {
    hora.innerHTML = `00:00`
    oferta.innerHTML = `Oferta ENCERRADA!`
    parar();
  } 
  
}

getHours();

let interval = setInterval(() => {
  getHours();
}, 1000)

function parar(){
  clearInterval(interval);
}



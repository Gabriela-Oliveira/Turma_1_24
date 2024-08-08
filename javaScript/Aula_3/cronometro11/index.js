var cronometro = (() => {
  var temporizador = document.getElementById('hora');

  var ss = 0;
  var mm = 0;
  var hh = 0;
  var cron;

  function iniciar(){
      // Executa uma função a cada x tempos passados no timeout.
      cron =  setInterval(() => {
          _timer();
      }, 1000);
  }

  function parar(){
      //Serve para parar o setInterval.
      clearInterval(cron);
  }

  function zerar(){
      parar();
      ss=0;
      mm=0
      hh=0;
      _atualizarTempo();
  }

  function _timer(){
      ss++;

      if(ss == 60){
          mm++;
          ss= 0;
      }else if(mm == 60){
          hh++;
          mm= 0;
      }
      _atualizarTempo();
  }

  function _atualizarTempo(){
      temporizador.textContent = retornarTempoAtualizado();
  }

  function retornarTempoAtualizado(){

      var segundos = (ss < 10) ? "0" + ss : ss;

    //    if(ss < 10) {
    //         segundos = "0" + ss
    //    } else {
    //         segundos = ss
    //    }

      var minutos = (mm < 10) ? "0" + mm : mm;
      var horas = (hh < 10) ? "0" + hh : hh;

      return `${horas}:${minutos}:${segundos}`
  }

  return {
      iniciar,
      parar,
      zerar,
      retornarTempoAtualizado
  }

})()


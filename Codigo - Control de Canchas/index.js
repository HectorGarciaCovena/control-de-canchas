//Variables auxiliares para el control del botón LIMPIAR. 
//Si todos están en 0 es porque no se ha iniciado nada
//Y por ende el botón LIMPIAR debe estar OCULTO. 
aux1=0; aux2=0; aux3=0; aux4=0;

// Funciones que muestran y ocultan el botón LIMPIAR
function mostrarBoton()
    {
      document.getElementById('limpiar').style.display='flex';      
    }
function ocultarBoton()
    {      
      document.getElementById('limpiar').style.display='none';      
    }    
  
// Funciones que DESACTIVAN y ACTIVAN botones DEL TIMER1
function desactivaIniciar1()    
    {
      document.getElementById("Iniciar1").disabled=true;
    }    
function activaIniciar1()    
    {
      document.getElementById("Iniciar1").disabled=false;
    }
function desactivaDetener1()    
    {
      document.getElementById("Detener1").disabled=true;
    } 
function activaDetener1()    
    {
      document.getElementById("Detener1").disabled=false
    }   
function desactivaReiniciar1()    
    {      
      aux1=0; // aux1 vuelve a 0 si el cronometro ha sido Reiniciado
      document.getElementById("Reiniciar1").disabled=true;
    } 
function activaReiniciar1()    
    {
      aux1=1; //// aux1 toma el valor de 1 si el cronometro ha sido Reiniciado
      document.getElementById("Reiniciar1").disabled=false;
    }    

   
// Funciones que DESACTIVAN y ACTIVAN botones DEL TIMER2    
function desactivaIniciar2()    
    {
      document.getElementById("Iniciar2").disabled=true;
    }    
function activaIniciar2()    
    {
      document.getElementById("Iniciar2").disabled=false;
    }
function desactivaDetener2()    
    {
      document.getElementById("Detener2").disabled=true;
    } 
function activaDetener2()    
    {
      document.getElementById("Detener2").disabled=false
    }   
function desactivaReiniciar2()    
    {
      aux2=0;
      document.getElementById("Reiniciar2").disabled=true;
    } 
function activaReiniciar2()    
    {
      aux2=1;
      document.getElementById("Reiniciar2").disabled=false;
    } 

    
// Funciones que DESACTIVAN y ACTIVAN botones DEL TIMER3    
function desactivaIniciar3()    
    {
      document.getElementById("Iniciar3").disabled=true;
    }    
function activaIniciar3()    
    {
      document.getElementById("Iniciar3").disabled=false;
    }
function desactivaDetener3()    
    {
      document.getElementById("Detener3").disabled=true;
    } 
function activaDetener3()    
    {
      document.getElementById("Detener3").disabled=false
    }   
function desactivaReiniciar3()    
    {
      aux3=0;
      document.getElementById("Reiniciar3").disabled=true;
    } 
function activaReiniciar3()    
    {
      aux3=1;
      document.getElementById("Reiniciar3").disabled=false;
    } 

// Funciones que DESACTIVAN y ACTIVAN botones DEL TIMER4    
function desactivaIniciar4()    
    {
      document.getElementById("Iniciar4").disabled=true;
    }    
function activaIniciar4()    
    {
      document.getElementById("Iniciar4").disabled=false;
    }
function desactivaDetener4()    
    {
      document.getElementById("Detener4").disabled=true;
    } 
function activaDetener4()    
    {
      document.getElementById("Detener4").disabled=false
    }   
function desactivaReiniciar4()    
    {
      aux4=0;
      document.getElementById("Reiniciar4").disabled=true;
    } 
function activaReiniciar4()    
    {
      aux4=1;
      document.getElementById("Reiniciar4").disabled=false;
    }    


// Defino variables globales por cada cronómetro
let timers = {
    1: null,
    2: null,
    3: null,
    4: null
  }   

  // Función que inicia los cronómetros
  function startTimer(timerId) {     
    // Obtener el cronómetro correspondiente    
    let timer = document.getElementById("timer" + timerId);
    // Obtener el valor actual del cronómetro en formato h:mm:ss:ms
    let timeParts = timer.innerHTML.split(":");
    let h = parseInt(timeParts[0]);
    let m = parseInt(timeParts[1]);
    let s = parseInt(timeParts[2]);
    let ms = parseInt(timeParts[3]);        
    
    // Iniciar el cronómetro llamando a la función actualizaCronometro()
    timers[timerId] = setInterval(function () {
      ms++;
      if (ms >= 100) { // Cuando ms llegue a 100 se reinicia en 0 y aimenta en 1 a s
        ms = 0;
        s++;
      }
      if (s >= 60) { // Cuando s llegue a 60 se reinicia en 0 y aimenta en 1 a m
        s = 0;
        m++;
      }
      if (m >= 60) { // Cuando m llegue a 60 se reinicia en 0 y aimenta en 1 a h
        m = 0;
        h++;
      }
      
      // Actualizar la visualización del cronómetro
      timer.innerHTML = pad(h, 2) + ":" + pad(m, 2) + ":" + pad(s, 2) + ":" + pad(ms, 2);
    }, 10); // Actualizar cada 10 milisegundos (para simular milisegundos)
   
    // Función para añadir ceros a la izquierda de los números menores a 10
    function pad(num, size) {
      return ("000" + num).slice(-size);
    }       
  }   

  function stopTimer(timerId) {
    // Detener el cronómetro correspondiente
    clearInterval(timers[timerId]);

  }
  
  function resetTimer(timerId) {  
          
    // Reiniciar el cronómetro correspondiente     
    let timer = document.getElementById("timer" + timerId);   
    timer.innerHTML = "00:00:00:00";
    stopTimer(timerId);     
    
    // Si todas las variables están en 0 es porque todos los contadores también
    // en ese caso el botón LIMPIAR se oculta.
    if(aux1==0 && aux2==0 && aux3==0 && aux4==0) 
        ocultarBoton();   
  }  
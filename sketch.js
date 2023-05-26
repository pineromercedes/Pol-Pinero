
let miPaleta;
let miFondo;

let miBase = [];
let miCircuito = [];
let cantidad = 0;

let miVentana = [];
let cantidadVent = 0;

let clickeaste = 0;

let estado = "cero";
let dClicks = 0;


function preload() {
  miPaleta = new paleta("data/ejemplo2.png");
}


function setup() {

  createCanvas(displayHeight, displayHeight);
  
  miFondo = new fondo();

}

function draw() {
 
    miFondo.dibujar();

  if(clickeaste >= 1) {
    for(let i = 0; i < 3; i++){  
      miBase[i].dibujar();
    
    }

    /////circuitos creacion y draw
    for( let j=0 ; j<10 ; j++ ){

      miCircuito[ cantidad ] = new circuitos();
  
      let tieneLugar = true;
  
      for( let i=0 ; i<cantidad ; i++ ){
        if( miCircuito[i].esPisadoPor( miCircuito[cantidad] ) ){
          tieneLugar = false;
        }
      }
      if( tieneLugar ){
        cantidad++;
      }
      
      for( let i=0 ; i<cantidad ; i++ ){
        miCircuito[i].dibujar();
  
      }
  
    }

    
    for(let i = 0; i < cantidadVent; i++){

      miVentana[i].dibujar(estado);

    }
 }
    

  }


function mousePressed(){
  if(mouseButton == RIGHT){
    cantidadVent = 0;
    estado == "quieto";
  }
  else if (mouseButton == LEFT){
    clickeaste ++;

    if(estado == "cero"){
  
      for(let i = 0; i < 3; i++){
  
        miBase [i] = new base();
  
      }
  
      estado = "quieto";
    }
  
    if(estado == "quieto" || estado == "creciendo" || estado == "decreciendo"){
      if(cantidadVent == 0){
        miVentana[cantidadVent] = new Ventana(map(mouseX, 0, width, 0, width/2));
        cantidadVent ++;
      }
      else if(cantidadVent <= 1){
        miVentana[cantidadVent] = new Ventana(map(mouseX, 0, width, width/2, width));
        cantidadVent ++;
      }
    
      else if( cantidadVent >= 2){
        if(estado == "quieto" || estado == "decreciendo"){
          dClicks ++;
          estado = "creciendo";
        }
        else if(estado == "creciendo"){
          estado = "decreciendo";
          dClicks ++;
        }
      
        if(dClicks >= 3){
          estado = "quieto";
          dClicks = 0;
        }
      }
    }
  }
  
}

  

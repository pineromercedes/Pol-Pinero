class circuitos{
    constructor(){
        this.x = random(displayWidth);
        this.y = 167;
        this.ancho = random(200, 400);
        this.alto = random(200, 200 * 5);
        this.color = miPaleta.darColor();
        this.anchoLineas = random(15, 40);

        this.opcion = int(random(2));
        
        this.izq = this.x - this.ancho/2 + this.anchoLineas - this.anchoLineas/2;
        this.der = this.x + this.ancho/2 + this.anchoLineas - this.anchoLineas/2;
        this.arr = this.y - this.alto/2 + this.anchoLineas - this.anchoLineas/2;
        this.abj = this.y + this.alto/2 + this.anchoLineas - this.anchoLineas/2;
    }
    
    dibujar(){

        push();

        noFill();
        strokeWeight(this.anchoLineas);
        stroke(this.color);
        
        translate(width, height);
        rotate(PI);

        if(this.opcion == 0){
            //derAbj
            line(this.x, this.y, this.x, width);
            line(this.x, this.y, 0, this.y);
        }
        else if(this.opcion == 1){
            //izqArr
            line(width, this.alto, this.x + this.ancho, this.alto);
            line(this.x + this.ancho, this.alto, this.x + this.ancho, this.y);
        }
            
        pop();

    }

    esPisadoPor( otro ){
        //this externos e internos 
        let thisIzqExt = this.izq - this.anchoLineas;
        let thisDerExt = this.der + this.anchoLineas;
        let thisArrExt = this.arr - this.anchoLineas;
        let thisAbjExt = this.abj + this.anchoLineas;
        let thisIzqInt = this.izq + this.anchoLineas;
        let thisDerInt = this.der - this.anchoLineas;
        let thisArrInt = this.arr + this.anchoLineas;
        let thisAbjInt = this.abj - this.anchoLineas;

        // otro externos e internos
        let otroIzqExt = otro.izq - otro.anchoLineas;
        let otroDerExt = otro.der + otro.anchoLineas;
        let otroArrExt = otro.arr - otro.anchoLineas;
        let otroAbjExt = otro.abj + otro.anchoLineas;
        let otroIzqInt = otro.izq + otro.anchoLineas;
        let otroDerInt = otro.der - otro.anchoLineas;
        let otroArrInt = otro.arr + otro.anchoLineas;
        let otroAbjInt = otro.abj - otro.anchoLineas;

        let superPosicionHrz =
            (otroIzqExt > thisIzqExt && otroIzqExt < thisDerExt) ||
            (otroDerExt > thisIzqExt && otroDerExt < thisDerExt) ||
            (otroIzqExt < thisIzqExt && otroDerExt > thisDerExt) ||
            (otroIzqExt > thisIzqExt && otroDerExt < thisDerExt) ||
            (otroIzqInt > thisIzqInt && otroIzqInt < thisDerInt) ||
            (otroDerInt > thisIzqInt && otroDerInt < thisDerInt) ||
            (otroIzqInt < thisIzqInt && otroDerInt > thisDerInt) ||
            (otroIzqInt > thisIzqInt && otroDerInt < thisDerInt);

        let superPosicionVert =
            (otroArrExt > thisArrExt && otroArrExt < thisAbjExt) ||
            (otroAbjExt > thisArrExt && otroAbjExt < thisAbjExt) ||
            (otroArrExt < thisArrExt && otroAbjExt > thisAbjExt) ||
            (otroArrExt > thisArrExt && otroAbjExt < thisAbjExt) ||
            (otroArrInt > thisArrInt && otroArrInt < thisAbjInt) ||
            (otroAbjInt > thisArrInt && otroAbjInt < thisAbjInt) ||
            (otroArrInt < thisArrInt && otroAbjInt > thisAbjInt) ||
            (otroArrInt > thisArrInt && otroAbjInt < thisAbjInt);

        // 
        return superPosicionHrz && superPosicionVert;
       
        
    }
}
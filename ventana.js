class Ventana {           
    constructor (x) {
        this.x = x;
        this.y = 200;
        this.ancho = random(100, 300);
        this.alto = 2 * (map(mouseY, 0, width, width-100, 100) * 0.41);
        this.colorStroke = miPaleta.darColor();;
        this.colorFill = miPaleta.darColor();;
        this.colorRect = miPaleta.darColor();;

        this.estado = "cero"

        this.izq = this.x - this.ancho/2;
        this.der = this.x + this.ancho/2;
        this.arr = this.y - this.alto/2;
        this.abj = this.y + this.alto/2;
    }


    dibujar(estado) {
    
        push();
        
        translate(width, height);
        rotate(PI);

        noStroke();
        fill(this.colorRect);
        rect(map(this.x, 0, width, width, 0) - 50, this.y -50, this.ancho + 100, this.alto + 100);

        fill(this.colorFill);
        stroke(this.colorStroke);
        strokeWeight(8);
        
        rect(map(this.x, 0, width, width, 0), this.y, this.ancho, this.alto);
        line(map(this.x, 0, width, width, 0) + this.ancho/2, this.y, map(this.x, 0, width, width, 0) + this.ancho/2, this.y + this.alto);//vertical
        line(map(this.x, 0, width, width, 0) + this.ancho/4, this.y, map(this.x, 0, width, width, 0) + this.ancho/4, this.y + this.alto);
        line(map(this.x, 0, width, width, 0) + this.ancho/4 +this.ancho/2, this.y, map(this.x, 0, width, width, 0) + this.ancho/4 + this.ancho/2, this.y + this.alto);

    
        pop();

        if (estado == "creciendo" && estado != "cero"){
            this.ancho ++;
            this.alto ++;
        }
        else if (estado == "decreciendo" && estado != "cero"){
            this.ancho --;
            this.alto --;
        }
        
    }
}

class Rectangulo{
    
    #area = 0; //variable privada que no se altera fuera de la clase

    constructor(base = 0, altura = 0){
        this.base   = base;
        this.altura = altura;

        this.#area = base*altura;
    }
    calcularArea(){
        console.log( this.#area*2);
    }
}

const rectangulo = new Rectangulo(20,5);
//rectangulo.#area = 200;
rectangulo.calcularArea();
console.log(rectangulo);
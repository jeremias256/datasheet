
//primera letra mayus
class Persona{
    // Con los estaticos no se trabaja con this ya que da UNDEFINED
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' Instancias';
    }
    static mensaje(){
        console.log( this.nombre );// undefined
        console.log('Soy un metodo estático');
    }
    //propiedades de la clase
    nombre = '';
    codigo = '';
    frase  = '';
    comida = ''; //este nombre debe ser distinto al set

    constructor(nombre = 'Sin nombre',codigo = 'Sin codigo',frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo++; //Persona se refiere a la clase   this al objeto
    }

    //set recibe solo un elemento
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    //metodos de clases
    quienSoy(){
        console.log(`Soy ${this.nombre} mi frase de heroe es ${this.frase}`)
    }

    miFrase(){
        this.quiensoy();
        console.log(`${this.codigo} dice ${this.frase}`);
    }
}

class Heroe extends Persona{
    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);

        this.clan = 'Los vengadores';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'hombre araña', 'Un gran...');
//const hulk = new Persona('Brusce Banner','Hulk','SMASHHHH');

//const spiderman = new Heroe();


console.log(spiderman);
spiderman.quienSoy();
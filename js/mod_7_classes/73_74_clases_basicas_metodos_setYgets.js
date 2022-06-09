
//primera letra mayus
class Persona{
    //propiedades de la clase
    nombre = '';
    codigo = '';
    frase  = '';
    comida = ''; //este nombre debe ser distinto al set

    constructor(nombre = 'Sin nombre',codigo = 'Sin codigo',frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase; 
    }

    //set recibe solo un elemento
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    //metodos de clases
    quiensoy(){
        console.log(`Soy ${this.nombre} mi frase de heroe es ${this.frase}`)
    }

    miFrase(){
        this.quiensoy();
        console.log(`${this.codigo} dice ${this.frase}`);
    }
}


const spiderman = new Persona('Peter Parker', 'hombre araña', 'Un gran...');
const hulk = new Persona('Brusce Banner','Hulk','SMASHHHH');

console.log(hulk);
hulk.quiensoy();

spiderman.setComidaFavorita = 'Pie de la tia May';
console.log(spiderman);
console.log(spiderman.getComidaFavorita);
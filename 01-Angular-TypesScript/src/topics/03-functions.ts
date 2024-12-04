
//funcion 
function addNumber(a : number , b : number) : number {
    return a + b;
}

//funcionFlecha
const AddNuymbersArrow = (a : number , b : number ) => {
    return a + b;
}

//funcionFlecha con tipo de dato
const AddNuymbersArrow2 = (a : number , b : number ) : string => {
    return `${a + b}`;
}

const result = AddNuymbersArrow2(4,100);
console.log(`el resultado de la funcion es : ${result}`);

// creamos una interface, objeto y lo colocamos dentro de una funcion
interface heroe  {
    name : string;
    hp : number;
    showHp : () => void

}

const personaje1 = {
    name : 'pepe',
    hp : 100,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
};

const curarHeore = (personaje : heroe , cantidad : number) : void => {
    personaje.hp += cantidad;
}

console.log(`los puntos de vida de tu heroe ${personaje1.name} es ${personaje1.hp}`);
curarHeore(personaje1,100);
console.log(`los puntos de vida de tu heroe ${personaje1.name} es ${personaje1.hp}`);
personaje1.showHp();



export{}
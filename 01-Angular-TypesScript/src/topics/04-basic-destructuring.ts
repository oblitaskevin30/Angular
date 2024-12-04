//creamos un interfaz que tenga una interfaz dentro.

interface audioPlayer {
    audioVolume : number;
    songDuration : number;
    song : string;
    details : details
}

interface details {
    author : string;
    year : number
}

// creamos un objeto y desestructuramos OBJETOS se hace con llaves
const audio1  : audioPlayer= {
    audioVolume : 100,
    songDuration : 230,
    song : 'hola mundo',
    details : {
        author: ' autor1',
        year : 2009
    }
}

const { audioVolume : volu , songDuration  : dura} = audio1;
const {author : autor , year : anio} = audio1.details;
console.log(volu ,dura );
console.log(autor,anio);

// creamos un objeto y desestructuramos ARREGLOS se hace con corchetes

const dbz : string[] = ['Goku' , 'Vegeta' , 'Trunkz '];
const dbz1 : string[] = ['Goku' , 'Vegeta'];
const [ , , trunkz = 'not found'] : string[] = dbz;
const [ , , trunkz1 = 'not found'] : string[] = dbz1;
console.log(trunkz)
console.log(trunkz1) //este bota not  found

let skills : string[]  = ['Bash' , 'counter' , ' healing' ];

interface Character{
    name : string;
    hp : number;
    skills : string[];
    hometown? : string
}

const strider : Character = {
    name : 'strider',
    hp : 100,
    skills : ['Bash', 'Counter']
};

console.log(
    strider
)
export{}
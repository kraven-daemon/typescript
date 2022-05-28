/* Types
* - number
* - string
* - boolean
* - array => number[] => [1,2,3]
* - generics => Array<number>
* ------------------------------
* - function => (variable: type) => { ... }
* - return types =>  (): type => { ... }
* https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
*/

class Chicken{
    name : string;
    age : number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getInfo(): string {
        return this.name + ", " + this.age + " years old.";
    }
}

const chicken = new Chicken("Brenda", 2);
console.log(chicken.getInfo());

const spawn = (howMany: number): Array<number> => {
    const arr = new Array();
    for(let x = 0; x < howMany ;x++){
        arr.push(x);
    }
    return arr;
}

console.log(spawn(5));

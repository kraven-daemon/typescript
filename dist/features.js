"use strict";
/* Types
* - number
* - string
* - boolean
* - array => number[] => [1,2,3]
* - generics => Array<number>
* ------------------------------
* - function => (variable: type) => { ... }
* - return types =>  (): type => { ... }
*/
class Chicken {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return this.name + ", " + this.age + " years old.";
    }
}
const chicken = new Chicken("Brenda", 2);
console.log(chicken.getInfo());
const spawn = (howMany) => {
    const arr = new Array();
    for (let x = 0; x < howMany; x++) {
        arr.push(x);
    }
    return arr;
};
console.log(spawn(5));

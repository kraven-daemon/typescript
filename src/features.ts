/* Reminder
*Types
* - * JS => primitive // Typescript => typeguards(see narrowing)
* - "string"
* - "number"
* - "boolean"
* - "undefined" => uninitialized state
* - "object"
* - "function"
* - "bigint" => Require ES2020+
*    js/ts => const oneHundred[: bigint] = BigInt(100);
*       ts => const anotherHundred: bigint = 100n;
* - "symbols" => const hello = Symbol("Hello Wolrd!");
*--------------------------------------------------------
*Falsy value (for boolean operators [if, &&, ||, !, ?:])
* - 0
* - NaN
* - "" (the empty string)
* - 0n (the bigint version of zero)
* - null
* - undefined
*---------------------------------------------------------
* - array => number[] => [1,2,3]
* - generics => Array<number>
* - objects => (pt: {x: number, y: number}) => {...}
* - aliases => type Other = type
* - interface => interface Point { x:number;y:number; }
* - assertions => const something = someCall() as HTMLCanvasElement;
*           or => const something = <HTMLCanvasElement>someCall();
* - literals => let s: "a" = "b";// Error type '"a"' not assignable to type '"b"'
*         or => function changeCSS(alignment: "left" | "right" | "center") { ... }
*         or => function qwerty(asd: Keys | "a") { ... }
*--------------------------------------------------------
* - function => (variable: type) => { ... }
* - function return types =>  (): type => { ... }
* - optional properties => (variable?: type) => { ... }
*
* -------========Notable remark concerning type operations================-------
* - * The null
*   null in js is the intentional absence of any object value.
*   Avoid using null,
*   instead return {}, .. an empty object
* - * Check
* - typeof variable
* - Array.isArray(variable)
*
* - * Interface vs Type
* One difference => `type SomeType` cannot be re-opened
*
* - * Inference and literal
* Inference => Types are infered by default to js primitive.
* Literals  => Types are constrained pimitives.
*           => ex: variable: "GET" becomes type "GET", variable:1 becomes type 1, etc...
*
* > const req = { url: "https://example.com", method: "GET" as "GET" };
* > {...}
* > handleRequest(req.url, req.method as "GET");
*
* TURNS the object's properties into their literals counterparts;
* > const req = { url: "https://example.com", method: "GET" } as const;
* > handleRequest(req.url, req.method);
*
*
* Narrowing, or the art of pairing js type checking with ts typesystems lookups
* https://www.typescriptlang.org/docs/handbook/2/narrowing.html
*
*/

// type vs interface
type Chicken = {
    name: string,
    age: number
}
type SuperChicken = Chicken & {
    power: string
}
// Produce Error: Duplicate identifier 'SuperChicken'
// type SuperChicken = {
//     hero: boolean
// }

interface Duck {
    name: string,
    age: number
}
// syntax like a class
interface SuperDuck extends Duck{
    power: string
}

// can be re-opened
interface SuperDuck {
    hero: boolean
}

const infoChicken = (chick: Chicken | SuperChicken ): string => {
    if("power" in chick){
        return chick.name + ", " + chick.age + " years old, with" + chick.power;
    } else{
        return chick.name + ", " + chick.age + " years old.";
    }
}

const infoDuck = (duck: Duck | SuperDuck ): string => {
    if("power" in duck){
        let axis = "";
        if(duck.hero !== undefined){
            axis = duck.hero ? "Hero" : "Vilain";
        }
        return duck.name + " the " + axis + " is " + duck.age + " years old, with " + duck.power;
    }else{
        return duck.name + ", " + duck.age + " years old.";
    }
}
console.log(infoChicken({name: "Brenda", age: 3}));
console.log(infoChicken({name: "Wendy", age: 2, power: "lazer-eyes"}));
console.log(infoDuck({name: "Tony", age: 5, }));
console.log(infoDuck({name: "Jasper", age: 1, power: "super-strengh", hero: true}));
console.log(infoDuck({name: "Qwacker", age: 3, power: "pre-cognition"}));

// function return, generics
const spawn = (howMany: number): Array<number> => {
    if(howMany < 0){ return []; }
    else{
        const arr = new Array();
        for(let x = 0; x < howMany ;x++){
            arr.push(x);
        }
        return arr;
    }
}
console.log(spawn(5));
console.log(spawn(-3));


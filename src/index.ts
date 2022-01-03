let id: number = 3;
let myName: string = "Sean";
let isHungry: boolean = true;
let x: any = "Hello";
x = true;

let age: number;
age = 28;

let ids: any[] = [1, 2, 3, 4, 5];
ids.push("Hello");
// console.log(ids);

//Tuple
let tuple: [number, string, any] = [1, "what", 3];

//TupleArray
let tupleArray: [number, string][] = [
  [1, "John"],
  [2, "Sean"],
  [3, "Logan"],
];

//Union
let unionExample: string | number = "29";

//Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

//Object
const students: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Sean",
};

type Students = {
  id: number;
  name: string;
};

const students2: Students = {
  id: 1,
  name: "Sean",
};

//Type Assertion
let pid: any = 2;

let productId = <number>pid;
let prodId = pid as number;

//Function Declaration
function addNum(x: number, y: number): number {
  return x + y;
}

// void return function
function log(text: string | number): void {
  console.log(text);
}

//Interface
interface User {
  readonly id: number; //readonly 를 통해 다른 value를 assign 할 수 없게 한다.
  name: string;
  age?: number; // ? 를 통해 age 는 optional로 설정한다.
}

const user: User = {
  id: 1,
  name: "Sean",
};

//Interface Function
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Interface Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is registered`;
  }
}
const sean = new Person(1, "Sean Mendez");

//class extension (Subclasses)
class Player extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const lineBack = new Player(3, "Tommy", "Dunker");

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["sean", "tommy", "john", "mike"]);

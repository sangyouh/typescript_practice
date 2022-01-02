let id: number = 3;
let myName: string = "Sean";
let isHungry: boolean = true;
let x: any = "Hello";
x = true;

let age: number;
age = 28;

let ids: any[] = [1, 2, 3, 4, 5];
ids.push("Hello");
console.log(ids);

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

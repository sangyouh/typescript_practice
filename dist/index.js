"use strict";
let id = 3;
let myName = "Sean";
let isHungry = true;
let x = "Hello";
x = true;
let age;
age = 28;
let ids = [1, 2, 3, 4, 5];
ids.push("Hello");
console.log(ids);
//Tuple
let tuple = [1, "what", 3];
//TupleArray
let tupleArray = [
    [1, "John"],
    [2, "Sean"],
    [3, "Logan"],
];
//Union
let unionExample = "29";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
//Object
const students = {
    id: 1,
    name: "Sean",
};
const students2 = {
    id: 1,
    name: "Sean",
};
//Type Assertion
let pid = 2;
let productId = pid;
let prodId = pid;
//Function Declaration
function addNum(x, y) {
    return x + y;
}
// void return function
function log(text) {
    console.log(text);
}
const user = {
    id: 1,
    name: "Sean",
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
//Interface Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const sean = new Person(1, "Sean Mendez");

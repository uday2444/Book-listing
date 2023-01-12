const {
  checkDuplicateIncludeExcludes,
} = require("babel-preset-env/lib/normalize-options");

class Animals {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  display() {
    console.log(`Hi I'm ${this.name} and I'm ${this.type} animal!`);
  }
}

class DomesticAnimal extends Animals {
  constructor(name, type, color) {
    super(name, type);
    this.color = color;
  }

  display() {
    console.log(
      `Hi I'm ${this.name} and I'm ${this.type} animal and I'm ${this.color} color!`
    );
  }
}
let dog = new DomesticAnimal("Huski", "Domestic", "Black&White");
dog.display();

// Using static methods

class calculator {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

let result = calculator.add(5, 7);
// console.log(result);

// DataStructure
// set datastructure
let set_array = new Set();
set_array.add(10);
set_array.add("Hello");
// console.log(set_array.has(10));

let chars = "aaaeeeggghhhyyyoooppp";
let split_chars = chars.split("");
let chars_set = new Set(split_chars);

for (let char of chars_set.values()) {
  //   console.log(char);
}

let value_map = new Map();
let key_1 = "string key string key";
let key_0 = new Set(key_1);

let key_2 = { 1: "hello", 1: "hey" };
let key_4 = function () {};
value_map.set(key_0, "return value for key_1 variable");
value_map.set(key_2, "return value from object");
value_map.set(key_4, "return value from function");

console.log(value_map);

console.log(key_4);

let items = [
  [1, "one"],
  [2, "two"],
  [3, "three"],
];
let valMap = new Map(items);
for (let [i, j] of valMap.entries()) {
  console.log(i, j);
}

let char = "aaaeerrtttyyuuiihhyyygggffee";

const count = (word, counter) => {
  let letters = new Map();
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      letters.set(letter, 1);
    } else {
      letters.set(letter, letters.get(letter) + 1);
    }
  }
  return letters.get(counter);
};

let a_count = count(char, "a");
let i_count = count(char, "i");
console.log(a_count, i_count);

// closuers-> refer to functions that remembers their creation environment and can further reference that environments independent variable
const message = () => {
  let secret = "Surprise";
  let revealMethod = () => {
    console.log(secret);
  };
  return revealMethod;
};

const revealed = message();
revealed();

const product = (x) => (y) => y + x;

const firstP = product(" coder");
console.log(firstP("I'm"));

// access private methods in closure

const ATM = () => {
  let balance = 0;

  const ChangeBalance = (value) => {
    return (balance += value);
  };

  let deposit = () => ChangeBalance(20);
  let withdraw = () => ChangeBalance(-20);
  let checkBalance = () => balance;

  return { deposit, withdraw, checkBalance };
};

let functions = ATM();
functions.deposit();
functions.withdraw();
console.log(functions.checkBalance());
functions.deposit();
console.log(functions.checkBalance());

// generators
function* counter() {
  let count = 0;
  while (count <= 4) {
    count += 1;
    yield count;
  }
}

let ShowCount = counter();
console.log(ShowCount.next().value);
console.log(ShowCount.next().value);

// reset generator
function* resetCount() {
  let count = 0;
  while (true) {
    count += 2;
    let reseting = yield count;
    if (reseting) {
      count = 0;
    }
  }
}
let reset = resetCount();
console.log(reset.next().value);
console.log(reset.next().value);
console.log(reset.next().value);
console.log(reset.next(true).value);
console.log(reset.next().value);

// Asynchronous ,promise
let p = new Promise((resolve, reject) => {
  // resolve("Resolved");
  // reject("Rejected");
  setTimeout(() => resolve("Resolved"), 3000);
});

p.then((response) => console.log(response)).catch((error) =>
  console.log(error)
);

const fetch = require("node-fetch");

const API = "https://jsonplaceholder.typicode.com/todos/1";

fetch(API, { method: "GET" }).then((respose) => console.log(respose));

let a = Math.pow(2, 5);
console.log(a);

let characters = "wonderfull".includes("wonder");
console.log(characters);

let obj = { 1: "one", 2: "two" };
let depObj = Object.keys(obj);
let depObj2 = Object.values(obj);
let depObj3 = Object.entries(obj);
console.log(depObj);
console.log(depObj2);
for (let entry of depObj3) {
  console.log(`key:${entry[0]},value:${entry[1]}`);
}

// es8 proposal async module

async function async_1() {
  return "one";
}

async_1().then((response) => console.log(response));

async function async_2() {
  //   throw new Error("Issue in async_2");
  return "two";
}

// async_2().catch((error) => console.log(error));

async function async_3() {
  const one = await async_1();
  console.log(one);
  const two = await async_2();
  console.log(two);
}

async_3();

async function async_4() {
  const [one, two] = await Promise.all([async_1(), async_2()]);
  console.log(`async_1:${one}, async_2:${two}`);
}

async_4();

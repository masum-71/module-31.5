//Problem: 1

const name = "masum";
let age = 30;

//Problem: 2
//a
let str = `I am ${name} and my age is ${age}`;

console.log(str);
//b
const obj = {
  name: "masum",
  age: 30,
  education: "masters",
  job: "govt",
};

const objStr = `I am ${obj.name} and my age is ${obj.age}`;

console.log(objStr);

//Problem: 3
//3.1
const division = (x) => x / 5;
console.log(division(15));

//3.2

const addTwo = (a, b) => {
  const addA = a + 2;
  const addB = b + 2;
  const multiply = addA * addB;
  return multiply;
};

console.log(addTwo(2, 2));
//3.3

const threePara = (a, b, c) => a * b * c;
console.log(threePara(3, 4, 5));
//3.4

const twoPara = (a,b) => {
    const addA = a + 2;
    const addB = b + 2;
    return addA * addB;
}
console.log(twoPara(3,5))
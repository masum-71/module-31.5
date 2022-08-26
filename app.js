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

const twoPara = (a, b) => {
  const addA = a + 2;
  const addB = b + 2;
  return addA * addB;
};
console.log(twoPara(3, 5));

//Problem: 5

const arr = [2, 3, 5, 8, 9];
const multipliedArray = arr.map((i) => i * 5);
console.log(multipliedArray);

//Problem: 6

const nums = [2, 15, 41, 52, 21, 44, 12, 99];
const oddNum = nums.filter((num) => num % 2 === 1);
console.log(oddNum)

//Problem: 7

const objArray = [
    {name: "a" , price: 12000},
    {name: "b", price: 7000},
    {name: "c", price: 5000},
    {name: "d", price: 8000 }
]

const selectedObj = objArray.filter(elem => elem.price === 5000);

console.log(selectedObj)
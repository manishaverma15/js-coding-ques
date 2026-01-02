import type { Question } from "@/types/question";

export const questions: readonly Question[] = [
  {
    id: 1,
    question: "What will be the output?",
    code: `console.log(typeof NaN);`,
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation: "NaN is considered a number type in JavaScript."
  },
  {
    id: 2,
    question: "What will be the output?",
    code: `
let x = 1;
x = x++;
console.log(x);
`,
    options: ["1", "2", "undefined", "Error"],
    correctAnswer: "1",
    explanation: "Post-increment returns the old value before incrementing."
  },
  {
    id: 3,
    question: "What will be the output?",
    code: `
console.log([] == ![]);
`,
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: "true",
    explanation: "![] is false, [] == false → true due to coercion."
  },
  {
    id: 4,
    question: "What will be the output?",
    code: `
function test() {
  console.log(a);
  var a = 10;
}
test();
`,
    options: ["10", "undefined", "ReferenceError", "null"],
    correctAnswer: "undefined",
    explanation: "`var` is hoisted and initialized with undefined."
  },
  {
    id: 5,
    question: "What will be the output?",
    code: `
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
`,
    options: ["[1,2,3]", "[]", "undefined", "Error"],
    correctAnswer: "[]",
    explanation: "Setting array length to 0 clears the array."
  },
  {
    id: 6,
    question: "What will be the output?",
    code: `console.log(1 + "2" + "3");`,
    options: ["6", "123", "15", "Error"],
    correctAnswer: "123",
    explanation: "String concatenation happens from left to right."
  },
  {
    id: 7,
    question: "What will be the output?",
    code: `console.log(typeof typeof 1);`,
    options: ["number", "string", "undefined", "object"],
    correctAnswer: "string",
    explanation: "typeof always returns a string."
  },
  {
    id: 8,
    question: "What will be the output?",
    code: `let a = {};
let b = a;
b.name = "JS";
console.log(a.name);`,
    options: ["undefined", "JS", "Error", "null"],
    correctAnswer: "JS",
    explanation: "Objects are assigned by reference."
  },
  {
    id: 9,
    question: "What will be the output?",
    code: `console.log([] + []);`,
    options: ["[]", "''", "undefined", "Error"],
    correctAnswer: "''",
    explanation: "Empty arrays convert to empty strings."
  },
  {
    id: 10,
    question: "What will be the output?",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "false",
    explanation: "Floating point precision issue."
  },
  {
    id: 11,
    question: "What will be the output?",
    code: `const fn = () => arguments;
console.log(typeof fn());`,
    options: ["object", "undefined", "Error", "function"],
    correctAnswer: "undefined",
    explanation: "Arrow functions don’t have arguments object."
  },
  {
    id: 12,
    question: "What will be the output?",
    code: `console.log(+true);`,
    options: ["true", "1", "NaN", "Error"],
    correctAnswer: "1",
    explanation: "Unary plus converts boolean to number."
  },
  {
    id: 13,
    question: "What will be the output?",
    code: `console.log(null == undefined);`,
    options: ["true", "false", "Error", "NaN"],
    correctAnswer: "true",
    explanation: "Loose equality treats null and undefined as equal."
  },
  {
    id: 14,
    question: "What will be the output?",
    code: `console.log([1,2] == "1,2");`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "true",
    explanation: "Array gets coerced to string."
  },
  {
    id: 15,
    question: "What will be the output?",
    code: `let x = 5;
(function () {
  console.log(x);
  let x = 10;
})();`,
    options: ["5", "10", "ReferenceError", "undefined"],
    correctAnswer: "ReferenceError",
    explanation: "Temporal Dead Zone with let."
  },
  {
    id: 16,
    question: "What will be the output?",
    code: `console.log("5" - 3);`,
    options: ["2", "53", "NaN", "Error"],
    correctAnswer: "2",
    explanation: "Minus operator forces numeric conversion."
  },
  {
    id: 17,
    question: "What will be the output?",
    code: `console.log(false || "JS");`,
    options: ["false", "JS", "true", "undefined"],
    correctAnswer: "JS",
    explanation: "OR returns first truthy value."
  },
  {
    id: 18,
    question: "What will be the output?",
    code: `console.log([] == ![]);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "true",
    explanation: "Both sides coerce to 0."
  },
  {
    id: 19,
    question: "What will be the output?",
    code: `console.log("10" * "2");`,
    options: ["20", "102", "NaN", "Error"],
    correctAnswer: "20",
    explanation: "Multiplication forces numeric conversion."
  },
  {
    id: 20,
    question: "What will be the output?",
    code: `console.log(typeof null);`,
    options: ["null", "object", "undefined", "number"],
    correctAnswer: "object",
    explanation: "Historical JS bug."
  },
  {
    id: 21,
    question: "What will be the output?",
    code: `console.log(!!"false");`,
    options: ["false", "true", "Error", "undefined"],
    correctAnswer: "true",
    explanation: "Non-empty string is truthy."
  },
  {
    id: 22,
    question: "What will be the output?",
    code: `console.log([] + {});`,
    options: ["[object Object]", "{}", "Error", "undefined"],
    correctAnswer: "[object Object]",
    explanation: "Array becomes empty string, object becomes string."
  },
  {
    id: 23,
    question: "What will be the output?",
    code: `console.log({} + []);`,
    options: ["0", "[object Object]", "Error", "undefined"],
    correctAnswer: "0",
    explanation: "{} treated as block, +[] is 0."
  },
  {
    id: 24,
    question: "What will be the output?",
    code: `console.log(typeof NaN);`,
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    explanation: "NaN is a number type."
  },
  {
    id: 25,
    question: "What will be the output?",
    code: `console.log("JS" && 0 && "React");`,
    options: ["JS", "0", "React", "false"],
    correctAnswer: "0",
    explanation: "AND returns first falsy value."
  },
  {
  id: 26,
  question: "What will be the output?",
  code: `console.log(1 < 2 < 3);`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "true",
  explanation: "1 < 2 is true → true < 3 → 1 < 3 → true."
},
{
  id: 27,
  question: "What will be the output?",
  code: `console.log(3 > 2 > 1);`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "false",
  explanation: "3 > 2 is true → true > 1 → 1 > 1 → false."
},
{
  id: 28,
  question: "What will be the output?",
  code: `let a = [1, 2];
let b = a;
b.push(3);
console.log(a);`,
  options: ["[1,2]", "[1,2,3]", "Error", "undefined"],
  correctAnswer: "[1,2,3]",
  explanation: "Arrays are passed by reference."
},
{
  id: 29,
  question: "What will be the output?",
  code: `console.log(typeof function(){});`,
  options: ["function", "object", "undefined", "string"],
  correctAnswer: "function",
  explanation: "Functions have a special typeof."
},
{
  id: 30,
  question: "What will be the output?",
  code: `console.log([...'hello']);`,
  options: ["['h','e','l','l','o']", "['hello']", "Error", "undefined"],
  correctAnswer: "['h','e','l','l','o']",
  explanation: "Spread operator splits iterable into elements."
},
{
  id: 31,
  question: "What will be the output?",
  code: `console.log(parseInt('10px'));`,
  options: ["10", "NaN", "Error", "undefined"],
  correctAnswer: "10",
  explanation: "parseInt stops at non-numeric characters."
},
{
  id: 32,
  question: "What will be the output?",
  code: `console.log(Number('10px'));`,
  options: ["10", "NaN", "Error", "undefined"],
  correctAnswer: "NaN",
  explanation: "Number() requires full numeric conversion."
},
{
  id: 33,
  question: "What will be the output?",
  code: `const obj = {
  name: "JS",
  getName() {
    return this.name;
  }
};
const fn = obj.getName;
console.log(fn());`,
  options: ["JS", "undefined", "Error", "null"],
  correctAnswer: "undefined",
  explanation: "`this` is lost when method is detached."
},
{
  id: 34,
  question: "What will be the output?",
  code: `console.log(!!null);`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "false",
  explanation: "null is falsy."
},
{
  id: 35,
  question: "What will be the output?",
  code: `console.log([] === []);`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "false",
  explanation: "Different references in memory."
},
{
  id: 36,
  question: "What will be the output?",
  code: `function test() {
  console.log(a);
}
test();`,
  options: ["undefined", "ReferenceError", "null", "Error"],
  correctAnswer: "ReferenceError",
  explanation: "Variable `a` is not declared."
},
{
  id: 37,
  question: "What will be the output?",
  code: `console.log(typeof undefined);`,
  options: ["undefined", "null", "object", "string"],
  correctAnswer: "undefined",
  explanation: "Primitive undefined type."
},
{
  id: 38,
  question: "What will be the output?",
  code: `let x = 10;
(function () {
  console.log(x);
})();
`,
  options: ["10", "undefined", "Error", "null"],
  correctAnswer: "10",
  explanation: "Outer scope variable is accessible."
},
{
  id: 39,
  question: "What will be the output?",
  code: `console.log("2" * 3 + 1);`,
  options: ["7", "61", "NaN", "Error"],
  correctAnswer: "7",
  explanation: "'2' * 3 = 6 → 6 + 1 = 7."
},
{
  id: 40,
  question: "What will be the output?",
  code: `console.log(0 || 1 && 2);`,
  options: ["0", "1", "2", "false"],
  correctAnswer: "2",
  explanation: "AND has higher precedence than OR."
},
{
  id: 41,
  question: "What will be the output?",
  code: `console.log(typeof []);`,
  options: ["array", "object", "undefined", "string"],
  correctAnswer: "object",
  explanation: "Arrays are objects in JS."
},
{
  id: 42,
  question: "What will be the output?",
  code: `const a = {};
const b = {};
console.log(a == b);`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "false",
  explanation: "Different object references."
},
{
  id: 43,
  question: "What will be the output?",
  code: `console.log([1] + [2]);`,
  options: ["3", "12", "Error", "undefined"],
  correctAnswer: "12",
  explanation: "Arrays are converted to strings."
},
{
  id: 44,
  question: "What will be the output?",
  code: `console.log(typeof (function(){}()));`,
  options: ["function", "undefined", "object", "string"],
  correctAnswer: "undefined",
  explanation: "IIFE returns undefined."
},
{
  id: 45,
  question: "What will be the output?",
  code: `let a = 1;
let b = a++;
console.log(b, a);`,
  options: ["1 2", "2 2", "1 1", "Error"],
  correctAnswer: "1 2",
  explanation: "Post-increment assigns first, then increments."
},
{
  id: 46,
  question: "What will be the output?",
  code: `
async function test() {
  return 10;
}
console.log(test());
`,
  options: ["10", "Promise {10}", "undefined", "Error"],
  correctAnswer: "Promise {10}",
  explanation: "Async functions always return a Promise."
},
{
  id: 47,
  question: "What will be the output?",
  code: `
Promise.resolve(1)
  .then(() => 2)
  .then(console.log);
`,
  options: ["1", "2", "undefined", "Error"],
  correctAnswer: "2",
  explanation: "Each then returns the resolved value."
},
{
  id: 48,
  question: "What will be the output?",
  code: `
const obj = {
  value: 1,
  getValue() {
    return this.value;
  }
};
console.log(obj.getValue.call({ value: 5 }));
`,
  options: ["1", "5", "undefined", "Error"],
  correctAnswer: "5",
  explanation: "`call` explicitly sets `this`."
},
{
  id: 49,
  question: "What will be the output?",
  code: `
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
`,
  options: ["0 1 2", "3 3 3", "undefined", "Error"],
  correctAnswer: "3 3 3",
  explanation: "`var` is function-scoped, shared across callbacks."
},
{
  id: 50,
  question: "What will be the output?",
  code: `
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
`,
  options: ["0 1 2", "3 3 3", "undefined", "Error"],
  correctAnswer: "0 1 2",
  explanation: "`let` creates a new block scope per iteration."
},
{
  id: 51,
  question: "What will be the output?",
  code: `
const promise = Promise.resolve("A");
promise.then(console.log);
console.log("B");
`,
  options: ["A B", "B A", "undefined", "Error"],
  correctAnswer: "B A",
  explanation: "Microtasks run after the current call stack."
},
{
  id: 52,
  question: "What will be the output?",
  code: `
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const fn = outer();
console.log(fn(), fn());
`,
  options: ["1 1", "1 2", "2 2", "Error"],
  correctAnswer: "1 2",
  explanation: "Closure preserves lexical environment."
},
{
  id: 53,
  question: "What will be the output?",
  code: `
console.log(Object.is(NaN, NaN));
`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "true",
  explanation: "Object.is correctly compares NaN."
},
{
  id: 54,
  question: "What will be the output?",
  code: `
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
`,
  options: ["1", "2", "undefined", "Error"],
  correctAnswer: "1",
  explanation: "Frozen objects cannot be mutated."
},
{
  id: 55,
  question: "What will be the output?",
  code: `
console.log([] instanceof Array);
`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "true",
  explanation: "`instanceof` checks prototype chain."
},
{
  id: 56,
  question: "What will be the output?",
  code: `
console.log(typeof (() => {})());
`,
  options: ["function", "undefined", "object", "Error"],
  correctAnswer: "undefined",
  explanation: "Arrow function returns undefined implicitly."
},
{
  id: 57,
  question: "What will be the output?",
  code: `
Promise.reject("Error")
  .catch(err => err)
  .then(console.log);
`,
  options: ["Error", "undefined", "Rejected", "Error object"],
  correctAnswer: "Error",
  explanation: "Catch converts rejection into resolved value."
},
{
  id: 58,
  question: "What will be the output?",
  code: `
const a = [1, 2, 3];
const b = a.map(x => x);
console.log(a === b);
`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "false",
  explanation: "map returns a new array reference."
},
{
  id: 59,
  question: "What will be the output?",
  code: `
console.log(Reflect.has({ a: 1 }, "a"));
`,
  options: ["true", "false", "Error", "undefined"],
  correctAnswer: "true",
  explanation: "Reflect.has works like `in` operator."
},
{
  id: 60,
  question: "What will be the output?",
  code: `
class A {
  static value = 10;
}
console.log(A.value);
`,
  options: ["10", "undefined", "Error", "null"],
  correctAnswer: "10",
  explanation: "Static properties belong to the class, not instances."
}
];

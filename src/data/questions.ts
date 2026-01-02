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
  }
];

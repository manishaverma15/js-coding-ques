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

  // 👉 Add more questions below (6,7,8...)
];

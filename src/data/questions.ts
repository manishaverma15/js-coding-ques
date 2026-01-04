import type { Question } from "@/types/question";

export const questions: readonly Question[] = [
  {
    id: 1,
    question: "What will be the output?",
    code: `console.log(typeof NaN);`,
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
    explanation: "Setting array length to 0 clears the array."
  },
  {
    id: 6,
    question: "What will be the output?",
    code: `console.log(1 + "2" + "3");`,
    options: ["6", "123", "15", "Error"],
    correctAnswer: "123",
    category: "javascript",
    explanation: "String concatenation happens from left to right."
  },
  {
    id: 7,
    question: "What will be the output?",
    code: `console.log(typeof typeof 1);`,
    options: ["number", "string", "undefined", "object"],
    correctAnswer: "string",
    category: "javascript",
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
    category: "javascript",
    explanation: "Objects are assigned by reference."
  },
  {
    id: 9,
    question: "What will be the output?",
    code: `console.log([] + []);`,
    options: ["[]", "''", "undefined", "Error"],
    correctAnswer: "''",
    category: "javascript",
    explanation: "Empty arrays convert to empty strings."
  },
  {
    id: 10,
    question: "What will be the output?",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "false",
    category: "javascript",
    explanation: "Floating point precision issue."
  },
  {
    id: 11,
    question: "What will be the output?",
    code: `const fn = () => arguments;
console.log(typeof fn());`,
    options: ["object", "undefined", "Error", "function"],
    correctAnswer: "undefined",
    category: "javascript",
    explanation: "Arrow functions don’t have arguments object."
  },
  {
    id: 12,
    question: "What will be the output?",
    code: `console.log(+true);`,
    options: ["true", "1", "NaN", "Error"],
    correctAnswer: "1",
    category: "javascript",
    explanation: "Unary plus converts boolean to number."
  },
  {
    id: 13,
    question: "What will be the output?",
    code: `console.log(null == undefined);`,
    options: ["true", "false", "Error", "NaN"],
    correctAnswer: "true",
    category: "javascript",
    explanation: "Loose equality treats null and undefined as equal."
  },
  {
    id: 14,
    question: "What will be the output?",
    code: `console.log([1,2] == "1,2");`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "true",
    category: "javascript",
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
    category: "javascript",
    explanation: "Temporal Dead Zone with let."
  },
  {
    id: 16,
    question: "What will be the output?",
    code: `console.log("5" - 3);`,
    options: ["2", "53", "NaN", "Error"],
    correctAnswer: "2",
    category: "javascript",
    explanation: "Minus operator forces numeric conversion."
  },
  {
    id: 17,
    question: "What will be the output?",
    code: `console.log(false || "JS");`,
    options: ["false", "JS", "true", "undefined"],
    correctAnswer: "JS",
    category: "javascript",
    explanation: "OR returns first truthy value."
  },
  {
    id: 18,
    question: "What will be the output?",
    code: `console.log([] == ![]);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "true",
    category: "javascript",
    explanation: "Both sides coerce to 0."
  },
  {
    id: 19,
    question: "What will be the output?",
    code: `console.log("10" * "2");`,
    options: ["20", "102", "NaN", "Error"],
    correctAnswer: "20",
    category: "javascript",
    explanation: "Multiplication forces numeric conversion."
  },
  {
    id: 20,
    question: "What will be the output?",
    code: `console.log(typeof null);`,
    options: ["null", "object", "undefined", "number"],
    correctAnswer: "object",
    category: "javascript",
    explanation: "Historical JS bug."
  },
  {
    id: 21,
    question: "What will be the output?",
    code: `console.log(!!"false");`,
    options: ["false", "true", "Error", "undefined"],
    correctAnswer: "true",
    category: "javascript",
    explanation: "Non-empty string is truthy."
  },
  {
    id: 22,
    question: "What will be the output?",
    code: `console.log([] + {});`,
    options: ["[object Object]", "{}", "Error", "undefined"],
    correctAnswer: "[object Object]",
    category: "javascript",
    explanation: "Array becomes empty string, object becomes string."
  },
  {
    id: 23,
    question: "What will be the output?",
    code: `console.log({} + []);`,
    options: ["0", "[object Object]", "Error", "undefined"],
    correctAnswer: "0",
    category: "javascript",
    explanation: "{} treated as block, +[] is 0."
  },
  {
    id: 24,
    question: "What will be the output?",
    code: `console.log(typeof NaN);`,
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    category: "javascript",
    explanation: "NaN is a number type."
  },
  {
    id: 25,
    question: "What will be the output?",
    code: `console.log("JS" && 0 && "React");`,
    options: ["JS", "0", "React", "false"],
    correctAnswer: "0",
    category: "javascript",
    explanation: "AND returns first falsy value."
  },
  {
    id: 26,
    question: "What will be the output?",
    code: `console.log(1 < 2 < 3);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "true",
    category: "javascript",
    explanation: "1 < 2 is true → true < 3 → 1 < 3 → true."
  },
  {
    id: 27,
    question: "What will be the output?",
    code: `console.log(3 > 2 > 1);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "false",
    category: "javascript",
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
    category: "javascript",
    explanation: "Arrays are passed by reference."
  },
  {
    id: 29,
    question: "What will be the output?",
    code: `console.log(typeof function(){});`,
    options: ["function", "object", "undefined", "string"],
    correctAnswer: "function",
    category: "javascript",
    explanation: "Functions have a special typeof."
  },
  {
    id: 30,
    question: "What will be the output?",
    code: `console.log([...'hello']);`,
    options: ["['h','e','l','l','o']", "['hello']", "Error", "undefined"],
    correctAnswer: "['h','e','l','l','o']",
    category: "javascript",
    explanation: "Spread operator splits iterable into elements."
  },
  {
    id: 31,
    question: "What will be the output?",
    code: `console.log(parseInt('10px'));`,
    options: ["10", "NaN", "Error", "undefined"],
    correctAnswer: "10",
    category: "javascript",
    explanation: "parseInt stops at non-numeric characters."
  },
  {
    id: 32,
    question: "What will be the output?",
    code: `console.log(Number('10px'));`,
    options: ["10", "NaN", "Error", "undefined"],
    correctAnswer: "NaN",
    category: "javascript",
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
    category: "javascript",
    explanation: "`this` is lost when method is detached."
  },
  {
    id: 34,
    question: "What will be the output?",
    code: `console.log(!!null);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "false",
    category: "javascript",
    explanation: "null is falsy."
  },
  {
    id: 35,
    question: "What will be the output?",
    code: `console.log([] === []);`,
    options: ["true", "false", "Error", "undefined"],
    correctAnswer: "false",
    category: "javascript",
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
    category: "javascript",
    explanation: "Variable `a` is not declared."
  },
  {
    id: 37,
    question: "What will be the output?",
    code: `console.log(typeof undefined);`,
    options: ["undefined", "null", "object", "string"],
    correctAnswer: "undefined",
    category: "javascript",
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
    category: "javascript",
    explanation: "Outer scope variable is accessible."
  },
  {
    id: 39,
    question: "What will be the output?",
    code: `console.log("2" * 3 + 1);`,
    options: ["7", "61", "NaN", "Error"],
    correctAnswer: "7",
    category: "javascript",
    explanation: "'2' * 3 = 6 → 6 + 1 = 7."
  },
  {
    id: 40,
    question: "What will be the output?",
    code: `console.log(0 || 1 && 2);`,
    options: ["0", "1", "2", "false"],
    correctAnswer: "2",
    category: "javascript",
    explanation: "AND has higher precedence than OR."
  },
  {
    id: 41,
    question: "What will be the output?",
    code: `console.log(typeof []);`,
    options: ["array", "object", "undefined", "string"],
    correctAnswer: "object",
    category: "javascript",
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
    category: "javascript",
    explanation: "Different object references."
  },
  {
    id: 43,
    question: "What will be the output?",
    code: `console.log([1] + [2]);`,
    options: ["3", "12", "Error", "undefined"],
    correctAnswer: "12",
    category: "javascript",
    explanation: "Arrays are converted to strings."
  },
  {
    id: 44,
    question: "What will be the output?",
    code: `console.log(typeof (function(){}()));`,
    options: ["function", "undefined", "object", "string"],
    correctAnswer: "undefined",
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
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
    category: "javascript",
    explanation: "Static properties belong to the class, not instances."
  },
  {
    id: 61,
    category: "react",
    question: "What will be the output?",
    code: `
function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(count + 1);
  }, []);

  return <div>{count}</div>;
}
`,
    options: ["0", "1", "Infinite loop", "Error"],
    correctAnswer: "1",
    explanation: "useEffect runs once after mount, updating state."
  },
  {
    id: 62,
    category: "react",
    question: "What will be the output?",
    code: `
function App() {
  const [value, setValue] = React.useState(0);

  const handleClick = () => {
    setValue(value + 1);
    setValue(value + 1);
  };

  return <button onClick={handleClick}>{value}</button>;
}
`,
    options: ["0", "1", "2", "Error"],
    correctAnswer: "1",
    explanation: "State updates are batched; both use same value."
  },
  {
    id: 63,
    category: "react",
    question: "What will be the output?",
    code: `
const Child = React.memo(({ value }) => {
  console.log("Rendered");
  return <div>{value}</div>;
});

function App() {
  return <Child value={1} />;
}
`,
    options: ["Rendered", "Nothing", "Error", "Rendered twice"],
    correctAnswer: "Rendered",
    explanation: "React.memo prevents re-render if props don’t change."
  },
  {
    id: 64,
    category: "react",
    question: "What will happen?",
    code: `
function App() {
  const ref = React.useRef(0);

  React.useEffect(() => {
    ref.current++;
  });

  return <div>{ref.current}</div>;
}
`,
    options: ["Infinite loop", "0", "1", "Error"],
    correctAnswer: "0",
    explanation: "Updating ref does not trigger re-render."
  },
  {
    id: 65,
    category: "react",
    question: "What will be the output?",
    code: `
function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
}
`,
    options: ["0", "1", "Infinite loop", "Error"],
    correctAnswer: "1",
    explanation: "Effect captures initial state and updates once."
  },
  {
    id: 66,
    category: "react",
    question: "What will happen?",
    code: `
function App() {
  const [state, setState] = React.useState();

  return <div>{state.value}</div>;
}
`,
    options: ["undefined", "Error", "null", "0"],
    correctAnswer: "Error",
    explanation: "Accessing property of undefined throws error."
  },
  {
    id: 67,
    category: "react",
    question: "What will be the output?",
    code: `
function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(c => c + 1);
    setCount(c => c + 1);
  }, []);

  return <div>{count}</div>;
}
`,
    options: ["1", "2", "0", "Error"],
    correctAnswer: "2",
    explanation: "Functional updates use latest state."
  },
  {
    id: 68,
    category: "react",
    question: "What will happen?",
    code: `
function App() {
  return (
    <>
      <input value="test" />
    </>
  );
}
`,
    options: ["Controlled input warning", "No issue", "Error", "Uncontrolled input"],
    correctAnswer: "Controlled input warning",
    explanation: "Input without onChange is read-only."
  },
  {
    id: 69,
    category: "react",
    question: "What will be the output?",
    code: `
function App() {
  const Component = () => <div>Hello</div>;
  return <Component />;
}
`,
    options: ["Hello", "Error", "undefined", "Nothing"],
    correctAnswer: "Hello",
    explanation: "Components can be declared inline."
  },
  {
    id: 70,
    category: "react",
    question: "What will happen?",
    code: `
function App() {
  React.useEffect(() => {
    console.log("Effect");
  });

  return <div>Hi</div>;
}
`,
    options: ["Runs once", "Runs on every render", "Never runs", "Error"],
    correctAnswer: "Runs on every render",
    explanation: "Missing dependency array."
  },
  {
    id: 71,
    category: "nextjs",
    question: "What will happen?",
    code: `
export default function Page() {
  console.log("Hello");
  return <div>Page</div>;
}
`,
    options: ["Runs on server", "Runs on client", "Runs on both", "Error"],
    correctAnswer: "Runs on server",
    explanation: "App Router components run on server by default."
  },
  {
    id: 72,
    category: "nextjs",
    question: "What does 'use client' do?",
    code: `"use client";`,
    options: [
      "Makes component client-side",
      "Disables SSR",
      "Enables routing",
      "Makes component static"
    ],
    correctAnswer: "Makes component client-side",
    explanation: "Allows hooks and browser APIs."
  },
  {
    id: 73,
    category: "nextjs",
    question: "What happens if you use useState in a server component?",
    code: `
const [state, setState] = useState(0);
`,
    options: ["Works", "Error", "Ignored", "Converted to client"],
    correctAnswer: "Error",
    explanation: "Hooks require client components."
  },
  {
    id: 74,
    category: "nextjs",
    question: "What is the default data fetching behavior in App Router?",
    code: `fetch('/api/data')`,
    options: ["Cached", "No cache", "Client only", "Static only"],
    correctAnswer: "Cached",
    explanation: "fetch is cached by default in Next.js App Router."
  },
  {
    id: 75,
    category: "nextjs",
    question: "What does next/link provide?",
    code: `<Link href="/about" />`,
    options: ["CSR", "Prefetching", "SSR only", "Reload"],
    correctAnswer: "Prefetching",
    explanation: "Links are prefetched automatically."
  },
  {
    id: 76,
    category: "nextjs",
    question: "What happens if you remove 'use client'?",
    code: `
"use client";
import { useState } from "react";
`,
    options: ["Error", "Works", "Auto adds", "Ignored"],
    correctAnswer: "Error",
    explanation: "Hooks require client directive."
  },
  {
    id: 77,
    category: "nextjs",
    question: "What is the purpose of layout.tsx?",
    code: `export default function Layout({ children })`,
    options: ["SEO", "Persistent UI", "Routing", "API"],
    correctAnswer: "Persistent UI",
    explanation: "Layouts persist across route changes."
  },
  {
    id: 78,
    category: "nextjs",
    question: "What happens in server actions?",
    code: `"use server";`,
    options: ["Runs on client", "Runs on server", "Disabled", "Static"],
    correctAnswer: "Runs on server",
    explanation: "Server actions execute on the server."
  },
  {
    id: 79,
    category: "nextjs",
    question: "What does revalidate: 60 mean?",
    code: `{ next: { revalidate: 60 } }`,
    options: ["SSR", "ISR", "CSR", "SSG"],
    correctAnswer: "ISR",
    explanation: "Page revalidates every 60 seconds."
  },
  {
    id: 80,
    category: "nextjs",
    question: "What happens if dynamic = 'force-dynamic'?",
    code: `export const dynamic = "force-dynamic";`,
    options: ["Static page", "Server rendered", "Cached", "Build error"],
    correctAnswer: "Server rendered",
    explanation: "Disables static optimization."
  }

];

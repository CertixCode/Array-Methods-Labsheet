// backend.js - named functions for each QA item (exports)

export function q1() {
  const fruits = ["Apple", "Banana", "Mango"];
  fruits.unshift("Orange");
  fruits.push("Pineapple");
  return fruits.map((s) => s.toUpperCase()).join(", ");
}

export function q2() {
  const prices = [100, 200, 300];
  prices.unshift(50);
  return prices.join(" LKR ");
}

export function q3() {
  const students = ["Kamal", "Nimal", "Saman"];
  return students.map((s) => s.toUpperCase()).join(",");
}

export function q4() {
  const numbers = [5, 10, 15, 20, 25];
  return numbers.slice(0, 2).join(", ");
}

export function q5() {
  const colors1 = ["Red", "Green"];
  const colors2 = ["Blue", "Yellow"];
  return colors1.concat(colors2).join(", ");
}

export function q6() {
  const marks = [12, 25, 30, 18, 40];
  return marks.filter((m) => m > 20).join(", ");
}

export function q7() {
  const numbers = [45, 12, 78, 3, 25];
  return numbers
    .slice()
    .sort((a, b) => a - b)
    .join(", ");
}

export function q8() {
  const values = [3, 7, 9, 15, 20];
  return values.find((v) => v > 10);
}

export function q9() {
  const items = ["Pen", "Book", "Pencil"];
  return items.toString();
}

export function q10() {
  const numbers = [2, 3, 4, 5];
  return numbers.map((n) => n * n).join(", ");
}

export function q11() {
  const marks = [45, 67, 30, 89, 50];
  return marks.filter((m) => m >= 50).join(", ");
}

export function q12() {
  const names = ["Amal", "Kasun", "Nipun"];
  return names.join(" | ");
}

export function q13() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  return [...arr1, ...arr2].join(", ");
}

export function q14() {
  const fruits = ["Apple", "Banana"];
  fruits.push("Mango");
  fruits.unshift("Orange");
  return fruits.map((f) => f.toUpperCase()).join(" - ");
}

export function q15() {
  const marks = [45, 67, 12, 89, 30];
  return marks
    .filter((m) => m >= 50)
    .map((m) => m * 2)
    .join(",");
}

export function q16() {
  const prices = [100, 250, 50, 400];
  prices.unshift(75);
  return prices
    .filter((p) => p >= 100)
    .map((p) => `Rs.${p}`)
    .join(" | ");
}

export function q17() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  return nums
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .join(",");
}

export function q18() {
  const names = ["john", "mary", "alex"];
  return names.map((n) => n.toUpperCase()).join(" | ");
}

export function q19() {
  const a = [10, 25, 30];
  const b = [5, 60, 15];
  return [...a, ...b]
    .filter((n) => n > 20)
    .map((n) => n * 2)
    .sort((x, y) => x - y)
    .join(",");
}

export const qaList = [
  {
    id: 1,
    question:
      'Given fruits ["Apple","Banana","Mango"]. Add one fruit to the beginning and one to the end. Display all fruits as a single UPPERCASE string.',
    fn: q1,
    fnString: q1.toString(),
  },
  {
    id: 2,
    question:
      'Given prices [100,200,300]. Insert a new price at the beginning. Display all prices joined using " LKR "',
    fn: q2,
    fnString: q2.toString(),
  },
  {
    id: 3,
    question:
      'Given students ["Kamal","Nimal","Saman"]. Convert all names to uppercase and display as comma-separated string.',
    fn: q3,
    fnString: q3.toString(),
  },
  {
    id: 4,
    question:
      "Given numbers [5,10,15,20,25]. Extract and display the first two elements.",
    fn: q4,
    fnString: q4.toString(),
  },
  {
    id: 5,
    question: 'Combine colors1 ["Red","Green"] and colors2 ["Blue","Yellow"].',
    fn: q5,
    fnString: q5.toString(),
  },
  {
    id: 6,
    question:
      "Given marks [12,25,30,18,40]. Display only marks greater than 20.",
    fn: q6,
    fnString: q6.toString(),
  },
  {
    id: 7,
    question:
      "Given numbers [45,12,78,3,25]. Sort in ascending order and display.",
    fn: q7,
    fnString: q7.toString(),
  },
  {
    id: 8,
    question:
      "Given values [3,7,9,15,20]. Find the first number greater than 10.",
    fn: q8,
    fnString: q8.toString(),
  },
  {
    id: 9,
    question:
      'Given items ["Pen","Book","Pencil"]. Convert to string using toString().',
    fn: q9,
    fnString: q9.toString(),
  },
  {
    id: 10,
    question:
      "Given numbers [2,3,4,5]. Create new array containing squares and display.",
    fn: q10,
    fnString: q10.toString(),
  },
  {
    id: 11,
    question:
      "Given marks [45,67,30,89,50]. Display only passing marks (>=50).",
    fn: q11,
    fnString: q11.toString(),
  },
  {
    id: 12,
    question: 'Given names ["Amal","Kasun","Nipun"]. Join using " | "',
    fn: q12,
    fnString: q12.toString(),
  },
  {
    id: 13,
    question: "Combine arr1 [1,2,3] and arr2 [4,5,6].",
    fn: q13,
    fnString: q13.toString(),
  },
  {
    id: 14,
    question:
      'Start with ["Apple","Banana"], add "Mango" to end and "Orange" to beginning. Uppercase all and join with " - ".',
    fn: q14,
    fnString: q14.toString(),
  },
  {
    id: 15,
    question:
      "Marks [45,67,12,89,30]. Filter >=50, multiply by 2, then join comma-separated.",
    fn: q15,
    fnString: q15.toString(),
  },
  {
    id: 16,
    question:
      'Prices [100,250,50,400]. Add 75 at beginning. Remove values <100. Format "Rs.X" and join with " | ".',
    fn: q16,
    fnString: q16.toString(),
  },
  {
    id: 17,
    question:
      "Numbers [1..8]. Filter even numbers, multiply each by 2, convert to string.",
    fn: q17,
    fnString: q17.toString(),
  },
  {
    id: 18,
    question: 'Names ["john","mary","alex"]. Uppercase and join with " | "',
    fn: q18,
    fnString: q18.toString(),
  },
  {
    id: 19,
    question:
      "Combine [10,25,30] and [5,60,15]. Filter >20, multiply by 2, sort asc, convert to string.",
    fn: q19,
    fnString: q19.toString(),
  },
];

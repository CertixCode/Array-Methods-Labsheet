const qaList = [
  {
    id: 1,
    question:
      'Given fruits ["Apple","Banana","Mango"]. Add one fruit to the beginning and one to the end. Display all fruits as a single UPPERCASE string.',
    fn: () => {
      const fruits = ["Apple", "Banana", "Mango"];
      fruits.unshift("Orange");
      fruits.push("Pineapple");
      return fruits.map((s) => s.toUpperCase()).join(", ");
    },
    fnString: `const fruits = ["Apple","Banana","Mango"];\nfruits.unshift('Orange');\nfruits.push('Pineapple');\nfruits.map(s=>s.toUpperCase()).join(', ')`,
  },
  {
    id: 2,
    question:
      'Given prices [100,200,300]. Insert a new price at the beginning. Display all prices joined using " LKR "',
    fn: () => {
      const prices = [100, 200, 300];
      prices.unshift(50);
      return prices.join(" LKR ");
    },
    fnString: `const prices = [100,200,300];\nprices.unshift(50);\nprices.join(' LKR ')`,
  },
  {
    id: 3,
    question:
      'Given students ["Kamal","Nimal","Saman"]. Convert all names to uppercase and display as comma-separated string.',
    fn: () => {
      const students = ["Kamal", "Nimal", "Saman"];
      return students.map((s) => s.toUpperCase()).join(",");
    },
    fnString: `const students = ["Kamal","Nimal","Saman"];\nstudents.map(s=>s.toUpperCase()).join(',')`,
  },
  {
    id: 4,
    question:
      "Given numbers [5,10,15,20,25]. Extract and display the first two elements.",
    fn: () => {
      const numbers = [5, 10, 15, 20, 25];
      return numbers.slice(0, 2).join(", ");
    },
    fnString: `const numbers=[5,10,15,20,25];\nnumbers.slice(0,2)`,
  },
  {
    id: 5,
    question: 'Combine colors1 ["Red","Green"] and colors2 ["Blue","Yellow"].',
    fn: () => {
      const colors1 = ["Red", "Green"];
      const colors2 = ["Blue", "Yellow"];
      return colors1.concat(colors2).join(", ");
    },
    fnString: `const colors1=['Red','Green']; const colors2=['Blue','Yellow'];\ncolors1.concat(colors2)`,
  },
  {
    id: 6,
    question:
      "Given marks [12,25,30,18,40]. Display only marks greater than 20.",
    fn: () => {
      const marks = [12, 25, 30, 18, 40];
      return marks.filter((m) => m > 20).join(", ");
    },
    fnString: `const marks=[12,25,30,18,40];\nmarks.filter(m=>m>20)`,
  },
  {
    id: 7,
    question:
      "Given numbers [45,12,78,3,25]. Sort in ascending order and display.",
    fn: () => {
      const numbers = [45, 12, 78, 3, 25];
      return numbers
        .slice()
        .sort((a, b) => a - b)
        .join(", ");
    },
    fnString: `const numbers=[45,12,78,3,25];\nnumbers.sort((a,b)=>a-b)`,
  },
  {
    id: 8,
    question:
      "Given values [3,7,9,15,20]. Find the first number greater than 10.",
    fn: () => {
      const values = [3, 7, 9, 15, 20];
      return values.find((v) => v > 10);
    },
    fnString: `const values=[3,7,9,15,20];\nvalues.find(v=>v>10)`,
  },
  {
    id: 9,
    question:
      'Given items ["Pen","Book","Pencil"]. Convert to string using toString().',
    fn: () => {
      const items = ["Pen", "Book", "Pencil"];
      return items.toString();
    },
    fnString: `const items=['Pen','Book','Pencil'];\nitems.toString()`,
  },
  {
    id: 10,
    question:
      "Given numbers [2,3,4,5]. Create new array containing squares and display.",
    fn: () => {
      const numbers = [2, 3, 4, 5];
      return numbers.map((n) => n * n).join(", ");
    },
    fnString: `const numbers=[2,3,4,5];\nnumbers.map(n=>n*n)`,
  },
  {
    id: 11,
    question:
      "Given marks [45,67,30,89,50]. Display only passing marks (>=50).",
    fn: () => {
      const marks = [45, 67, 30, 89, 50];
      return marks.filter((m) => m >= 50).join(", ");
    },
    fnString: `const marks=[45,67,30,89,50];\nmarks.filter(m=>m>=50)`,
  },
  {
    id: 12,
    question: 'Given names ["Amal","Kasun","Nipun"]. Join using " | "',
    fn: () => {
      const names = ["Amal", "Kasun", "Nipun"];
      return names.join(" | ");
    },
    fnString: `const names=['Amal','Kasun','Nipun'];\nnames.join(' | ')`,
  },
  {
    id: 13,
    question: "Combine arr1 [1,2,3] and arr2 [4,5,6].",
    fn: () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      return [...arr1, ...arr2].join(", ");
    },
    fnString: `const arr1=[1,2,3]; const arr2=[4,5,6];\n[...arr1,...arr2]`,
  },
  {
    id: 14,
    question:
      'Start with ["Apple","Banana"], add "Mango" to end and "Orange" to beginning. Uppercase all and join with " - ".',
    fn: () => {
      const fruits = ["Apple", "Banana"];
      fruits.push("Mango");
      fruits.unshift("Orange");
      return fruits.map((f) => f.toUpperCase()).join(" - ");
    },
    fnString: `const fruits=['Apple','Banana'];\nfruits.push('Mango'); fruits.unshift('Orange');\nfruits.map(f=>f.toUpperCase()).join(' - ')`,
  },
  {
    id: 15,
    question:
      "Marks [45,67,12,89,30]. Filter >=50, multiply by 2, then join comma-separated.",
    fn: () => {
      const marks = [45, 67, 12, 89, 30];
      return marks
        .filter((m) => m >= 50)
        .map((m) => m * 2)
        .join(",");
    },
    fnString: `const marks=[45,67,12,89,30];\nmarks.filter(m=>m>=50).map(m=>m*2).join(',')`,
  },
  {
    id: 16,
    question:
      'Prices [100,250,50,400]. Add 75 at beginning. Remove values <100. Format "Rs.X" and join with " | ".',
    fn: () => {
      const prices = [100, 250, 50, 400];
      prices.unshift(75);
      return prices
        .filter((p) => p >= 100)
        .map((p) => `Rs.${p}`)
        .join(" | ");
    },
    fnString: `const prices=[100,250,50,400]; prices.unshift(75);\nprices.filter(p=>p>=100).map(p=>'Rs.'+p).join(' | ')`,
  },
  {
    id: 17,
    question:
      "Numbers [1..8]. Filter even numbers, multiply each by 2, convert to string.",
    fn: () => {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8];
      return nums
        .filter((n) => n % 2 === 0)
        .map((n) => n * 2)
        .join(",");
    },
    fnString: `const nums=[1,2,3,4,5,6,7,8];\nnums.filter(n=>n%2===0).map(n=>n*2).join(',')`,
  },
  {
    id: 18,
    question: 'Names ["john","mary","alex"]. Uppercase and join with " | "',
    fn: () => {
      const names = ["john", "mary", "alex"];
      return names.map((n) => n.toUpperCase()).join(" | ");
    },
    fnString: `const names=['john','mary','alex'];\nnames.map(n=>n.toUpperCase()).join(' | ')`,
  },
  {
    id: 19,
    question:
      "Combine [10,25,30] and [5,60,15]. Filter >20, multiply by 2, sort asc, convert to string.",
    fn: () => {
      const a = [10, 25, 30];
      const b = [5, 60, 15];
      return [...a, ...b]
        .filter((n) => n > 20)
        .map((n) => n * 2)
        .sort((x, y) => x - y)
        .join(",");
    },
    fnString: `const a=[10,25,30]; const b=[5,60,15];\n[...a,...b].filter(n=>n>20).map(n=>n*2).sort((x,y)=>x-y).join(',')`,
  },
];

// Rendering
const container = document.getElementById("qa-container");

function createCard(item) {
  const card = document.createElement("div");
  card.className =
    "bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-start md:space-x-6";

  const left = document.createElement("div");
  left.className = "flex-1";
  const q = document.createElement("h2");
  q.className = "font-semibold text-lg";
  q.textContent = `Q${item.id}. ${item.question}`;
  left.appendChild(q);

  const fnPre = document.createElement("pre");
  fnPre.className = "mt-2 bg-gray-100 p-2 rounded text-sm overflow-x-auto";
  fnPre.textContent = item.fnString;
  left.appendChild(fnPre);

  const right = document.createElement("div");
  right.className = "w-full md:w-48 mt-3 md:mt-0";
  const outLabel = document.createElement("div");
  outLabel.className = "text-sm text-gray-500";
  outLabel.textContent = "Output";
  const outVal = document.createElement("div");
  outVal.className = "mt-1 font-mono text-indigo-700";
  try {
    const val = item.fn();
    outVal.textContent = String(val);
  } catch (e) {
    outVal.textContent = "Error: " + e.message;
  }
  right.appendChild(outLabel);
  right.appendChild(outVal);

  card.appendChild(left);
  card.appendChild(right);
  return card;
}

qaList.forEach((item) => container.appendChild(createCard(item)));

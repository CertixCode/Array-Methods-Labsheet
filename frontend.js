// frontend.js - imports backend functions and renders the UI
import { qaList } from "./backend.js";

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

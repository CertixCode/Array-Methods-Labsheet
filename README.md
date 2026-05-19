# Array Methods Showcase

A small interactive project demonstrating common JavaScript array methods. The app displays each question, the corresponding function implementation (backend), and the computed output (frontend). It uses Tailwind CSS for styling and plain ES modules for structure.

## Features

- Clear mapping of 19 array-method questions to named functions in `backend.js`.
- Multiline, well-formatted function display (uses `Function.prototype.toString()`).
- Frontend renderer in `frontend.js` that displays: Question, Function, Output.
- Lightweight — no build step required; works with the browser's native ES module support.

## Files

- `index.html` — main HTML file; loads Tailwind CSS and the frontend module.
- `style.css` — small custom CSS tweaks (monospace font for code blocks).
- `backend.js` — exports named functions `q1`..`q19` and `qaList` mapping IDs to functions.
- `frontend.js` — imports `qaList` from `backend.js` and renders the UI cards.
- `qa.js` — original single-file implementation (kept for reference).

## Quick start

Open the project in a browser that supports ES modules (modern Chrome/Edge/Firefox). The simplest option is to run a local static server from the project folder.

Using Python 3:

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or using `npx` http-server:

```bash
npx http-server -c-1
# then open the URL shown by http-server
```

Then open `index.html` (or the server URL) to view the showcase.

## How it works

- Each question is implemented as a named function in `backend.js` (for example `q1()`).
- `backend.js` also exports `qaList`, an array where each item has `id`, `question`, `fn` (function reference), and `fnString` (the function source string).
- `frontend.js` imports `qaList`, renders the question text, shows the `fnString` inside a `<pre>` for readable, multiline code, and executes `fn()` to compute and display the output.

## Extending / Editing

- To add or modify a question: edit or add a new named function in `backend.js`, then add an entry to `qaList` (or regenerate the list). `fnString` uses `functionName.toString()` so the source will display automatically.
- To customize the UI: edit `frontend.js` and `style.css`. Tailwind classes are used heavily; adjust or extend them using desired utilities.

## Optional improvements

- Add per-card “Run” and “Edit” controls so users can tweak inputs and re-run functions.
- Add syntax highlighting (Prism.js or Highlight.js) for nicer function display.
- Add unit tests for each `qN()` function using a test runner (Jest or similar).

## License & Contact

This repository is provided as-is for learning and demonstration purposes. Modify freely. If you want changes or new features, open an issue or contact the author.

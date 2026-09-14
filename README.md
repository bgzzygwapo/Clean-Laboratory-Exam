# Clean Laboratory Examination

This repository contains a small web application created to satisfy the laboratory exam requirements.

What I added:
- index.html — main page (loads JS modules only; no inline scripts)
- styles.css — styling
- js/storage.js — persistence functions (getItems, saveItem, deleteItem, clearItems)
- js/app.js — UI logic and event handlers (renderItems, handleSubmit)

How to run locally:
1. Clone the repository.
2. Serve it with a local development server (do NOT open via file://). For example, using the VS Code Live Server extension, or with Python 3: `python -m http.server` then open http://localhost:8000

Notes:
- JavaScript is implemented as ES modules (type="module").
- No inline JavaScript is used.
- The app uses localStorage for simple persistence.
- Console should not show uncaught errors during normal use.

# Rock, Paper, Scissors, Lizard, Spock (web version)

## Exercise description

This project is a browser-based implementation of **Rock, Paper, Scissors, Lizard, Spock** using HTML, CSS, and JavaScript.

The app lets you:
- Choose one option: `rock`, `paper`, `scissors`, `lizard`, or `spock`.
- Generate a random choice for the computer.
- Compare both choices based on the game rules.
- See the current round result directly in the interface.

## Game rules

- **Rock** crushes **Scissors** and **Lizard**.
- **Paper** covers **Rock** and disproves **Spock**.
- **Scissors** cut **Paper** and decapitate **Lizard**.
- **Lizard** eats **Paper** and poisons **Spock**.
- **Spock** smashes **Scissors** and vaporizes **Rock**.

If both choices are equal, the round is a draw.

## Project structure

- `src/index.html`: main page and UI layout.
- `src/app.js`: game logic and button event handlers.
- `src/style.css`: page and component styles.
- `vite.config.js`: Vite configuration with `src` as root.

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run start
```

3. Open the local URL shown by Vite (usually `http://localhost:3000`).

## Build for production

```bash
npm run build
```
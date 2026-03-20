# React Concepts Playground

An interactive React training app built with Vite.  
This project is designed for trainees to learn concepts through short, hands-on examples with in-depth, lesson-adjacent explanations.

## What This Covers

<img width="1186" height="937" alt="Screenshot 2026-03-20 at 4 53 31 PM" src="https://github.com/user-attachments/assets/e360d5ca-00bf-44e0-8648-cc679b5715a7" />


The self learning app is organized into chapters, each focused on a practical React concept:

1. **State & Props**
   - `useState` basics
   - passing data via props
   - lifting state up
2. **Filter, Map & Reduce**
   - array transformations used in rendering
   - `find`, `some`, `every`
   - method chaining pipelines
3. **Core Hooks**
   - `useEffect` lifecycle + cleanup
   - `useRef` for mutable values and DOM references
   - `useMemo` / `useCallback` optimization patterns
   - `useReducer` for structured state transitions
4. **Context API**
   - `createContext`, provider, consumer hooks
   - avoiding prop drilling
5. **Async Patterns**
   - Promise chains
   - `async/await`
   - callback-to-promise conversion
6. **Custom Hooks**
   - extracting reusable stateful logic
   - `useLocalStorage`, `useFetch`
7. **Routing**
   - nested routing
   - dynamic params
   - search params
   - demo-level 404 handling
8. **Forms & Events**
   - controlled vs uncontrolled inputs
   - event-driven updates
   - client-side validation flow

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or compatible)

## How To Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

## Project Structure

```text
src/
  chapters/           # Chapter-wise lesson demos
  components/         # Shared UI components (layout, sidebar, code block)
  pages/              # Home and fallback pages
  App.jsx             # App routing shell
```

## Learning Flow (Recommended)

- Start at **Chapter 1** and move in order.
- In each lesson:
  - read the explanation,
  - interact with the example,
  - connect the UI behavior to state/data flow.
- Use Chapter 7 and 8 to tie concepts together in route and form scenarios.

# MyApp — Routing & Nested Routing Demo

This project demonstrates React Router DOM routing and nested routes using Vite + React.

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open http://localhost:5175/ (Vite may use another port).

What this includes

- Main menus/pages: Home, About, Services, Products, Contact
- Nested routes:
  - `Services` → Web Development, App Development, UI/UX Design
  - `Products` → Product List, Product Details (dynamic `:id`), Offers
- Navigation using `NavLink` with active highlighting
- `Outlet` used for nested route rendering

Files of interest

- `src/App.tsx` — routing setup
- `src/components/Navbar.tsx` — top navigation
- `src/pages/*` — page components and nested pages

Adding a video file

If you want to embed a local MP4 into the app, copy it to the `public/` folder, for example:

```powershell
Copy-Item "C:\Users\Administrator\Downloads\Screen Recording 2026-08-28 192438.mp4" -Destination "D:\Reactjs-workspace\my-app\public\screen-recording.mp4"
```

Then I can add a `Video` page and route that plays `/screen-recording.mp4`.

Video page

After copying your MP4 into `public/screen-recording.mp4`, open `/video` in the app to play it.

Notes

- If you see duplicate-import or parse errors, run `npx tsc --noEmit` to type-check and inspect the reported files.
- I ran the dev server locally; it is available at the Vite URL printed in the terminal.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

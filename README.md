# Autumn Moon

A Vue.js application for the Autumn Moon festival website.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deployment

This project is configured for GitHub Pages deployment.

### Manual Deployment

To deploy manually:

```sh
npm run deploy
```

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when changes are pushed to the main branch.

To enable automatic deployment:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose the "gh-pages" branch and "/ (root)" folder
5. Click "Save"

The site will be available at: `https://[your-username].github.io/autumnmoon/`

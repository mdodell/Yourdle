# NextJS Boilerplate

This is a boilerplate repository that can be used for future personal projects. Feel free to fork this repository and modify it to your own needs.

This setup specifically does not use a UI library, and is pretty much a vanilla NextJS project with developer tools setup, so that way any developer can pick this up and install additional dependencies according to their own needs.

## Getting started

To get started, run `npm install`. After that, you can run `npm run dev` and find the website hosted at `https://localhost:3000`.

### Commands

Unit Tests:

```
npm run test
```

E2E Tests:

```
npm run test:e2e
```

Linting:

```
npm run lint
```

Lint (with fix option):

```
npm run lint:fix
```

View Storybook:

```
npm run storybook
```

### Technologies

- Framework: [NextJS](https://nextjs.org/docs)
- Component Documentation: [Storybook](https://storybook.js.org/)
- E2E Tests: [Playright](https://playwright.dev/)
- Unit Tests: [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)
- Code Formatting: [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- Pre-Commit Hooks: [Husky](https://typicode.github.io/husky/#/)
- CI/CD: [Github Actions](https://docs.github.com/en/actions)
- Hosting: [Vercel](https://vercel.com/)

### Structure

#### Component Hierarchy

Components can be found in the [`components`](./src/components/) directory. This repository follows the [Atomic Design](https://andela.com/insights/structuring-your-react-application-atomic-design-principles/) pattern. They follow the following structure:

```
ComponentName/
├── index.ts # Exports CompnoentFile.tsx
├── ComponentFile.tsx # The Component
├── ComponentFile.test.tsx # Unit tests
└── ComponentFile.stories.tsx # Storybook file
```

#### E2E Tests

E2E tests can be found in the [`e2e`](./src/e2e) directory.

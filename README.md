# **Next.js Starter-Kit Boilerplate**

[![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)](https://www.typescriptlang.org)
[![GitHub Repo stars](https://img.shields.io/github/stars/rizbud/next-boilerplate)](https://github.com/rizbud/next-boilerplate/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rizbud/next-boilerplate)](https://github.com/rizbud/next-boilerplate/network/members)
[![GitHub issues](https://img.shields.io/github/issues/rizbud/next-boilerplate)](https://github.com/rizbud/next-boilerplate/issues)

## **Features**

- ✨ TypeScript
- 📦 Yarn
- ⚡️ Next.js 13
- ⚛️ React 18
- 💨 Tailwind CSS 3
- 📎 SVG Support
- 🃏 Jest
- 🐙 React Testing Library
- 📖 Storybook
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- 🌸 React Query
- 🔜 _Another cool features will be added soon..._
  - 📋 React Hook Form
  - ✅ Yup
  - 🌐 Jotai/Zustand (?)

## **Getting Started**

### **1. Clone this template using one of the four ways:**

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too 😄

   ![Use as template](https://user-images.githubusercontent.com/55318172/129183039-1a61e68d-dd90-4548-9489-7b3ccbb35810.png)

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/rizbud/next-boilerplate project-name
   ```

3. Using `degit`

   ```bash
   npx degit rizbud/next-boilerplate YOUR_APP_NAME
   ```

4. Deploy it directly to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frizbud%2Fnext-boilerplate)

### **2. Install dependencies**

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### **3. Run the development server**

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### **4. Run the Storybook**

For storybook documentation, please visit [Storybook](https://storybook.js.org/).

You can start the Storybook using this command:

```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

### **5. Commit your changes**

This template uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to make sure your commit messages are consistent and readable.

Before commiting your changes, install husky using this command: _(Optional - since already installed when running `yarn install`)_

```bash
yarn prepare
```

To commit your changes, you can use this command:

```bash
yarn commit
```

This command will open an interactive CLI to help you write your commit message.

### **6. Run the test**

For testing documentation, please visit [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

You can start the test using this command:

For watch mode:

```bash
yarn test
```

with coverage:

```bash
yarn test --coverage
```

For single run:

```bash
yarn test:ci
```

with coverage:

```bash
yarn test:ci --coverage
```

### **7. Build your app**

You can build your app using this command:

```bash
yarn build
```

### **8. Run your app**

You can run your app using this command:

```bash
yarn start
```

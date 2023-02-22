# Rick and Morty

Welcome to my Rick and Morty Vite GraphQL project! This is a project that uses Vite, TypeScript, React, ReduxToolkit and RTKQuery

## Getting Started

To get started with this project, you'll need to have Yarn installed on your computer. If you don't have it yet, you can download it from the official website: https://yarnpkg.com/

## Install via npm

It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system.

Once you have npm installed you can run the following both to install and upgrade Yarn:

```bash
npm install --global yarn
```

Once you have Yarn installed, you can clone this repository and navigate to the project folder:

```bash
git clone https://github.com/orangeX6/rick-n-morty-v-gql.git
cd rick-n-morty-v-gql
```

Then, install the project's dependencies using Yarn:

```bash
yarn
```

This will install all the packages specified in the project's package.json file.

## Running the Project

To run the project, use the following command:

```bash
yarn dev
```

This will start the development server and open the project in your default web browser. If the project is not opened by default go to http://localhost:5173/

You can now start editing the project's source files and see your changes live in the browser. The project uses Vite's fast hot module replacement (HMR) feature, so you don't need to refresh the page to see your changes.

## Building for Production

To build the project for production, use the following command:

```bash
yarn build
```

This will create a production-ready build of the project in the dist folder. You can then deploy this folder to your web server or hosting provider.

## Running Tests

To run the tests for the project, use the following command:

```bash
yarn test
```

This will run all the tests in the project's src/**tests** folder using Jest, a popular testing framework for JavaScript and TypeScript.

The tests are located in files with the .test.tsx or .test.ts extension. By default, Jest will look for these files in the src folder.

You can also run the tests in watch mode, which will automatically re-run the tests whenever you make changes to the source code:

```bash
yarn test --watch
```

Jest will display the test results in the console, showing you which tests passed and which ones failed. If any tests fail, Jest will also show you the error messages and stack traces so you can debug the issue.

That's it! With these commands, you can easily run tests for your Vite TypeScript React project and ensure that your code is working as expected.

## Additional Resources

For more information about Vite, TypeScript, and React, check out the following resources:

[Vite documentation](https://vitejs.dev/)  
[TypeScript documentation](https://www.typescriptlang.org/docs/)  
[React documentation](https://reactjs.org/docs/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

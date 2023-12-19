## Namaste React Course by Akshay Saini

# Chapter 12 - Time for the test

## Type of testing for developer

- Unit testing - write the testing for isolation of the component, means that test case for specific feature of the app which is indepndent from other scenarion of the applications
- Integration Testing - Integration testing is a type of software testing where components of the software are gradually integrated and then tested as a unified group
- End to end testing(e2e) - will start from user landed on the page till user exists from the app this is known as end to end testing

## Libraby for testing needed

- React testing library

  - Builds on top of `DOM Testing libraby`
  - it is written in jest(javascript tetsing framework)

  Setting up Testing in our App

  - install React Testing libraby (npm i @testing-library/react)
  - install jest (npm i jest)
  - install extra dependency when using jest along with babel(npm install --save-dev babel-jest @babel/core @babel/preset-env)
  - Create babel.config.js file at root level.
    ```
    module.exports = {
      presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    };
    ```
  - Configure parcel config file to disable default babel transpilation
    - Parcel uses by default babel inside it's configuration
      To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.
    - create .parcelrc file at root level
      ```
      {
        "extends": "@parcel/config-default",
        "transformers": {
          "*.{js,mjs,jsx,cjs,ts,tsx}": [
            "@parcel/transformer-js",
            "@parcel/transformer-react-refresh-wrap"
          ]
        }
      }
      ```
      This will allow other tools to continue using your Babel config, but disable Babel transpilation in Parcel.
  - After disbaling babel we can now our created babel.config.js file
  - jest configuration (`npx jest --init`)
    - Would you like to use Typescript for the configuration file? ... no
    - Choose the test environment that will be used for testing » jsdom (browser-like)
      - JSDOM is a library which parses and interacts with assembled HTML just like a browser
    - Do you want Jest to add coverage reports? ... yes
    - Which provider should be used to instrument code for coverage? » babel
    - Automatically clear mock calls, instances, contexts and results before every test? ... yes
  - If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
    - install jsdom (npm install --save-dev jest-environment-jsdom).
  - Create a folder with `__tests__` where all tetsing fille will be present (`____` this is known as dunder which jest use for tracking testing files)
  - install @babel/preset-react (npm i @babel/preset-react) - to make JSX work in test cases
  - include @babel/preset-react inside my babel configuration.
    ```
    ["@babel/preset-react", { runtime: "automatic" }]
    ```
    `Note`: Here babel/preset is helping to convert the JSX code to normal Html code
  - Install @testing-library/jest-dom (npm i -D @testing-library/jest-dom)
  - Install @type/jest For autosuggestion intelligence if it's not working - npm i -D @types/jest

## If we have used getBy/getAllBy(return type object / array of object) it returns jsx element/ reactfiberNode, can be verified by console.log

## Whenever there are multiple items then we use getAll in case of single use get.

## describe - is use for grouping the test case in a single block.

## instead of test we can write as it in test case, it is just a alias of test., both are same there is no difference.

## when using fetch and state update wrap render method inside act function , and act function comes from `react-dom/tets-utils`

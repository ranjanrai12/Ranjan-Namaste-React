## Chapter 03 - Laying the Foundation

## Q: How to run build command without running npx ?

A: define the npx run command (`parcel index.html`)inside the scipt of package.json file.

- Dev Build Script:

```
"start": "parcel index.html"
script command: npm run start/npm start
```

- Production Build

```
"build": "parcel build index.html"
script command: npm run build
```

## Q: What is JSX ?

A: `JSX` is a JavaScript XML. `JSX` allow us to write HTML in React by converting HTML tags into React elements.

### Example with JSX:

```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Example without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## Q: Superpowers of JSX.

A: It's give a superpower to write the logic and markup of component into a single file.

## Q: Role of type attribute in script tag? What options can I use there?

A: The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: Which language understand javascript ?

A: JS engine stands ECMAScript(TODO: here attach the link for reference).

## Q: What is React Functional Component ?

A: React `functional` component is a javascript `function` which return some peace of `JSX` code.
It's a React conventional way to start function name with `UpperCase`.

Below both examples are the same:

```
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}

const TitleComponent = () => (
    return <h6>Laying the foundation
)
```

## Q: What is Component Compositions ?

A: writing component inside one another is called as component compositions.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
### References:

- [Default vs Named Exports](https://dev.to/shacodes/default-vs-named-exports-19hj#:~:text=When%20you%20write%20a%20default,name%20you%20want%20after%20import.&text=and%20it%20would%20still%20provide,to%20match%20on%20both%20sides.)
```

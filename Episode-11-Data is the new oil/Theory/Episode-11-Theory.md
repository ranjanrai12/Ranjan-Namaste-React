## Namaste React Course by Akshay Saini

# Chapter 11 - Data is the new oil

## What is prop drilling ?

A: Prop drilling is the process of passing down data or state through `multiple layers of a component hierarchy`.

## What is lifting state up ?

A: `lifting state up` is a concept used to manage and share state `between components` in a `parent-child relationship`. It involves moving the state from a `child component to a closest common parent` component so that multiple child components can access and update that shared state.

```
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent count={count} incrementCount={incrementCount} />
    </div>
  );
}

export default ParentComponent;

// ChildComponent.js
import React from 'react';

function ChildComponent({ count, incrementCount }) {
  return (
    <div>
      <p>Child Component</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default ChildComponent;

```

In above example, the count state is defined in `ParentComponent` and passed down to `ChildComponent` as a prop along with the incrementCount function. ChildComponent can access and update the count state by invoking incrementCount, and the state is shared between the two components.

## What are `Context Provider` and `Context Consumer` ?

A: `Context` is an feature that allows you to `share data (state)` between components without having to pass it explicitly through `props` at every level of the component tree.

#### 1: Context Provider:

- The Context Provider is a component that provides the shared data to its child components.
- It is typically placed at a higher level in the component tree to make the data available to multiple descendants.
- The Provider component accepts a value prop, which contains the data you want to share.
- All child components, nested within the Provider, can access this shared data through Context Consumer components.

Example:

```
import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={count}>
      <div>
        <h1>My App</h1>
        <ChildComponent />
      </div>
    </MyContext.Provider>
  );
}

```

#### 2: Context Consumer

- The Context Consumer is a component that allows other components to subscribe to and read the data provided by the Context Provider.
- It consumes the context data and renders its content based on that data.
- You can use the useContext hook or the Consumer component to access the context data.

Example of a Context Consumer using the `useContext` hook:

```
import React, { useContext } from 'react';

const MyContext = createContext();

function ChildComponent() {
  const count = useContext(MyContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
    </div>
  );
}

```

Example of a Context Consumer using the `Consumer component`: (Legacy way `Not Recommended`)

```
import React from 'react';

const MyContext = createContext();

function ChildComponent() {
  return (
    <MyContext.Consumer>
      {(count) => (
        <div>
          <h2>Child Component</h2>
          <p>Count: {count}</p>
        </div>
      )}
    </MyContext.Consumer>
  );
}

```

## If you don't pass a value to the provider does it takes the default value ?

A: Need to update.

## What is higher order component (HOC) ?

A: A `higher-order component` is a function that takes a component as an `argument` and returns a new component that `wraps` the `original component`. `HOCs` allow you to add additional functionality to a component `without modifying` the component's code.

#### Benifits of HOC are:

- Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
- Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.
- Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.

Example:

```
export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 rounded-lg m-2 bg-black text-white z-1">
          Promoted
        </label>
        <ResturantCard resData={props.resData} />
      </div>
    );
  };
};

--> import it(withPromotedLabel) whereever it's required in component, then pass component as argument to it.

const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

<RestaurantCardPromoted resData={resturant} />
```

## What is Controlled and UnControlled components ?

A:

#### Controlled component:

controlled components refer to components that have their state and behavior controlled by the parent component, A controlled functional component is a component that receives its current value and update callback via props.
Example:

```
const ControlledInput = ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <ControlledInput value={email} onChange={setEmail} placeholder="Email" />
      <ControlledInput
        value={password}
        onChange={setPassword}
        placeholder="Password"
      />
      <button>Submit</button>
    </form>
  );
};
```

In this example, the ControlledInput component receives its current value and an onChange callback via props. The LoginForm component maintains the state of email and password, and when the user types into the inputs, it calls the onChange callback and updates the state, which in turn updates the input values.

#### Uncontrolled Component:

Uncontrolled components refer to components that manage their own state internally
Example:

```
import React, { useRef } from "react";

const UncontrolledInput = ({ placeholder }) => {
  return <input defaultValue="" placeholder={placeholder} />;
};

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <UncontrolledInput ref={emailRef} placeholder="Email" />
      <UncontrolledInput ref={passwordRef} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};
```

#### points noted from Episode 11

- Data layer and UI layer --> data layer where all variable and state there and UI layer is powered by data layer

### References:

[Lifting state up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)

[Reference for Controlled and Uncontrolled Components](https://www.altogic.com/blog/difference-between-controlled-and-uncontrolled-component#:~:text=In%20React%2C%20controlled%20components%20refer,manage%20their%20own%20state%20internally)

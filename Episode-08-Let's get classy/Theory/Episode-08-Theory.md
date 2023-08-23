## Namaste React Course by Akshay Saini

# Chapter 08 - Finding the Path

## How do you create `Nested Routes` react-router-dom configuration?

A: We can create a `Nested Routes` inside a react router configuration as follows: first call createBrowserRouter for routing different pages and routing page will be render with `outlet component`.

```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```

## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.

A: `createHashRouter`: This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the `application URL`.

```
Note: Using hash URLs is not recommended.
```

For reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter`: Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

## Q: What is the order of life cycle method calls in `Class Based Components`?

A: Following is the order of lifecycle methods calls in `Class Based Components`:

1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Q: Why do we use `componentDidMount`?

A: `componentDidMount lifecycle` menthod is called during mounting phase, which is used to perform actions or operations after a component has been rendered and inserted into the `DOM`.

Here are some common case:

- `Fetching Data`: It's often used to initiate network requests to fetch data from an API or perform other `asynchronous operations`. Since data fetching can take some time, using `componentDidMount` ensures that the data is fetched after the component has been render.
- `Setting Up Subscriptions`: If you're working with third-party libraries or custom logic that requires `event listener`s or `subscriptions`, componentDidMount is a good place to set up and `initialize` those subscriptions.
- `Updating Third-Party Libraries`: Some third-party libraries may require you to perform certain actions after a component is rendered.
- `Modifying the DOM`: If you need to interact with the DOM directly (`which is generally avoided in React`), you can do so safely in componentDidMount.

## Q: Why do we use `componentWillUnmount`? Show with example.

A: The `componentWillUnmount` lifecycle method is used in React to perform cleanup operations before a component is unmounted and removed from the DOM. This method is particularly useful for avoiding memory leaks and maintaining the application's performance.
Example:

```
import React, { Component } from 'react';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.timerInterval = null;
  }

  componentDidMount() {
    // Start a timer when the component is mounted
    this.timerInterval = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the timer before the component is unmounted
    clearInterval(this.timerInterval);
  }

  render() {
    return (
      <div>
        <p>Time elapsed: {this.state.time} seconds</p>
      </div>
    );
  }
}

export default TimerComponent;

```

In the above example in Timer Component `timer` has been set inside the componentDidMount phase and this timer updating the component state in every second. This timer need to be clean once the component is unmounted or remove from the DOM to prevent the `memory leaks`.
By clearing the interval in the `componentWillUnmount` method, you ensure that the timer does not continue running and consuming resources after the component is no longer needed.

## Q: (Research) Why do we use `super(props)` in constructor?

A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## Q: (Research) Why can't we have the `callback function` of `useEffect async`?

A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function(must be `synchronous`) that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.
It can lead in `Delay in State Update`, When using an `async` effect callback, any state updates performed within the async function will not immediately trigger a re-render. React batches state updates, and an async function might resolve its Promises after the batch has been processed. This can lead to unexpected delays in UI updates.

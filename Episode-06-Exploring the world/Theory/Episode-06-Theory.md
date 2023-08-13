## Namaste React Course by Akshay Saini

# Chapter 06 - Exploring the world

## Q: What is `Microservice`?

A: A `microservice` is a software architectural pattern in which an application is structured as a collection of `small`, `loosely coupled` (two or more microservices doesn't depend to each other), and `independently` deployable services. Each of these services is designed to perform a specific and well-defined function within the application. Microservices architecture is a departure from the traditional `monolithic architecture`, where the entire application is built as a single, `tightly coupled` (Two or more software components are closely connected to wach other).

- Key characteristics of microservices include:

  - `Decomposition`: In a microservices architecture, an application is broken down into a set of smaller services, each responsible for a specific business capability. These services can be developed, deployed, and maintained independently.

  - `Loose Coupling`: Microservices are designed to be independent of one another, communicating through well-defined APIs. This loose coupling allows changes or updates to one service without affecting others, promoting modularity and agility.

  - `Independently Deployable`: Each microservice can be developed, tested, and deployed separately. This enables continuous delivery and faster release cycles, as changes to one service don't require redeploying the entire application.

  - `Technology Diversity`: Different microservices can be implemented using different technologies, programming languages, and databases, as long as they can communicate through standardized interfaces.

  - `Scalability`: Microservices can be individually scaled based on demand. This means that only the services experiencing high traffic need to be scaled up, optimizing resource utilization.

  - `Resilience`: Failure in one microservice does not necessarily lead to the failure of the entire application. Services can be designed to handle failures gracefully and recover independently.

  - `Ease of Maintenance`: Since each microservice is relatively small and focused, it's easier to maintain and update them compared to a monolithic application.

  - `Isolation`: Microservices can provide better isolation and security by limiting the exposure of sensitive data and functionality to only the relevant services.

## Q: What is `Monolith architecture` ?

A: `Monolithic` architecture is a traditional software design pattern in which an `entire application` is built as a single, self-contained unit. In this approach, all components, modules, and functionalities of the application are `tightly integrated` into a `single` codebase, often within a single executable or deployment package.

## Q: What is the difference between `Monolith` and `Microservice`?

A: `Monolithic` and `microservices` architectures are two distinct approaches to designing and structuring software applications. Here are the key differences between the two:

- `Architecture Approach`:

  - `Monolithic`: In a monolithic architecture, the entire application is built as a single, cohesive unit. All components, modules, and features are tightly integrated within the same codebase.
  - `Microservices`: In a microservices architecture, an application is divided into smaller chunk, loosely coupled services that communicate with each other through well-defined APIs.

- `Size and Complexity`:

  - `Monolithic`: Monoliths can become large and complex as an application grows. Adding new features or making changes can affect the entire application.
  - `Microservices`: Microservices encourage breaking down an application into smaller, manageable components. Each microservice focuses on a specific functionality, making it easier to develop and maintain.

- `Deployment`:

  - `Monolithic`: The entire application is deployed as a single unit. Changes to any part of the application often require redeploying the entire monolith.
  - `Microservices`: Microservices can be deployed independently. This allows for faster releases and the ability to scale individual services based on demand.

- `Scaling`:

  - `Monolithic`: Scaling a monolithic application might require scaling the entire application, even if only specific parts are experiencing high load.
  - `Microservices`: Microservices can be individually scaled based on demand, optimizing resource utilization.

- `Technology Diversity`:
  - `Monolithic`: In a monolith, components typically use the same technology stack since they're part of the same codebase.
  - `Microservices`: Different microservices can use different technologies, allowing teams to choose the best tools for each service's requirements.
- `Flexibility and Agility`:

  - `Monolithic`: Adding new features or making changes can be complex and slow due to the tightly coupled nature of the components.
  - `Microservices`: Microservices promote agility, allowing teams to work independently on different services and release updates more frequently.

- `Resilience and Failure Isolation`:
  - `Monolithic`: A failure in one part of the monolith can potentially bring down the entire application.
  - `Microservices`: Failures in one microservice generally do not impact other services. Microservices can be designed to handle failures gracefully.
- `Inter-Service Communicatio`:
  - `Monolithic`: Components within a monolith can communicate directly with each other, often using function calls or shared memory.
  - `Microservices`: Microservices communicate through well-defined APIs, often over a network.
- `Maintenance and Updates`:
  - `Monolithic`: Updates and changes can be riskier due to the tightly coupled nature of the components.
  - `Microservices`: Updates to individual microservices can be done more easily without affecting the entire application.

## Q: Why do we need a `useEffect Hook`?

A: `useEffect` Hook is javascript function provided by `react`. If something needs to be done `after component render` in that case useEffect is required.

Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects, and that can fix by useEffect. useEffect accepts two arguments, a callback function and a dependency array. The second argument is optional, According to the `React docs`, you must include all values from the component scope that change their values between re-renders.

```
useEffect(() => {}, [])
```

The `() => {}` is callback function and `[]` is called a empty dependency array.
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.

```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```

If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```

## Q: What is `Optional Chaining`?

A: `Optional chaining` is a feature in programming languages that allows you to safely access `properties` or `methods` of an `object`, even if some intermediate properties are `null` or `undefined`. It helps prevent runtime errors that might occur when trying to access properties on nested objects without first checking if they exist.

```
const person = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Exampletown"
  }
};

// Without optional chaining
const city = person.address ? person.address.city : "Unknown";

// With optional chaining
const cityWithOptionalChaining = person.address?.city || "Unknown";

```

In this example, `person.address?.city` uses optional chaining. If `person.address` is `null` or `undefined`, the expression evaluates to `undefined` without throwing an `error`. If `person.address` is defined but city is not, the expression also evaluates to `undefined`. The || "Unknown" part provides a `default` value in case both `person.address` and city are missing.

## Q: What is `Shimmer UI`?

A: `Shimmer UI`, also known as skeleton screens or skeleton UI, is a design pattern used in user interfaces to provide a visual indication of content loading or data fetching. It involves displaying a simplified and placeholder representation of the expected content before the actual data is available.`Shimmer UI` is a great way for loading the applications. Instead of showing a loading circle we can design a `shimmer UI` for our application that is good for user experience.

## Q: What is the difference between `JS expression and JS statement`?

A: `Expression`: Expression is a piece of code that produces a value.It can be as simple as a single value or a combination of values, operators, and functions that result in a value.
Ex:

- 5 + 3 (returns the value 8)
- variableName (returns the value stored in variableName)
- let name = getName() // return value

`Statement`: A statement is a complete line or block of code that performs an action or a set of actions.Statements do not produce a value themselves
Ex:

- let x = 10; (assigns the value 10 to the variable x)
- if (condition) { /_ code block _/ } (executes the code block if the condition is true)

## Q: What is `Conditional Rendering`? explain with a code example.

A: In React, conditional rendering is the process of displaying different content based on certain conditions.

```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```

## Q: What is `CORS`?

A: `CORS` stands for "Cross-Origin Resource Sharing." It is a security feature implemented in web browsers to control and manage interactions between different origins (i.e., websites or web applications) when making requests for resources like APIs, fonts, images, or scripts.
In simpler terms, CORS is a mechanism that allows servers to specify who is allowed to access their resources and how those resources can be accessed.

- CORS involves a set of `HTTP headers` that are exchanged between the client (browser) and the server to determine whether the request is allowed or not.

## Q: Q: What is `async` and `await`?

A: In React, conditional rendering is the process of displaying different content based on certain conditions

- `async` Keyword:
  The async keyword is used to define an asynchronous function. When you mark a function as async, it automatically returns a Promise, allowing you to work with asynchronous operations inside the function using the await keyword.

```
    async function fetchData() {
        // Asynchronous operations using await
    }

```

- `await` keyword:
  The `await` keyword is used within an `async function` to pause its execution until a Promise is resolved. It "waits" for the asynchronous operation to complete and then returns the resolved value of the Promise.

```
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

```

In this example, the `await` keyword is used to pause the execution of the function until the `fetch` operation completes, and then it pauses again until the `json()` method completes.

## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?

A: `.json` method returns a `promise`, so `await data.json()` is used to ensure that the code execution waits for the JSON data to be extracted from the data before moving on.

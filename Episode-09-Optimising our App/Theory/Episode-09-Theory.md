## Namaste React Course by Akshay Saini

# Chapter 09 - Otimising our App

## Q: When and why do we need `lazy()`?

A: lazy function is used to load parts of application on-demand to reduce the initial load time.
The lazy() function is often used in combination with the Suspense component to handle loading and rendering of dynamically imported components

`Key features`:

- `Reducing Initial Load Time`: When application grows, the JavaScript bundle can become `large`, leading to slower initial page loads. By using `lazy()`, you can split your code into `smaller chunks` that are loaded only when needed.
- `Optimizing for Different Routes or Views:` In a complex application with multiple routes or views, not all components might be needed for every route. By code-splitting with lazy(), you can ensure that only the code necessary for a specific route is loaded when that route is accessed.
- `Improving User Experience`: Faster load times and quicker rendering of content can greatly improve the user experience. With code-splitting, your application feels more responsive and interactive, even on slower network connections.
- `Smaller Initial Bundles`: Smaller initial bundles mean faster downloads, which can be crucial for users on mobile devices or with limited bandwidth.

## Q: What is `suspense`?

A: `<Suspense>` lets you display a fallback until its children have finished loading. Suspense is a new feature that lets your component “wait” for something before it can render. Some of the use cases where it is used are data fetching and waiting for images, scripts, and other asynchronous work to load.

## Q: Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?

A: We got the error in lazy routing because of lazy return a `promise` which is `asynchronous` call, so to fix it we wrap the `lazy loaded` component inside the `<Suspense> component`

## Q: `Advantages and Disadvantages` of using this `code splitting pattern`?

A:

`Advantage`:

- `Faster Initial Loading`: Code splitting reduces the initial bundle size, allowing the application to load faster
- `Improved Performance`: By loading only the necessary parts of the application when they're needed
- `Better User Experience`: Users are able to interact with the application more quickly since they don't have to wait for the entire bundle to download before they can start using it.
- `Optimized Caching`: Smaller chunks of code are more likely to be cached by the browser, which can lead to improved subsequent page loads and user experiences.
- `Reduced Memory Consumption`: Splitting code into smaller chunks can reduce the memory consumption of the application,

`Disadvantage`:

- `Complexity`: Implementing code splitting using dynamic imports and lazy loading can introduce complexity to your codebase. Managing different chunks, handling dependencies, and ensuring the proper loading sequence can be challenging.
- `Network Overhead`: While code splitting reduces the initial bundle size, it can lead to more network requests as different chunks are fetched on-demand. This can increase network overhead and potentially slow down the application, especially on slower connections.
- `Loading Indicators`: When components are loaded lazily, there might be instances where users see loading indicators or placeholders while the required code is being fetched. This can impact the perceived user experience.
- `Debugging Complexity`: Debugging can become more complex when dealing with dynamically loaded chunks.

## Q: When `do we and why do we need suspense`?

A:

- `Displaying a fallback while content is loading`: You can wrap any part of your application with a Suspense boundary, React will display your `loading fallback` until all the code and data needed by the `children` has been loaded.
  Syantax:

  ```
  <Suspense fallback={<Loading />}>
    <Albums />
  </Suspense>
  ```

  `Note`: Suspense does not detect when data is fetched inside an Effect or event handler.

- `Revealing content together at once `: By default, the whole tree inside Suspense is treated as a single unit. For example, even if only one of these components suspends waiting for some data, all of them together will be replaced by the loading indicator:

  ```
  <Suspense fallback={<Loading />}>
    <Biography />
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
  ```

- `Revealing nested content as it loads `: Each Suspense boundary’s fallback will be filled in as the next level of content becomes available.

  ```
  <Suspense fallback={<BigSpinner />}> ----> 1
    <Biography />
    <Suspense fallback={<AlbumsGlimmer />}> ----> 2
      <Panel>
        <Albums />
      </Panel>
    </Suspense>
  </Suspense>
  ```

- `Showing stale content while fresh content is loading `: It can be helpful to show stale result while data is searching for example based on input search we can show stale data to user for better user experience.

  ```
  <>
        <label>
          Search albums:
          <input value={query} onChange={e => setQuery(e.target.value)} />
        </label>
        <Suspense fallback={<h2>Loading...</h2>}>
          <SearchResults query={query} />
          // <SearchResults query={deferredQuery} />
        </Suspense>
      </>
  ```

For More Reference: https://react.dev/reference/react/Suspense

## Important Points to note:

- `single responsibilty principle`: a component or module should have a single responsibility, focusing on one specific aspect of functionality. This makes the code easier to understand, maintain, and modify, as changes to one aspect of the system are less likely to impact other parts.
- `modularty`: break down code in different component that is called modularity, so it's easy for resuable, maintainable and testable.
- `custom hooks`: when creating your own custom hooks the always start with `use` which is naming convetion

- `Different Names` for lazy loading routing is chunking, dynamic bundling, code splitting, ondemand loading, dynamic import, break down into smaller apps

- `lazy loading` with lazy named import from react , which takes callback function and it returns the promise.

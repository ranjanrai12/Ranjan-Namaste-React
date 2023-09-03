## Namaste React Course by Akshay Saini

# Chapter 10 - Jo dikhta hai, vo bikta hai

## How do we configure tailwind ?

A: Go through this docs: https://tailwindcss.com/docs/guides/parcel

## Q: In tailwind.config.js, what does all the keys mean(content, theme, extend, plugins)?

A:

- `content:` The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

Example:

```
module.exports = {
  content: [
    "./Episode-10-Jo dikhta hai, vo bikta hai/**/*.{html,js,ts,jsx,tsx}",
  ]
}
```

- `theme:` The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.It allows you to control the default styling, colors, typography, spacing, and more for your Tailwind CSS utility
  Sample example :

```
module.exports = {
  theme: {
    extend: {},
    colors: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      // ...
    },
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'],
      // ...
    },
    fontSize: {
      'sm': '14px',
      'md': '16px',
      'lg': '18px',
      // ...
    },
    // Other theme customizations...
  },
  // Other Tailwind CSS configuration options...
}

```

- `plugins:`The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.
  Example:

```
module.exports = {
  // Other Tailwind CSS configuration options...

  plugins: [
    // Example of using a third-party plugin
    require('tailwindcss-forms'),

    // Example of using a custom plugin
    {
      // Your custom plugin's configuration
      // This could include adding new utility classes or modifying existing ones.
    },
  ],
}

```

- `extend:` the `extend` key is used to `extend` or customize the default utility classes provided by Tailwind CSS. This feature allows you to add your own custom utility classes or modify existing ones to better suit your project's design and styling needs.

- `Extending Existing Utility Classes:`

```
module.exports = {
  extend: {
    spacing: {
      '72': '18rem',
    },
    colors: {
      'primary': '#3490dc',
    },
  },
  // Other Tailwind CSS configuration options...
}

```

- `Adding Custom Utility Classes: `

```
module.exports = {
  extend: {
    // Custom utility classes
    '.btn': {
      'padding': '1rem 2rem',
      'border': '1px solid #3490dc',
      'background-color': '#3490dc',
      'color': '#fff',
    },
  },
  // Other Tailwind CSS configuration options...
}

```

## Q: Why do we have .postcssrc ?

A: PostCSS is a JavaScript tool that transforms your CSS code into an abstract syntax tree (AST) and then provides an API (application programming interface) for analyzing and modifying it using JavaScript plugins.
The CSS framework `TailwindCSS` which is a `PostCSS` plugin.

### References:

- [styled components](https://styled-components.com/)
- [Get started with Tailwind CSS](https://tailwindcss.com/docs/installation)
  for more re: stlyes.compoent.com
- [postcss architecture](https://postcss.org/docs/postcss-architecture)

# Volt Design System

Looking for ready to use styles to apply to your site or product? This design system is a collection of different web elements for a common Volt style.

We create one (or more) CSS files you can drop in your project. Take a look at the examples of different elements and web components to apply the styles.
For some (just a few interactive) components you also need to add JS files we provide.

## How to start

We are looking for hosting a static website with all the components and files to download. In the meantime you can clone this repository and run the design system yourself.

Start the project by entering `npm run dev` into your console. This will start storybook on 6006. It should open a new window by default. If not, open (http://localhost:6006)[http://localhost:6006] in your browser. (You may have to reload the tab for the storybook to load - I assume it's a bug in the preview of the storybook + Vite plugin)

## Project Philosophy

### Goals

- The design system should support (and enforce) an accessible web page layout. So we are using semantic HTML whenever possible and only create custom elements whenever it's not possible to use semantic HTML. ARIA should only be necessary for custom elements. If you want to start a discussion, take a lookt at https://briefs.video/videos/what-is-aria-even-for/

### Technical Setup

- Our design system should be based on basic html, css and js - so it is unopinionated and can be used in any project that would like to use a different tech stack
- We are using storybook, because it is the most advanced design system framework at the point of starting this project, it includes several useful features (for example for testing) and has a lot of plugins. Also it supports simple HTML - many other design system frameworks are made just for specific frameworks or libraries like react, vue or angular
- We are using Vite because it is modern, way simpler than webpack and way faster - also it is currently the only es module build tool other than webpack 5 to be supported by storybook (see https://storybook.js.org/blog/storybook-for-vite/)
- We are using typescript only half way - we write code in js so the entry point for non tech-savvy people is still low. But we are using typescript for type checking (see https://www.typescriptlang.org/tsconfig#allowJs and https://www.typescriptlang.org/tsconfig#checkJs) as this improves code quality. Also if necessary we could use ts features and keep the door open to maybe switch easily to ts in the future
- We are using PostCSS. I was thinking about using Scss but wanted to keep it as simple as possible for new developers. So I opted for basic CSS plus PostCSS.

## Contribute

### Development Environment Setup

- We are using Prettier (https://prettier.io/) with default options

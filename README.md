# Setup

- Our design system should be based on basic html, css and js - so it is unopinionated and can be used in any project that would like to use a different tech stack
- We are using storybook, because it is the most advanced design system framework at the point of starting this project, it includes several useful features (for example for testing) and has a lot of plugins. Also it supports simple HTML - many other design system frameworks are made just for specific frameworks or libraries like react, vue or angular
- We are using Vite because it is modern, way simpler than webpack and way faster - also it is currently the only es module build tool other than webpack 5 to be supported by storybook (see https://storybook.js.org/blog/storybook-for-vite/)
- We are using typescript only half way - we write code in js so the entry point for non tech-savvy people is still low. But we are using typescript for type checking (see https://www.typescriptlang.org/tsconfig#allowJs and https://www.typescriptlang.org/tsconfig#checkJs) as this improves code quality. Also if necessary we could use ts features and keep the door open to maybe switch easily to ts in the future
- We are using PostCSS. I was thinking about using Scss but wanted to keep it as simple as possible for new developers. So I opted for basic CSS plus PostCSS.

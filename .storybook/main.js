module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storycap", "storybook-dark-mode"],
  core: {
    builder: "storybook-builder-vite",
  },
};

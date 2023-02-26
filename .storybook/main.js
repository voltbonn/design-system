module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storycap",
    "storybook-dark-mode",
    "@storybook/addon-postcss"
  ],
  core: {
    builder: "@storybook/builder-vite"
  },
  staticDirs: ['../public'],
  // staticDirs: [{ from: '../my-custom-assets/images', to: '/assets' }],
};

import { withScreenshot } from "storycap"
import darkTheme from './DarkTheme.js'
import lightTheme from './LightTheme.js'
import "../src/bundle.css";

export const decorators = [
  withScreenshot, // Registration the decorator is required
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Introduction", "Foundation", "*"],
    },
  },
  screenshot: {
    viewports: {
      // Big monitor (4k)
      // copy only for relevant stories
      // large: {
      //   width: 1920,
      //   height: 1080,
      //   deviceScaleFactor: 2,
      //   isMobile: false,
      //   hasTouch: false,
      //   isLandscape: true,
      // },
      // Basic laptop
      medium: {
        width: 1024,
        height: 768,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true,
      },
      // iPhone 8 (https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts)
      small: {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: false,
      },
    },
  },
  darkMode: {
    current: 'light', // Set the initial theme
    dark: darkTheme, // Override the default dark theme
    light: lightTheme // Override the default light theme
  },
  docs: {
    theme: lightTheme,
  },
}

import { create, themes } from '@storybook/theming'

export default create({
  ...themes.dark,

  base: 'dark',

  colorPrimary: '#502379',
  colorSecondary: '#FDC220',

  // UI
  appBg: '#502379',
  appContentBg: 'white',
  appBorderColor: '#ede8f1',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Ubuntu", sans-serif',
  fontCode: '"Ubuntu Mono", monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: '#502379',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#FDC220',
  barBg: 'white',

  // Form colors
  inputBg: '#502379',
  inputBorder: 'white',
  inputTextColor: 'white',
  inputBorderRadius: 0,

  brandTitle: 'Volt Design System',
  brandUrl: 'https://design.volt.link',
  brandImage: '/Volt_Logo_White.svg',
})

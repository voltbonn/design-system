import { create, themes } from '@storybook/theming'

export default create({
  ...themes.normal,

  base: 'light',

  colorPrimary: '#ede8f1',
  colorSecondary: '#FDC220',

  // UI
  appBg: '#ede8f1',
  appContentBg: 'white',
  appBorderColor: '#ede8f1',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Ubuntu", sans-serif',
  fontCode: '"Ubuntu Mono", monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: '#ede8f1',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: '#FDC220',
  barBg: 'white',

  // Form colors
  inputBg: '#ede8f1',
  inputBorder: 'black',
  inputTextColor: 'black',
  inputBorderRadius: 0,

  brandTitle: 'Volt Design System',
  brandUrl: 'https://design.volt.link',
  brandImage: '/Volt_Logo_Purple.svg',
})

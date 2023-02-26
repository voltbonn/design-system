import { create, themes } from '@storybook/theming'

export default create({
  ...themes.normal,

  base: 'light',

  colorPrimary: 'white',
  colorSecondary: '#FDC220',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Ubuntu", sans-serif',
  fontCode: '"Ubuntu Mono", monospace',

  // Text colors
  textColor: '#502379',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#502379',
  barSelectedColor: '#FDC220',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#502379',
  inputTextColor: '#502379',
  inputBorderRadius: 0,

  brandTitle: 'Volt Design System',
  brandUrl: 'https://design.volt.link',
  brandImage: '/Volt_Logo_Purple.svg',
})

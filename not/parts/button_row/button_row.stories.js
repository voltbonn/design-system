import { wrapDefault, wrapPurple } from '../../../src/utils/modes.js'
import button_row from './button_row.html?raw'

export default {
  title: 'Elements/Button Row'
}

export const WhiteTheme = () => wrapDefault(button_row)
export const PurpleTheme = () => wrapPurple(button_row)

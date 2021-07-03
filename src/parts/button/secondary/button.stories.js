import { wrapDefault, wrapPurple } from "../../../utils/modes";
import button from "./button.html?raw";

export default {
  title: "Elements/Button/Secondary",
};

export const WhiteTheme = () => wrapDefault(button);
export const PurpleTheme = () => wrapPurple(button);

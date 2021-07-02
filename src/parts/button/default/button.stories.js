import { wrapDefault, wrapPurple } from "../../../utils/modes";
import button from "./button.html?raw";

export default {
  title: "Elements/Button/Default",
};

export const Default = () => wrapDefault(button);
export const Purple = () => wrapPurple(button);

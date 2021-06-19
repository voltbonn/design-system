import button from "./button-default.html?raw";
import buttonPrimary from "./button-primary.html?raw";
// import "./button.css";

export default {
  title: "Example/Button2",
  argTypes: {
    label: { control: "text" },
  },
};

// const Template = ({ label, ...args }) => {
//   // You can either use a function to create DOM elements or use a plain html string!
//   // return `<div>${label}</div>`;
//   console.log("b", button);
//   return button;
// };

export const Default = () => button;
export const Primary = () => buttonPrimary;

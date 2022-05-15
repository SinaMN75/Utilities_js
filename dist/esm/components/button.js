import React, { memo } from "react";
export function Button({ children, borderColor, textButton, notification }) {
    return (React.createElement("div", { className: "button-component", style: { backgroundColor: "red" } },
        notification ? (React.createElement("span", { className: "notification" }, "3")) : null,
        React.createElement("button", { className: `button ${borderColor}` },
            children,
            textButton !== '' ? (React.createElement("h3", { className: "text-button" }, textButton)) : null)));
}
export default memo(Button);
//# sourceMappingURL=button.js.map
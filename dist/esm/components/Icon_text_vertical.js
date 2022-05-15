import React, { memo } from "react";
import { Theme } from "../core/constants";
export function IconTextVertical({ text, theme, children, className, fontSize, }) {
    let StyleTheme = "";
    if (theme === Theme.light) {
        StyleTheme = "IconTextVerticalLight";
    }
    else {
        StyleTheme = "IconTextVerticalDark";
    }
    let IsclassName;
    if (className !== undefined) {
        IsclassName = className;
    }
    else {
        IsclassName = "";
    }
    let Styles = {
        fontSize,
    };
    return (React.createElement("div", { style: Styles, className: `${IsclassName + " " + StyleTheme + " " + "IconTextVertical"}` },
        children,
        React.createElement("span", null, text)));
}
export default memo(IconTextVertical);
//# sourceMappingURL=Icon_text_vertical.js.map
/* eslint-disable no-useless-concat */
import React, { memo } from "react";
import { Theme } from "../core/constants";
export const IconTextVertical = ({ text, theme, children, className, fontSize, onClick }) => {
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
    return (React.createElement("div", { style: Styles, className: `${IsclassName + " " + StyleTheme + " " + "IconTextVertical"}`, onClick: onClick },
        children,
        React.createElement("span", null, text)));
};
export default memo(IconTextVertical);
//# sourceMappingURL=Icon_text_vertical.js.map
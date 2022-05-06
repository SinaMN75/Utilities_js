"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTextVertical = void 0;
/* eslint-disable no-useless-concat */
const react_1 = __importDefault(require("react"));
const constants_1 = require("../core/constants");
const IconTextVertical = ({ text, theme, children, className, fontSize, onClick }) => {
    let StyleTheme = "";
    if (theme === constants_1.Theme.light) {
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
    return (react_1.default.createElement("div", { style: Styles, className: `${IsclassName + " " + StyleTheme + " " + "IconTextVertical"}`, onClick: onClick },
        children,
        react_1.default.createElement("span", null, text)));
};
exports.IconTextVertical = IconTextVertical;
//# sourceMappingURL=Icon_text_vertical.js.map
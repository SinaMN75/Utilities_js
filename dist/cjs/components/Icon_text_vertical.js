"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTextVertical = void 0;
/* eslint-disable no-useless-concat */
const react_1 = __importStar(require("react"));
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
exports.default = (0, react_1.memo)(exports.IconTextVertical);
//# sourceMappingURL=Icon_text_vertical.js.map
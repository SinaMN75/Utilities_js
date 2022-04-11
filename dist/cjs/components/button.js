"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonMemo = exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const Button = (props) => {
    let _style = props.style || {};
    if (props.backgroundColor && _style)
        _style.backgroundColor = props.backgroundColor;
    return react_1.default.createElement("div", null,
        react_1.default.createElement("button", Object.assign({ onClick: props.onClick, style: _style }, props), props.children));
};
exports.Button = Button;
exports.Button.propTypes = {
    backgroundColor: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
};
exports.ButtonMemo = react_1.default.memo(exports.Button);
//# sourceMappingURL=button.js.map
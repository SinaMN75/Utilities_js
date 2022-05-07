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
exports.TabNavigation = void 0;
const react_1 = __importStar(require("react"));
function TabNavigation({ list, TextItem, ValueItem, border, className, onClickTab, }) {
    let IsclassName;
    if (className !== undefined) {
        IsclassName = className;
    }
    else {
        IsclassName = "";
    }
    let Styles = {
        border,
    };
    const handelActiveItem = (value, BackVal) => {
        const Activeelement = document.querySelectorAll(".tab-navigation .tabs-item.active");
        Activeelement.forEach((box) => {
            box.classList.remove("active");
        });
        const ClickedElement = document.querySelector(`.tab-navigation .${value}`);
        ClickedElement === null || ClickedElement === void 0 ? void 0 : ClickedElement.classList.add("active");
        onClickTab(BackVal);
    };
    return (react_1.default.createElement("div", { className: `${IsclassName + " " + "tab-navigation"}` },
        react_1.default.createElement("ul", { className: "tabs-parnet" }, list.map((item, index) => (react_1.default.createElement("li", { className: "tabs-item" +
                " " +
                `${"tab-item-" + item[`${ValueItem}`]}` +
                " " +
                `${index === 0 ? "active" : ""}`, onClick: () => {
                handelActiveItem("tab-item-" + item[`${ValueItem}`], item[`${ValueItem}`]);
            } }, item[`${TextItem}`]))))));
}
exports.TabNavigation = TabNavigation;
exports.default = (0, react_1.memo)(TabNavigation);
//# sourceMappingURL=tab_navigation.js.map
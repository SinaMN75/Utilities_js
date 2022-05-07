import React, { memo } from "react";
export function TabNavigation({ list, TextItem, ValueItem, border, className, onClickTab, }) {
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
    return (React.createElement("div", { className: `${IsclassName + " " + "tab-navigation"}` },
        React.createElement("ul", { className: "tabs-parnet" }, list.map((item, index) => (React.createElement("li", { className: "tabs-item" +
                " " +
                `${"tab-item-" + item[`${ValueItem}`]}` +
                " " +
                `${index === 0 ? "active" : ""}`, onClick: () => {
                handelActiveItem("tab-item-" + item[`${ValueItem}`], item[`${ValueItem}`]);
            } }, item[`${TextItem}`]))))));
}
export default memo(TabNavigation);
//# sourceMappingURL=tab_navigation.js.map
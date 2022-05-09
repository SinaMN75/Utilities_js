import React, { HTMLAttributes, memo, ReactElement } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
  list: any[];
  className?: string;
  onClickTab: (e:string | number) => void;
  border?: string;
  TextItem: string;
  ValueItem: string | number;
}

export function TabNavigation({
  list,
  TextItem,
  ValueItem,
  border,
  className,
  onClickTab,
}: Props): ReactElement {
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  let Styles = {
    border,
  };
  const handelActiveItem = (value: string , BackVal:string|number) => {
    const Activeelement = document.querySelectorAll(
      ".tab-navigation .tabs-item.active"
    );
    Activeelement.forEach((box) => {
      box.classList.remove("active");
    });
    const ClickedElement = document.querySelector(`.tab-navigation .${value}`);
    ClickedElement?.classList.add("active");
    onClickTab(BackVal)
  };
  return (
    <div className={`${IsclassName + " " + "tab-navigation"}`}>
      <ul className="tabs-parnet">
        {list.map((item, index) => (
          <li
            className={
              "tabs-item" +
              " " +
              `${"tab-item-" + item[`${ValueItem}`]}` +
              " " +
              `${index === 0 ? "active" : ""}`
            }
            onClick={() => {
              handelActiveItem("tab-item-" + item[`${ValueItem}`] , item[`${ValueItem}`] );
            }}
          >
            {item[`${TextItem}`]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TabNavigation);



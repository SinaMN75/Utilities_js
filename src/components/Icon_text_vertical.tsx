/* eslint-disable no-useless-concat */
import React, { ReactNode } from "react";
import { Theme } from "../core/constants";

interface IconTextVerticalProp {
  text: ReactNode;
  theme: Theme;
  children: ReactNode;
  className?: string;
  fontSize?: string;
  onClick?: () => void;
}

export const IconTextVertical: React.FC<IconTextVerticalProp> = ({
  text,
  theme,
  children,
  className,
  fontSize,
  onClick
}) => {
  let StyleTheme: string = "";
  if (theme === Theme.light) {
    StyleTheme = "IconTextVerticalLight";
  } else {
    StyleTheme = "IconTextVerticalDark";
  }
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  let Styles = {
    fontSize,
  };
  return (
    <div
      style={Styles}
      className={`${IsclassName + " " + StyleTheme + " " + "IconTextVertical"}`}
      onClick={onClick}
    >
      {children}
      <span>{text}</span>
    </div>
  );
};

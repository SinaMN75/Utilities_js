import React, { HTMLAttributes, memo, ReactElement, ReactNode } from "react";
import { Theme } from "../core/constants";
interface Props extends HTMLAttributes<HTMLDivElement> {
  text: ReactNode;
  theme: Theme;
  children: ReactNode;
  className?: string;
  fontSize?: string;
  onClick?: () => void;
}

export function IconTextVertical({ text,
  theme,
  children,
  className,
  fontSize, }: Props): ReactElement {
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
    >
      {children}
      <span>{text}</span>
    </div>
  );
}

export default memo(IconTextVertical);
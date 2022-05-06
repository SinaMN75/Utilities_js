import React, { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Theme } from "../core/constants";
interface Props extends HTMLAttributes<HTMLDivElement> {
    text: ReactNode;
    theme: Theme;
    children: ReactNode;
    className?: string;
    fontSize?: string;
    onClick?: () => void;
}
export declare function IconTextVertical({ text, theme, children, className, fontSize, }: Props): ReactElement;
declare const _default: React.MemoExoticComponent<typeof IconTextVertical>;
export default _default;

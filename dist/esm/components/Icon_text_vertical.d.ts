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
export declare const IconTextVertical: React.FC<IconTextVerticalProp>;
export {};

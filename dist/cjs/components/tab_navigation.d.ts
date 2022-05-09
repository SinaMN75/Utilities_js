import React, { HTMLAttributes, ReactElement } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
    list: any[];
    className?: string;
    onClickTab: (e: string | number) => void;
    border?: string;
    TextItem: string;
    ValueItem: string | number;
}
export declare function TabNavigation({ list, TextItem, ValueItem, border, className, onClickTab, }: Props): ReactElement;
declare const _default: React.MemoExoticComponent<typeof TabNavigation>;
export default _default;

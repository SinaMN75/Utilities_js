import React, { HTMLAttributes, ReactElement } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
    borderColor: "border-color-orange" | "border-color-green";
    textButton: string;
    notification: boolean;
}
export declare function Button({ children, borderColor, textButton, notification }: Props): ReactElement;
declare const _default: React.MemoExoticComponent<typeof Button>;
export default _default;

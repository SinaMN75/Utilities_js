import React , { HTMLAttributes, memo, ReactElement } from "react";

interface Props extends HTMLAttributes<HTMLDivElement>{
   borderColor: "border-color-orange" | "border-color-green";
   textButton: string;
   notification: boolean;
}

function Button({ children, borderColor, textButton, notification }: Props): ReactElement {
    return (  
        <div className="button-component" style={{backgroundColor: "red"}}>
            {notification === true ? (
                <span className="notification">3</span>
            ) : (null)}
            <button className={`button ${borderColor}`}>
                {children}
                {textButton !== '' ? (
                    <h3 className="text-button">
                        {textButton}
                    </h3>
                ) : (null)}
            </button>
        </div>
    );
}

export default memo(Button);
import React from 'react';
import PropTypes from "prop-types";

export const Button = (props: any) => {
    let _style: React.CSSProperties = props.style || {};

    if (props.backgroundColor && _style) _style.backgroundColor = props.backgroundColor;

    return <div>
        <button onClick={props.onClick}
                style={_style} {...props}
        >{props.children}</button>
    </div>;
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
};

export const ButtonMemo = React.memo(Button);
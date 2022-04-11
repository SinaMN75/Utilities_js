import React from 'react';
import PropTypes from "prop-types";
export const Button = (props) => {
    let _style = props.style || {};
    if (props.backgroundColor && _style)
        _style.backgroundColor = props.backgroundColor;
    return React.createElement("div", null,
        React.createElement("button", Object.assign({ onClick: props.onClick, style: _style }, props), props.children));
};
Button.propTypes = {
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
};
export const ButtonMemo = React.memo(Button);
//# sourceMappingURL=button.js.map
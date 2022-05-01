import React from 'react';
import PropTypes from "prop-types";
export declare const Button: {
    (props: any): JSX.Element;
    propTypes: {
        backgroundColor: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export declare const ButtonMemo: React.MemoExoticComponent<{
    (props: any): JSX.Element;
    propTypes: {
        backgroundColor: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
}>;

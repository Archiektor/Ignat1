import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

import sass from './customButton.module.sass';
import {ButtonType} from "../customPaint/customPaint";

type CustomButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    buttonType?: ButtonType,
    onClickFn?: () => void,
}

const CustomButton:React.FC<CustomButtonType> = ({buttonType, onClickFn, ...props}) => {
    console.log(onClickFn);
    // 5. Potentially bad practise ?
    let btnStyle = buttonType === undefined ? `${sass.btn}` : `${sass.btn} ${sass.btn_red}`;

    const onClickHandler = () => {
        onClickFn && onClickFn();
    }

    return (
        <button onClick={() => onClickHandler()} className={btnStyle} {...props}>{props.children}</button>
    )
}

export default CustomButton;
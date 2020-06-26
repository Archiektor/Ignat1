import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

import sass from './customButton.module.sass';
import {ButtonType} from "../customPaint/customPaint";

type CustomButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    buttonType?: ButtonType,
}

// console.log(sass);

const CustomButton:React.FC<CustomButtonType> = ({buttonType,...props}) => {
    let btnStyle = buttonType === "default" ? `${sass.btn}` : `${sass.btn} ${sass.btn_red}`;

    return (
        <button className={btnStyle} {...props}>{props.children}</button>
    )
}

export default CustomButton;
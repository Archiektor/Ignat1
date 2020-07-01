import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

import sass from './customButton.module.sass';
import {ButtonType} from "../customPaint/customPaint";

type CustomButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    buttonType?: ButtonType,
    onClickFn?: () => void,
    onLocalStorageSave? : (key: string, str: string) => void,
    onLocalStorageRestore?: (key: string) => void,
    keytostorage?: string,
    data?: string
}

const CustomButton: React.FC<CustomButtonType> = ({buttonType, onClickFn,onLocalStorageSave,onLocalStorageRestore, ...props}) => {
    let btnStyle = buttonType === undefined ? `${sass.btn}` : `${sass.btn} ${sass.btn_red}`;

    const onClickHandler = () => {
        onClickFn && onClickFn();
        onLocalStorageSave && onLocalStorageSave(props.keytostorage!, props.data!)
        onLocalStorageRestore && onLocalStorageRestore(props.keytostorage!)
    }

    return (
        <button onClick={() => onClickHandler()} className={btnStyle} {...props}>{props.children}</button>
    )
}

export default CustomButton;
import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from "react";

import css from "./userButton.module.css";

export type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    { onClickHandler?: (e: MouseEvent<HTMLButtonElement>) => void, error?: string };

const UserButton: React.FC<ButtonPropsType> = ({onClickHandler, error, ...props}) => {
    const btnStyle = error ? css.errorBtn : css.btn;
    return (
        <button onClick={onClickHandler} className={btnStyle} {...props}/>
    )
}

export default UserButton;
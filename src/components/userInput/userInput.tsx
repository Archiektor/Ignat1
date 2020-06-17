import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";

import css from "./userInput.module.css";

export type InputPropsType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { setText?: (text: string) => void, onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void, error?: string };

const UserInput: React.FC<InputPropsType> = ({onEnter, error, setText, ...props}) => {
    const onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText && setText(e.currentTarget.value);
    }
    let inputStyle = error ? css.inputErrror : css.input;
    return (
        <div className={css.wrapper}>
            <label className={css.label}>{`Your message: `}</label>
            <input value={props.value} onChange={onChangehandler} onKeyPress={onEnter} className={inputStyle}
                   placeholder={"text"}
                   autoComplete={"off"} {...props} type="text"/>
            <span className={css.error}>{error}</span>
        </div>
    );
};

export default UserInput;
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";

import sass from './customInput.module.sass';


type CustomInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    getInputValue: (str: string) => void,
    title: string,
    onEnter: () => void,
    error?: string,
}

const CustomInput: React.FC<CustomInputType> = ({getInputValue, title, onEnter, error, ...props}) => {
    const errorInputStyle = error ? `${sass.input} ${sass.input_error}` : `${sass.input}`
    const errorSpanStyle = error ? `${sass.span}` : ``

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getInputValue(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            //here default function
            onEnter()
        }
    }


    return (
        <div className={sass.wrapper}>
            <input value={title} onKeyPress={(e) => onKeyPressHandler(e)} onChange={(e) => onChangeHandler(e)}
                   placeholder={"text"} autoComplete={"off"} className={errorInputStyle} type="text" {...props}/>
            {error && <span className={errorSpanStyle}>{error}</span>}
        </div>

    )
}

export default CustomInput;
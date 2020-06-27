import React, {useState} from "react";

import sass from './customSpan.module.sass';
import CustomInput from "../customInput/customInput";

import {StateType} from "../../junior/junior";

// 2 what  mean T ? random Type ?
export function saveState<T>(key: string, state: string) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString);
}

// 3 Refactor with random values ? bad or good ?
export function restoreState<T>(key: string, defaultState = {x: "", y: 0}) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) {
        defaultState = JSON.parse(stateAsString) as StateType;
    }
    alert(defaultState);
    return defaultState;
}

type CustomSpanType = {
    getInputValue: (str: string) => void,
    randomFunctionDoingSmthWhenEnterPressed: () => void,
    title?: string,
    setInputValue?: () => void,
}

const CustomSpan: React.FC<CustomSpanType> = ({title, getInputValue, randomFunctionDoingSmthWhenEnterPressed, ...props}) => {
    const [clicked, setClicked] = useState<boolean>(false);

    const onClickHandler = () => {
        setClicked(!clicked);
    }

    let spanEditableStyle = clicked ? `${sass.span_off}` : `${sass.span}`

    // 1. how we should handle title insert in custom input ? cause props.children not the best way( and it's hardcode
    return (
        <div className={sass.wrapper}>
            <span onClick={() => onClickHandler()} className={spanEditableStyle}>{props.children}</span>
            {clicked &&
            <CustomInput title={title!} getInputValue={getInputValue} onEnter={randomFunctionDoingSmthWhenEnterPressed}/>}
        </div>
    )
}

export default CustomSpan;
import React, {useState} from "react";
import CustomInput from "../customInput/customInput";

import sass from './customSpan.module.sass';

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString);
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) {
        defaultState = JSON.parse(stateAsString) as T;
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
    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const activateViewMode = () => {
        setEditMode(false);
    }
    // 1. we shold pass title to span throw value(useState from junior) or throw props.children ?
    return (
        editMode ? <CustomInput title={title} getInputValue={getInputValue} autoFocus={true} onBlur={activateViewMode}
                                onEnter={randomFunctionDoingSmthWhenEnterPressed} error={title}/> :
            <span className={sass.span} onDoubleClick={activateEditMode} {...props}>{title}</span>

    )
}

export default CustomSpan;
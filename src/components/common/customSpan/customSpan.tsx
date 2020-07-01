import React, {useState} from "react";
import CustomInput from "../customInput/customInput";

import sass from './customSpan.module.sass';

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
    return (
        editMode ? <CustomInput title={title} getInputValue={getInputValue} autoFocus={true} onBlur={activateViewMode}
                                onEnter={randomFunctionDoingSmthWhenEnterPressed} error={title}/> :
            <span className={sass.span} onDoubleClick={activateEditMode} {...props}>{title}</span>

    )
}

export default CustomSpan;
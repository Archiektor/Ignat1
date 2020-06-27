import React, {useState} from "react";

import sass from './customPaint.module.sass';
import CustomInput from "../customInput/customInput";
import CustomButton from "../customButton/customButton";
import CustomCheckBox from "../customCheckbox/customCheckbox";
import CustomSpan from "../customSpan/customSpan";

export type ButtonType = undefined |"red"

const CustomPaint = () => {
    const [title, setTitle] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);

    const getInputValue = (str: string) => {
        setTitle(str);
        console.log("title: ", title);
    }

    const getCheckedValue = (check: boolean) => {
        setChecked(check);
        console.log(checked)
    }

    const randomFunctionDoingSmthWhenEnterPressed = () => {
        console.log("Enter has been hitted in customInput");
    }

    return (
        <div className={sass.wrapper}>
            <CustomInput error={""} onEnter={randomFunctionDoingSmthWhenEnterPressed} getInputValue={getInputValue} title={title}/>
            <CustomButton>Push Me</CustomButton>
            <CustomCheckBox getCheckedValue={getCheckedValue} checked={checked}/>
            <CustomSpan getInputValue={getInputValue} randomFunctionDoingSmthWhenEnterPressed={randomFunctionDoingSmthWhenEnterPressed}>WTF</CustomSpan>
        </div>
    )
}

export default CustomPaint;
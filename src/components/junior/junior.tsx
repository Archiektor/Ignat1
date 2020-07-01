import React, {useState} from "react";
import CustomSpan from "../common/customSpan/customSpan";
import {saveState, restoreState} from "../../assets/localStorage/localStorage"
import sass from './junior.module.sass';
import CustomButton from "../common/customButton/customButton";

const Junior = () => {
    const [value, setValue] = useState<string>("why so serious?");

    const getInputValue = (str: string) => {
        setValue(str);
        // console.log(value)
    }

    const randomFunctionDoingSmthWhenEnterPressed = () => {
        console.log("Enter hitted");
    }

    const userSaveState = (key: string, str: string) => {
        saveState(key, str);
    }

    const userRestoreState = (key: string) => {
        restoreState(key, "default")
    }

    return (
        <div className={sass.wrapper}>
            <h2>Editable Span Usage</h2>
            <CustomSpan title={value} getInputValue={getInputValue}
                        randomFunctionDoingSmthWhenEnterPressed={randomFunctionDoingSmthWhenEnterPressed}>{value}</CustomSpan>
            <CustomButton onLocalStorageSave={userSaveState} keytostorage={'user'} data={value}>save</CustomButton>
            <CustomButton onLocalStorageRestore={userRestoreState} keytostorage={'user'}>restore</CustomButton>
        </div>
    )
}

export default Junior;
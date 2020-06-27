import React, {useState} from "react";
import CustomSpan from "../common/customSpan/customSpan";
import {saveState, restoreState} from "../common/customSpan/customSpan";
import sass from './junior.module.sass';
import CustomButton from "../common/customButton/customButton";

export type StateType = {
    x: string
    y: number
}


/*saveState<StateType>("test", {x: "A", y: 1});

const state: StateType = restoreState<StateType>("test", {x: "", y: 0});
console.log(state);*/

const Junior = () => {
    const [state, setState] = useState<string>("");

    const getInputValue = (str: string) => {
        // console.log(state);
        setState(str);
    }

    const randomFunctionDoingSmthWhenEnterPressed = () => {
        console.log("Enter hitted");
    }

    const userSaveState = () => {
        saveState("user", state);
        setState("");
    }

    /*    const setInputValue = () => {
            setState("");
        }*/

    return (
        <div className={sass.wrapper}>
            <h2>Editable Span Usage</h2>
            <CustomSpan title={state} getInputValue={getInputValue}
                        randomFunctionDoingSmthWhenEnterPressed={randomFunctionDoingSmthWhenEnterPressed}>image?</CustomSpan>
            {/*4. should we rewrite saveState with user key?*/}
            <CustomButton onClickFn={() => userSaveState()}>save</CustomButton>
            <CustomButton onClickFn={() => restoreState("user")}>restore</CustomButton>
        </div>
    )
}

export default Junior;
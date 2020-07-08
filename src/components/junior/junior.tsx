import React, {useReducer, useState} from "react";
import CustomSpan from "../common/customSpan/customSpan";
import {restoreState, saveState} from "../../assets/localStorage/localStorage"
import sass from './junior.module.sass';
import CustomButton from "../common/customButton/customButton";
import {CustomSelect, DataItemType} from "../common/customSelect/customSelect";
import {v1} from "uuid";
import {CustomRadio} from "../common/customRadio/customRadio";

const FIRST = "FIRST";
const SECOND = "SECOND";

const SET_CHECKED = "SET_CHECKED";
const UNCHECK_ALL = "UNCHECK_ALL";

export type DataType = {
    defaultSelectText: string,
    value: string,
    list: Array<DataItemType>,
}
type setValueTextACType = {
    type: typeof FIRST,
    text: string,
}
type SecondACType = {
    type: typeof SECOND,
    //id: string
}
export type ReducerActionType = setValueTextACType | SecondACType;

export const setValueText = (text: string): setValueTextACType => {
    return {
        type: FIRST,
        text: text,
    }
}

export type OptionItemType = {
    value: string,
    key: string,
    checked: boolean,
}

export type RadioDataType = {
    name: string,
    value: string,
    options: Array<OptionItemType>,
}
type setCheckedACType = {
    type: typeof SET_CHECKED,
    key: string,
    checked: boolean,
}
type uncheckAllACType = {
    type: typeof UNCHECK_ALL,
}
export type Reducer2ActionType = setCheckedACType | uncheckAllACType;

export const setCheckedAC = (key: string, checked: boolean): setCheckedACType => {
    return {
        type: SET_CHECKED,
        key: key,
        checked: checked,
    }
}
export const uncheckAllAC = (): uncheckAllACType => {
    return {
        type: UNCHECK_ALL,
    }
}


const Junior = () => {
    const initialState: DataType = {
        defaultSelectText: "please select an option",
        value: "",
        list: [
            {value: 'please select an option', key: v1()},
            {value: 'volvo', key: v1()},
            {value: 'subaru', key: v1()},
            {value: 'kia', key: v1()},
            {value: 'toyota', key: v1()},
        ]
    }
    const initialState2: RadioDataType = {
        name: "radioName",
        value: "",
        options: [
            {value: "option 1", key: v1(), checked: false},
            {value: "option 2", key: v1(), checked: false},
            {value: "option 3", key: v1(), checked: false},
            {value: "option 4", key: v1(), checked: false},
        ]
    }

    const reducer = (state: DataType, action: ReducerActionType): DataType => {
        switch (action.type) {
            case FIRST:
                return {...state, value: action.text};
            case SECOND:
                return state
            default:
                throw new Error();
        }
    }
    const reducer2 = (state: RadioDataType, action: Reducer2ActionType): RadioDataType => {
        switch (action.type) {
            case SET_CHECKED: {
                return {
                    ...state, options: [...state.options.map(opt => {
                        if (opt.key === action.key) {
                            return {...opt, checked: action.checked}
                        }
                        return {...opt, checked: false};
                    })]
                };
            }
            case UNCHECK_ALL : {
                return {
                    ...state, options: [...state.options.map(opt => ({...opt, checked: false}))]
                }
            }
            default:
                throw new Error();
        }
    }

    const [value, setValue] = useState<string>("why so serious?");
    const [state, dispatch] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer2, initialState2);

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
        <React.Fragment>
            <div className={sass.wrapper}>
                <h2>Editable Span Usage</h2>
                <CustomSpan title={value} getInputValue={getInputValue}
                            randomFunctionDoingSmthWhenEnterPressed={randomFunctionDoingSmthWhenEnterPressed}>{value}</CustomSpan>
                <CustomButton onLocalStorageSave={userSaveState} keytostorage={'user'} data={value}>save</CustomButton>
                <CustomButton onLocalStorageRestore={userRestoreState} keytostorage={'user'}>restore</CustomButton>
            </div>
            <div className={sass.wrapper}>
                <h2>Custom Select Usage</h2>
                <CustomSelect data={state} onChange={dispatch}/>
            </div>
            <div className={sass.wrapper}>
                <h2>Custom Radio Usage</h2>
                <CustomRadio data={state2} onChange={dispatch2}/>
            </div>
        </React.Fragment>
    )
}

export default Junior;
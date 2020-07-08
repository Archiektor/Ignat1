import React, {ChangeEvent} from "react";

import s from './customRadio.module.sass';

export const SET_CHECKED = "SET_CHECKED";
export const UNCHECK_ALL = "UNCHECK_ALL";

export type RadioDataType = {
    name: string,
    value: string,
    options: Array<OptionItemType>,
}
export type OptionItemType = {
    value: string,
    key: string,
    checked: boolean,
}

export type setCheckedACType = {
    type: typeof SET_CHECKED,
    key: string,
    checked: boolean,
}
export type uncheckAllACType = {
    type: typeof UNCHECK_ALL,
}

export type Reducer2ActionType = setCheckedACType | uncheckAllACType;

type CustomRadioType = {
    data: RadioDataType,
    onChange: (action: Reducer2ActionType) => void,
    uncheckAllAC?: () => uncheckAllACType,
    setCheckedAC?: (key: string, checked: boolean) => setCheckedACType,
}

export const CustomRadio: React.FC<CustomRadioType> = ({data, onChange, uncheckAllAC, setCheckedAC}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, key: string) => {
        onChange(setCheckedAC!(key, e.currentTarget.checked));
    }

    return (
        <div className={s.wrapper}>
            {data.options.map(option => <label className={s.label} key={option.key}>
                <span
                    className={option.checked ? `${s.label__custom} ${s.label__custom_checked}` : `${s.label__custom}`}/>
                <input className={s.label__input}
                       type="radio"
                       name={data.name}
                       value={option.value}
                       checked={option.checked}
                       onBlur={() => onChange(uncheckAllAC!())}
                       onChange={(e) => onChangeHandler(e, option.key)}/>
                {`${option.value.charAt(0).toUpperCase()}${option.value.slice(1)}`}
            </label>)}
        </div>
    )
}
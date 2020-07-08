import React, {ChangeEvent} from "react";
import {RadioDataType, Reducer2ActionType, setCheckedAC, uncheckAllAC} from "../../junior/junior";

import s from './customRadio.module.sass';

type CustomRadioType = {
    data: RadioDataType,
    onChange: (action: Reducer2ActionType) => void,
}

export const CustomRadio: React.FC<CustomRadioType> = ({data, onChange}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, key: string) => {
        onChange(setCheckedAC(key, e.currentTarget.checked));
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
                       onBlur={() => onChange(uncheckAllAC())}
                       onChange={(e) => onChangeHandler(e, option.key)}/>
                {`${option.value.charAt(0).toUpperCase()}${option.value.slice(1)}`}
            </label>)}
        </div>
    )
}
import React, {ChangeEvent} from "react";

import s from './customSelect.module.sass';

export const FIRST = "FIRST";
export type DataType = {
    defaultSelectText: string,
    value: string,
    list: Array<DataItemType>,
}
export type setValueTextACType = {
    type: typeof FIRST,
    text: string,
}
export type ReducerActionType = setValueTextACType;
export type DataItemType = {
    value: string,
    key: string,
}

type CustomSelectType = {
    data: DataType,
    onChange: (action: ReducerActionType) => void,
    setValueTextAC: (text: string) => setValueTextACType,
}

export const CustomSelect: React.FC<CustomSelectType> = ({data, onChange, setValueTextAC}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(setValueTextAC(e.currentTarget.value));
    }

    return (
        <div className={s.wrapper}>
            <label htmlFor="cars">Choose a car: </label>

            <select name="cars"
                    value={data.value ? data.value : data.defaultSelectText}
                    onChange={onChangeHandler}>
                {
                    data.list.map(listItem => {
                        const res = listItem.value === data.defaultSelectText
                        return <option className={res ? `${s.listItem} ${s.listItem_hidden}` : `${s.listItem}`}
                                       key={listItem.key}
                                       value={`${listItem.value}`}>{listItem.value}</option>
                    })
                }
            </select>
        </div>
    )
}


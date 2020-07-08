import React, {ChangeEvent} from "react";
import {DataType, ReducerActionType, setValueText} from "../../junior/junior";

import s from './customSelect.module.sass';

export type DataItemType = {
    value: string,
    key: string,
}

type CustomSelectType = {
    data: DataType,
    onChange: (action: ReducerActionType) => void,
}

export const CustomSelect: React.FC<CustomSelectType> = ({data, onChange}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(setValueText(e.currentTarget.value));
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


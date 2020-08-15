import React, {ChangeEvent} from 'react';

import s from './customSelect.module.scss';
import {ListItemOptionType} from '../../../redux/juniorAdvanced-reducer';

export const FIRST = 'FIRST';
export type DataType = {
    listOfOptions: Array<DataItemType> | Array<ListItemOptionType>,
    value: string,
}

export type DataItemType = {
    value: string,
    key: string,
}

type CustomSelectType = {
    data: DataType,
    onChange: (theme: string) => void,
}

export const CustomSelect: React.FC<CustomSelectType> = React.memo(({data, onChange}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.currentTarget.value);
    }

    return (
        <div className={s.wrapper}>
            <select name="themes"
                    value={data.value}
                    onChange={onChangeHandler}>
                {
                    data.listOfOptions.map((listItem, idx) => {
                        return <option className={idx === 0 ? `${s.listItem} ${s.listItem_hidden}` : `${s.listItem}`}
                                       key={listItem.key}
                                       value={`${listItem.value}`}>{listItem.value}</option>
                    })
                }
            </select>
        </div>
    )
})


import React, {ChangeEvent} from 'react';
import s from './customRange.module.scss';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {v1} from 'uuid';

type CustomRangeType = {
    onChange: (num: number) => void,
    value?: number,
    minValue?: number,
    maxValue?: number,
}

const CustomRange: React.FC<CustomRangeType> = React.memo(({onChange, value, minValue, maxValue}) => {
    let valueForRange = value;
    let minValueForRange = minValue;
    let maxValueForRange = maxValue;

    if (!valueForRange) {
        valueForRange = useSelector<AppRootStateType, number>(state => state.range.value);
        minValueForRange = useSelector<AppRootStateType, number>(state => state.range.minValue);
        maxValueForRange = useSelector<AppRootStateType, number>(state => state.range.maxValue);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
            onChange(Number(e.currentTarget.value));
    }

    const getDatalist = (min: number, max: number) => {
        let data = [];
        for (let i = 0; i <= max; i += 5) {
            let res = ((i % 25) === 0) ? {value: i, label: i} : {value: i, label: null}
            data.push(res);
        }
        return data;
    }

    return (
        <form className={s.slider__wrapper}>
            <label htmlFor="range-left"/>
            <datalist className={s.data} id="datamarks">
                {getDatalist(minValueForRange!, maxValueForRange!).map(o => {
                    return (
                        <option key={v1()} value={o.value} label={o.label !== null ? `${o.label}` : undefined}/>
                    )
                })}
            </datalist>
            <input onChange={e => onChangeHandler(e)} className={s.slider} type="range" id="left"
                   list="datamarks"
                   min={minValueForRange}
                   max={maxValueForRange} value={valueForRange}/>
            <div className={s.slider__value}>{valueForRange}</div>
        </form>
    )
})

export default CustomRange;
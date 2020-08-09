import React, {ChangeEvent} from 'react';
import s from './customDoubleRange.module.scss';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {v1} from 'uuid';

type CustomDoubleRangeType = {
    onChange: (num: number) => void,
    onSecondChange?: (num: number) => void,
}

const CustomDoubleRange: React.FC<CustomDoubleRangeType> = React.memo(({onChange, onSecondChange}) => {
        const getDatalist = (min: number, max: number) => {
            let data = [];
            for (let i = 0; i <= max; i += 5) {
                let res = ((i % 25) === 0) ? {value: i, label: i} : {value: i, label: null}
                data.push(res);
            }
            return data;
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            onChange(Number(e.currentTarget.value));
        }

        const onChangeHandlerForSecond = (e: ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            onSecondChange!(Number(e.currentTarget.value));
        }

        let value = useSelector<AppRootStateType, number>(state => state.range.value);
        let value2 = useSelector<AppRootStateType, number>(state => state.range.value2);
        let minValue = useSelector<AppRootStateType, number>(state => state.range.minValue);
        let maxValue = useSelector<AppRootStateType, number>(state => state.range.maxValue);


        let root = document.documentElement;
        const getProgressStyle = () => {
            const low = Math.round(100 * ((value - minValue) / (maxValue - minValue)));
            const high = Math.round(100 * ((value2 - minValue) / (maxValue - minValue)));
            return {
                low: low + '%',
                high: high + '%',
            };
        }

        //console.log(getProgressStyle());
        const {low, high} = getProgressStyle();
        root.style.setProperty('--low', low);
        root.style.setProperty('--high', high);

        return (
            <form className={s.double}>
                <datalist className={s.data} id="datamarks">
                    {getDatalist(minValue, maxValue).map(o => {
                        return (
                            <option key={v1()} value={o.value} label={o.label !== null ? `${o.label}` : undefined}/>
                        )
                    })}
                </datalist>
                <input onChange={e => onChangeHandler(e)} type="range" id="left"
                       list="datamarks"
                       min={minValue}
                       max={maxValue} value={value}/>
                <input onChange={e => onChangeHandlerForSecond(e)} className={s.slider} type="range"
                       id="right"
                       list="datamarks"
                       min={minValue}
                       max={maxValue} value={value2}/>
                <div className={s.slider__values}>
                    <div className={s.slider__value}>{value}</div>
                    <div className={s.slider__value2}>{value2}</div>
                </div>
            </form>
        )
    }
)

export default CustomDoubleRange;
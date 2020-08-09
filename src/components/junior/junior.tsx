import React, {useCallback, useReducer, useState} from 'react';
import CustomSpan from '../common/customSpan/customSpan';
import {restoreState, saveState} from '../../assets/localStorage/localStorage'
import sass from './junior.module.sass';
import CustomButton from '../common/customButton/customButton';
import {
    CustomSelect,
    DataType,
    FIRST,
    ReducerActionType,
    setValueTextACType
} from '../common/customSelect/customSelect';
import {
    CustomRadio,
    RadioDataType,
    Reducer2ActionType,
    SET_CHECKED,
    setCheckedACType,
    UNCHECK_ALL,
    uncheckAllACType
} from '../common/customRadio/customRadio';
import {initialState, initialState2, initialState3} from '../common/juniorStore/juniorStore';
import {hwReducer, sortArrayAC} from '../hwreducer/hwreducer';
import Time from '../time/Time';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {setLoadingAC} from '../../redux/junior-reducer';
import {Preloader} from '../common/customPreloader/preloader';
import CustomRange from '../common/customRange/customRange';
import {setSecondValueAC, setValueAC} from '../../redux/range-reducer';
import CustomDoubleRange from '../common/customDoubleRange/customDoubleRange';

const setValueTextAC = (text: string): setValueTextACType => {
    return {
        type: FIRST,
        text: text,
    }
}
const setCheckedAC = (key: string, checked: boolean): setCheckedACType => {
    return {
        type: SET_CHECKED,
        key: key,
        checked: checked,
    }
}
const uncheckAllAC = (): uncheckAllACType => {
    return {
        type: UNCHECK_ALL,
    }
}

const Junior = () => {
    const reducer = (state: DataType, action: ReducerActionType): DataType => {
        switch (action.type) {
            case FIRST:
                return {...state, value: action.text};
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

    const [value, setValue] = useState<string>('why so serious?');
    const [state, dispatch] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer2, initialState2);
    const [state3, dispatch3] = useReducer(hwReducer, initialState3);

    const getInputValue = (str: string) => {
        setValue(str);
    }

    const randomFunctionDoingSmthWhenEnterPressed = () => {
        console.log('Enter hitted');
    }

    const userSaveState = (key: string, str: string) => {
        saveState(key, str);
    }

    const userRestoreState = (key: string) => {
        restoreState(key, 'default')
    }

    const SortUp = () => {
        dispatch3(sortArrayAC('UP'))
    }

    const SortDown = () => {
        dispatch3(sortArrayAC('DOWN'))
    }

    const loading = useSelector<AppRootStateType, boolean>(state => state.junior.loading);
    const dispatchFromHook = useDispatch();

    const tooglePreloader = async () => {
        dispatchFromHook(setLoadingAC(true));
        await setTimeout(() => {
            dispatchFromHook(setLoadingAC(false));
        }, 3000);
    }

    const dispatchHook = useDispatch();

    const onRangeChange = useCallback((num: number) => {
        dispatchHook(setValueAC(num));
    }, [dispatchHook])

    const onSecondRangeChange = useCallback((num: number) => {
        dispatchHook(setSecondValueAC(num));
    }, [dispatchHook])


    return (
        <div>
            {loading && <Preloader/>}
            {!loading && <React.Fragment>
                <div className={sass.wrapper}>
                    <CustomButton onClick={tooglePreloader}>preloader</CustomButton>
                </div>
                <div className={sass.wrapper}>
                    <h4>CustomRange</h4>
                    <CustomRange onChange={onRangeChange}/>
                </div>
                <div className={sass.wrapper}>
                    <h4>Custom DoubleRange</h4>
                    <CustomDoubleRange onChange={onRangeChange} onSecondChange={onSecondRangeChange}/>
                </div>

                <div className={sass.wrapper}>
                    <h2>Editable Span Usage</h2>
                    <CustomSpan title={value} getInputValue={getInputValue}
                                randomFunctionDoingSmthWhenEnterPressed={randomFunctionDoingSmthWhenEnterPressed}>{value}</CustomSpan>
                    <CustomButton onLocalStorageSave={userSaveState} keytostorage={'user'}
                                  data={value}>save</CustomButton>
                    <CustomButton onLocalStorageRestore={userRestoreState} keytostorage={'user'}>restore</CustomButton>
                </div>
                <div className={sass.wrapper}>
                    <h2>Custom Select Usage</h2>
                    <CustomSelect data={state} onChange={dispatch} setValueTextAC={setValueTextAC}/>
                </div>
                <div className={sass.wrapper}>
                    <h2>Custom Radio Usage</h2>
                    <CustomRadio data={state2} onChange={dispatch2} setCheckedAC={setCheckedAC}
                                 uncheckAllAC={uncheckAllAC}/>
                </div>
                <div className={sass.wrapper}>
                    {state3.map(p => <div key={p.id}>{`${p.name} // ${p.age}`}</div>)}
                    <CustomButton onClick={SortUp}>Sort Up</CustomButton>
                    <CustomButton onClick={SortDown}>Sort Down</CustomButton>
                </div>
                <div className={sass.wrapper}>
                    <Time/>
                </div>
            </React.Fragment>}
        </div>
    )
}

export default Junior;
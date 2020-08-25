import React, {useCallback} from 'react';

import s from './juniorAdvanced.module.scss';
import {CustomSelect} from '../common/customSelect/customSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {ListItemOptionType, setThemeAC} from '../../redux/juniorAdvanced-reducer';
import CustomRequest from '../common/customRequest/customRequest';

const JuniorAdvanced = React.memo(() => {
    const list = useSelector<AppRootStateType, Array<ListItemOptionType>>(state => state.juniorAdvanced.listOfOptions);
    const value = useSelector<AppRootStateType, string>(state => state.juniorAdvanced.value);
    const data = {
        value: value,
        listOfOptions: list,
    }
    let wrapperStyle;
    const dispatch = useDispatch();

    const changeTheme = useCallback((theme: string) => {
        dispatch(setThemeAC(theme));
    }, [dispatch]);

    switch (value) {
        case 'white': {
            wrapperStyle = `${s.wrapper} ${s.wrapper_white}`;
            break;
        }
        case 'dark': {
            wrapperStyle = `${s.wrapper} ${s.wrapper_dark}`;
            break;
        }
        case 'green': {
            wrapperStyle = `${s.wrapper} ${s.wrapper_green}`;
            break;
        }
        default:
            wrapperStyle = `${s.wrapper} ${s.wrapper_white}`;
    }

    return (
       <div className={wrapperStyle}>
           <div className={s.container}>
               <h2>Junior Advanced</h2>
               <CustomSelect data={data} onChange={changeTheme}/>
               <CustomRequest/>
           </div>
       </div>
    )
})

export default JuniorAdvanced;
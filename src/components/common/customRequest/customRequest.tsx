import React, {useCallback, useState} from 'react';

import s from './customRequest.module.scss';
import CustomButton from '../customButton/customButton';
import CustomCheckBox from '../customCheckbox/customCheckbox';
import {requestApi} from '../../../api/request-api';

const CustomRequest: React.FC = React.memo(() => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [state, setState] = useState('default text');

    const getCheckedValue = useCallback((isChecked: boolean) => {
        setIsChecked(isChecked);
    }, []);

    const pushRequest = useCallback(() => {
        requestApi.addPost(isChecked)
            .then(res => setState(res.info))
            .catch(err => alert(err));
        setTimeout(() => setState('default text'), 5000);
    }, [isChecked])

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__textBlock}>{JSON.stringify(state)}</div>
            <div className={s.wrapper__btnBlock}>
                <CustomButton onClick={pushRequest}>click</CustomButton>
                <div className={s.wrapper__checkBlock}>
                    <CustomCheckBox getCheckedValue={getCheckedValue} checked={isChecked}/>
                </div>
            </div>
        </div>
    )
})

export default CustomRequest;
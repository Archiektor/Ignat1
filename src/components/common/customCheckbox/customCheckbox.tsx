import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

import sass from './customCheckbox.module.sass';

type CustomCheckboxType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    getCheckedValue: (check: boolean) => void,
    checked: boolean,
}

const CustomCheckBox: React.FC<CustomCheckboxType> = ({getCheckedValue, checked, ...props}) => {
    const onChangeHadler = (e: ChangeEvent<HTMLInputElement>) => {
        getCheckedValue(e.currentTarget.checked);
    }

    return (
        <span className={sass.wrapper}>
            <input checked={checked} onChange={(e) => onChangeHadler(e)} className={sass.checkbox}
                   type="checkbox" {...props}/>
        </span>
    )
}

export default CustomCheckBox;
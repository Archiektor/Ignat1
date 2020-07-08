import {v1} from "uuid";
import {RadioDataType} from "../customRadio/customRadio";
import {DataType} from "../customSelect/customSelect";

export const initialState: DataType = {
    defaultSelectText: "please select an option",
    value: "",
    list: [
        {value: 'please select an option', key: v1()},
        {value: 'volvo', key: v1()},
        {value: 'subaru', key: v1()},
        {value: 'kia', key: v1()},
        {value: 'toyota', key: v1()},
    ]
}
export const initialState2: RadioDataType = {
    name: "radioName",
    value: "",
    options: [
        {value: "option 1", key: v1(), checked: false},
        {value: "option 2", key: v1(), checked: false},
        {value: "option 3", key: v1(), checked: false},
        {value: "option 4", key: v1(), checked: false},
    ]
}
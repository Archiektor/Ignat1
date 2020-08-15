import {v1} from 'uuid';
import {RadioDataType} from '../customRadio/customRadio';
import {PartOfStateType} from '../../hwreducer/hwreducer';

/*export const initialState: DataType = {
    defaultSelectText: "please select an option",
    value: "",
    listOfOptions: [
        {value: 'please select an option', key: v1()},
        {value: 'volvo', key: v1()},
        {value: 'subaru', key: v1()},
        {value: 'kia', key: v1()},
        {value: 'toyota', key: v1()},
    ]
}*/

export const initialState2: RadioDataType = {
    name: 'radioName',
    value: '',
    options: [
        {value: 'option 1', key: v1(), checked: false},
        {value: 'option 2', key: v1(), checked: false},
        {value: 'option 3', key: v1(), checked: false},
        {value: 'option 4', key: v1(), checked: false},
    ]
}

export const initialState3: PartOfStateType = [
    {id: v1(), name: 'Nikki', age: 28},
    {id: v1(), name: 'Anna', age: 25},
    {id: v1(), name: 'Ignat', age: 22},
    {id: v1(), name: 'Saitama', age: 19},
]
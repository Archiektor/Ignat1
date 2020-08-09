enum Types {
    SET_VALUE = 'SET_VALUE',
    SET_SECOND_VALUE = 'SET_SECOND_VALUE',
    SET_MIN_VALUE = 'SET_MIN_VALUE',
    SET_MAX_VALUE = 'SET_MAX_VALUE',
}

type SetValueType = { type: typeof Types.SET_VALUE, value: number}
type SetSecondValueType = { type: typeof Types.SET_SECOND_VALUE, value2: number}
export const setValueAC = (value: number): SetValueType => ({type: Types.SET_VALUE, value});
export const setSecondValueAC = (value2: number): SetSecondValueType => ({type: Types.SET_SECOND_VALUE, value2});
type ActionsType = SetValueType | SetSecondValueType;

let initialState = {
    value: 21,
    value2: 65,
    minValue: 0,
    maxValue: 100,
}

type PartOfStateType = typeof initialState;

export const rangeReducer = (partOfState: PartOfStateType = initialState, action: ActionsType): PartOfStateType => {
    switch (action.type) {
        case Types.SET_VALUE: {
            return {...partOfState, value: action.value}
        }
        case Types.SET_SECOND_VALUE: {
            return {...partOfState, value2: action.value2}
        }
        default :
            return partOfState;
    }
};

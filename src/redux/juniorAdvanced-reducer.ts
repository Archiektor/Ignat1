import {v1} from 'uuid';

enum Types {
    SET_THEME = 'hwignat/juniorAdvanced/SET_THEME',
}

type SetThemeType = { type: typeof Types.SET_THEME, theme: string }
export const setThemeAC = (theme: string): SetThemeType => ({type: Types.SET_THEME, theme});

export type ListItemOptionType = { value: string, key: string }

let initialState = {
    value: 'choose theme',
    listOfOptions: [
        {value: 'choose theme', key: v1()},
        {value: 'white', key: v1()},
        {value: 'dark', key: v1()},
        {value: 'green', key: v1()},
    ] as Array<ListItemOptionType>
}

type PartOfStateType = typeof initialState;
type ActionsType = SetThemeType;

export const juniorAdvancedReducer = (partOfState = initialState, action: ActionsType): PartOfStateType => {
    switch (action.type) {
        case Types.SET_THEME: {
            return {...partOfState, value: action.theme}
        }
        default :
            return partOfState;
    }
};
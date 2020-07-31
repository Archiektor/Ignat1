enum Types {
    SET_LOADING = 'SET_LOADING',
}

type SetLoadingType = { type: typeof Types.SET_LOADING, loading: boolean }
export const setLoadingAC = (loading: boolean): SetLoadingType => ({type: Types.SET_LOADING, loading});
type ActionsType = SetLoadingType;

export type initialJuniorStateType = {
    loading: boolean,
}

type PartOfStateType = initialJuniorStateType;

let initialState: PartOfStateType = {
    loading: false,
}

export const juniorReducer = (partOfState: PartOfStateType = initialState, action: ActionsType): PartOfStateType => {
    switch (action.type) {
        case Types.SET_LOADING: {
            return {...partOfState, loading: action.loading}
        }
        default :
            return partOfState;
    }
};
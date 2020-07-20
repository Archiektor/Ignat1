enum Types {
    SORT = 'SORT',
    CHECK = 'CHECK',
}

type People = { id: string, name: string, age: number };
export type PartOfStateType = Array<People>;
type ActionsType = { type: string, payload: any };

export const sortArrayAC = (payload: any) => ({type: Types.SORT, payload});
export const checkAgeAC = (payload: any) => ({type: Types.CHECK, payload});

export const hwReducer = (partOfState: PartOfStateType, action: ActionsType): PartOfStateType => {
    if(!partOfState || partOfState.length === 0) throw new Error('get empty array');
    switch (action.type) {
        case Types.SORT: {
            if (action.payload === 'UP') {
                return [...partOfState.sort((a, b) => (a.name > b.name ? 1 : -1))]
            }
            if (action.payload === 'DOWN') {
                return [...partOfState.sort((a, b) => (a.name < b.name ? 1 : -1))]
            }
            return [];
        }
        case Types.CHECK: {
            return [...partOfState.filter(p => p.age <= action.payload)]
        }
        default :
            throw new Error('I don\'t understand this type');
    }
};
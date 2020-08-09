import {createStore, combineReducers} from 'redux';
import {juniorReducer} from './junior-reducer';
import {rangeReducer} from './range-reducer';

const rootReducer = combineReducers({
    junior: juniorReducer,
    range: rangeReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType =  ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;